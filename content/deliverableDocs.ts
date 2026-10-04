/**
 * PUBLIC WEBSITE — see the note in content/site.ts before adding anything here.
 *
 * REQUIREMENT 8 (continued): the full text of each course deliverable.
 * Rendered on /deliverables, one anchored section per deliverable, so every
 * artifact is one click from the table. Only publishable material goes here —
 * LieOptics internals the client has not released stay out.
 */

export type Priority = "Definite" | "Perhaps" | "Improbable";

export type Ref = { label: string; href: string };

/* ------------------------------------------------------------------ */
/* Specifications / requirements                                       */
/* ------------------------------------------------------------------ */

export type UserStory = {
  id: string;
  role: string;
  want: string;
  because: string;
  acceptance: readonly string[];
};

export type Requirement = {
  id: string;
  text: string;
  priority: Priority;
  /** URPS+ category, used on non-functional requirements only. */
  category?: string;
};

export const userStories: readonly UserStory[] = [
  {
    id: "US-1",
    role: "Optics researcher",
    want: "define a multi-element lens system without writing code",
    because: "I can explore a design idea in minutes instead of scripting it",
    acceptance: [
      "I can add, remove, and reorder elements.",
      "Each element accepts a curvature radius, thickness, and glass index.",
      "Invalid values are flagged next to the field before anything runs.",
    ],
  },
  {
    id: "US-2",
    role: "Optics student",
    want: "see aberration coefficients and a spot diagram for my design",
    because: "I can learn how each lens parameter changes image quality",
    acceptance: [
      "Coefficients appear in a table labeled with the aberration name.",
      "The spot diagram shows three field angles on a common scale.",
      "Results refresh after I change a parameter and re-run.",
    ],
  },
  {
    id: "US-3",
    role: "Optics researcher",
    want: "run an optimization over lens parameters and see the result",
    because: "I get a better design without manual trial and error",
    acceptance: [
      "I choose which parameters vary and set their bounds.",
      "I see progress while it runs and can cancel it.",
      "The optimized system loads back into the builder for further edits.",
    ],
  },
  {
    id: "US-4",
    role: "Optical engineer",
    want: "save a lens system and reopen it later",
    because: "I can continue work across sessions and share designs",
    acceptance: [
      "Saving writes a single file I can copy or version-control.",
      "Reopening restores every element and analysis setting exactly.",
    ],
  },
  {
    id: "US-5",
    role: "Client maintainer",
    want: "update the backend without changing the front end",
    because: "future LieOptics improvements reach users with little extra work",
    acceptance: [
      "All backend calls pass through one documented API interface.",
      "The interface can be swapped between a mock and the real backend.",
    ],
  },
];

export const functionalRequirements: readonly Requirement[] = [
  { id: "F-1", text: "Create, edit, reorder, and delete lens elements (curvature radius, thickness, glass index).", priority: "Definite" },
  { id: "F-2", text: "Draw a to-scale layout sketch of the current lens system.", priority: "Definite" },
  { id: "F-3", text: "Run analytical aberration analysis and show the coefficients in a table.", priority: "Definite" },
  { id: "F-4", text: "Render a spot diagram at three field angles.", priority: "Definite" },
  { id: "F-5", text: "Run differential-evolution optimization with user-set parameter bounds.", priority: "Definite" },
  { id: "F-6", text: "Show optimization progress and allow cancellation.", priority: "Definite" },
  { id: "F-7", text: "Save a lens system to a file and load it again.", priority: "Definite" },
  { id: "F-8", text: "Show backend errors (invalid parameters, failed optimization) in the UI.", priority: "Definite" },
  { id: "F-9", text: "Render phase-space plots.", priority: "Perhaps" },
  { id: "F-10", text: "Add optimization constraints beyond simple bounds.", priority: "Perhaps" },
  { id: "F-11", text: "Undo and redo edits in the builder.", priority: "Perhaps" },
  { id: "F-12", text: "Export plots and tables as images or CSV.", priority: "Perhaps" },
  { id: "F-13", text: "Import designs from commercial tools such as Zemax or CODE V.", priority: "Improbable" },
  { id: "F-14", text: "Multi-user collaborative editing.", priority: "Improbable" },
];

