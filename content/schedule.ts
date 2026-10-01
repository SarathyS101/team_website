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
  },
  {
    date: "2026-10-05",
    what: "Midterm talks begin",
    detail: "Midterm talks run 10/5 to 10/12.",
  },
  {
    date: "2026-10-20",
    what: "Midpoint demo",
    detail: "Demonstrate lens definition through aberration analysis and spot diagram, end to end.",
  },
  {
    date: "2026-11-17",
    what: "Client acceptance testing",
  },
  {
    date: "2026-12-05",
    what: "Final presentation and hand-off",
  },
];
