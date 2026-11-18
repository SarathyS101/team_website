/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 3: Contact Information (team, client, instructors).
 *
 * The "Email the Team" button everywhere on this site is generated from the
 * `email` fields below, so keep them accurate and you never have to touch a
 * mailto: link by hand.
 *
 * Before publishing a client or consultant's contact details, confirm they are
 * comfortable having them on a public page. If not, list a role and name only,
 * or route contact through the Client Manager.
 */

/** Add to this union if your team invents a role. Typos will fail the build. */
export type Role =
  | "Software Engineer"
  | "Software Engineer, Tech Lead"
  | "Project Manager"
  | "Tech Lead"
  | "Design Lead"
  | "Web Master"
  | "QA Lead"
  | "Developer";

export type TeamMember = {
  name: string;
  role: Role;
  /** Secondary hats this person wears, if any. */
  alsoRole?: readonly Role[];
  /** What this person is primarily accountable for. 2–4 short bullets. */
  responsibilities: readonly string[];
  email: string;
  github?: string;
};

export type Contact = {
  name: string;
  title: string;
  organization: string;
  /** Omit if the person prefers not to publish an address. */
  email?: string;
  note?: string;
};

/**
 * Every member is a coder. The role marks where each person's extra
 * responsibility sits — client contact, scheduling, architecture, and so on.
 * TODO: replace all placeholder rows.
 */
export const members: readonly TeamMember[] = [
  {
    name: "Sarathy Selvam",
    role: "Software Engineer, Tech Lead",
    responsibilities: [
      "TBD",
    ],
    email: "sarathy@unc.edu",
    github: "https://github.com/SarathyS101",
  },
  {
    name: "Avi Patel",
    role: "Software Engineer",
    responsibilities: [
      "TBD",
    ],
    email: "avipatel@unc.edu",
    github: "https://github.com/todo2",
  },
  {
    name: "Lakshin Ganesha",
    role: "Software Engineer",
    responsibilities: [
      "TBD",
    ],
    email: "lganesha@unc.edu",
    github: "https://github.com/todo3",
  },
  {
    name: "Sushant Potu",
    role: "Software Engineer",
    alsoRole: ["QA Lead"],
    responsibilities: [
      "TBD",
    ],
    email: "psushant@unc.edu",
    github: "https://github.com/todo4",
  },
];

export const client: Contact = {
  name: "Haosheng Shi",
  title: "Client & Optical Researcher",
  organization: "LieOptics & UNC Department of Computer Science",
  email: "haosheng@cs.unc.edu",
};

export const instructorsSection = {
  title: "Instructors",
  caption: "Instructor contact information",
} as const;

export const instructors: readonly Contact[] = [
  {
    name: "Paul Stotts",
    title: "Instructor, COMP 523",
    organization: "UNC Department of Computer Science",
    email: "stotts@cs.unc.edu",
  },
  {
    name: "Louie Lu",
    title: "Teaching Assistant",
    organization: "UNC Department of Computer Science",
    email: "louielu@cs.unc.edu",
  },
];
