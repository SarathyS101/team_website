import type { Metadata } from "next";
import { Badge } from "@/components/Card";
import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";
import { deliverables } from "@/content/deliverables";
import { site } from "@/content/site";
import { byDateAscending, formatDate } from "@/lib/format";

/**
 * This page is fully prerendered at build time. There is no API route, form,
 * server action, or database behind it — the only way to change what appears
 * here is to edit the source in content/ and push a commit, which triggers a
 * new Vercel build.
 */
export const dynamic = "force-static";


export const metadata: Metadata = {
  title: "Deliverables",
  description:
    "Repository of all intermediate and formal deliverables for the semester, with links to each submitted artifact.",
};

export default function DeliverablesPage() {
  const sorted = byDateAscending(
    deliverables.map((item) => ({ ...item, date: item.dueDate })),
  );

  return (
    <>
      <PageHeader
        title="Deliverables"
        lead="Every intermediate and formal deliverable for the semester. Submitted artifacts are linked directly from this table."
      />

      <div className="py-10">
        <DataTable
          caption="Repository of course deliverables"
          headers={["Deliverable", "Due", "Status", "Artifact"]}
          rows={sorted.map((item) => [
            <div key={item.name}>
              <span className="font-medium">{item.name}</span>
              {item.note ? (
                <p className="mt-0.5 text-muted">{item.note}</p>
              ) : null}
            </div>,
            <span key={`${item.name}-due`} className="whitespace-nowrap">
              {formatDate(item.dueDate)}
            </span>,
            <Badge
              key={`${item.name}-status`}
              tone={item.status === "Submitted" ? "accent" : "neutral"}
            >
              {item.status}
            </Badge>,
            item.href ? (
              <a
                key={`${item.name}-link`}
                href={item.href}
                {...(item.href.startsWith("/")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="text-accent-strong hover:underline"
              >
                View
              </a>
            ) : (
              <span key={`${item.name}-pending`} className="text-muted">
                —
              </span>
            ),
          ])}
        />

        <p className="mt-6 text-sm text-muted">
          Source code for the project lives in the{" "}
          <a
            href={site.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-strong hover:underline"
          >
            team repository
          </a>
          .
        </p>
      </div>
    </>
  );
}
