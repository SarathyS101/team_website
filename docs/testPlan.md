# Test Plan — LieOptics Desktop

Team 17 (Team C), COMP 523. This document has two parts, per the course requirement: what we
would test given unlimited time, and what we are actually testing. Anything claimed in Part 2
is fair game for the instructor or coach to run and verify.

## Part 1 — Ideal test plan (unlimited time)

A complete test plan for this project would include:

- **Unit testing** of every backend module (`Lie_Optics/core.py`, `system.py`, `optimization.py`,
  `visualization.py`, `bridge/*.py`) and every frontend module (`desktop/src/lib`,
  `desktop/src/store`, `desktop/src/components`).
- **Integration and system testing with the UI**: the full path from building a lens system in
  the builder, through the bridge API, through the LieOptics engine, back to the visualization
  tabs — exercised as a real user would, not through mocked data.
- **Tooling**: pytest for the Python engine and bridge, Vitest for the TypeScript frontend,
  GitHub Actions for continuous regression, and a scripted Electron smoke test for the packaged
  app.
- **Types of end users tested against**: optics researchers/students (primary users), a system
  administrator installing the app for a lab, and the client (Haosheng Shi) as the acceptance
  tester.
- **Performance and reliability testing**: timing the analytical aberration computation against
  the claimed 600-1000x speedup over ray tracing on representative systems (singlet, doublet,
  Cooke triplet, double Gauss), and testing the optimizer under cancellation, long-running jobs,
  and a bridge that becomes unreachable mid-session.
- **Acceptance testing**: a full walkthrough with the client against the agreed scope from the
  9/17 kickoff (define a system, run analysis, view results, run optimization, export).
- **Error conditions and data-specific cases**: zero free parameters, flat surfaces, degenerate
  radii, out-of-range glass indices, malformed saved-system files, cancelled optimization jobs,
  and a bridge/server crash mid-request.

Usability testing is intentionally out of scope for this document, per course instructions.

## Part 2 — What we are actually testing

### Automated unit testing

**Backend (Python, pytest).** `bridge/tests/`:

| Suite | Covers |
|---|---|
| `test_adapter.py` | Radius ↔ curvature conversion and model adapters between the UI schema and `Lie_Optics` |
| `test_analysis.py` | `/analyze` endpoint: cardinal metrics, Seidel and Lie coefficients, spot diagrams, ray traces |
| `test_cli.py` | The CLI server launcher and handshake emission |
| `test_golden.py` | **Numerical regression**: known-good outputs for fixed input systems, so a change to the optics math is caught immediately |
| `test_jobs.py` | The async optimization supervisor: start, cancel, status, convergence history |
| `test_server.py` | FastAPI app wiring, auth, error responses |
| `test_frontend_sync.py` | That `desktop/src/lib/glassCatalog.ts` stays in sync with `Lie_Optics.constants.GLASS_INDEX` |
| `test_review_fixes.py` | Regression tests for specific bugs found during code review |

Run with:
```bash
python -m pytest bridge/tests -q
```
`Lie_Optics/tests/` (`test_core.py`, `test_system_core.py`, `test_double_gauss.py`,
`test_spotsize.py`, `test_print.py`) are the engine's own pre-existing unit tests; these
continue to run alongside the bridge suite as a regression guard against the vendor code.

**Environment constraint (critical):** all of the above runs on **Python 3.11 only**. The
`Lie_Optics/core.py` module contains a single generated expression with ~146 chained terms;
Python 3.12's compiler has a fixed internal recursion limit that this expression exceeds, so
`Lie_Optics` cannot be imported on 3.12+. This is documented and enforced in CI
(`.github/workflows/ci.yml` pins `python-version: "3.11"`) and in `packaging/build_engine.py`.

**Frontend (TypeScript, Vitest).** `desktop/src/**/*.test.ts`:

