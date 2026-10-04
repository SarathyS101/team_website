# [COMP 523 Team Website](https://teamc-alpha.vercel.app/)

Public team website for COMP 523 at UNC Chapel Hill. Built with Next.js (App
Router) and Tailwind CSS, deployed on Vercel.

---

## The one rule: content is source code

**The website is read-only. There is no admin panel, login, form, API route,
database, or CMS.** The only way to add a journal entry, update a deliverable,
change the meeting schedule, or fix a name is to **edit a file in `content/`,
commit it, and push.** Vercel rebuilds the site automatically.

This is enforced, not just a convention:

- Every page is prerendered at build time (`export const dynamic = "force-static"`),
  so the deployed site is static HTML with nothing to write to.
- There are no `route.ts` handlers, no `"use server"` actions, and no forms.
- Every exported content collection is typed `readonly`, so application code
  cannot mutate it even in principle.

To confirm this after any change, run `npm run build` — all routes must be
marked `○ (Static)` in the output.

---

## Where to edit each required section

| Required item | File to edit |
| --- | --- |
| 1. Project Introduction | `content/project.ts` |
| 2. Team Roles | `content/team.ts` (`members`) |
| 3. Contact Information | `content/team.ts` (`members`, `client`, `consultants`) |
| 4. Schedule of Regular Meetings | `content/schedule.ts` |
| 5. Team Rules | `content/rules.ts` |
| 6. Journal of Meetings and Decisions | `content/journal.ts` |
| 7. Related Links | `content/links.ts` |
| 8. Deliverables Repository | `content/deliverables.ts` |
| Team name, semester, repo URL, "last updated" | `content/site.ts` |

Everything is a plain typed TypeScript object. You never need to touch a React
component to change what the site says. Search the repo for `TODO:` to find
every placeholder that still needs real content.

### Adding a journal entry (the weekly task)

Open `content/journal.ts` and paste a new object anywhere in the `entries`
array — **ordering does not matter**, the page sorts by date descending at
render time, so the newest meeting is always on top:

```ts
{
  date: "2026-09-08",           // YYYY-MM-DD
  type: "Client",               // "Team" | "Client" | "Manager"
  title: "Requirements review",
  attendees: ["Alex", "Sam", "Jordan"],
  topics: ["Reviewed the draft user stories"],
  decisions: ["Scoped v1 to the reporting workflow only"],
  actionItems: [{ owner: "Sam", task: "Write the acceptance criteria" }],
},
```

Then bump `lastUpdated` in `content/site.ts`, commit, and push.

### Updating the "Email the team" link

You don't. It is generated from the `email` fields in `content/team.ts` by
`teamMailto()` in `lib/format.ts`, so it can never drift out of date. Fix the
roster and the link fixes itself.

---

## Confidentiality

This site is public. Every file in `content/` opens with a reminder, and it is
worth repeating here: do not post client-confidential material, subject or
participant data, credentials, API keys, private meeting links, or anything the
team would not want the world to see. In the journal, summarize decisions
rather than reproducing sensitive material. In Related Links, only link to
publicly available resources with clear IP rights.

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run lint     # ESLint
npm run build    # production build; must pass before pushing
npm run start    # serve the production build locally
```

## Project layout

```
app/                 Routes. Thin renderers over content/ — no data lives here.
  page.tsx           Home: introduction, roles, contact, schedule, rules
  journal/page.tsx   Meeting journal, sorted newest first
  links/page.tsx     Related links
  deliverables/page.tsx
components/          Presentational only: Header, Footer, Section, Card, DataTable
content/             ALL site content. This is what the team edits.
lib/format.ts        teamMailto(), formatDate(), date sorting helpers
```

The site is deliberately shallow: the five standing sections are anchors on the
home page, and the three growing lists are one click away in the header, so
nothing is more than one click from anywhere.

## Deploying to Vercel

1. Push this repository to GitHub.
2. At [vercel.com/new](https://vercel.com/new), import the repository.
3. Accept every detected default — Vercel recognizes Next.js; no environment
   variables, build-command overrides, or `vercel.json` are needed.
4. Deploy.

Every push to `main` redeploys production; pull requests get preview URLs.
