# Working in this repository

Public COMP 523 team website. Next.js App Router + TypeScript + Tailwind v4,
deployed on Vercel. See `README.md` for the full guide.

## Hard constraints

- **The site is read-only and statically prerendered.** Never add a form, API
  route (`route.ts`), server action (`"use server"`), database, auth, or CMS.
  Content changes happen by editing `content/*.ts` and committing. Every page
  declares `export const dynamic = "force-static"`; `npm run build` must show
  all routes as `○ (Static)`.
- **All content lives in `content/`.** Components and pages must not hardcode
  copy, names, dates, emails, or links. Content collections are exported as
  `readonly` — keep them that way.
- **This is a public site.** No client-confidential material, participant data,
  credentials, or private meeting links in any file.
- **The journal must render newest-first.** `app/journal/page.tsx` sorts with
  `byDateDescending` from `lib/format.ts`; do not rely on array order.
- **Keep the site shallow.** Course requirement: everything reachable in one
  click. Don't add nested routes.

## Conventions

- Dates are ISO `YYYY-MM-DD` strings in content, rendered via `formatDate()`
  (`lib/format.ts`), which parses as UTC so dates don't shift time zone.
- The team mailto is always derived via `teamMailto()` — never hand-write one.
- Colors come from the CSS variables in `app/globals.css` (`bg-surface`,
  `text-muted`, `border-line`, `text-accent-strong`, …), which carry their own
  dark-mode values. Don't use raw Tailwind palette colors like `gray-500`.
- Reuse `Section`, `Card`, `Badge`, `DataTable`, and `PageHeader` rather than
  writing one-off markup.
- Only `components/Header.tsx` is a client component. Keep it that way.

## Checks before committing

```bash
npm run lint && npm run build
```
