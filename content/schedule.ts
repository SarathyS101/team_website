/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 4: Schedule of Regular Meetings.
 * Recurring team working meetings, standups, and client meetings.
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

export const scheduleLead = "Regular team working meetings, standups, and client meetings. All times are Eastern Time.";

export const recurringMeetings: readonly Meeting[] = [
  {
    what: "Team working meeting",
    who: "All team members",
    cadence: "Weekly, Saturdays",
    time: "1:00 PM–8:00 PM ET",
    location: "TODO: Sitterson Hall, Room TBD",
  },
  {
    what: "Team standup",
    who: "All team members",
    cadence: "Weekly, Saturdays",
    time: "12:00 PM–12:30 PM ET",
    location: "TODO: Video call (link in team channel)",
  },
  {
    what: "Client meeting",
    who: "Client Manager, Project Manager, client",
    cadence: "Biweekly, Thursdays",
    time: "9:00 PM–11:00 PM ET",
    location: "TODO: Video call (link in team channel)",
  },
];
