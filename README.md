# vomlabs.website

Official website for VOM Labs — [vomlabs.com](https://vomlabs.com).

Built with [TanStack Start](https://tanstack.com/start) (React 19 + TypeScript), styled with [Tailwind CSS v4](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com/), backed by [Drizzle ORM](https://orm.drizzle.team) + PostgreSQL, and authenticated with [Better Auth](https://better-auth.com).

## Tech stack

| Layer     | Technology                                    |
| --------- | --------------------------------------------- |
| Framework | TanStack Start, React 19, TypeScript          |
| Styling   | Tailwind CSS v4, shadcn/ui (`@base-ui/react`) |
| Data      | Drizzle ORM, PostgreSQL (`postgres`)          |
| Auth      | Better Auth (+ Drizzle adapter)               |
| Tooling   | Bun, Vite, Vitest, oxlint, oxfmt              |
| Deploy    | Docker → Docker Hub (`vomlabs/website`)       |

## Prerequisites

- [Bun](https://bun.sh) `>= 1.3.14` (pinned via `packageManager` in `package.json`)
- Node.js `>= 22`

## Getting started

```bash
# 1. Install dependencies
bun install

# 2. Configure environment
cp .opencode/env.example .env   # or create .env with the values below

# 3. Start the dev server (http://localhost:3000)
bun run dev
```

### Environment variables

| Variable          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `DATABASE_URL`    | PostgreSQL connection string used by Drizzle and Better Auth |
| `BETTER_AUTH_URL` | Public URL of the auth instance (e.g. `https://vomlabs.com`) |

Add any additional secrets required by your auth/email provider to `.env`. `.env*` files are gitignored.

## Scripts

| Command             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `bun run dev`       | Start the Vite dev server on port `3000`                      |
| `bun run build`     | Production build (Vite)                                       |
| `bun run preview`   | Preview the production build locally                          |
| `bun run start`     | Serve the production build (port via `$PORT`, default `3000`) |
| `bun run test`      | Run Vitest (`--passWithNoTests`)                              |
| `bun run lint`      | Lint with oxlint                                              |
| `bun run fmt`       | Format the workspace with oxfmt                               |
| `bun run fmt:check` | Verify formatting without writing                             |
| `bun run typecheck` | Type-check with `tsc --noEmit`                                |
| `bun run db:studio` | Open Drizzle Studio                                           |
| `bun run db:push`   | Push schema changes to the database                           |
| `bun run db:seed`   | Seed the database (`src/scripts/seed.ts`)                     |

## Tooling

The workspace uses [oxc](https://oxc.rs) tooling as the primary linter and formatter:

- **oxlint** — configuration in `.oxlintrc.json` (`correctness` errors, `perf` warnings; React, TypeScript, import, unicorn, and vitest plugins enabled)
- **oxfmt** — configuration in `.oxfmtrc.json` (print width 80, semicolons, double quotes, import and Tailwind class sorting)

Generated files (`*.gen.*`) are excluded from both tools. CI enforces all quality gates on every pull request.

## Project structure

```
src/
├── components/          # UI components (shadcn/ui in components/ui/) and app components
├── hooks/               # Shared React hooks
├── lib/                 # Utilities, auth, and database access
│   └── db/              # Drizzle schema and connection
├── routes/              # TanStack Router routes (pages, API routes, blog)
│   └── api/auth/        # Better Auth API handlers
└── scripts/             # Database seed and tooling scripts
```

## CI/CD

GitHub Actions workflows in `.github/workflows/`:

- **`ci.yml`** — runs on every PR and `main` push: install (frozen lockfile) → lint → format check → typecheck → test → build
- **`deploy.yml`** — on `main` pushes, builds the multi-stage Bun Docker image and pushes `vomlabs/website` to Docker Hub (tags: `latest` + `sha-<commit>`), with Buildx layer caching

`main` is protected by a repository ruleset: pull requests with 1 approval and a passing `ci` check, squash-only merges, linear history, and no force-pushes.

[Dependabot](https://github.com/dependabot) keeps Bun dependencies (weekly, grouped minor/patch) and GitHub Actions up to date via `.github/dependabot.yml`.

## Docker

The multi-stage `Dockerfile` builds with Bun and runs the server as a non-root user on port `3000`.

```bash
# Build and run locally
docker compose up --build

# Or push to Docker Hub manually
docker build -t vomlabs/website .
docker push vomlabs/website
```
