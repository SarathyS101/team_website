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
  3-6 minutes each. Not recorded yet — see Ownership and status below.
- **A short, newspaper-style written walkthrough**: the one or two things a new user needs on
  line one (install it, open it, pick a preset, hit Analyze), with everything else below the
  fold as reference. No jargon assumed beyond standard optics terms our users already know
  (EFL, TTL, Seidel aberrations, etc.) — this audience is not a reluctant computer user. This is
  where our User Documentation content goes:

#### User documentation (current draft)

**Quick start**
1. Open LieOptics. It loads the Plano-Convex Singlet preset automatically and connects to the
   calculation engine in the background (the dot in the bottom-left status bar turns green —
   "Engine online" — once it's ready).
2. Pick a different starting point from the **Preset** dropdown in the top bar if you'd rather
   not start from the singlet: Singlet, Doublet, Cooke Triplet, or Double Gauss.
3. Click **Analyze**. The first-order metrics (EFL, TTL, BFL, f-number, average RMS spot) fill
   in at the top, and four tabs below them fill in with results.
4. Click **Save** to write your system to a `.json` file, or **Open** to load one back in.

That's the whole loop: build or load a system, Analyze, read the results, repeat.

**Building a lens system.** The left panel is the element list — the lens, surface by surface,
object space to image space. **+ Add surface** / **+ Add medium** adds a surface or a gap of
material after the selected element. In the surface editor: **Radius R (mm)** (check **Flat**
for R = ∞), **half-curvature c₂** shown read-only (c₂ = 1/2R, what the engine actually uses),
**n₁ → n₂** from the glass catalog (Air, N-BK7, EF2, ESF15, N-LAK8, N-LAK10) or a custom index,
and **semi-diameter** (blank = auto-sized). In the medium editor: **thickness d (mm)** and
**material**. Reorder with ↑ / ↓, remove with ✕. Every radius and thickness has an **Optimize**
toggle — turn it on to let the optimizer vary that value.

**System configuration** (Config button): system name, entrance pupil diameter, wavelength,
field angles (comma-separated degrees), max Lie order (3-9), ray sampling density, and the
bridge connection URL/token (only needed to point at a non-default engine).

**Reading results** (four tabs after Analyze): **Aberrations** — Seidel cards plus the full Lie
coefficient table, filterable by order and searchable. **Spot diagram** — scatter plot per field
angle with the Airy disk and centroid shown, scroll to zoom, drag to pan, PNG export. **Layout**
— a shaded cross-section with the traced ray bundle, SVG export. **Optimization** — see below.

**Running an optimization**: set target EFL/TTL (blank = don't care), weights, population size,
and iteration counts; **Start optimization** streams a live convergence chart; **Cancel** stops
it early; **Apply optimized system** copies the result back into the builder (not automatic, so
you can compare first); re-run Analyze afterward.

**Exporting**: the Export button offers Mathematica list, CSV (Seidel + Lie tables), and JSON
(the system itself, always available).

**Troubleshooting**: "Engine offline" in the status bar means Analyze/Optimize won't work until
the engine reconnects — the app still lets you build with a local fallback system. Fields with
out-of-range values (e.g. negative thickness, field angle over 90°) show an inline error instead
of silently accepting the value.

- **Delivery**: this content, expanded, becomes the final user documentation shipped with D5;
  linked from the team website, bundled in the installer/release notes, and emailed to the
  client at hand-off.

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
  it. This is where our Administrator Documentation content goes:

#### Administrator documentation (current draft)

LieOptics is self-contained — no Python, conda, or separate server needed; it bundles its own
engine and runs entirely offline with no telemetry.

**Supported systems**: Windows 10/11 x64, macOS Apple Silicon (arm64), macOS Intel (x64) — each
verified by its own CI runner. Building from source needs Python 3.11 specifically (3.12+
cannot import the optics library — see the test plan); this only affects rebuilding, not the
packaged installer.

**Installing a release**: download the right artifact from the repository's Releases page
(`LieOptics-<version>-win-x64.exe`/`.zip`, `-mac-arm64.dmg`, or `-mac-x64.dmg`). Run the
Windows installer or drag the macOS app into Applications. The OS will warn about an
"unidentified developer" since installers are not code-signed yet — on Windows, "More info" →
"Run anyway"; on macOS, right-click → "Open" → confirm. Launch it; the bundled engine starts
automatically.

**Uninstalling/updating**: standard OS uninstall (Settings → Apps on Windows, drag to Trash on
macOS) does not touch saved `.json` lens systems. Updating is just installing the new release
over the old one.

**Rebuilding from source** (developer-administrators only): Python 3.11 + Node 22, then
`pip install -r packaging/requirements-engine.txt`, `python packaging/build_engine.py`,
`cd desktop && npm ci && npm run dist:win` (or `dist:mac`, on a Mac). Verify with
`npm run smoke:engine` and `npm run smoke:app` before distributing. The release workflow does
this automatically on every `vX.Y.Z` tag.

**Known limitations**: installers are unsigned (certificate signing has an ongoing cost — see
the hand-off plan); no auto-update yet.

- **Delivery**: this content, expanded, becomes the final administrator documentation shipped
  with D5; an install section of the GitHub Release notes, plus the hand-off document (see that
  plan) covers the client-specific version of this.

### Ownership and status

The user and administrator documentation content above is drafted and covers the app as it
exists today. The videos are not recorded yet — a screen recording can't be produced in advance
of the UI it demonstrates. Owners, based on who built the matching part of the app (so the
person writing/recording a section already knows it first-hand):

| Content | Owner | Status | Draws on |
|---|---|---|---|
| User documentation | Avi Patel and Lakshin Ganesha | Drafted above | Phases B/C and D |
| Administrator documentation | Sushant Potu | Drafted above | Phase E |
| End-user videos (2) | Avi Patel / Lakshin Ganesha | Not recorded | Phases B/C and D |
| Install video | Sushant Potu | Not recorded | Phase E |

Both drafts will need a re-read before the final hand-off, since the UI and packaging will keep
changing until then — treat them as living content, not a one-time deliverable, and expand them
into the standalone user/admin manuals that ship with D5.

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
| User documentation (drafted above, expanded into a standalone doc for D5) | End-user reference, drill-down beyond the videos |
| Administrator documentation (drafted above, expanded into a standalone doc for D5) | Installer/compatibility/rebuild instructions |
| GitHub Release notes | Download links, per-OS artifacts, version history |
| Team website | Hosts links to all of the above |

This list is deliberately short: a graphical, single-purpose desktop tool for a technical
audience does not need a large manual, and over-documenting would go against the course's own
guidance to keep user-facing docs tight and drill-down structured.
