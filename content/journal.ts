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
    date: "2026-08-31",
    type: "Team",
    title: "TODO: Kickoff",
    attendees: ["TODO: Name", "TODO: Name", "TODO: Name", "TODO: Name"],
    topics: [
      "TODO: What the team discussed at this meeting.",
      "TODO: Another topic considered.",
    ],
    decisions: [
      "TODO: A decision the team made, stated plainly.",
      "TODO: Another decision.",
    ],
    actionItems: [
      { owner: "TODO: Name", task: "TODO: What they will do before next meeting." },
      { owner: "TODO: Name", task: "TODO: What they will do before next meeting." },
    ],
  },
];
