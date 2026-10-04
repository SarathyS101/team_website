/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 4: Schedule of Regular Meetings.
 * Include team meetings, client meetings, and professor/manager meetings, plus
 * any other event of major importance (demos, client acceptance testing).
 *
 * Do not publish private meeting links (Zoom/Teams URLs) or dial-in codes on a
 * public page — put a room name or "link shared in the team channel" instead.
 */

export type Meeting = {
  what: string;
  who: string;
  cadence: string;
  time: string;
  location: string;
};

export type KeyEvent = {
  /** ISO format: YYYY-MM-DD. Used for sorting and display. */
  date: string;
  what: string;
  detail?: string;
};

/** TODO: replace with your team's real recurring meetings. */
export const recurringMeetings: readonly Meeting[] = [
  {
    what: "Team working meeting",
    who: "All team members",
    cadence: "Weekly, Mondays",
    time: "TODO: 5:00–6:30 PM ET",
    location: "TODO: Sitterson Hall, Room TBD",
  },
  {
    what: "Team standup",
    who: "All team members",
    cadence: "Weekly, Thursdays",
    time: "TODO: 8:00–8:20 PM ET",
    location: "TODO: Video call (link in team channel)",
  },
  {
    what: "Client meeting",
    who: "Client Manager, Project Manager, client",
    cadence: "Biweekly, Wednesdays",
    time: "TODO: 3:00–4:00 PM ET",
    location: "TODO: Video call (link in team channel)",
  },
  {
    what: "Manager / professor meeting",
    who: "All team members, faculty manager",
    cadence: "Weekly, Fridays",
    time: "TODO: 2:00–2:30 PM ET",
    location: "TODO: Sitterson Hall, Room TBD",
  },
  {
    what: "TA meeting",
    who: "All team members, course TA",
    cadence: "Every two weeks (Zoom)",
    time: "TODO: confirm slot with TA",
    location: "Video call (link provided by the TA)",
  },
  {
    what: "Weekly progress report (PPP)",
    who: "All team members",
    cadence: "Weekly, by 11:59 PM the day before the TA meeting slot",
    time: "11:59 PM ET deadline",
    location: "Posted on this site, with a confirmation email to the TA",
  },
];

/** Milestones, demos, and acceptance testing. */
export const keyEvents: readonly KeyEvent[] = [
  {
    date: "2026-09-15",
    what: "Requirements sign-off",
    detail: "Agreed scope with the client: a frontend plus a thin API layer over the existing LieOptics Python backend. The team does not modify the backend itself.",
  },
  {
    date: "2026-09-26",
    what: "Platform selection, user stories, and team rules due",
    detail: "TypeScript/React/Electron over the Python LieOptics backend; user stories and the course-required team rules (Gitflow, pre-commit hooks, Kanban) posted.",
  },
  {
    date: "2026-09-30",
    what: "Architecture diagram and system metaphor due",
    detail: "Client-server diagram: Electron/React UI and a thin API layer (ours) in front of the unmodified LieOptics backend (the client's).",
  },
  {
    date: "2026-10-01",
    what: "Frontend prototype published",
    detail: "First-draft lens builder, aberration table, spot diagram, and mock optimization run, published as its own repository for the team to evaluate.",
  },
  {
    date: "2026-10-05",
    what: "Midterm talks begin",
    detail: "Midterm talks run 10/5 to 10/12.",
  },
  {
    date: "2026-10-15",
    what: "Fall break",
    detail: "No team meetings 10/15-10/16, per the course calendar.",
  },
  {
    date: "2026-10-18",
    what: "Lens builder wired to the real LieOptics backend (target)",
    detail: "Swap the current mock API for a thin service calling the real Python package, so results in the UI stop being placeholder data.",
  },
  {
    date: "2026-10-20",
    what: "Midpoint demo",
    detail: "Demonstrate lens definition through real aberration analysis and a real spot diagram, end to end.",
  },
  {
    date: "2026-10-21",
    what: "Ethics assignment due",
  },
  {
    date: "2026-11-08",
    what: "Layout visualization, save/load, and error handling (target)",
    detail: "Canvas-based lens visualization, reliable save/load, and backend errors surfaced in the UI instead of failing silently.",
  },
  {
    date: "2026-11-15",
    what: "Optimization UI, phase-space plots, and tests (target)",
    detail: "Real differential-evolution controls (bounds, constraints, progress) and the start of an automated test suite.",
  },
  {
    date: "2026-11-17",
    what: "Client acceptance testing",
  },
  {
    date: "2026-11-25",
    what: "Thanksgiving break",
    detail: "No team meetings 11/25-11/27, per the course calendar.",
  },
  {
    date: "2026-12-05",
    what: "Final presentation and hand-off",
    detail: "Electron installers, client acceptance-testing feedback folded in, and the client hand-off plan complete.",
  },
];
