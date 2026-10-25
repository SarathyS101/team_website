import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { assignments } from "@/content/assignments";

/**
 * This page is fully prerendered at build time. There is no API route, form,
 * server action, or database behind it — the only way to change what appears
 * here is to edit the source in content/ and push a commit, which triggers a
 * new Vercel build.
 */
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Assignments",
  description:
    "Written assignments and team discussion documents produced throughout the semester.",
};

export default function AssignmentsPage() {
  return (
    <>
      <PageHeader
        title="Assignments"
        lead="Team discussion documents and written assignments from across the semester. Each link opens the finished document."
      />

      <div className="py-10">
        <Card>
          <ul className="space-y-4">
            {assignments.map((assignment) => (
              <li key={assignment.href}>
                <a
                  href={assignment.href}
                  {...(assignment.href.startsWith("/")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="font-medium text-accent-strong hover:underline"
                >
                  {assignment.label}
                </a>
                {assignment.note ? (
                  <p className="mt-0.5 text-sm text-muted">{assignment.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
