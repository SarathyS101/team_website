import { Badge, Card } from "@/components/Card";
import { DataTable } from "@/components/DataTable";
import { Diagram } from "@/components/Diagram";
import {
  architecture,
  designDoc,
  functionalRequirements,
  interfaceRequirements,
  metaphor,
  nonFunctionalRequirements,
  platformDecisions,
  userStories,
  type Priority,
  type Requirement,
} from "@/content/deliverableDocs";
import { site } from "@/content/site";

function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <Badge tone={priority === "Definite" ? "accent" : "neutral"}>
      {priority}
    </Badge>
  );
}

function RequirementTable({
  caption,
  items,
  showCategory = false,
}: {
  caption: string;
  items: readonly Requirement[];
  showCategory?: boolean;
}) {
  return (
    <DataTable
      caption={caption}
      headers={
        showCategory
          ? ["ID", "Category", "Requirement", "Priority"]
          : ["ID", "Requirement", "Priority"]
      }
      rows={items.map((r) => [
        <span key="id" className="font-medium whitespace-nowrap">
          {r.id}
        </span>,
        ...(showCategory ? [<span key="cat">{r.category}</span>] : []),
        <span key="text">{r.text}</span>,
        <PriorityBadge key="p" priority={r.priority} />,
      ])}
    />
  );
}

export function Specifications() {
  return (
    <div>
      <h2 className="text-lg font-semibold">User stories</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {userStories.map((s) => (
          <Card key={s.id}>
            <p className="text-xs font-medium text-muted">{s.id}</p>
            <p className="mt-1">
              As an <strong>{s.role.toLowerCase()}</strong>, I want to {s.want}{" "}
              so that {s.because}.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {s.acceptance.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold">Functional requirements</h2>
      <div className="mt-3">
        <RequirementTable
          caption="Functional requirements"
          items={functionalRequirements}
        />
      </div>

      <h2 className="mt-10 text-lg font-semibold">
        Non-functional requirements (URPS+)
      </h2>
      <div className="mt-3">
        <RequirementTable
          caption="Non-functional requirements"
          items={nonFunctionalRequirements}
          showCategory
        />
      </div>

      <h2 className="mt-10 text-lg font-semibold">Interface requirements</h2>
      <div className="mt-3">
        <RequirementTable
          caption="Interface requirements"
          items={interfaceRequirements}
        />
      </div>
    </div>
  );
}

export function Platform() {
  return (
    <div>
      <div className="space-y-8">
        {platformDecisions.map((d) => (
          <div key={d.area}>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-semibold">{d.area}</h2>
              <Badge tone={d.status === "Decided" ? "accent" : "neutral"}>
                {d.status}
              </Badge>
            </div>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {d.alternatives.map((a) => (
                <Card key={a.name}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{a.name}</p>
                    {a.chosen ? <Badge>Chosen</Badge> : null}
                  </div>
                  <p className="mt-3 text-sm font-medium">Pros</p>
                  <ul className="list-disc pl-5 text-sm text-muted">
                    {a.pros.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm font-medium">Cons</p>
                  <ul className="list-disc pl-5 text-sm text-muted">
                    {a.cons.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  {a.refs.length > 0 ? (
                    <p className="mt-3 text-sm">
                      {a.refs.map((r) => (
                        <a
                          key={r.href}
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mr-3 text-accent-strong hover:underline"
                        >
                          {r.label}
                        </a>
                      ))}
                    </p>
                  ) : null}
                </Card>
              ))}
            </div>
            <p className="mt-3 text-sm">
              <strong>Decision:</strong> {d.justification}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <div>
      <Diagram data={architecture.diagram} title="Architecture diagram" />
      <h2 className="mt-8 text-lg font-semibold">External elements</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
        {architecture.external.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <h2 className="mt-6 text-lg font-semibold">Notes</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
        {architecture.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export function Metaphor() {
  return (
    <div>
      <p className="max-w-2xl">{metaphor.text}</p>
      <h2 className="mt-6 text-lg font-semibold">Code names</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {metaphor.codeNames.map((c) => (
          <li key={c.term}>
            <strong>{c.term}</strong>: {c.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DesignDocument() {
  return (
    <div>
      <h2 className="text-lg font-semibold">1. Expanded architecture</h2>
      <div className="mt-3">
        <Diagram
          data={designDoc.diagram}
          title="Expanded architecture diagram"
        />
      </div>
      <p className="mt-4 text-sm text-muted">
        Each box above is a module in the repository. Responsibilities:
      </p>
      <div className="mt-3">
        <DataTable
          caption="Major modules"
          headers={["Module", "Language", "Component", "Responsibility"]}
          rows={designDoc.modules.map((m) => [
            <span key="n" className="font-medium">
              {m.name}
            </span>,
            m.language,
            m.component,
            m.does,
          ])}
        />
      </div>

      <h2 className="mt-10 text-lg font-semibold">2. Code repository</h2>
      <p className="mt-2 text-sm">
        <a
          href={site.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-strong hover:underline"
        >
          Team repository
        </a>
        . {designDoc.repository.readme}
      </p>
      <div className="mt-3">
        <DataTable
          caption="Languages and the components they implement"
          headers={["Language", "Implements"]}
          rows={designDoc.repository.languages.map((l) => [
            l.language,
            l.implements,
          ])}
        />
      </div>

      <h2 className="mt-10 text-lg font-semibold">3. Data definitions</h2>
      <div className="mt-3 space-y-6">
        {designDoc.data.map((d) => (
          <div key={d.name}>
            <p className="font-medium">
              {d.name}{" "}
              <span className="font-normal text-muted">— {d.purpose}</span>
            </p>
            <div className="mt-2">
              <DataTable
                caption={`${d.name} fields`}
                headers={["Field", "Type", "Meaning"]}
                rows={d.fields.map((f) => [
                  <code key="f">{f.field}</code>,
                  <code key="t">{f.type}</code>,
                  f.meaning,
                ])}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted">{designDoc.dataNote}</p>

      <h2 className="mt-10 text-lg font-semibold">4. Design rationale</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {designDoc.rationale.map((r) => (
          <li key={r.decision}>
            <strong>{r.decision}</strong> {r.why}
          </li>
        ))}
      </ul>
      <h3 className="mt-5 font-medium">Rejected approaches</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {designDoc.rejected.map((r) => (
          <li key={r.approach}>
            <strong>{r.approach}.</strong> {r.why}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-lg font-semibold">Related documents</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {designDoc.pointers.map((p) => (
          <li key={p.anchor}>
            <a
              href={`/${p.anchor}`}
              className="text-accent-strong hover:underline"
            >
              {p.label}
            </a>
          </li>
        ))}
        {designDoc.pendingPointers.map((p) => (
          <li key={p} className="text-muted">
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
