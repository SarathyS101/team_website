/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 2: Team Roles.
 * REQUIREMENT 3: Contact Information (team, client, consultants).
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
    role: "Software Engineer",
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
    email: "todo2@unc.edu",
    github: "https://github.com/todo2",
  },
  {
    name: "Lakshin Ganesha",
    role: "Software Engineer",
    responsibilities: [
      "TBD",
    ],
    email: "todo3@unc.edu",
    github: "https://github.com/todo3",
  },
  {
    name: "Sushant Potu",
    role: "Software Engineer",
    alsoRole: ["QA Lead"],
    responsibilities: [
      "TBD",
    ],
    email: "todo4@unc.edu",
    github: "https://github.com/todo4",
  },
];

/** TODO: replace with your actual client. */
export const client: Contact = {
  name: "TODO: Client Name",
  title: "TODO: Title",
  organization: "TODO: Organization",
  email: "todo@example.com",
};

/** Instructors, mentors, domain experts. TODO: replace or empty this array. */
export const consultants: readonly Contact[] = [
  {
    name: "Paul Stotts",
    title: "Instructor, COMP 523",
    organization: "UNC Department of Computer Science",
    email: "stotts@cs.unc.edu",
  },
  {
    name: "TODO: Manager Name",
    title: "Faculty Manager",
    organization: "UNC Department of Computer Science",
    email: "todo@cs.unc.edu",
  },
];
