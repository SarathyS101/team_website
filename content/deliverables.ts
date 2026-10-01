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

/**
 * Names follow the course Deliverables page (D1-D5 plus milestones). Due dates
 * come from the course calendar and the team schedule. TODO: set a row to
 * "Submitted" and add its `href` once the artifact is public.
 */
export const deliverables: readonly Deliverable[] = [
  {
    name: "Project website",
    dueDate: "2026-09-05",
    status: "In progress",
    href: "https://teamc-alpha.vercel.app/",
    note: "Introduction, roles, contacts, schedule, team rules, journal, and links posted. Updated weekly.",
  },
  {
    name: "D1. Specifications",
    dueDate: "2026-09-19",
    status: "In progress",
    note: "Functional, non-functional, and interface requirements, prioritized Definite / Perhaps / Improbable.",
  },
  {
    name: "Team rules and coding practices",
    dueDate: "2026-09-26",
    status: "In progress",
    note: "Rules are posted on the home page. Gitflow, commit style, and pre-commit hooks are being set up.",
  },
  {
    name: "User stories",
    dueDate: "2026-09-26",
    status: "In progress",
  },
  {
    name: "Platform selection",
    dueDate: "2026-09-26",
    status: "In progress",
    note: "TypeScript, React, and Electron with a Python (LieOptics) backend. Alternatives and pros/cons are being written up.",
  },
  {
    name: "Architecture diagram",
    dueDate: "2026-09-30",
    status: "In progress",
    note: "Electron/React UI talking to a thin API layer in front of the existing LieOptics Python code.",
  },
  {
    name: "System metaphor",
    dueDate: "2026-09-30",
    status: "Not started",
  },
  {
    name: "Midterm talk",
    dueDate: "2026-10-05",
    status: "Not started",
    note: "Midterm talks run 10/5 to 10/12.",
  },
  {
    name: "D2. Design document",
    dueDate: "2026-10-20",
    status: "Not started",
  },
  {
    name: "Midpoint demo",
    dueDate: "2026-10-20",
    status: "Not started",
    note: "Lens definition to aberration coefficients and spot diagram, end to end.",
  },
  {
    name: "Ethics assignment",
    dueDate: "2026-10-21",
    status: "Not started",
  },
  {
    name: "D3. Test plan",
    dueDate: "2026-11-10",
    status: "Not started",
    note: "TODO: date is the team's internal target; confirm against the course page.",
  },
  {
    name: "Client acceptance testing",
    dueDate: "2026-11-17",
    status: "Not started",
  },
  {
    name: "D4. User manual",
    dueDate: "2026-11-30",
    status: "Not started",
    note: "TODO: date is the team's internal target; confirm against the course page.",
  },
  {
    name: "Client hand-off plan",
    dueDate: "2026-11-30",
    status: "Not started",
    note: "TODO: date is the team's internal target; confirm against the course page.",
  },
  {
    name: "D5. Code and final presentation",
    dueDate: "2026-12-05",
    status: "Not started",
  },
];
