# Recruiting-source update: local release verification

Date: 2026-10-05. This is the verified local checkpoint before the authorized commit and Production push. The final commit, deployment status, and live verification are reported in the delivery message after release.

## Source and scope

Both latest two-page Chinese and English recruiting resumes were read completely and visually checked on all four pages. They replace the previous Graduate School CV for the website facts in this update. The full nineteen-page STAT 334 report remains the authority for matrices, assumptions and results; its five-year matrix on page 17 was rechecked visually and arithmetically.

Reference PDFs remain outside the public site and are not downloads. Telephone numbers were not published. The GitHub profile is public; the Personal Space repository remains private. Zhiyue has no repository or demo CTA.

The release includes the already-authorized local Phase 1 routing, accessibility and loading improvements, plus the recruiting-source update. The cinematic single-screen home, dark space, doorway, mascot, four chapters, six Life categories and Music archive direction are preserved.

## Content changes

- Shared Education facts: Waterloo BMath Honours; FARM / PRM; expected June 2027; cumulative average 82.17/100; Distinction; President's Scholarship of Distinction (2024); GRE 329, once in Education. No invented class rank or superseded GRE sub-scores.
- Career remains a timeline of concrete problems and short stories. Dahuan distinguishes model diagnosis/validation and the separate teleoperation dataset. EY uses 3,000+ transactions with no efficiency percentage. Guotai restores an existing workflow and contributes to 100+ materials. Haikun presents supported company comparisons/research. Tianlong retains the formal role and team prototype/testing stage.
- Projects share one bilingual source and retain the selected order. Zhiyue presents supported functions, scoring iteration and scope choice while remaining in development. Robot stays within the team/individual contribution boundary. STAT identifies the four-person team and Team Leader, separates supplied matrices from ten company histories, and displays P, P² and P⁵ with conditional conclusions. Personal Space accurately describes its bilingual architecture, initial build dates and current Vinext/Vite implementation.
- Four Skills groups share the same tools in both languages. VBA/PyTorch are removed; JupyterLab, Pandas, LeRobot and Codex are included. Personal Space no longer claims Three.js/GSAP/Framer Motion as its runtime.
- Explore uses the same supported education and project facts in naturally written Chinese and English. Contact uses a46luo@uwaterloo.ca and the public GitHub profile.
- Chess retains FIDE CM and confirmed club activities without an Asian U10 result. Piano/theory details now use the latest supplied Chinese resume in both languages.

## Validation

| Check | Verified result |
| --- | --- |
| npm run build | Passed with VERCEL=1; actual Vite/Nitro Vercel output generated, exit 0. |
| Application TypeScript | tsconfig.portfolio.json passed, no emit, no incremental cache. |
| npm run lint | Exit 0; 0 errors, 5 native-image framework advisory warnings. |
| Regression suite | 10 passed, 0 failed against the final compiled output. |
| Routes | Both languages: home, Explore, Career, Projects, Life, Music and all four project details return 200 with localized lang/metadata and resolving internal links. |
| Redirect/error behavior | Localized Build/Work/Thoughts and empty Life destinations redirect correctly; invalid routes return localized HTTP 404. |
| Source arithmetic | P is stochastic; P² matches the reported two-year matrix; P⁵ matches the reported five-year matrix within its rounding precision. Default remains absorbing. |
| Desktop | Both languages' requested pages visited. Career, Education, Skills, Explore, project layouts and home visually reviewed at desktop widths. |
| 390px and 360px | Both languages' home, Explore, Career, Projects, Zhiyue and Credit detail visited; no page overflow or broken images found. Five-year matrices fit at both widths; sample stories/Skills visually reviewed. |
| Language/refresh | Zhiyue switched from English to the corresponding Chinese detail and refreshed with language/styles retained. Music direct entry and refresh retained layout. Final Chinese Team Leader wording checked in rebuilt output. |
| Keyboard/menu | Initial close focus, Shift+Tab/Tab wrap, Escape close, restored trigger focus and scrolling passed. |
| Keyboard/video | Native controls, readyState 4, no media error; focus boundaries, Escape and restored cover-button focus passed. |
| Reference/link boundaries | No public source PDF, private portfolio repo CTA, or Zhiyue repo/demo direct link. Current email and public profile checked. |
| Independent audit | Shared facts, roles, dates, skills, supported counts, project status and contribution boundaries passed a separate read-only review. |
| Git diff | Staged diff check passed; exact release files reviewed. |

## Remaining verification limits

The lint advisories and existing Vinext/Vite beta chunk/CSS warnings do not fail the build. The retained unused Cloudflare starter requires generated bindings for its own whole-repository typecheck; the validated typecheck covers the deployed portfolio application.

Native browser fullscreen was not reliably verifiable in the earlier in-app-host check. Inline video playback and closing are verified. Reduced-motion and no-JavaScript fallbacks were reviewed in code and server output; browser preference/failure simulation and physical iOS/Safari devices are outside this verification.

There is no factual blocker requiring more source material for this update. Future Current Focus, new Life archives and project screenshots remain optional follow-up work with genuine content.

## Complete release file list

Status: A added, M modified, D deleted. Verification screenshots and source renderings are ignored local artifacts and are not included.

```text
M	README.md
M	app/build/page.tsx
M	app/en/build/page.tsx
M	app/en/explore/page.tsx
M	app/en/life/[slug]/page.tsx
M	app/en/page.tsx
M	app/en/projects/[slug]/page.tsx
M	app/en/think/page.tsx
M	app/en/work/page.tsx
A	app/error.tsx
M	app/explore/page.tsx
M	app/globals.css
M	app/layout.tsx
M	app/life/[slug]/page.tsx
A	app/not-found.tsx
M	app/page.tsx
M	app/projects/[slug]/page.tsx
M	app/think/page.tsx
M	app/work/page.tsx
D	components/AmbientBrandPage.tsx
D	components/BrandPage.tsx
M	components/CareerArchive.tsx
M	components/ExploreAtlas.tsx
M	components/HeroMascot.tsx
M	components/LifeArchive.tsx
M	components/MusicArchive.tsx
M	components/PersonalChapters.tsx
M	components/PersonalSpace.tsx
M	components/ProjectDetail.tsx
A	components/RouteState.tsx
M	components/SafeLink.tsx
M	components/ScrollReveal.tsx
A	components/SiteFooter.tsx
A	components/SiteHeader.tsx
D	components/WorkProfile.tsx
M	components/career.css
A	components/chapter-refinements.css
M	components/explore-atlas.css
M	components/hero-mascot.css
M	components/home-hero-copy.css
M	components/music-archive.css
A	components/project-case.css
M	components/reveal.css
A	components/route-state.css
A	components/site-shell.css
A	components/useAccessibleDialog.ts
M	components/visual-hierarchy.css
M	content/career.ts
A	content/contact.ts
M	content/en.ts
M	content/personal-space.ts
A	content/profile.ts
A	content/projects.ts
A	content/routes.ts
M	content/zh.ts
A	docs/phase-1-verification.md
A	docs/superpowers/plans/2026-10-05-portfolio-phase-1.md
A	docs/superpowers/plans/2026-10-05-recruiting-content-production.md
M	eslint.config.mjs
M	package.json
A	proxy.ts
M	public/ASSETS.md
A	public/images/mascot/chess.webp
A	public/images/mascot/football.webp
A	public/images/mascot/hero-mascot-localized.webp
A	public/images/mascot/piano.webp
A	scripts/preview-production.mjs
A	tests/portfolio-routes.test.mjs
A	tsconfig.portfolio.json
A	docs/recruiting-release-verification.md
```
