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
    note: "Introduction, roles, contacts, schedule, team rules, journal, deliverables, and links are posted. Content is edited in content/*.ts on each weekly branch and kept current as the project moves, per the TA's weekly reporting requirement.",
  },
  {
    name: "D1. Specifications",
    dueDate: "2026-09-19",
    status: "In progress",
    note: "Functional requirements (lens system builder, aberration analysis, spot diagrams, optimization), non-functional requirements (URPS+: usable without writing code, fast feedback since LieOptics is 600-1000x faster than ray tracing, maintainable by the client after hand-off), and interface requirements (form/canvas builder, results views), prioritized Definite / Perhaps / Improbable. Draft started; not yet written up as a standalone document.",
  },
  {
    name: "Team rules and coding practices",
    dueDate: "2026-09-26",
    status: "In progress",
    note: "Team rules are posted on the home page (attendance, response time, pull-request review, blockers, confidentiality). Added this week: Gitflow branching, Conventional Commits, mandatory pre-commit hooks (commit-message + lint/typecheck), a Kanban board, and the weekly PPP report, per the TA's course requirements.",
  },
  {
    name: "User stories",
    dueDate: "2026-09-26",
    status: "In progress",
    note: "Draft stories: as an optics researcher, I want to define a multi-element lens system without writing code; as a student, I want to see aberration coefficients and a spot diagram for my design; as a researcher, I want to run an optimization over lens parameters and see the result. Still to write: acceptance criteria for each.",
  },
  {
    name: "Platform selection",
    dueDate: "2026-09-26",
    status: "In progress",
    note: "Leaning TypeScript + React + Electron for the UI, talking to the existing Python LieOptics backend through a thin API layer, so the client's computational code is not modified. Alternatives being weighed: a pure web app (no desktop install, but no native file access) vs. Electron (desktop packaging, works offline); a Python-native GUI (PyQt/Tkinter) was considered and set aside since the team's stronger skill set is web, not desktop Python GUI frameworks. Pros/cons write-up not finished.",
  },
  {
    name: "Architecture diagram",
    dueDate: "2026-09-30",
    status: "In progress",
    note: "Client-server-style diagram: Electron/React UI (ours) on one side, a thin API layer (ours) in the middle, and the existing LieOptics Python package (the client's, unmodified) on the other side. Still need to add the diagram image/file itself to the site.",
  },
  {
    name: "System metaphor",
    dueDate: "2026-09-30",
    status: "Not started",
    note: "Working idea: the app as an optical bench, where each lens element is a physical component you place and adjust, and the results panel is the measurement equipment reading off the bench. Not written up yet.",
  },
  {
    name: "Week 2: frontend scaffold + mock prototype",
    dueDate: "2026-10-11",
    status: "In progress",
    href: "https://github.com/LakshinG/lieopitcs-Frontend",
    note: "Ahead of schedule: a Vite + React + TypeScript app is up with a lens-system builder form, a layout sketch, an aberration coefficient table, a spot diagram (3 field angles), and a mock optimization run, all behind a typed API interface so the real backend can be swapped in later. Not done yet: Electron packaging and the real LieOptics backend connection.",
  },
  {
    name: "Midterm talk",
    dueDate: "2026-10-05",
    status: "Not started",
    note: "Midterm talks run 10/5 to 10/12. Plan to show the frontend prototype (lens builder through mock results) and the platform/architecture decisions.",
  },
  {
    name: "Week 3: lens builder wired to real backend",
    dueDate: "2026-10-18",
    status: "Not started",
    note: "Replace the mock API with a thin service (or Electron child process) calling the real LieOptics Python package (OpticalSystemSpec, LensOptimizer, SpotDiagram), so results shown in the UI are real, not placeholder.",
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
    note: "Goal: lens definition through real aberration coefficients and a real spot diagram, end to end, using the real LieOptics backend rather than the current mock.",
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
    note: "Canvas-based lens visualization beyond the current sketch, saving and loading lens systems reliably, and surfacing backend errors (invalid parameters, failed optimization) in the UI instead of failing silently.",
  },
  {
    name: "Week 7: optimization UI, phase-space plots, tests",
    dueDate: "2026-11-15",
    status: "Not started",
    note: "Real differential-evolution optimization controls (bounds, constraints, progress), phase-space plots, and the start of an automated test suite feeding into the test plan below.",
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
    name: "Weeks 9-10: packaging and final polish",
    dueDate: "2026-12-05",
    status: "Not started",
    note: "Electron installers for the target platforms, folding in client acceptance-testing feedback, and final presentation prep.",
  },
  {
    name: "D5. Code and final presentation",
    dueDate: "2026-12-05",
    status: "In progress",
    href: "https://github.com/LakshinG/lieopitcs-Frontend",
    note: "Frontend prototype repository. A mock-data UI is up (builder, aberration table, spot diagram, mock optimization); the real LieOptics backend is not wired in yet, and Electron packaging has not started.",
  },
];
