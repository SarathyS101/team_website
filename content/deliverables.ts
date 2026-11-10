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

/**
 * Names follow the course Deliverables page (D1-D5 plus milestones). Due dates
 * come from the course calendar and the team schedule. TODO: set a row to
 * "Submitted" and add its `href` once the artifact is public.
 */
export const deliverables: readonly Deliverable[] = [
  {
    name: "Project website",
    dueDate: "2026-09-05",
    status: "Submitted",
    href: "https://teamc-alpha.vercel.app/",
    note: "Introduction, roles, contacts, schedule, team rules, journal, deliverables, and links are posted and kept current every week, per the TA's weekly reporting requirement. This is a living deliverable: it keeps being updated all semester, not a one-time submission.",
  },
  {
    name: "D1. Specifications",
    dueDate: "2026-09-19",
    status: "Submitted",
    href: "/specifications",
    note: "User stories plus functional, non-functional (URPS+), and interface requirements, each labeled Definite, Perhaps, or Improbable.",
  },
  {
    name: "Team rules and coding practices",
    dueDate: "2026-09-26",
    status: "Submitted",
    href: "https://teamc-alpha.vercel.app/#rules",
    note: "Posted on the home page: attendance, response time, pull-request review, blockers, confidentiality, plus this week's additions for the TA's requirements (Gitflow, Conventional Commits, mandatory pre-commit hooks, Kanban, weekly PPP reports, AI-use policy).",
  },
  {
    name: "User stories",
    dueDate: "2026-09-26",
    status: "Submitted",
    href: "/specifications",
    note: "Five stories drafted with acceptance criteria; part of the Specifications document.",
  },
  {
    name: "Platform selection",
    dueDate: "2026-09-26",
    status: "Submitted",
    href: "/platform-selection",
    note: "Alternatives and final choices for language, frontend, shell, backend bridge, visualization, and hardware/OS, with pros, cons, and justification.",
  },
  {
    name: "Architecture diagram",
    dueDate: "2026-09-30",
    status: "Submitted",
    href: "/architecture-diagram",
    note: "Electron/React UI (ours), a thin API layer (ours), and the client's unmodified LieOptics package.",
  },
  {
    name: "System metaphor",
    dueDate: "2026-09-30",
    status: "Submitted",
    href: "/system-metaphor",
    note: "The app as an optical bench, with code names that follow the metaphor.",
  },
  {
    name: "Week 2: frontend scaffold + mock prototype",
    dueDate: "2026-10-11",
    status: "Submitted",
    note: "Ahead of schedule: a Vite + React + TypeScript app is up with a lens-system builder form, a layout sketch, an aberration coefficient table, a spot diagram (3 field angles), and a mock optimization run, all behind a typed API interface so the real backend can be swapped in later. This early prototype has since been replaced by the Electron app connected to the real LieOptics backend.",
  },
  {
    name: "Midterm talk",
    dueDate: "2026-10-05",
    status: "Submitted",
    href: "/midterm-plan",
    note: "Talks run 10/5, 10/7, and 10/12 in random order; slides only, no demo. Covers functional overview, UI mockup, system metaphor, architecture, and platform.",
  },
  {
    name: "Week 3: lens builder wired to real backend",
    dueDate: "2026-10-18",
    status: "Submitted",
    note: "Done: the app now talks to the real LieOptics package through a thin local API (FastAPI) that Electron starts itself, so every number and plot comes from the real backend, not the earlier mock.",
  },
  {
    name: "D2. Design document",
    dueDate: "2026-10-20",
    status: "Submitted",
    href: "/design-document",
    note: "Expanded architecture diagram, code repository, data definitions, and design rationale including rejected approaches.",
  },
  {
    name: "Midpoint demo",
    dueDate: "2026-10-20",
    status: "Submitted",
    note: "Goal: lens definition through real aberration coefficients and a real spot diagram, end to end, using the real LieOptics backend rather than the current mock.",
  },
  {
    name: "Ethics assignment",
    dueDate: "2026-10-21",
    status: "Submitted",
  },
  {
    name: "Tech Talk",
    dueDate: "2026-10-27",
    status: "Submitted",
    href: "https://adminliveunc-my.sharepoint.com/:p:/g/personal/sarathy_ad_unc_edu/IQBz6OhwOFaaQIAh2az7QgZNAQGFhKCfp5oHiVUlQynRSZY?e=aHQg4p",
    note: "Presentation slide deck.",
  },
  {
    name: "Weeks 5-6: layout visualization, save/load, error handling",
    dueDate: "2026-11-08",
    status: "Submitted",
    note: "Done: lens cross-section with traced rays, interactive spot diagram, save/load of lens files, and clear error messages for invalid input or failed optimization.",
  },
  {
    name: "D3. Test plan",
    dueDate: "2026-11-10",
    status: "Submitted",
    href: "https://github.com/SarathyS101/team_website/blob/docs/test-doc-handoff-plans/docs/testPlan.md",
    note: "Two-part plan (ideal vs. actual): the real pytest/Vitest suites, CI workflow, packaging smoke tests, environments, test ownership, and error cases. TODO: date is the team's internal target; confirm against the course page.",
  },
  {
    name: "Documentation plan",
    dueDate: "2026-11-10",
    status: "Submitted",
    href: "https://github.com/SarathyS101/team_website/blob/docs/test-doc-handoff-plans/docs/documentationPlan.md",
    note: "Internal planning document for the instructor/coach, not for the client. User types, drafted user and administrator documentation content, and the video plan.",
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
    note: "TODO: date is the team's internal target; confirm against the course page. A draft already exists inside the documentation plan; this is the expanded, standalone version shipped with D5.",
  },
  {
    name: "Client hand-off plan",
    dueDate: "2026-11-30",
    status: "Submitted",
    href: "https://github.com/SarathyS101/team_website/blob/docs/test-doc-handoff-plans/docs/clientHandoffPlan.md",
    note: "Internal planning document for the instructor/coach, not for the client. How the client obtains, installs, and runs the packaged app, costs, and the hand-off video plan. TODO: date is the team's internal target; confirm against the course page.",
  },
  {
    name: "Weeks 9-10: packaging and final polish",
    dueDate: "2026-12-05",
    status: "In progress",
    note: "Windows and macOS installers that bundle the engine (no Python needed) are built by CI on release tags, and the Windows installer is tested; the macOS installers still need a first release run. Folding in client acceptance-testing feedback and final presentation prep are next.",
  },
  {
    name: "D5. Code and final presentation",
    dueDate: "2026-12-05",
    status: "In progress",
    note: "Desktop app (Electron + React) with the real LieOptics engine bundled: lens builder, aberration analysis, spot diagram, layout view, optimization, export, installers, and CI. Final polish and the presentation are still to do.",
  },
];