export const nonFunctionalRequirements: readonly Requirement[] = [
  { id: "N-1", category: "Usability", text: "A user can build and analyze a lens system without writing code or reading source.", priority: "Definite" },
  { id: "N-2", category: "Usability", text: "Every input shows its unit and a valid range.", priority: "Definite" },
  { id: "N-3", category: "Reliability", text: "A failed backend call never crashes the app or discards the user's current design.", priority: "Definite" },
  { id: "N-4", category: "Performance", text: "Aberration analysis for a typical system returns fast enough to feel interactive, preserving the speed advantage of LieOptics over ray tracing.", priority: "Definite" },
  { id: "N-5", category: "Supportability", text: "The client can maintain and extend the front end after hand-off, with documented setup and a README.", priority: "Definite" },
  { id: "N-6", category: "+ Implementation", text: "The Python backend is consumed as delivered and is not modified.", priority: "Definite" },
  { id: "N-7", category: "+ Interface", text: "All backend access goes through a single typed API layer.", priority: "Definite" },
  { id: "N-8", category: "+ Physical", text: "Runs on Windows, macOS, and Linux desktops.", priority: "Definite" },
  { id: "N-9", category: "+ Legal", text: "Open-source licensing is compatible with the client's release plan.", priority: "Perhaps" },
  { id: "N-10", category: "Performance", text: "Results for large systems stay responsive via background computation.", priority: "Perhaps" },
  { id: "N-11", category: "Usability", text: "Full keyboard accessibility and screen-reader support.", priority: "Improbable" },
];

export const interfaceRequirements: readonly Requirement[] = [
  { id: "I-1", text: "Builder interface: a form for element parameters beside a canvas showing the layout.", priority: "Definite" },
  { id: "I-2", text: "Results interface: coefficient table and spot diagram shown together with the layout.", priority: "Definite" },
  { id: "I-3", text: "Optimization interface: parameter bounds, run, progress, and cancel controls.", priority: "Definite" },
  { id: "I-4", text: "Backend interface: typed request/response calls for defining a system, analyzing it, optimizing it, and producing a spot diagram.", priority: "Definite" },
  { id: "I-5", text: "File interface: lens systems saved and loaded as a single JSON file.", priority: "Definite" },
  { id: "I-6", text: "Phase-space plot view.", priority: "Perhaps" },
  { id: "I-7", text: "Web-hosted build of the same interface.", priority: "Improbable" },
];

/* ------------------------------------------------------------------ */
/* Platform selection                                                  */
/* ------------------------------------------------------------------ */

export type Alternative = {
  name: string;
  pros: readonly string[];
  cons: readonly string[];
  refs: readonly Ref[];
  chosen?: boolean;
};

export type PlatformDecision = {
  area: string;
  /** "Decided" is agreed with the team; "Proposed" is open to review. */
  status: "Decided" | "Proposed";
  alternatives: readonly Alternative[];
  justification: string;
};

export const platformIntro =
  "How client constraints shaped every choice below: the LieOptics backend is Python and must not be modified; the client wants a cross-platform tool a student or researcher can install and use without writing code; and the team's strongest skills are web technologies, not desktop Python GUI frameworks. Each decision lists the alternatives first, then the choice and why.";

