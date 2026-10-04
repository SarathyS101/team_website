import type { ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader";

/** Shared frame for a single deliverable: header, body, and a way back. */
export function DeliverablePage({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} lead={lead} />
      <div className="py-10">
        <p className="mb-8 text-sm">
          <a
            href="/deliverables"
            className="text-accent-strong hover:underline"
          >
            ← All deliverables
          </a>
        </p>
        {children}
      </div>
    </>
  );
}
