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
  /** Public URL to the artifact, or a site path such as "/specifications". Omit until it exists. */
  href?: string;
  note?: string;
};

const REPO = "https://github.com/LakshinG/lieopitcs-Frontend";

/**
 * Full semester schedule: formal deliverables (D1–D5), course milestones, and
 * the team's weekly build targets. Dates marked "internal target" are ours, not
 * the course's — confirm against the course Deliverables page.
 */
export const deliverables: readonly Deliverable[] = [
  {
    name: "Project website",
    dueDate: "2026-09-05",
    status: "In progress",
    href: "/",
    note: "Introduction, roles, contacts, schedule, team rules, journal, deliverables, and links are posted. Kept current as the project moves, per the TA's weekly reporting requirement.",
  },
  {
    name: "D1. Specifications",
    dueDate: "2026-09-19",
    status: "In progress",
    href: "/specifications",
    note: "User stories plus functional, non-functional (URPS+), and interface requirements, each labeled Definite, Perhaps, or Improbable.",
  },
  {
    name: "Team rules and coding practices",
    dueDate: "2026-09-26",
    status: "In progress",
    href: "/#rules",
    note: "Attendance, response time, pull-request review, blockers, and confidentiality, plus Gitflow branching, Conventional Commits, pre-commit hooks, a Kanban board, and the weekly PPP report.",
  },
  {
    name: "User stories",
    dueDate: "2026-09-26",
    status: "In progress",
    href: "/specifications",
    note: "Five stories drafted with acceptance criteria; part of the Specifications document.",
  },
  {
    name: "Platform selection",
    dueDate: "2026-09-26",
    status: "In progress",
    href: "/platform-selection",
    note: "Alternatives and final choices for language, frontend, shell, backend bridge, visualization, and hardware/OS, with pros, cons, and justification.",
  },
  {
    name: "Architecture diagram",
    dueDate: "2026-09-30",
    status: "In progress",
    href: "/architecture-diagram",
    note: "Electron/React UI (ours), a thin API layer (ours), and the client's unmodified LieOptics package.",
  },
  {
    name: "System metaphor",
    dueDate: "2026-09-30",
    status: "In progress",
    href: "/system-metaphor",
    note: "The app as an optical bench, with code names that follow the metaphor.",
  },
  {
    name: "D2. Design document",
    dueDate: "2026-10-03",
    status: "In progress",
    href: "/design-document",
    note: "Expanded architecture diagram, code repository, data definitions, and design rationale including rejected approaches.",
  },
  {
    name: "Midterm talk",
    dueDate: "2026-10-05",
    status: "In progress",
    href: "/midterm-plan",
    note: "Talks run 10/5, 10/7, and 10/12 in random order; slides only, no demo. Covers functional overview, UI mockup, system metaphor, architecture, and platform.",
  },
  {
    name: "Week 2: frontend scaffold + mock prototype",
    dueDate: "2026-10-11",
    status: "In progress",
    href: REPO,
    note: "Vite + React + TypeScript app with a lens builder form, layout sketch, aberration table, spot diagram, and mock optimization behind a typed API interface. Electron packaging and the real backend are not done yet.",
  },
  {
    name: "Week 3: lens builder wired to real backend",
    dueDate: "2026-10-18",
    status: "Not started",
    note: "Replace the mock API with a thin service calling the real LieOptics package, so results shown are real.",
  },
  {
    name: "Midpoint demo",
    dueDate: "2026-10-20",
    status: "Not started",
    note: "Lens definition through real aberration coefficients and a real spot diagram, end to end, using the real LieOptics backend.",
  },
  {
    name: "Ethics assignment",
    dueDate: "2026-10-21",
    status: "Not started",
  },
  {
    name: "Weeks 5-6: layout visualization, save/load, error handling",
    dueDate: "2026-11-08",
    status: "Not started",
    note: "Canvas-based lens visualization, reliable save and load, and backend errors shown in the UI instead of failing silently.",
  },
  {
    name: "D3. Test plan",
    dueDate: "2026-11-10",
    status: "Not started",
    note: "Date is the team's internal target; confirm against the course page.",
  },
  {
    name: "Week 7: optimization UI, phase-space plots, tests",
    dueDate: "2026-11-15",
    status: "Not started",
    note: "Differential-evolution controls (bounds, constraints, progress), phase-space plots, and the start of an automated test suite.",
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
    note: "Date is the team's internal target; confirm against the course page.",
  },
  {
    name: "Client hand-off plan",
    dueDate: "2026-11-30",
    status: "Not started",
    note: "Date is the team's internal target; confirm against the course page.",
  },
  {
    name: "Weeks 9-10: packaging and final polish",
    dueDate: "2026-12-05",
    status: "Not started",
    note: "Electron installers for the target platforms, client acceptance-testing feedback, and final presentation prep.",
  },
  {
    name: "D5. Code and final presentation",
    dueDate: "2026-12-05",
    status: "In progress",
    href: REPO,
    note: "Frontend prototype repository. A mock-data UI is up; the real LieOptics backend is not wired in yet and Electron packaging has not started.",
  },
];
