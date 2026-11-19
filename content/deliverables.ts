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

import { site } from "@/content/site";

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
    note: "Introduction, contacts, schedule, team rules, journal, deliverables, and links are posted and kept current every week, per the TA's weekly reporting requirement. This is a living deliverable: it keeps being updated all semester, not a one-time submission.",
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
    name: "Midterm talk",
    dueDate: "2026-10-05",
    status: "Submitted",
    href: "/midterm-plan",
    note: "Talks run 10/5, 10/7, and 10/12 in random order; slides only, no demo. Covers functional overview, UI mockup, system metaphor, architecture, and platform.",
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
    href: "https://drive.google.com/file/d/1bQO5F36onk1v4OBe9n9sdrWcnMug5Z4J/view?usp=sharing",
    note: "Goal: lens definition through real aberration coefficients and a real spot diagram, end to end, using the real LieOptics backend rather than the current mock.",
  },
  {
    name: "Ethics assignment",
    dueDate: "2026-10-21",
    status: "Submitted",
    href: "/assignments/ethics-1-team-conclusions.pdf",
  },
  {
    name: "Tech Talk",
    dueDate: "2026-10-27",
    status: "Submitted",
    href: "https://drive.google.com/file/d/13N5UOC_FpxV7DHeY76UqVce7zwWqsdSP/view?usp=sharing",
    note: "Presentation slide deck.",
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
    href: "https://drive.google.com/file/d/12N76uvcUGz1cfNL9oteLx0wVvZOPWqoD/view?usp=sharing",
    note: "The client handoff guide is available and covers installation, first-run verification, and ongoing maintenance. The handoff appointment is pending confirmation.",
  },
  {
    name: "D5. Code and final presentation",
    dueDate: "2026-12-05",
    status: "Submitted",
    href: site.repoUrl,
    note: "LieOptics project source code.",
  },
];
