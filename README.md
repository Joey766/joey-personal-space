# Joey Luo Personal Space

A bilingual cinematic personal website for Joey Luo, with Explore, Career, Projects, and Life chapters.

## Structure

- Chinese routes start at `/`; English routes start at `/en`.
- `/build` redirects to Projects; `/work` redirects to Career, in both languages.
- Thoughts data is retained for future writing; its public route currently returns to Explore.
- All six Life categories remain. Only Music has an available archive; the other cards preserve their visual identity without opening placeholder pages.
- Project order and facts are shared in `content/projects.ts`; contact links live in `content/contact.ts`.
- Education and the four technical-toolkit groups share one source in `content/profile.ts`; both languages use the latest Chinese and English recruiting resumes plus the user's confirmed project context. The STAT 334 report supplies model inputs and results.
- GitHub links point to the public profile. Zhiyue has no source/demo link, and the private Personal Space repository is not a public project CTA.

## Implementation

React and TypeScript, using Vinext's Next.js App Router APIs and Vite. The current cinematic experience uses web video, CSS atmosphere, and lightweight React interactions. There is no Three.js, GSAP, or Framer Motion dependency in the running portfolio.

## Local development

```bash
pnpm install
pnpm run dev
```

## Production build and local verification

Vercel supplies `VERCEL=1` automatically. For the same Nitro/Vercel output in PowerShell:

```powershell
$env:VERCEL = '1'
pnpm run build
pnpm run typecheck
pnpm run start
```

The local preview serves the compiled Vercel function and public assets at `http://127.0.0.1:4173`. It supports video range requests and never publishes or deploys. Stop it with Ctrl+C.

With that preview running:

```powershell
node --test tests/portfolio-routes.test.mjs
```

The portfolio typecheck covers application code and build configuration. The retained Cloudflare starter under `worker` and `db/index.ts` requires its own generated Worker binding types; it is not part of the Vercel portfolio application check.

Reference CVs and academic reports are not public assets or automatic downloads. Project content summarizes their supported facts rather than copying the documents. See `public/ASSETS.md` for the current media inventory.
