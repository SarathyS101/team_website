# LieOptics — Administrator Guide

For whoever installs and maintains LieOptics on a machine — a lab computer, the client's own
machine, or yours. You do not need to know Python, Node, or React to follow this guide; the
"rebuild from source" section at the end is the only part that assumes development tools.

## What you're installing

LieOptics is a self-contained desktop application (Windows and macOS). It bundles its own
Python calculation engine — there is nothing else to install, no Python, no conda, no separate
server to run. Once installed, it runs entirely on the local machine with no internet
connection required (and no data leaves the machine).

## Supported systems

| Platform | Architecture | Tested via |
|---|---|---|
| Windows 10/11 | x64 | `windows-latest` GitHub Actions runner |
| macOS | Apple Silicon (arm64) | `macos-latest` GitHub Actions runner |
| macOS | Intel (x64) | `macos-15-intel` GitHub Actions runner |

The underlying engine requires Python 3.11 to build (not to run — the packaged app bundles its
own copy). **Python 3.12 and newer cannot run the engine**: the optics library contains a large
generated expression that exceeds Python 3.12's compiler recursion limit. This only matters if
you are rebuilding from source (see below); it does not affect the packaged installer.

## Installing a release

1. Go to the repository's **Releases** page:
   `https://github.com/hausenshi/LieOptics/releases`.
2. Download the artifact for your platform:
   - **Windows**: `LieOptics-<version>-win-x64.exe` (installer, recommended) or the portable
     `.zip` (no installer, just unzip and run).
   - **macOS (Apple Silicon)**: `LieOptics-<version>-mac-arm64.dmg`.
   - **macOS (Intel)**: `LieOptics-<version>-mac-x64.dmg`.
3. **Windows**: run the `.exe`. It is a standard NSIS installer — you can choose the install
   directory and whether it's per-user or per-machine.
4. **macOS**: open the `.dmg` and drag LieOptics into Applications.
5. **Unsigned app warning (expected)**: installers are not currently code-signed
   (`forceCodeSigning: false` in the build config). Windows SmartScreen or macOS Gatekeeper will
   warn about an "unknown publisher" / "unidentified developer." This is expected, not a sign of
   a corrupted download:
   - **Windows**: click "More info," then "Run anyway."
   - **macOS**: right-click (or Control-click) the app, choose "Open," then confirm in the
     dialog that appears. After this first run, it opens normally.
6. Launch it. No account, license key, or further configuration is required. The bundled engine
   starts automatically; the app's status bar shows "Engine online" once it's ready (usually a
   few seconds).

## Uninstalling / reinstalling

- **Windows**: use "Apps & Features" in Settings, or the uninstaller in the install directory.
  User data (saved `.json` lens systems, wherever the user chose to save them) is not touched by
  uninstalling — only the application itself.
- **macOS**: drag the app from Applications to the Trash.
- To update to a new version, just install the new release over the old one (Windows) or
  replace the app in Applications (macOS); there is no separate uninstall-then-reinstall step
  required.

## Network and data

The app runs its engine on `127.0.0.1` (localhost) only — it is not reachable from other
machines on the network by default, and does not require inbound/outbound network access to
function. Saved lens systems are plain JSON files the user chooses where to save; the app does
not phone home or collect telemetry.

## Rebuilding from source (for a developer-administrator only)

If you need to build an installer yourself rather than download one from Releases:

1. Install **Python 3.11** (not 3.12+ — see above) and **Node.js 22**.
2. From the repository root:
   ```bash
   pip install -r packaging/requirements-engine.txt
   python packaging/build_engine.py        # freezes the Python engine into desktop/engine/
   cd desktop
   npm ci
   npm run dist:win     # Windows installer + zip
   npm run dist:mac      # macOS dmg + zip (run this step on a Mac)
   ```
3. Installers land in `desktop/release/`.

To verify a build before distributing it:
```bash
npm run smoke:engine   # confirms the bundled engine starts and responds
npm run smoke:app      # launches the packaged app end-to-end
```

The CI release workflow (`.github/workflows/release.yml`) does exactly this automatically for
all three targets whenever a `vX.Y.Z` tag is pushed, which is the normal way new releases are
produced — rebuilding locally is only for one-off or development needs.

## Known limitations at time of writing

- Installers are unsigned (see "Unsigned app warning" above). Code signing is possible later but
  has an ongoing certificate cost — see the client hand-off plan for details.
- No auto-update mechanism yet; a new version means downloading and installing it manually.
