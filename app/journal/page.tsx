import type { Metadata } from "next";
import { Badge, Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { entries } from "@/content/journal";
import { byDateDescending, formatDate } from "@/lib/format";

/**
 * This page is fully prerendered at build time. There is no API route, form,
 * server action, or database behind it — the only way to change what appears
 * here is to edit the source in content/ and push a commit, which triggers a
 * new Vercel build.
 */
export const dynamic = "force-static";


export const metadata: Metadata = {
  title: "Meeting journal",
  description:
    "Summaries of every team, client, and manager meeting, with the decisions made and action items assigned.",
};

export default function JournalPage() {
  // Reverse chronological is a course requirement, so sort here rather than
  // trusting whoever last edited content/journal.ts to insert in order.
  const sorted = byDateDescending(entries);

  return (
    <>
      <PageHeader
        title="Journal of meetings and decisions"
        lead="A succinct summary of every team, client, and manager meeting: what was considered, what was decided, and who owes what next. Most recent first."
      />

      {sorted.length === 0 ? (
        <p className="py-12 text-muted">
          No meetings recorded yet. The first entry will appear here after the
          team&apos;s kickoff meeting.
        </p>
      ) : (
        <ol className="space-y-6 py-10">
          {sorted.map((entry, index) => (
            <li key={index}>
              <Card>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <h2 className="text-lg font-semibold">
                    {formatDate(entry.date)}
                    {entry.title ? ` · ${entry.title}` : ""}
                  </h2>
                  <Badge>{entry.type} meeting</Badge>
                </div>

                <p className="mt-2 text-sm text-muted">
                  <span className="font-medium text-foreground">Attendees: </span>
                  {entry.attendees.join(", ")}
                </p>

                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  <JournalList heading="Topics discussed" items={entry.topics} />
                  <JournalList heading="Decisions" items={entry.decisions} />
                </div>

                {entry.actionItems.length > 0 ? (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold tracking-wide uppercase">
                      Action items
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {entry.actionItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-2">
                          <span className="font-medium whitespace-nowrap">
                            {item.owner}:
                          </span>
                          <span className="text-muted">{item.task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

function JournalList({ heading, items }: { heading: string; items: readonly string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide uppercase">{heading}</h3>
      <ul className="mt-2 space-y-1.5 text-sm text-muted">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span aria-hidden="true" className="text-accent">
              —
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