| Suite | Covers |
|---|---|
| `lib/optics.test.ts` | Radius/curvature math, default element factories, formatting |
| `lib/aberrations.test.ts` | Aberration order/rank mapping used by the matrix view and CSV export |
| `lib/fileio.test.ts` | Save/open/serialize round-tripping of lens system files |
| `store/useOpticsStore.test.ts` | Zustand store actions: element editing, analysis, optimization state transitions |

Run with:
```bash
cd desktop && npm test
```

### Integration and system testing

- `packaging/smoke_engine.py` — starts the frozen Python engine as it will run inside the
  packaged app and confirms it responds, independent of the Electron shell.
- `packaging/e2e_smoke.mjs` — launches the packaged Electron app end-to-end against the real
  bundled engine (not a mock), exercising the same IPC path a real user hits.
- Manual integration pass each week: build a system in the UI, run Analyze, check every
  visualization tab (Aberrations, Spot diagram, Layout, Optimization) against the bridge's raw
  JSON response for the same request, run an optimization job to completion, export all three
  formats (Mathematica, CSV, JSON).

### Continuous regression (tooling)

`.github/workflows/ci.yml` runs on every push to `main` and `OpticalDesignToolApplication`, and
on every pull request:
- Bridge tests on `ubuntu-latest`, `windows-latest`, `macos-latest` (Python 3.11).
- Desktop typecheck (`tsc --noEmit` for both the renderer and the Electron main process), unit
  tests (`npm test`), and a production build (`npm run build`), on `ubuntu-latest`.

`.github/workflows/release.yml` builds the actual installers (Windows x64, macOS arm64, macOS
Intel) on tag push, which is itself a test that packaging succeeds on every supported target.

### Test environments

| Component | Version |
|---|---|
| Python (engine + bridge) | 3.11 (3.12+ is unsupported — see above) |
| Node.js (desktop) | 22 |
| OS matrix (bridge tests) | ubuntu-latest, windows-latest, macos-latest (GitHub-hosted runners) |
| OS matrix (packaged installer) | Windows 10/11 x64, macOS (Apple Silicon arm64), macOS (Intel x64) |
| Browser-preview mode | Chromium (via `npm run dev:web`), for development without Electron |

### Who tests, and when

- Whoever owns a change to `bridge/` runs `python -m pytest bridge/tests -q` locally before
  opening a PR; CI re-runs it on all three OS targets on push.
- Whoever owns a change to `desktop/src/` runs `npm run typecheck && npm test` locally before
  opening a PR, plus a manual pass through all four visualization tabs against a live bridge.
- Whoever owns a packaging change runs `npm run smoke:engine` and `npm run smoke:app` locally
  before tagging a release; the release workflow re-verifies by actually building installers.
- This happens continuously, tied to the weekly PPP cadence, not as a single end-of-semester
  event.
- **Client acceptance testing**: the client (Haosheng Shi) tests the packaged installer against
  the agreed workflow, scheduled around the course's client acceptance testing date (11/17).

### Error conditions and data-specific test cases

- A system with zero free (non-fixed) parameters — the bridge raises `ValueError` from
  `get_initial_params()`; the UI must surface this, not crash.
- A fully flat surface (`is_flat: true`, `radius: null`) at the first or last position.
- An out-of-catalog glass index (not in `GLASS_INDEX`).
- Cancelling an optimization job mid-run (`JobCancelledException` path in `bridge/jobs.py`).
- The bridge unreachable at startup — the desktop app must fall back to `fallbackSystem()`
  rather than hang or crash.
- A corrupted or hand-edited saved `.json` system file opened through the UI.

### Oracles

For the golden/regression tests, the oracle is `bridge/tests/golden/presets.json`, generated by
`bridge/tests/golden/generate_golden.py` from the pinned `Lie_Optics` library for the four
presets (singlet, doublet, triplet, double Gauss), checked to a relative tolerance of 1e-7. It
is regenerated deliberately, only when a library change is intended, and the diff is reviewed.
For manual integration passes, the oracle is the bridge's raw JSON response for the same
request, which the UI's rendered values must match within rounding.
