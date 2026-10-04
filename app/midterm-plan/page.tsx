import type { Metadata } from "next";
import { Badge, Card } from "@/components/Card";
import { DataTable } from "@/components/DataTable";
import { DeliverablePage } from "@/components/DeliverablePage";
import {
  likelyQuestions,
  midtermInstructionsUrl,
  midtermRules,
  prepTasks,
  slideBlocks,
} from "@/content/midterm";
import { formatDate } from "@/lib/format";

/** Prerendered at build time; content comes from content/midterm.ts. */
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Midterm plan",
  description:
    "Plan for the midterm project presentation: ground rules, slide outline, speaker split, timing, and preparation checklist.",
};

export default function MidtermPlanPage() {
  const total = slideBlocks.reduce((sum, s) => sum + s.minutes, 0);
  const speakers = [...new Set(slideBlocks.map((s) => s.speaker))].map(
    (name) => ({
      name,
      minutes: slideBlocks
        .filter((s) => s.speaker === name)
        .reduce((sum, s) => sum + s.minutes, 0),
    }),
  );

  return (
    <DeliverablePage
      title="Midterm plan"
      lead="How the team will deliver the midterm project presentation: the course ground rules, a slide-by-slide outline with timing and speakers, and a preparation checklist."
    >
      <h2 className="text-lg font-semibold">Ground rules</h2>
      <p className="mt-1 text-sm text-muted">
        From the{" "}
        <a
          href={midtermInstructionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-strong hover:underline"
        >
          course midterm instructions
        </a>
        .
      </p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {midtermRules.map((r) => (
          <Card key={r.rule}>
            <p className="font-medium">{r.rule}</p>
            <p className="mt-1 text-sm text-muted">{r.detail}</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold">Slide outline</h2>
      <p className="mt-1 text-sm text-muted">
        Planned talk time is {total} minutes, leaving about two minutes in the
        slot for questions and the swap to the next team.
      </p>
      <div className="mt-3">
        <DataTable
          caption="Midterm slide outline with speakers and timing"
          headers={["#", "Content", "What to cover", "Speaker", "Min"]}
          rows={slideBlocks.map((s) => [
            <span key="n" className="font-medium">
              {s.order}
            </span>,
            <div key="c">
              <p className="font-medium">{s.title}</p>
              <p className="text-muted">{s.chunk}</p>
              {s.source ? (
                <a
                  href={s.source.href}
                  className="text-accent-strong hover:underline"
                >
                  {s.source.label}
                </a>
              ) : null}
            </div>,
            <ul key="p" className="list-disc space-y-1 pl-4">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>,
            <span key="s" className="whitespace-nowrap">
              {s.speaker}
            </span>,
            <span key="m">{s.minutes}</span>,
          ])}
        />
      </div>

      <h2 className="mt-10 text-lg font-semibold">Speaking split</h2>
      <p className="mt-1 text-sm text-muted">
        Proposed. Every member presents, as the course requires.
      </p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {speakers.map((s) => (
          <Card key={s.name}>
            <p className="font-medium">{s.name}</p>
            <p className="mt-1 text-sm text-muted">{s.minutes} minutes</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-lg font-semibold">Preparation checklist</h2>
      <div className="mt-3">
        <DataTable
          caption="Midterm preparation checklist"
          headers={["Task", "Owner", "Due", "Status"]}
          rows={prepTasks.map((t) => [
            t.task,
            <span key="o" className="whitespace-nowrap">
              {t.owner}
            </span>,
            <span key="d" className="whitespace-nowrap">
              {formatDate(t.due)}
            </span>,
            <Badge key="s" tone={t.status === "Done" ? "accent" : "neutral"}>
              {t.status}
            </Badge>,
          ])}
        />
      </div>

      <h2 className="mt-10 text-lg font-semibold">Questions to prepare for</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {likelyQuestions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </DeliverablePage>
  );
}