export const platformDecisions: readonly PlatformDecision[] = [
  {
    area: "Language (front end)",
    status: "Decided",
    alternatives: [
      {
        name: "TypeScript",
        chosen: true,
        pros: [
          "Static types catch mismatches between the UI and the API layer early.",
          "Typed API interface lets a mock and the real backend be swapped.",
          "Team already knows it.",
        ],
        cons: ["Adds a compile step and some configuration."],
        refs: [{ label: "TypeScript handbook", href: "https://www.typescriptlang.org/docs/handbook/intro.html" }],
      },
      {
        name: "Plain JavaScript",
        pros: ["No build-time type checking to configure."],
        cons: ["Errors surface at runtime, which is costly with numeric optics data."],
        refs: [{ label: "MDN JavaScript guide", href: "https://developer.mozilla.org/docs/Web/JavaScript" }],
      },
    ],
    justification:
      "TypeScript. The API contract with the backend is the riskiest seam, and types make it explicit and checkable.",
  },
  {
    area: "Frontend framework",
    status: "Decided",
    alternatives: [
      {
        name: "React (with Vite)",
        chosen: true,
        pros: [
          "Component model fits builder form, canvas, and results panels.",
          "Large ecosystem of plotting and canvas libraries.",
          "Vite gives fast reloads and simple builds.",
        ],
        cons: ["State management for the lens model needs deliberate design."],
        refs: [
          { label: "React documentation", href: "https://react.dev/" },
          { label: "Vite guide", href: "https://vite.dev/guide/" },
        ],
      },
      {
        name: "Vue",
        pros: ["Gentle learning curve and good docs."],
        cons: ["Less team experience; smaller pool of optics/plotting examples."],
        refs: [{ label: "Vue documentation", href: "https://vuejs.org/guide/introduction.html" }],
      },
    ],
    justification:
      "React with Vite, because the team has the most experience with it and the ecosystem covers every UI need.",
  },
  {
    area: "Application shell and architecture",
    status: "Decided",
    alternatives: [
      {
        name: "Electron desktop app",
        chosen: true,
        pros: [
          "One codebase for Windows, macOS, and Linux.",
          "Works offline and has native file access for save/load.",
          "Can start the Python backend alongside the UI.",
        ],
        cons: ["Large installer; heavier than a native app."],
        refs: [{ label: "Electron documentation", href: "https://www.electronjs.org/docs/latest" }],
      },
      {
        name: "Browser-based web app",
        pros: ["No install; easy to share a link."],
        cons: [
          "No native file access.",
          "Python backend must be hosted or installed separately.",
        ],
        refs: [{ label: "File System Access API", href: "https://developer.mozilla.org/docs/Web/API/File_System_Access_API" }],
      },
      {
        name: "Python-native GUI (PyQt or Tkinter)",
        pros: ["Calls the backend in-process with no API layer."],
        cons: [
          "Team lacks desktop Python GUI experience.",
          "Harder to build rich interactive plots and a canvas builder.",
        ],
        refs: [{ label: "Qt for Python", href: "https://doc.qt.io/qtforpython-6/" }],
      },
    ],
    justification:
      "Electron with a client–server layout as the target. It satisfies the cross-platform and offline needs, plays to the team's web skills, and keeps the client's backend untouched. Per the 10/1 team decision we build web-first (Vite + React + TypeScript) and add Electron packaging once the UI direction is settled, so the renderer is a normal web app from day one.",
  },
  {
    area: "Backend bridge",
    status: "Proposed",
    alternatives: [
      {
        name: "Thin local Python service (HTTP)",
        chosen: true,
        pros: [
          "Clean, testable boundary between UI and LieOptics.",
          "Same interface works for a mock, a local service, or a remote host.",
        ],
        cons: ["A second process to start, monitor, and package."],
        refs: [{ label: "FastAPI documentation", href: "https://fastapi.tiangolo.com/" }],
      },
      {
        name: "Electron child process over stdin/stdout",
        pros: ["No network port; simpler packaging."],
        cons: ["Custom message protocol; harder to test and reuse outside Electron."],
        refs: [{ label: "Node child_process", href: "https://nodejs.org/api/child_process.html" }],
      },
      {
        name: "Rewrite the analysis in JavaScript",
        pros: ["Single runtime."],
        cons: ["Violates the no-backend-changes constraint and duplicates the client's work."],
        refs: [],
      },
    ],
    justification:
      "A thin local HTTP service wrapping the existing package. Revisit the child-process option when Electron packaging begins.",
  },
  {
    area: "Data and visualization",
    status: "Proposed",
    alternatives: [
      {
        name: "Plotly.js for plots, HTML canvas for the lens layout",
        chosen: true,
        pros: [
          "Ready-made scatter, heatmap, and contour plots with zoom and hover.",
          "Canvas gives full control of the layout sketch.",
        ],
        cons: ["Plotly adds bundle size."],
        refs: [{ label: "Plotly.js documentation", href: "https://plotly.com/javascript/" }],
      },
      {
        name: "D3",
        pros: ["Maximum control over every visual detail."],
        cons: ["Much more code for standard scientific plots."],
        refs: [{ label: "D3 documentation", href: "https://d3js.org/" }],
      },
    ],
    justification:
      "Plotly.js for standard plots to save time, with a custom canvas where the layout needs bespoke drawing.",
  },
  {
    area: "Hardware and operating system",
    status: "Decided",
    alternatives: [
      {
        name: "Windows, macOS, and Linux desktops; no special hardware",
        chosen: true,
        pros: ["Covers the client's users; analytical analysis is light on compute."],
        cons: ["Three installers to build and test."],
        refs: [{ label: "Electron packaging", href: "https://www.electronjs.org/docs/latest/tutorial/application-distribution" }],
      },
    ],
    justification:
      "No GPU or special device is required because LieOptics computes aberrations analytically rather than by ray tracing.",
  },
];

