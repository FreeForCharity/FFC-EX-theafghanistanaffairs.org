---
name: rebrand
description: Rebrand this FFC template site (or a fresh fork of it) to a new nonprofit — swap identity, config, legal pages, and assets; delete unused template demo content; fix per-page SEO; and verify nothing FFC-branded ships. Use when adapting FFC_Single_Page_Template to a new organization, or auditing a partially-rebranded site for leftover "Free For Charity" identity.
---

# Rebrand an FFC template site to a new organization

This skill turns the template into a specific nonprofit's site **without leaving
any of the source organization's identity behind**. It exists because the naive
"find-and-replace Free For Charity on the homepage" approach repeatedly ships
sites whose **legal pages, deep routes, and metadata still belong to the wrong
org** — and passes lint/build/tests while doing so.

Read this whole file before editing. Work top-to-bottom; the verification step
at the end is mandatory, not optional.

## The one rule that catches everything

After you think you're done, `npm run check:drift` must pass. It now enforces a
**brand-identity gate**: once `siteConfig.name` differs from the template
default, any leftover `Free For Charity`, `freeforcharity.org`, EIN `46-2471893`,
phone `520-222-8104`, or `@freeforcharity.org` email in `src/app/**` or
`src/components/**` is a hard error (the footer platform-credit attribution is
the one allowlisted exception). If drift passes and you've done the SEO and
delete-unused steps below, the rebrand is real — not just skin-deep.

## Inputs you need first

Collect these before editing. Where you can't get an authoritative answer, do
**not** guess — leave it out and flag it for the org (see "Human-decision
items"). Guessing a wrong EIN, jurisdiction, or donation term is worse than
omitting it.

- Display name + tagline; SEO description + shorter OG/Twitter card description.
- Production URL (custom domain, or the github.io fallback).
- Contact email; security disclosure email (these can differ).
- Social links (or leave `href: ''` — the footer filters empties).
- Legal/entity facts **only if authoritative**: legal name, EIN, governing-law
  state, mailing address, phone, whether the org solicits donations.

## Procedure

### 1. Central config — `src/lib/site.config.ts`

Set `name`, `tagline`, `description`, `shortDescription`, `url` (bare origin,
`https://`, no trailing slash), `contactEmail`, `keywords`, `themeColor`,
`social`. This is the single source of truth; layout, sitemap, robots, manifest,
footer, and JSON-LD all read from it. Don't duplicate these values elsewhere.

### 2. Domain + security.txt

- `public/CNAME`: the custom domain, or delete the file for github.io-only.
- `public/.well-known/security.txt` **and** `public/security.txt` (kept in sync
  by the drift checker): `Contact:` = security email, `Canonical:`/`Policy:`/
  `Acknowledgments:` = new URL, `Expires:` ≥ 12 months out.

### 3. Legal / policy pages — enumerate ALL of them

This is the step every shallow rebrand skips. Under `src/app/`, each of these
has its own `page.tsx` with hardcoded org name, URLs, emails, and sometimes
phone/EIN/jurisdiction:

- `privacy-policy/` · `terms-of-service/` · `cookie-policy/`
- `vulnerability-disclosure-policy/` · `security-acknowledgements/`
- `donation-policy/` and/or `free-for-charity-donation-policy/` (see delete-unused)

For each: fix the `metadata` (bare `title`, org-correct `description`, add
`alternates.canonical`), then the body — org name, `freeforcharity.org` → new
domain, contact emails → the org's, and remove the source org's phone/DPO name.
Align the vulnerability-disclosure contact with `security.txt`. **Have the org's
counsel review legal text before it goes live.**

### 4. Delete unused template demo content — don't just edit it

The template ships demo sections and data a given org may not use. If a
component isn't imported by `src/app/home-page/index.tsx` (or anywhere), it's
dead — delete it and its test rather than leaving FFC content in the tree:

- `src/components/home-page/*` sections not rendered on the home page.
- `src/data/{team,testimonials,faqs}` if nothing imports them.
- Donation pages if the org doesn't solicit donations — and remove their
  entries from `src/app/sitemap.ts` and any Terms clause that references a
  "Donation Policy" so no dangling reference remains.

Keep brand-neutral, reusable UI primitives (cards, buttons) even if currently
unused — they carry no identity.

### 5. Per-page SEO — the invisible regressions

- **Canonicals**: never set `alternates.canonical` on the root layout (App
  Router inherits it into every route → all pages canonicalize to `/`). Set it
  per page: home in `page.tsx`, `/articles`, each article via `generateMetadata`,
  every policy page.
- **Titles**: policy `title`s must be the bare page name (e.g. `'Privacy
Policy'`) so the layout template supplies the brand — not `'… | Free For
Charity'`, which double-brands.
- **Article/detail pages**: give them their own `openGraph`/`twitter` metadata
  and `Article` JSON-LD (see `src/components/seo/ArticleSchema.tsx`) instead of
  inheriting the homepage card.

### 6. Assets, footer, repo metadata

- Swap `public/Images/` + `public/Svgs/`, keeping filenames so the LCP preload
  and manifest icons still resolve. Always reference via `assetPath()`.
- Footer: the "Built with Free For Charity" platform credit **stays** (it's the
  allowlisted attribution). Everything else — EIN, addresses, phone, parent-org
  link — is the new org's.
- `README.md`, `CITATION.cff`, `.github/FUNDING.yml`, repo description/topics.

### 7. Human-decision items — ask, don't guess

Surface these to the org rather than inventing values:

- **EIN** and 501(c)(3) status (or fiscal sponsor / parent org's).
- **Governing-law jurisdiction** in the Terms (the template's is the source
  org's state).
- **Donations**: does the org solicit them, and under which entity? Decides
  whether donation pages are kept-and-rebranded or deleted.

### 8. Verify — mandatory, in order

```
npm run format
npm run lint
npm run check:drift   # MUST pass — includes the brand-identity gate
npm test
npm run build
npm run test:e2e
```

Then a belt-and-suspenders grep for anything the gate's scope doesn't cover:

```
grep -rniE 'free ?for ?charity|freeforcharity\.org|46-?2471893|520[-. ]?222[-. ]?8104' src/ public/ \
  | grep -v 'Built with Free For Charity'
```

And spot-check the built output in `out/`: policy `<title>`s, per-page
`<link rel="canonical">`, and article `Article` JSON-LD.

### 9. PR

Open a PR listing every file changed, the `check:drift` output, confirmation
that legal pages were reviewed by counsel, the production URL, and an explicit
**Decisions** section for every Human-decision item you omitted or defaulted.

## Anti-patterns (all observed in real rebrands)

- Rebranding the homepage and calling it done — the legal pages are the trap.
- Editing template demo data you should have deleted.
- Trusting green lint/build/tests as proof of a complete rebrand — they don't
  check identity; `check:drift` now does.
- Guessing an EIN, jurisdiction, or donation terms to fill a blank.
- Blanket-bumping a dependency to fix an advisory without checking it stays
  within the CI Node version's supported range (e.g. undici 8 needs Node 22).
