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
      "Reviewed the TA's course requirements (weekly progress reports, Gitflow, pre-commit hooks, Kanban) from the HackMD doc and folded them into this site's deliverables, schedule, and rules.",
      "Reviewed the LieOptics backend's API (lens system definition, optimization, spot diagrams) without modifying it.",
      "Drafted a week-by-week plan from now through the 12/5 final presentation.",
      "Built a first-draft frontend prototype: a lens builder form, an aberration coefficient table, a spot diagram, and a mock optimization run, all backed by placeholder data so the design can be evaluated before the real backend is wired in.",
      "Published the frontend prototype as its own repository and opened/merged its first pull request.",
    ],
    decisions: [
      "Keep the frontend as its own repository, separate from this website and from the client's LieOptics backend, since this site must stay a static report and the backend is the client's and is not ours to edit.",
      "TODO: confirm any additional decisions made at the team meeting.",
    ],
    actionItems: [
      {
        owner: "All team members",
        task: "TODO: Finish platform selection, architecture diagram, and system metaphor.",
      },
      {
        owner: "All team members",
        task: "TODO: Prepare the midterm talk (10/5 to 10/12).",
      },
      {
        owner: "All team members",
        task: "Review the frontend prototype and note what to change before wiring in the real backend.",
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
