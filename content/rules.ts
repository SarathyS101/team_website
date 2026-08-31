/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 5: Team Rules.
 * These are the behavioral rules the team agrees to. Edit them to match what
 * your team actually decided — the starters below are a reasonable default,
 * but the team should discuss and adopt its own.
 */

export type Rule = {
  title: string;
  detail: string;
};

export const rules: readonly Rule[] = [
  {
    title: "Show up, or say so early",
    detail:
      "Attend every scheduled team, client, and manager meeting. If you cannot make one, tell the team in the group channel at least 24 hours ahead and read the meeting journal entry afterward.",
  },
  {
    title: "Respond within 24 hours",
    detail:
      "Any direct question in the team channel gets a reply within 24 hours, even if the reply is only \"seen, working on it.\" Silence blocks other people.",
  },
  {
    title: "Communicate blockers immediately",
    detail:
      "If you are stuck for more than an hour, post about it. Asking early is not a failure; going quiet until the deadline is.",
  },
  {
    title: "All work goes through pull requests",
    detail:
      "No one pushes directly to the main branch. Every change is a pull request reviewed and approved by at least one other team member before merging.",
  },
  {
    title: "Finish what you claim",
    detail:
      "Only take an action item you expect to finish before the next meeting. If your estimate slips, say so at the next standup rather than at the deadline.",
  },
  {
    title: "Decisions are recorded",
    detail:
      "Any decision that affects the team gets written into the meeting journal on this site the same day, so it does not get relitigated later.",
  },
  {
    title: "Respect client confidentiality",
    detail:
      "Nothing the client shares in confidence — data, documents, screenshots, credentials, participant information — appears on this public site, in the public repository, or in any public channel.",
  },
  {
    title: "Disagree in the meeting, commit after it",
    detail:
      "Raise objections while the decision is being made. Once the team decides, everyone works with the decision until there is new information worth reopening it.",
  },
  {
    title: "Escalate as a team",
    detail:
      "If a conflict or workload imbalance is not resolved within the team after one honest conversation, the Project Manager raises it with the faculty manager before it affects a deliverable.",
  },
];
