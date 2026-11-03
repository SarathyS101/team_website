# Client Hand-off Plan — LieOptics Desktop

> Internal planning document for the course instructor and coach. Not published on the public site and not shared with the client.

Team 17 (Team C), COMP 523. A plan for the instructor and coach, describing how we will hand a
working system to the client (Haosheng Shi). The actual hand-off (document + videos + install)
happens at the end of the semester by following this plan.

## What the system technically is

A **standalone desktop application** (Electron + React + TypeScript), not a hosted web service.
It bundles its own frozen Python calculation engine (built with PyInstaller from
`packaging/lieoptics-bridge.spec`), so the client does **not** need Python, conda, or any
dependency installed separately. It is **not** a Carolina CloudApp, Heroku app, Firebase app, or
AWS service — there is no server the client needs to provision, pay for, or keep running.

Ownership: the code lives in the client's own GitHub repository
(`github.com/hausenshi/LieOptics`), on the `OpticalDesignToolApplication` branch during
development, merged to `main` for the final hand-off. The client already owns this repository,
so no transfer is needed — we are contributors to a repo they control.

## How the client obtains and runs it (step-by-step, non-technical)

1. Go to the repository's **Releases** page on GitHub
   (`github.com/hausenshi/LieOptics/releases`).
2. Download the installer for their operating system:
   - **Windows**: `LieOptics-<version>-win-x64.exe` (installer) or the portable `.zip`.
   - **Mac (Apple Silicon, e.g. M1/M2/M3)**: `LieOptics-<version>-mac-arm64.dmg`.
   - **Mac (Intel)**: `LieOptics-<version>-mac-x64.dmg`.
3. **Windows**: run the `.exe` and follow the installer prompts. **Mac**: open the `.dmg` and
   drag LieOptics into Applications.
4. **If the OS warns about an unknown/unidentified developer** (expected — our installers are
   not code-signed, see Costs below): on Windows, click "More info" then "Run anyway"; on Mac,
   right-click the app and choose "Open," then confirm.
5. Launch LieOptics from the Start Menu / Applications folder. No further setup is required —
   the calculation engine starts automatically in the background.

This is the client-facing version of this plan — no GitHub/git knowledge is assumed beyond
clicking a download link.

## What's included vs. what the client must still decide

**Included out of the box:**
- The desktop app itself, for Windows and macOS (Apple Silicon and Intel).
- The full LieOptics calculation engine, bundled — no separate install.
- Preset lens systems (singlet, doublet, Cooke triplet, double Gauss) to start from.

**The client should decide, before hand-off:**
- Whether they want the installers code-signed (see Costs). Unsigned is free but shows OS
  warnings; signed removes the warnings but has an ongoing certificate cost.
- Who on their side will be the point of contact if the installer needs to be rebuilt later
  (e.g. after a library update) — rebuilding requires Python 3.11 and Node 22, documented in
  `docs/documentationPlan.md`.

## Costs

- **Running the app**: $0. It is a local desktop application with no server, no hosting, and no
  subscription.
- **Code signing** (optional, not currently done): Windows and macOS developer certificates for
  signed, warning-free installers are a recurring cost (roughly tens to a few hundred dollars
  per year depending on the certificate authority and Apple Developer Program fees). This is
  explicitly **not** included in the current build (`forceCodeSigning: false` in
  `desktop/package.json`) and is a cost only if the client chooses to pursue it later.
- **Scaling**: not applicable — this is a single-user local tool, not a service with a user
  base to scale.

## Discuss with the client, before the final hand-off

- Confirm the client is comfortable with an unsigned installer (and the OS warning it triggers)
  as the default, versus paying for code signing themselves.
- Confirm the client wants distribution via GitHub Releases rather than any other channel.
- Confirm who receives and keeps the hand-off video links.
- If appropriate, schedule a hand-off appointment to install the app on the client's own
  machine together and confirm it runs correctly in their environment.

## Hand-off video(s)

Per the course's video requirement, we will record and deliver (not required until the actual
hand-off, planned here now):
1. **Install and first launch** — downloading the right installer, getting past the unsigned-app
   warning, first run.
2. **Using the app** — building/loading a lens system, running analysis, reading results,
   running an optimization, exporting.

Recorded in Zoom (talk-to-camera + screen share), linked from the team website's Links page and
emailed directly to the client at hand-off time, alongside this document.

Owner: Sushant Potu (packaging/install video, since he built that path) and Lakshin Ganesha or
Avi Patel (usage video, since they built the UI being demonstrated).

## Our post-hand-off point of contact

Sarathy Selvam, as the team's original client contact (ran the 9/17 and subsequent client
meetings), is the point of contact if the client needs help after the project ends. TODO:
confirm this with the full team before the hand-off email goes out.

## Delivery checklist (executed at the end of the semester)

- [ ] Final code merged to `main` on the client's repository. Owner: Sarathy Selvam (bridge/
      repo owner on our side).
- [ ] A tagged release (`vX.Y.Z`) built via `.github/workflows/release.yml`, producing signed-or-
      not installers for Windows x64, macOS arm64, and macOS x64. Owner: Sushant Potu (built the
      release workflow).
- [ ] Hand-off videos recorded and linked on the team website.
- [ ] This document (in non-technical form) emailed to the client along with the video links.
- [ ] Optional: in-person or Zoom hand-off appointment to install on the client's machine.
