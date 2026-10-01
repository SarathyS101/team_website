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

export const linkGroups: readonly LinkGroup[] = [
  {
    heading: "Project & course",
    links: [
      {
        label: "COMP 523 course site",
        href: "https://www.cs.unc.edu/~stotts/COMP523-F26/",
        note: "Syllabus, calendar, and team pages.",
      },
      {
        label: "COMP 523 deliverables",
        href: "https://www.cs.unc.edu/~stotts/COMP523-F26/deliverables.html",
        note: "The formal deliverables D1 to D5 and milestones.",
      },
      {
        label: "TA course requirements",
        href: "https://hackmd.io/zci0WxDvSfC9OpvXnEK2Aw",
        note: "Weekly reporting, Git, and tracking rules from the TA.",
      },
      {
        label: "LieOptics backend repository",
        href: "https://github.com/hausenshi/LieOptics",
        note: "The Python package this frontend wraps.",
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
      {
        label: "React documentation",
        href: "https://react.dev/",
        note: "UI library for the LieOptics frontend.",
      },
      {
        label: "Electron documentation",
        href: "https://www.electronjs.org/docs/latest",
        note: "Packages the frontend as a cross-platform desktop app.",
      },
      {
        label: "pre-commit",
        href: "https://pre-commit.com/",
        note: "Runs the commit-message and lint checks the course requires.",
      },
      {
        label: "Conventional Commits",
        href: "https://www.conventionalcommits.org/en/v1.0.0/",
        note: "Our commit message style.",
      },
    ],
  },
  {
    heading: "Domain references",
    links: [
      {
        label: "awesome-deep-optics",
        href: "https://github.com/hausenshi/awesome-deep-optics",
        note: "Curated paper list on optics design from the client's account.",
      },
    ],
  },
  {
    heading: "Similar projects to learn from",
    links: [
      {
        label: "DeepLens",
        href: "https://github.com/hausenshi/DeepLens",
        note: "Differentiable optical simulation; shows how optics results are presented.",
      },
    ],
  },
];
