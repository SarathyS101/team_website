# Documentation Plan — LieOptics Desktop

> Internal planning document for the course instructor and coach. Not published on the public site and not shared with the client.

Team 17 (Team C), COMP 523. This is a plan, for the instructor and coach — it describes what
the final documentation will look like and why that's the right call for our users. The actual
documentation is produced and delivered with the final code deliverable.

## User types

| User | Who | Comfort level |
|---|---|---|
| **End user** | Optics researchers and students designing lens systems | Comfortable with technical/scientific tools, not necessarily with installers or dev tooling |
| **Administrator / installer** | Whoever sets the app up for a lab or for the client (likely the client themselves) | Comfortable following step-by-step instructions, not assumed to be a software engineer |
| **Future engineer** | A developer who extends or maintains the code after hand-off | Covered by a separate technical/architecture document, not part of this plan |

The client (Haosheng Shi) may act as both end user and administrator, so the distinction still
matters for organizing the documentation, even if one person reads both parts.

## What each user needs, and how it will be delivered

### End user

The app is a graphical desktop tool (lens builder, tabbed visualizations, optimization bench),
so most of what an end user needs is answerable without prose — the interface should already
make the next step obvious. Per the course guidance, we are **not** writing a long user manual.

- **In-app affordances** (already present): field labels, status-bar counts (surfaces, media,
  free variables), the engine-online/offline indicator, and empty-state hints (e.g. "Run
  analysis to see aberration coefficients"). These are documentation delivered exactly when
  needed, not read in advance.
- **Short videos** (2-3, per the course's video requirement): (1) building a lens system from a
  preset and from scratch, (2) running analysis and reading the four visualization tabs, (3)
  running an optimization and exporting results. Recorded in Zoom (talk + screen share),
  3-6 minutes each.
- **A short README-style quick start** (`desktop/README.md` or a `docs/userGuide.md`):
  newspaper-style — the one or two things a new user needs on line one (install it, open it,
  pick a preset, hit Analyze), with anything else below the fold. No jargon assumed beyond
  standard optics terms our users already know (EFL, TTL, Seidel aberrations, etc.) — this
  audience is not a reluctant computer user.
- **Delivery**: linked from the team website, bundled in the installer/release notes, and
  emailed to the client at hand-off.

### Administrator

The administrator needs to get the app running on a machine the client controls, with no prior
Python/Node setup, since the packaged app bundles its own frozen Python engine
(`packaging/build_engine.py`, `packaging/lieoptics-bridge.spec`).

- **Install instructions** per platform: Windows (`.exe` NSIS installer or portable zip) and
  macOS (`.dmg`, Apple Silicon and Intel builds) — the exact artifacts `release.yml` produces.
- **What's bundled vs. what's required**: the Python engine and its dependencies
  (NumPy, SciPy, Matplotlib, LieOptics) are bundled; nothing else needs to be installed.
- **Known compatibility**: tested on Windows 10/11 x64 and macOS (arm64 and Intel) via the CI
  release matrix; Python 3.12+ is explicitly unsupported for anyone rebuilding from source (see
  the test plan).
- **Rebuild-from-source instructions**, for an administrator who wants to build rather than
  download a release: `packaging/build_engine.py`, the two `packaging/requirements-*.txt`
  files, and `npm run dist:win` / `npm run dist:mac`.
- **Unsigned-installer note**: `forceCodeSigning` is currently `false`, so macOS/Windows may
  show an "unidentified developer" warning; the administrator doc explains how to proceed past
  it.
- **Delivery**: a `docs/adminGuide.md` / install section of the GitHub Release notes, plus the
  hand-off document (see that plan) covers the client-specific version of this.

### Ownership and status

`docs/userGuide.md` and `docs/adminGuide.md` are written (see this repo) and cover the app as
it exists today. The videos are not recorded yet — a screen recording can't be produced in
advance of the UI it demonstrates. Owners, based on who built the matching part of the app (so
the person writing/recording a section already knows it first-hand):

| Document | Owner | Status | Draws on |
|---|---|---|---|
| `docs/userGuide.md` | Avi Patel and Lakshin Ganesha | Written | Phases B/C and D |
| `docs/adminGuide.md` | Sushant Potu | Written | Phase E |
| End-user videos (2) | Avi Patel / Lakshin Ganesha | Not recorded | Phases B/C and D |
| Install video | Sushant Potu | Not recorded | Phase E |

Both guides will need a re-read before the final hand-off, since the UI and packaging will keep
changing until then — treat them as living documents, not one-time deliverables.

Target: videos recorded well before client acceptance testing (11/17), so there's time to
refine everything from client feedback before the final hand-off (12/5).

### Future engineer

Out of scope for this plan — the course treats this as a separate technical/architecture
document (code structure, the bridge API, the Lie_Optics library boundary). Noted here only so
it isn't mistaken for a gap.

## Format summary

| Medium | Used for |
|---|---|
| In-app text/empty states/status bar | Moment-of-need guidance, no document needed |
| Short Zoom-recorded videos | Primary end-user onboarding |
| `docs/userGuide.md` (brief) | End-user reference, drill-down beyond the videos |
| `docs/adminGuide.md` (brief) | Installer/compatibility/rebuild instructions |
| GitHub Release notes | Download links, per-OS artifacts, version history |
| Team website | Hosts links to all of the above |

This list is deliberately short: a graphical, single-purpose desktop tool for a technical
audience does not need a large manual, and over-documenting would go against the course's own
guidance to keep user-facing docs tight and drill-down structured.
