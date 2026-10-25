/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * Links to the written assignments and discussion documents the team produces
 * through the semester. To add one: drop the PDF into public/assignments/,
 * then add an entry below pointing at it (or at any other public URL).
 */

export type Assignment = {
  label: string;
  href: string;
  /** One short line on what the document covers. */
  note?: string;
};

export const assignments: readonly Assignment[] = [
  {
    label: "Ethics 1",
    href: "/assignments/ethics-1-team-conclusions.pdf",
    note: "Team conclusions on three unethical software systems: the Boeing 737 MAX MCAS, Volkswagen's emissions software, and Facebook / Cambridge Analytica data harvesting.",
  },
];
