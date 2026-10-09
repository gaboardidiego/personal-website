# Project guidance

## Purpose

This is a public, static personal portfolio and CV built with standalone Angular components. Keep it backend-free and compatible with GitHub Pages unless the project owner asks to change that constraint.

## Project conventions

- Treat `src/app/data/portfolio.ts` as the source of personal and portfolio content, and keep its shapes in `src/app/models/portfolio.ts`.
- Use standalone Angular components, signals for interactive state, and the built-in template control flow.
- Keep page sections responsive, semantic, keyboard-accessible, and usable with reduced motion enabled.
- Do not invent personal history, credentials, links, or contact information. Replace or clearly identify starter placeholders before publishing.
- Do not add GitHub Actions workflows or backend services without an explicit request.
- Keep `.github/workflows/copilot-setup-steps.yml` focused on preparing the cloud-agent environment; it does not deploy the site.
- Keep dependencies focused; use the existing Angular, Vitest, ESLint, and Prettier setup.
- Never commit credentials, secrets, or personal information that should not be public.

## Commands

- `npm start` runs the development server.
- The project requires Node.js 22.22.3+, 24.15.0+, or 26+, and npm.
- `npm run format` applies Prettier formatting.
- `npm run verify` runs formatting checks, lint, unit tests, and a production build.
- `npm run publish:pages` builds and stages the static site in `docs/` for manual GitHub Pages publishing.

Run `npm run verify` after making changes. Update or add focused Vitest tests when behavior changes.
