/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 8: Repository for all deliverables, intermediate and formal,
 * as listed on the course Deliverables page.
 *
 * Add each deliverable as a row. Once a document is submitted, set the status
 * to "Submitted" and put a public link (repo file, published PDF, slide deck)
 * in `href` so it is one click away.
 *
 * Anything containing client-confidential material stays OFF this page — link
 * only artifacts that are safe to publish.
 */

export type DeliverableStatus = "Not started" | "In progress" | "Submitted";

export type Deliverable = {
  name: string;
  /** ISO format: YYYY-MM-DD. */
  dueDate: string;
  status: DeliverableStatus;
  /** Public URL to the artifact. Omit until it exists. */
  href?: string;
  note?: string;
};

/** TODO: replace names and dates with the course Deliverables page. */
export const deliverables: readonly Deliverable[] = [
  {
    name: "Team website established",
    dueDate: "2026-09-05",
    status: "In progress",
    note: "Introduction, roles, contacts, schedule, and team rules posted.",
  },
  {
    name: "TODO: Requirements document",
    dueDate: "2026-09-19",
    status: "Not started",
  },
  {
    name: "TODO: Design document",
    dueDate: "2026-10-03",
    status: "Not started",
  },
  {
    name: "TODO: Midpoint demo",
    dueDate: "2026-10-20",
    status: "Not started",
  },
  {
    name: "TODO: Test plan",
    dueDate: "2026-11-07",
    status: "Not started",
  },
  {
    name: "TODO: Client acceptance testing report",
    dueDate: "2026-11-21",
    status: "Not started",
  },
  {
    name: "TODO: Final deliverable and presentation",
    dueDate: "2026-12-05",
    status: "Not started",
  },
];
