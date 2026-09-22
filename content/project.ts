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
  /** Project's public-facing name. */
  name: "Optical Design Tool Frontend",

  /** One or two sentences. The hook. */
  elevatorPitch:
    "A cross-platform front-end for LieOptics that lets optical engineers, researchers, and students interactively design lens systems, run analytical aberration analysis, and visualize results without writing code.",

  /** Body paragraphs of the introduction. */
  overview: [
    "This project is a front-end for an optical lens design tool. The backend, LieOptics, is a lightweight Python package we've already built that computes optical aberration coefficients analytically, using Lie group and Hamiltonian methods instead of traditional ray tracing. That approach makes it dramatically faster. It has over 1000x speedup on a simple camera lens in our benchmarks, and it makes principled lens design accessible. Designers can dig into aberration pattern analysis that no other tool offers, giving them real guidance during design instead of the trial-and-error process most lens design still relies on. What's missing is a way to actually see and use any of this. That's why we are looking forward to an front-end.",
    "The backend is still a prototype, but it covers the essential APIs: defining lens systems (radius, thickness, glass index per element), analyzing how rays focus through them, running optimization (e.g., differential evolution over lens parameters) to improve performance, and generating spot diagrams that any optics engineer can read.",
    "Right now, a designer has to write code to run any of these functionalities. The goal of this project is a cross-platform application that lets an end user, such as an optical engineer, researcher, or student, interactively define a multi-element lens system, run aberration analysis and optimization, and visualize the results (spot diagrams, aberration coefficients, phase-space plots) without touching code. We're picturing an Electron or browser-based app with a form/canvas-style UI for building lens systems, talking to the existing Python backend through an API layer, and rendering interactive plots of the results, though we're open to a better framework for bridging the two if one fits better.",
    "The target users are researchers and students in optics who want a lightweight, open-source alternative to commercial tools like Zemax or CODE V for exploratory lens design, with access to performance insights that only our model provides. The team's job is the front-end and a thin API layer connecting to the existing backend. We will provide the backend's core computational code, in a stable state. The team does not need to modify the backend.",
  ],

  /** A few concrete capabilities. Keep these short. */
  highlights: [
    {
      title: "Interactive Lens System Builder",
      detail:
        "Define multi-element lens systems with curvature radius, thickness, and glass index per element via an intuitive form/canvas interface.",
    },
    {
      title: "Analytical Aberration Analysis",
      detail:
        "Generate spot diagrams and analytical aberration coefficients backed by LieOptics with >1000x speedup over ray tracing.",
    },
    {
      title: "Optimization & Visualization",
      detail:
        "Run differential evolution optimization over lens parameters and inspect phase-space plots and performance insights without touching code.",
    },
  ],

  /** Technology the team is using. Shown as small tags. */
  stack: ["TypeScript", "React", "Electron", "Python", "LieOptics", "Figma"],
} as const;
