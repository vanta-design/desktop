# Repository Guidelines

## Project Structure & Module Organization
- `src/` is the TypeScript source. Component code lives under `src/components/` (organized by `atom/`, `molecule/`, `layout/`, `features/`), with shared pieces in `src/lib/`, `src/providers/`, `src/styles/`, `src/tokens/`, `src/types/`, and `src/utils/`.
- `stories/` contains Storybook stories for UI validation and documentation.
- `public/` holds static assets used by Storybook and docs.
- `dist/` is generated build output (do not edit by hand).
- `docs/` contains project documentation assets.

## Build, Test, and Development Commands
- `bun run dev` or `bun run storybook`: start Storybook on port 6006 for local UI development.
- `bun run storybook:build`: build the static Storybook site.
- `bun run build`: build the library with Rollup into `dist/`.
- `bun run check`: run TypeScript type-checking (`tsc --noEmit`).
- `bun run format`: format code with Biome.
- `bun run commit`: guided Conventional Commit messages via Commitizen.

## Coding Style & Naming Conventions
- Formatting and linting are enforced by Biome (`biome.json`); use spaces and single quotes.
- Keep React components in PascalCase (e.g., `DialogHeader`), and keep folders lowercase (e.g., `dialog/`).
- Styles are primarily in `*.css.ts` files (Vanilla Extract). Avoid side effects outside component exports.

## Testing Guidelines
- There is no automated test runner in this repo. Validation is Storybook-driven.
- Add or update stories in `stories/` for new components or behavior changes.
- Run `bun run check` before opening a PR.

## Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits (e.g., `feat:`, `fix:`, `refactor:`). Use `bun run commit`.
- PRs should include a concise summary, list of UI changes, and screenshots or Storybook links when visuals change.
- Link related issues or tasks when available.

## Notes for Contributors
- This is an internal design system; prioritize accessibility, performance, and client-side rendering.
- Keep public API changes intentional and document them in Storybook.
