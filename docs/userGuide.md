# LieOptics — User Guide

For optics researchers and students designing lens systems. If you just want to poke around,
skip to **Quick start** — everything else is reference for when you need more detail.

## Quick start

1. Open LieOptics. It loads the Plano-Convex Singlet preset automatically and connects to the
   calculation engine in the background (the dot in the bottom-left status bar turns green —
   "Engine online" — once it's ready).
2. Pick a different starting point from the **Preset** dropdown in the top bar if you'd rather
   not start from the singlet: Singlet, Doublet, Cooke Triplet, or Double Gauss.
3. Click **Analyze**. The first-order metrics (EFL, TTL, BFL, f-number, average RMS spot) fill
   in at the top, and four tabs below them fill in with results.
4. Click **Save** to write your system to a `.json` file, or **Open** to load one back in.

That's the whole loop: build or load a system, Analyze, read the results, repeat.

## Building a lens system

The left panel is the element list — the lens, surface by surface, in order from object space
to image space.

- **+ Add surface** / **+ Add medium** adds a new spherical surface or a gap of material after
  the currently selected element.
- Click an element's header to expand its editor.
- **Surface editor**:
  - **Radius R (mm)** — the surface's radius of curvature. Leave it and check **Flat (plano)
    surface** for a flat surface instead (equivalent to R = ∞).
  - **Half-curvature c₂** is shown read-only next to it (c₂ = 1/2R) — this is the value the
    engine actually computes with, shown so you can sanity-check unit conversions.
  - **n₁ → n₂**: refractive index before and after the surface, picked from the glass catalog
    (Air, N-BK7, EF2, ESF15, N-LAK8, N-LAK10) or typed as a custom index.
  - **Semi-diameter (mm)**: leave blank for "auto" (sized from the entrance pupil), or set an
    explicit aperture radius.
- **Medium editor**:
  - **Thickness d (mm)**: the gap to the next surface.
  - **Material**: glass or air between this surface and the next.
- Use the ↑ / ↓ buttons (or drag) to reorder elements, and ✕ to remove one.

### Marking a parameter as free for optimization

Every radius and thickness has an **Optimize** toggle in its editor. Turn it on to mark that
parameter as free; the optimizer will vary it (within the bounds you set, or sensible defaults)
when you run an optimization. Leave it off to hold that value fixed.

## System configuration (the gear icon / Config button)

- **System name**, **entrance pupil diameter (mm)**, **wavelength (nm)**, and **field angles
  (deg, comma-separated, e.g. `0, 7, 14`)** — these describe the system as a whole, not any one
  element.
- **Max Lie order**: how many orders of aberration to compute (3–9). Higher orders cost more
  time for more detail.
- **Rays across diameter** and **Aperture fill ratio**: control how densely the spot diagrams
  are sampled.
- **Bridge connection**: leave blank to use the default local engine. Only change this if you've
  been told to point the app at a different bridge (e.g. a remote instance) or need to enter a
  session token.

## Reading the results

After **Analyze**, four tabs appear:

- **Aberrations**: the classic 3rd-order Seidel breakdown (spherical, coma, astigmatism, field
  curvature, distortion) as cards, plus the full Lie coefficient table below, filterable by
  order (k = 3, 5, 7, 9) and searchable by name.
- **Spot diagram**: pick a field angle along the top, then read the scatter plot — the orange
  ring is the diffraction-limited Airy disk, the crosshair is the centroid. Scroll to zoom, drag
  to pan, **Reset view** to snap back, **PNG** to save the current view as an image.
- **Layout**: a side-view cross-section of the lens with shaded glass and the traced ray bundle.
  **SVG** exports the current drawing as a vector file.
- **Optimization**: see below.

## Running an optimization

1. Open the **Optimization** tab. Set a target EFL and/or TTL (leave blank for "don't care about
   this one"), the weight on each target, population size, and global/local iteration counts.
2. Click **Start optimization**. The chart fills in live as it runs; **Cancel** stops it early.
3. When it finishes, **Apply optimized system** copies the optimized radii/thicknesses back into
   your builder — it does not happen automatically, so you can compare before committing.
4. Re-run **Analyze** afterward to see updated results for the optimized system.

Only parameters marked **Optimize** (see above) are varied; everything else stays fixed.

## Exporting your results

Click **Export** in the results panel header for three formats:
- **Mathematica list** — paste directly into Mathematica.
- **CSV** — the Seidel and Lie coefficient tables, for spreadsheets.
- **JSON** — the lens system itself (same format as Save/Open), always available even without
  running an analysis first.

## If something looks wrong

- **"Engine offline"** in the status bar: the app falls back to a local example system so you
  can keep building, but Analyze and Optimize won't work until the engine reconnects. Check
  **Config → Bridge connection** if you changed it, or just restart the app.
- **A field shows an error state**: hover it — out-of-range values (e.g. a negative thickness, a
  field angle over 90°) are rejected with a short message rather than silently accepted.