/* ------------------------------------------------------------------ */
/* Architecture diagram                                                */
/* ------------------------------------------------------------------ */

export type NodeKind = "ours" | "inherited" | "external";
export type Side = "t" | "b" | "l" | "r";

export type DiagramNode = {
  id: string;
  label: string;
  sub?: string;
  kind: NodeKind;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type DiagramGroup = {
  label: string;
  tone: "ours" | "boundary";
  x: number;
  y: number;
  w: number;
  h: number;
};

export type DiagramEdge = {
  from: string;
  to: string;
  fromSide: Side;
  toSide: Side;
  label?: string;
  dashed?: boolean;
};

export type DiagramData = {
  width: number;
  height: number;
  groups: readonly DiagramGroup[];
  nodes: readonly DiagramNode[];
  edges: readonly DiagramEdge[];
};


export const architecture = {
  pattern: "Layered client–server, running on a single machine",
  summary:
    "The UI never talks to LieOptics directly. Every request flows through one typed API layer to a thin Python service that wraps the client's package. Communication is local only (localhost on one machine); no data leaves the user's computer.",
  diagram: {
    width: 960,
    height: 560,
    groups: [
      { label: "User's computer (localhost only, nothing leaves the machine)", tone: "boundary", x: 180, y: 15, w: 765, h: 530 },
      { label: "Electron desktop app", tone: "ours", x: 200, y: 55, w: 300, h: 400 },
    ],
    nodes: [
      { id: "user", label: "User", sub: "Optical engineer, researcher, or student", kind: "external", x: 20, y: 95, w: 130, h: 80 },
      { id: "ui", label: "Renderer UI", sub: "React + TypeScript: builder, results, optimization", kind: "ours", x: 250, y: 95, w: 230, h: 80 },
      { id: "api", label: "Typed API client", sub: "One interface; mock and HTTP versions", kind: "ours", x: 250, y: 225, w: 230, h: 80 },
      { id: "main", label: "Electron main process", sub: "Windows, file dialogs, starts the Python service", kind: "ours", x: 250, y: 355, w: 230, h: 80 },
      { id: "service", label: "Thin Python service", sub: "Maps API calls onto LieOptics", kind: "ours", x: 560, y: 225, w: 160, h: 80 },
      { id: "lie", label: "LieOptics", sub: "Client's package, used unmodified", kind: "inherited", x: 800, y: 225, w: 130, h: 80 },
      { id: "fs", label: "Local file system", sub: "Saved lens systems (JSON)", kind: "external", x: 560, y: 355, w: 180, h: 80 },
    ],
    edges: [
      { from: "user", to: "ui", fromSide: "r", toSide: "l", label: "clicks, edits" },
      { from: "ui", to: "api", fromSide: "b", toSide: "t", label: "typed requests" },
      { from: "api", to: "service", fromSide: "r", toSide: "l", label: "HTTP + JSON" },
      { from: "service", to: "lie", fromSide: "r", toSide: "l", label: "Python calls" },
      { from: "api", to: "main", fromSide: "l", toSide: "l", label: "save / open (IPC)", dashed: true },
      { from: "main", to: "fs", fromSide: "r", toSide: "l", label: "read / write" },
    ],
  } as DiagramData,
  external: [
    "Local file system: saved lens systems as JSON, read and written by the Electron main process.",
    "LieOptics repository: client-owned source, consumed as a dependency.",
  ] as readonly string[],
  notes: [
    "Network communication: localhost only; no remote servers.",
    "Machines: one. UI, service, and backend run on the user's computer.",
    "Our work: renderer UI, API client, Python service, Electron shell, packaging. Inherited: LieOptics.",
  ] as readonly string[],
};

/* ------------------------------------------------------------------ */
/* System metaphor                                                     */
/* ------------------------------------------------------------------ */

export const metaphor = {
  text: "The app is an optical bench. You place lens elements on the bench like physical parts, slide them into position, and adjust their settings. A screen at the far end of the bench shows the image they produce, and the measuring instruments beside it read off exactly how sharp that image is.",
  codeNames: [
    { term: "Bench", meaning: "the workspace where the lens system is assembled (builder canvas and form)." },
    { term: "Element", meaning: "one lens on the bench (radius, thickness, glass index)." },
    { term: "Screen", meaning: "the spot diagram showing where light lands." },
    { term: "Gauges", meaning: "the aberration coefficient readouts." },
    { term: "Tuner", meaning: "the optimization panel that nudges elements toward a better image." },
  ] as readonly { term: string; meaning: string }[],
};

/* ------------------------------------------------------------------ */
/* Design document                                                     */
/* ------------------------------------------------------------------ */

export type Module = {
  name: string;
  language: string;
  component: string;
  does: string;
};

export type DataDefinition = {
  name: string;
  purpose: string;
  fields: readonly { field: string; type: string; meaning: string }[];
};

export const designDoc = {
  intro:
    "This document expands the architecture diagram into modules, describes the code repository, defines the data the system exchanges, and records why we chose this design over others.",

  /** Module-level view of the architecture diagram. */
  diagram: {
    width: 960,
    height: 500,
    groups: [
      { label: "Renderer UI", tone: "ours", x: 15, y: 20, w: 215, h: 440 },
      { label: "API client (api/)", tone: "ours", x: 270, y: 20, w: 215, h: 440 },
    ],
    nodes: [
      { id: "builder", label: "ui/builder", sub: "Element form and layout canvas", kind: "ours", x: 35, y: 70, w: 175, h: 80 },
      { id: "optimize", label: "ui/optimize", sub: "Bounds, run, progress, cancel", kind: "ours", x: 35, y: 200, w: 175, h: 80 },
      { id: "results", label: "ui/results", sub: "Coefficients, spot diagram, plots", kind: "ours", x: 35, y: 330, w: 175, h: 80 },
      { id: "mock", label: "Mock client", sub: "Placeholder results for development", kind: "ours", x: 290, y: 70, w: 175, h: 80 },
      { id: "iface", label: "API interface", sub: "Typed requests and responses", kind: "ours", x: 290, y: 200, w: 175, h: 80 },
      { id: "http", label: "HTTP client", sub: "Calls the local Python service", kind: "ours", x: 290, y: 330, w: 175, h: 80 },
      { id: "service", label: "service/", sub: "Analyze, optimize, spot-diagram endpoints", kind: "ours", x: 560, y: 330, w: 160, h: 80 },
      { id: "lie", label: "LieOptics", sub: "Client's package, used unmodified", kind: "inherited", x: 800, y: 330, w: 130, h: 80 },
      { id: "electron", label: "electron/", sub: "Windows, save and load, starts the service", kind: "ours", x: 560, y: 200, w: 180, h: 80 },
    ],
    edges: [
      { from: "builder", to: "iface", fromSide: "r", toSide: "l" },
      { from: "optimize", to: "iface", fromSide: "r", toSide: "l" },
      { from: "results", to: "iface", fromSide: "r", toSide: "l" },
      { from: "iface", to: "mock", fromSide: "t", toSide: "b", label: "dev", dashed: true },
      { from: "iface", to: "http", fromSide: "b", toSide: "t", label: "real" },
      { from: "http", to: "service", fromSide: "r", toSide: "l", label: "HTTP + JSON" },
      { from: "service", to: "lie", fromSide: "r", toSide: "l", label: "Python calls" },
      { from: "electron", to: "service", fromSide: "b", toSide: "t", label: "starts / stops", dashed: true },
      { from: "iface", to: "electron", fromSide: "r", toSide: "l", label: "save / open (IPC)", dashed: true },
    ],
  } as DiagramData,

  repository: {
    languages: [
      { language: "TypeScript (React)", implements: "Renderer UI and typed API client" },
      { language: "TypeScript (Node)", implements: "Electron main process: windows, file access, service launch" },
      { language: "Python", implements: "Thin service wrapping LieOptics (the LieOptics package itself is the client's)" },
    ] as readonly { language: string; implements: string }[],
    readme:
      "The repository README covers installing dependencies, running the app against the mock API, and running it against the real backend.",
  },

  modules: [
    { name: "ui/builder", language: "TypeScript", component: "Renderer UI", does: "Lens element form and layout canvas; edits the in-memory lens model." },
    { name: "ui/results", language: "TypeScript", component: "Renderer UI", does: "Aberration coefficient table, spot diagram, and phase-space plots." },
    { name: "ui/optimize", language: "TypeScript", component: "Renderer UI", does: "Optimization bounds, run, progress, and cancel controls." },
    { name: "api", language: "TypeScript", component: "API client", does: "Typed interface plus mock and HTTP implementations, so the real backend can replace the mock." },
    { name: "electron", language: "TypeScript", component: "Electron shell", does: "Window management, save/load dialogs, starting and stopping the Python service." },
    { name: "service", language: "Python", component: "Thin Python service", does: "Exposes analyze, optimize, and spot-diagram endpoints that call LieOptics." },
  ] as readonly Module[],

  data: [
    {
      name: "LensElement",
      purpose: "One lens in the system.",
      fields: [
        { field: "id", type: "string", meaning: "Stable identifier used by the UI." },
        { field: "radius", type: "number", meaning: "Curvature radius of the surface." },
        { field: "thickness", type: "number", meaning: "Distance to the next element." },
        { field: "glassIndex", type: "number", meaning: "Refractive index of the glass." },
      ],
    },
    {
      name: "LensSystem",
      purpose: "A complete design; also the saved-file format (JSON).",
      fields: [
        { field: "version", type: "number", meaning: "File format version for future migration." },
        { field: "name", type: "string", meaning: "User-visible title." },
        { field: "elements", type: "LensElement[]", meaning: "Ordered front to back." },
        { field: "fieldAngles", type: "number[]", meaning: "Field angles analyzed; three by default." },
      ],
    },
    {
      name: "AnalysisResult",
      purpose: "Returned by an analyze request.",
      fields: [
        { field: "coefficients", type: "{ name: string; value: number }[]", meaning: "Aberration coefficients." },
        { field: "spots", type: "{ fieldAngle: number; points: [number, number][] }[]", meaning: "Spot-diagram points per field angle." },
      ],
    },
    {
      name: "OptimizationRequest",
      purpose: "Sent to start an optimization.",
      fields: [
        { field: "system", type: "LensSystem", meaning: "Starting design." },
        { field: "variables", type: "{ elementId: string; parameter: string; min: number; max: number }[]", meaning: "Which parameters vary and their bounds." },
      ],
    },
  ] as readonly DataDefinition[],
  dataNote:
    "Field names are the front end's own contract. The Python service maps them onto the LieOptics classes, so a change in LieOptics touches only that mapping.",

  rationale: [
    {
      decision: "Route everything through one typed API layer.",
      why: "It isolates the client's backend from the UI, lets us build and test against a mock first, and satisfies the no-backend-changes constraint.",
    },
    {
      decision: "Electron desktop shell.",
      why: "Cross-platform, offline, and native file access with skills the team already has.",
    },
    {
      decision: "Save designs as a single JSON file.",
      why: "Human-readable, easy to version-control and share, simple to validate.",
    },
  ] as readonly { decision: string; why: string }[],

  rejected: [
    { approach: "Python-native GUI (PyQt/Tkinter)", why: "Team lacks the experience, and interactive plots and a canvas builder would cost more effort." },
    { approach: "Pure web app with a hosted backend", why: "No native file access and the client would need to host the backend." },
    { approach: "Rewriting LieOptics analysis in JavaScript", why: "Duplicates the client's work and breaks the no-modification constraint." },
    { approach: "Direct in-process calls from the UI to Python", why: "Couples the UI to backend internals and prevents mock-first development." },
  ] as readonly { approach: string; why: string }[],

  pointers: [
    { label: "Specifications", anchor: "specifications" },
    { label: "Platform selection", anchor: "platform-selection" },
    { label: "Architecture diagram", anchor: "architecture-diagram" },
  ] as readonly { label: string; anchor: string }[],
  pendingPointers: [
    "User manual: not yet written.",
    "Test plan: not yet written.",
  ] as readonly string[],
} as const;
