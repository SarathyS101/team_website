/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * Plan for the midterm project presentation, built from the course instructions
 * at https://www.cs.unc.edu/~stotts/COMP523-F26/midTerm.html.
 * Speaker assignments are a proposal until the team confirms them.
 */

export const midtermInstructionsUrl =
  "https://www.cs.unc.edu/~stotts/COMP523-F26/midTerm.html";

export const midtermRules: readonly { rule: string; detail: string }[] = [
  {
    rule: "When",
    detail:
      "Teams present in random order, five per session: Mon Oct 5, Wed Oct 7, and Mon Oct 12 in the class time slot. Be ready on Oct 5.",
  },
  {
    rule: "Slot length",
    detail:
      "10–12 minutes total, which must also hold questions and the swap to the next team. Run-through at least once for timing.",
  },
  {
    rule: "Everyone speaks",
    detail:
      "All team members help build the deck and each presents part of it, about 3–4 minutes per person.",
  },
  {
    rule: "Attendance",
    detail:
      "Every student attends every session, including other teams' presentations.",
  },
  {
    rule: "No demos",
    detail:
      "Slides only. Live demos belong to the final presentation. Mockups and screenshots are fine.",
  },
  {
    rule: "Post the deck",
    detail:
      "Link the presentation file from the team website. Presenting from the podium computer off the web is the easiest setup.",
  },
];

export type SlideBlock = {
  order: number;
  /** One of the five required content chunks, or the opening/closing slide. */
  chunk: string;
  title: string;
  points: readonly string[];
  /** Where the material already exists on this site. */
  source?: { label: string; href: string };
  speaker: string;
  minutes: number;
};

export const slideBlocks: readonly SlideBlock[] = [
  {
    order: 1,
    chunk: "Opening",
    title: "Project, date, team, client",
    points: [
      "Optical Design Tool Frontend, COMP 523.002 Team C, October 5, 2026.",
      "Team members and their roles.",
      "Client: Haosheng Shi, LieOptics.",
    ],
    source: { label: "Team and contacts", href: "/#roles" },
    speaker: "Sushant Potu",
    minutes: 0.5,
  },
  {
    order: 2,
    chunk: "Functional overview",
    title: "Who the users are and what they need",
    points: [
      "Users: optics researchers, students, and optical engineers.",
      "Problem: using LieOptics today means writing code.",
      "Services: build a lens system, see aberration coefficients and spot diagrams, run optimization, save and reopen designs.",
      "Summarize the high points from the user's side; do not read the requirements list.",
    ],
    source: { label: "Specifications", href: "/specifications" },
    speaker: "Sarathy Selvam",
    minutes: 2.5,
  },
  {
    order: 3,
    chunk: "User interface mockup",
    title: "What the user sees",
    points: [
      "Builder form beside a layout canvas.",
      "Results: aberration table and spot diagram.",
      "Optimization panel with bounds and progress.",
      "Use Figma mockups or prototype screenshots; label them as early ideas.",
    ],
    speaker: "Avi Patel",
    minutes: 2,
  },
  {
    order: 4,
    chunk: "XP-style system metaphor",
    title: "The optical bench",
    points: [
      "One or two sentences: the app is an optical bench with lens elements, a screen, and gauges.",
      "Show how code names (Bench, Element, Screen, Gauges, Tuner) follow it.",
    ],
    source: { label: "System metaphor", href: "/system-metaphor" },
    speaker: "Avi Patel",
    minutes: 0.5,
  },
  {
    order: 5,
    chunk: "Technical overview",
    title: "Architecture at a high level",
    points: [
      "Walk the architecture diagram left to right: UI, typed API client, thin Python service, LieOptics.",
      "Call out what is ours and what is inherited and unmodified.",
      "Local only: one machine, nothing leaves the user's computer.",
      "Keep to high-level structure; detailed design comes in the final talk.",
    ],
    source: { label: "Architecture diagram", href: "/architecture-diagram" },
    speaker: "Lakshin Ganesha",
    minutes: 2.5,
  },
  {
    order: 6,
    chunk: "Platform description",
    title: "Final platform choices",
    points: [
      "Final choices only, not the alternatives: TypeScript, React with Vite, Electron, Python backend, Plotly.js.",
      "Hardware and OS: Windows, macOS, and Linux desktops, no special hardware.",
      "IDEs and libraries the team builds on.",
    ],
    source: { label: "Platform selection", href: "/platform-selection" },
    speaker: "Sushant Potu",
    minutes: 1.5,
  },
  {
    order: 7,
    chunk: "Closing",
    title: "Status and questions",
    points: [
      "Where the project stands and what comes next.",
      "Thank the audience and take questions.",
    ],
    source: { label: "All deliverables", href: "/deliverables" },
    speaker: "Sushant Potu",
    minutes: 0.5,
  },
];

export type PrepTask = {
  task: string;
  owner: string;
  /** ISO format: YYYY-MM-DD. */
  due: string;
  status: "Not started" | "In progress" | "Done";
};

export const prepTasks: readonly PrepTask[] = [
  { task: "Confirm speaker assignments and slide order", owner: "All team members", due: "2026-10-03", status: "Not started" },
  { task: "Draft the slide deck from the outline above", owner: "All team members", due: "2026-10-03", status: "Not started" },
  { task: "Collect UI mockups or prototype screenshots", owner: "Avi Patel", due: "2026-10-03", status: "Not started" },
  { task: "Finalize the architecture diagram image for the slide", owner: "Lakshin Ganesha", due: "2026-10-03", status: "Not started" },
  { task: "Full timed run-through, everyone speaking", owner: "All team members", due: "2026-10-04", status: "Not started" },
  { task: "Trim to fit; second timed run-through", owner: "All team members", due: "2026-10-04", status: "Not started" },
  { task: "Put the deck online and link it from the team website", owner: "Sushant Potu", due: "2026-10-04", status: "Not started" },
  { task: "Check projector setup or adapter, open the deck from the web", owner: "Sushant Potu", due: "2026-10-05", status: "Not started" },
  { task: "Attend every session and listen to other teams", owner: "All team members", due: "2026-10-12", status: "Not started" },
];

export const likelyQuestions: readonly string[] = [
  "Why wrap LieOptics in a service instead of calling it directly from the UI?",
  "Why Electron rather than a web app or a Python GUI?",
  "How will the app stay fast, given LieOptics' speed advantage over ray tracing?",
  "What happens to the user's design if the backend fails?",
  "How can the client maintain this after hand-off?",
  "What is the riskiest part of the project right now?",
];
