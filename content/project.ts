/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 1: Project Introduction.
 * A high-level "sales pitch". A casual visitor should finish this section
 * understanding WHAT you are building and WHY it matters.
 *
 * LATER IN THE SEMESTER: once the project is underway, expand this into the
 * full project concept description — scope, users, core features, technology.
 */

export const project = {
  /** TODO: the project's public-facing name. */
  name: "Project Name",

  /** One or two sentences. The hook. TODO: replace. */
  elevatorPitch:
    "TODO: In one or two sentences, describe the problem your project solves and who it helps. Make the reader want to keep reading.",

  /** Body paragraphs of the introduction. Add or remove freely. TODO: replace. */
  overview: [
    "TODO: What problem exists today? Describe the current situation and why it is frustrating, slow, expensive, or error-prone for the people affected by it.",
    "TODO: What are you building? Describe the solution at a high level, in plain language, without jargon or implementation detail.",
    "TODO: Why does it matter? Describe the impact — who benefits, and how their day gets better once this exists.",
  ],

  /** A few concrete capabilities. Keep these short. TODO: replace. */
  highlights: [
    {
      title: "TODO: Key feature",
      detail: "TODO: One sentence on what this feature does for the user.",
    },
    {
      title: "TODO: Key feature",
      detail: "TODO: One sentence on what this feature does for the user.",
    },
    {
      title: "TODO: Key feature",
      detail: "TODO: One sentence on what this feature does for the user.",
    },
  ],

  /** Technology the team is using. Shown as small tags. TODO: replace. */
  stack: ["TODO: Language", "TODO: Framework", "TODO: Database", "TODO: Hosting"],
} as const;
