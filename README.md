# Personal Portfolio

A responsive, single-page portfolio and CV built with standalone Angular
components. The site is static: it has no backend, database, or runtime server
requirement. Portfolio content is stored in typed TypeScript data and compiled
into the site.

## Get started

Requires Node.js 22.22.3 or newer, 24.15.0 or newer, or 26 or newer, and npm.

```bash
npm ci
npm start
```

Open <http://localhost:4200/> while the development server is running.

## Content and structure

- `src/app/data/portfolio.ts` contains the profile, experience, education,
  focus areas, education, and interests shown on the site.
- `src/app/models/portfolio.ts` defines the shared content types.
- `src/app/app.html` defines the page structure, and `src/app/site.css`
  contains its responsive presentation.
- `public/` contains the static images, logos, favicon, and CV copied into the
  production build.

Update the profile content in `src/app/data/portfolio.ts` and metadata in
`src/index.html` when the source CV changes.

## Quality checks

Run the project's formatting check, lint, unit tests, and production build with:

```bash
npm run verify
```

To run the unit tests with coverage, use:

```bash
npm run test:coverage
```

This prints a coverage summary in the terminal and writes an HTML report to
`coverage/personal-website/index.html`.

To apply formatting instead of checking it, run `npm run format`.

## GitHub Pages

The Copilot setup workflow installs Node.js and project dependencies for cloud
agent sessions; it does not deploy the site. To prepare a manual GitHub Pages
deployment, run:

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
