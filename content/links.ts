/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 7: Related Links.
 * Useful external resources: similar projects worth learning from,
 * domain-specific references the team returns to, and documentation or
 * tutorials for the technology being used.
 *
 * IP RULE: only link to material that is publicly and legitimately available.
 * Do NOT link to pirated books, leaked documents, paywalled content that has
 * been reposted, or anything with questionable rights.
 */

export type Link = {
  label: string;
  href: string;
  /** One short line on why this link is worth a teammate's time. */
  note?: string;
};

export type LinkGroup = {
  heading: string;
  links: readonly Link[];
};

/** TODO: replace these with links the team actually uses. */
export const linkGroups: readonly LinkGroup[] = [
  {
    heading: "Project & course",
    links: [
      {
        label: "COMP 523 course site",
        href: "https://www.cs.unc.edu/",
        note: "TODO: point this at the real course page.",
      },
      {
        label: "TODO: Client's website",
        href: "https://example.com",
        note: "TODO: background on the client organization.",
      },
    ],
  },
  {
    heading: "Technology & documentation",
    links: [
      {
        label: "Next.js documentation",
        href: "https://nextjs.org/docs",
        note: "Framework powering this website.",
      },
      {
        label: "Tailwind CSS documentation",
        href: "https://tailwindcss.com/docs",
        note: "Utility classes used for styling this site.",
      },
      {
        label: "Vercel documentation",
        href: "https://vercel.com/docs",
        note: "Where this site is deployed.",
      },
      {
        label: "TypeScript handbook",
        href: "https://www.typescriptlang.org/docs/handbook/intro.html",
      },
    ],
  },
  {
    heading: "Domain references",
    links: [
      {
        label: "TODO: Domain reference",
        href: "https://example.com",
        note: "TODO: why the team keeps coming back to this.",
      },
    ],
  },
  {
    heading: "Similar projects to learn from",
    links: [
      {
        label: "TODO: Comparable project",
        href: "https://example.com",
        note: "TODO: what this one does well that we can borrow.",
      },
    ],
  },
];
