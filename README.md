# Personal Portfolio

A responsive, single-page portfolio and CV built with standalone Angular
components. The site is static: it has no backend, database, or runtime server
requirement. Portfolio content is stored in typed TypeScript data and compiled
into the site.

## Get started

Requires Node.js 20.19 or newer and npm.

```bash
npm ci
npm start
```

Open <http://localhost:4200/> while the development server is running.

## Content and structure

- `src/app/data/portfolio.ts` contains the profile, experience, education,
  expertise, and interests shown on the site. Its content is sourced from
  `website/index.html`.
- `src/app/models/portfolio.ts` defines the shared content types.
- `src/app/app.html` defines the page structure, and `src/app/site.css`
  contains its responsive presentation.
- `public/` and `website/images/` contain static files copied into the
  production build.

Update the profile content in `src/app/data/portfolio.ts` and metadata in
`src/index.html` when the source CV changes.

## Quality checks

Run the project's formatting check, lint, unit tests, and production build with:

```bash
npm run verify
```

To apply formatting instead of checking it, run `npm run format`.

## GitHub Pages

This repository intentionally has no GitHub Actions workflows. To prepare a
manual GitHub Pages deployment, run:

```bash
npm run publish:pages
```

The script builds the site with a base path derived from the repository folder
name and copies the static output to `docs/`. If the published URL uses a
different path, set `PAGES_BASE_HREF` when running the command. For example,
use `PAGES_BASE_HREF=/ npm run publish:pages` for a user or custom-domain site.
Commit the generated `docs/` files and configure GitHub Pages to deploy from
the `main` branch's `/docs` folder.

The published site and anything committed under `docs/` are public. Do not add
secrets or private personal information.
