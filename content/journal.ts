/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 6: Journal of Meetings and Decisions.
 *
 * Add one entry for EVERY team meeting, client meeting, and manager meeting.
 * An entry is a succinct summary, not full minutes: what was considered, what
 * was decided, and who owes what before the next meeting.
 *
 * ORDERING: you do not have to keep this array sorted. The /journal page sorts
 * by date descending at render time, so the newest meeting is always on top.
 * Just paste a new entry at the top of the array and fill it in.
 *
 * CONFIDENTIALITY: summarize decisions, not sensitive client material. If a
 * discussion covered private data, write "discussed data handling requirements"
 * rather than reproducing the data.
 */

export type MeetingType = "Team" | "Client" | "Manager";

export type JournalEntry = {
  /** ISO format: YYYY-MM-DD. */
  date: string;
  type: MeetingType;
  /** Optional short title, e.g. "Kickoff" or "Sprint 2 planning". */
  title?: string;
  attendees: readonly string[];
  /** What was discussed or worked on. */
  topics: readonly string[];
  /** What was settled. This is the part that stops re-litigation later. */
  decisions: readonly string[];
  /** Who owes what before the next meeting. */
  actionItems: readonly { owner: string; task: string }[];
};

/** Newest first is conventional here, but the page sorts regardless. */
export const entries: readonly JournalEntry[] = [
  {
    date: "2026-11-05",
    type: "Client",
    title: "Client Meeting with Haosheng Shi: Progress Review & UI Feedback",
    attendees: [
      "Sarathy Selvam",
      "Avi Patel",
      "Lakshin Ganesha",
      "Sushant Potu",
      "Haosheng Shi",
    ],
    topics: [
      "Met with client Haosheng Shi to demo current application progress and review features.",
      "Discussed overall system functionality and interface design ahead of upcoming acceptance testing.",
    ],
    decisions: [
      "Client confirmed everything is looking good and approved the current progress.",
      "Agreed to implement minor UI changes and refinements based on client feedback.",
    ],
    actionItems: [
      {
        owner: "All team members",
        task: "Implement the requested UI changes and refinements.",
      },
    ],
  },
  {
    date: "2026-10-01",
    type: "Team",
    title: "Week 1: project setup and a first frontend prototype",
    attendees: [
      "Sarathy Selvam",
      "Avi Patel",
      "Lakshin Ganesha",
      "Sushant Potu",
    ],
    topics: [
      "Read the full course calendar and deliverables page to confirm what's due and when: specifications (9/19), platform selection, user stories, and team rules (9/26), architecture diagram and system metaphor (9/30), midterm talks (10/5-10/12), midpoint demo (10/20), ethics assignment (10/21), client acceptance testing (11/17), and the final presentation (12/5).",
      "Read the TA's full HackMD requirements doc and pulled out every technical standard: weekly PPP (Progress/Plans/Problems) reports due 11:59 PM the day before our TA meeting slot, Gitflow branching, mandatory pre-commit hooks (commit-message style and linting), a chosen commit-message convention, Kanban tracking, and an AI-use policy (assistance welcome, but written deliverables need significant human revision and no sensitive data goes into an AI tool).",
      "Reviewed the LieOptics backend's public API in detail: OpticalSystemSpec and ElementSpec for defining lens elements (radius, thickness, glass index), OpticalSystemWrapper for running the Lie-group aberration analysis, LensOptimizer for differential-evolution and local optimization, and SpotDiagram for ray-traced spot diagrams and ray fans. Confirmed the team only consumes this API and does not modify the backend.",
      "Listed the glass materials and third-order aberration coefficients (spherical, coma, astigmatism, Petzval curvature, distortion) the UI needs to display, taken from the backend's quick-reference manual.",
      "Drafted a week-by-week plan from now through the 12/5 final presentation: Week 1 foundations (this week); Week 2 scaffold and midterm talk prep; Week 3 lens builder wired to the real backend; Week 4 midpoint demo; Weeks 5-6 layout visualization, save/load, and error handling; Week 7 optimization UI, phase-space plots, and tests; Week 8 client acceptance testing; Weeks 9-10 packaging, hand-off plan, and final presentation.",
      "Built a first-draft frontend prototype to evaluate before committing to a direction: a lens-system builder form (add/remove/reorder surfaces, radius/thickness/glass, validation), a layout sketch of the lens, an aberration coefficient table, a spot diagram at three field angles, a mock optimization run with a loss chart, and save/open as JSON. Everything runs against a deterministic mock API behind a typed interface so the real backend can be swapped in later without touching the UI.",
      "Published the frontend prototype as its own GitHub repository (separate from this website and from the client's backend), set it up with Gitflow branches (main/develop/feature), a pre-commit config, and opened its first pull request into develop.",
      "Updated this website's deliverables, schedule, journal, rules, and related links to reflect all of the above, and linked the frontend repository from the deliverables table, the related links page, and the project introduction.",
    ],
    decisions: [
      "Keep the frontend as its own repository, separate from this website and from the client's LieOptics backend: this site must stay a static report (per its own build rules), and the backend is the client's and is not ours to edit.",
      "Build the frontend against mock data first, behind a single API interface, so the team can evaluate the UI direction before standing up a real connection to the Python backend.",
      "Use Conventional Commits as our commit-message style (one of the TA's two allowed options) since it can be checked automatically by a pre-commit hook.",
      "Start as a web app (Vite + React + TypeScript) rather than Electron-first, and add Electron packaging once the UI direction is settled.",
      "TODO: confirm any additional decisions made at the team meeting.",
    ],
    actionItems: [
      {
        owner: "All team members",
        task: "Finish the specifications document (D1) with prioritized Definite/Perhaps/Improbable requirements.",
      },
      {
        owner: "All team members",
        task: "Finish platform selection (alternatives + pros/cons), the architecture diagram, and the system metaphor.",
      },
      {
        owner: "All team members",
        task: "Write up user stories with acceptance criteria.",
      },
      {
        owner: "All team members",
        task: "Prepare the midterm talk (10/5 to 10/12), covering the platform decision and the frontend prototype.",
      },
      {
        owner: "All team members",
        task: "Review the frontend prototype and note what to change before wiring in the real backend.",
      },
      {
        owner: "All team members",
        task: "Confirm meeting times/rooms, the TA's meeting slot, and remaining team roles (Client Manager, Project Manager, Tech Lead) so the schedule and team pages can drop their TODOs.",
      },
    ],
  },
  {
    date: "2026-09-17",
    type: "Client",
    title: "Client Meeting with Haosheng Shi",
    attendees: [
      "Sarathy Selvam",
      "Avi Patel",
      "Lakshin Ganesha",
      "Sushant Potu",
      "Haosheng Shi",
    ],
    topics: [
      "Discussed the optical design tool backend (LieOptics) and frontend requirements.",
      "Reviewed client expectations, deliverables, and project scope.",
      "Secured repository access to the client's backend codebase.",
      "Discussed user workflows for lens definition, optimization, and visualization.",
    ],
    decisions: [
      "Agreed to create Figma mockups for the frontend interface to review with the client.",
      "Confirmed frontend scope: cross-platform application and a thin API layer connecting to the existing Python backend.",
      "Confirmed that the team will not need to modify the core Python computational backend.",
    ],
    actionItems: [
      {
        owner: "All team members",
        task: "Review the LieOptics repository and familiarize with backend APIs.",
      },
      {
        owner: "All team members",
        task: "Design initial Figma mockups for the optical design tool frontend.",
      },
    ],
  },
  {
    date: "2026-09-15",
    type: "Manager",
    title: "Mentor Meeting: Guidelines & Course Success",
    attendees: [
      "Sarathy Selvam",
      "Avi Patel",
      "Lakshin Ganesha",
      "Sushant Potu",
      "Faculty Mentor",
    ],
    topics: [
      "Reviewed general course guidelines and requirements for COMP 523.",
      "Discussed best practices and strategies on how to succeed in the class.",
      "Covered team expectations, communication cadence, and milestone planning.",
    ],
    decisions: [
      "Established team operating standards in accordance with course guidelines.",
      "Confirmed preparation steps and agenda for the upcoming client kickoff meeting.",
    ],
    actionItems: [
      {
        owner: "All team members",
        task: "Review course guidelines and prepare questions for the client meeting.",
      },
    ],
  },
];
