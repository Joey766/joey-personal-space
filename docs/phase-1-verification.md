# Personal Space — Phase 1 implementation and verification

Date: 2026-10-05. This records the earlier local checkpoint in `D:\JoeyPortfolio`, before the later recruiting-resume update and the user's authorization to release. No commit, push, or deployment was performed at that checkpoint. See `recruiting-release-verification.md` for the subsequent source update and release checks.

## Implemented

- Preserved the single-screen cinematic homepage, doorway, dark atmosphere, mascot, four core chapters, and six Life category records.
- Added a quiet Selected Work homepage shortcut. No CV download or independent Contact page was added.
- Consolidated Build into Projects and Work into Career with HTTP 308 redirects in both languages. Thoughts currently uses an HTTP 307 redirect to Explore; its content remains available in the source for later use.
- Added shared chapter navigation and contact footers, page-preserving language switches, SSR `lang`, localized metadata, canonical/hreflang links, and localized HTTP 404 / error UI.
- Restored reachable English Robot Vision details; all four projects have explicit detail entrances and one shared bilingual fact source. Order: Zhiyue AI, Robot Vision, Credit Rating Migration, Personal Space.
- Retained Campus / Football / Chess / Music / Travel / Daily cards and data. Music opens its real archive. Other cards are non-link articles; old direct destinations temporarily return to the relevant Life card instead of empty detail pages.
- Repaired direct Music/Life entry styling. Music videos use native controls and load after opening a player. Posters have dimensions, lazy gallery loading, and localized fallback links/messages. The featured cover remains clickable through its text overlay.
- Added native dialogs with explicit Tab boundaries, Escape handling, background inertness, scroll locking, and restored trigger focus. Added a skip link and visible keyboard focus.
- Kept server-rendered reveal content readable before JavaScript/observers initialize. Added reduced-motion branches, a CSS doorway fallback, and a user-controlled homepage background pause.
- Made mascot speech localized HTML. Removed the baked bubble from a derived image, retained the figure and original PNG, and encoded WebP variants. Decorative interest images load after first expansion; the mascot supports Enter and Escape.
- Improved mobile contrast and reading hierarchy. Removed unused duplicate presentation components and duplicate project/career records. Updated README and the asset register to describe React / TypeScript / Vinext / Vite / CSS and the actual media implementation.
- Added a local-only preview of the actual Nitro/Vercel output, a portfolio application typecheck, and route/media/matrix regression tests. ESLint ignores generated build outputs rather than linting compiled dependencies.

## Source and contribution boundaries

Both supplied PDFs were read completely: the two-page Graduate School CV and the nineteen-page final STAT 334 report, including rendered tables. They remain reference materials outside `public` and were not copied into the site.

- Education, specialization, dates, internships, skills and contact details use the newest CV. No telephone number or guessed LinkedIn link was published.
- Zhiyue describes the supported work and remains explicitly in development. No production-ready claim, user count, accuracy, general efficiency uplift, or invented feedback was added.
- Robot Vision distinguishes the 1,000+ workpiece images from the 8,000+ teleoperation images. The broader project remains a team effort; independent contributions stay within the CV's assembly, calibration and debugging scope.
- STAT distinguishes the course-provided S&P transition matrix, the ten company case histories, the group analysis, and the CV-supported individual work. Website matrices use the report's three-state model (pp. 6 and 14). No claim is made that the company histories estimated the matrix. The long-run result is conditional on the model, rather than a prediction that real firms must default.
- English and Chinese use the same numerical/project source with independently written summaries. No complete CV text was pasted into a web page.

## Checks completed

| Check | Result and scope |
| --- | --- |
| Production-style build | Passed, exit 0: `VERCEL=1` with Vite/Nitro; generated `.vercel/output`. No deployment command was run. |
| Portfolio TypeScript | Passed, exit 0: `tsconfig.portfolio.json`, no emit and no incremental cache. |
| ESLint | Passed, exit 0: 0 errors, 5 framework advisory warnings about native `img` elements. These images have dimensions and optimized/local assets. |
| Regression tests | 8 passed, 0 failed against the compiled function and built static assets. |
| Direct routes | Both languages: home, four chapters, Music, and all four project pages return 200 with expected language, heading and metadata. |
| Navigation | Internal rendered links resolve; no protocol-relative `//` chapter links, public legacy navigation, or reference-PDF download links. |
| Redirects | Build / Work permanent redirects, Thoughts temporary redirect, five uncollected Life archive redirects, all preserving locale. |
| Invalid routes | Unknown routes, project slugs and Life slugs return localized HTTP 404, including English URLs containing a dot. |
| Refresh / language switch | Music and project detail refreshes retain styling; actual switches tested on home, Zhiyue, Robot Vision, Music and Credit pages. |
| Desktop browser | Homepage, Explore, Career, Projects, Life and Robot detail visually inspected at 1440px; normal 1280px Music playback also inspected. |
| 390px / 360px browser | Both languages: home, four chapters, Music, Robot and Credit detail checked. No page overflow; credit matrices fit at both widths. |
| Keyboard menu | Close button receives focus; Shift+Tab wraps to the final language link; Tab wraps back; Escape closes and restores menu-trigger focus and scrolling. |
| Keyboard video dialog | Initial close focus, backward/forward focus boundaries, Escape and trigger restoration checked. Playback reached readyState 4 with no media error. Native keyboard playback was exercised. |
| Mascot / homepage motion | Enter expands localized interest images; Escape collapses. Background pause verified with the actual playing video. |
| Video resources | Four posters load; four MP4 sources accept byte-range requests with HTTP 206. |
| STAT arithmetic | Annual rows sum to one, Default is absorbing, and displayed two-year matrix equals the square of the reported annual matrix. |
| Final diff | `git diff --check` passed. Reference PDFs, lockfile and original PNG assets were not modified. |

## Remaining verification limits and warnings

- No new content, route, or layout regression was found within the checked scope. Fullscreen was attempted in the in-app browser: the mobile viewport briefly produced an abnormal host capture; a normal desktop attempt did not provide reliably inspectable native-fullscreen state. This is recorded as unverified, not passed, and not attributed conclusively to either the website or browser host. Inline playback and dialog closing remain verified.
- Reduced-motion and no-JavaScript fallbacks were reviewed in code and server-rendered output. The available browser capability does not emulate reduced-motion or disable JavaScript, so those preference/failure conditions were not dynamically simulated. Actual Safari/iOS devices were not tested.
- Vite/Vinext reports ineffective dynamic-import warnings and a duplicate emission of the same hashed AmbientBackground CSS file. The build completes; checked page styles render correctly. These warnings remain visible.
- The retained Cloudflare starter has three previously identified missing generated binding/type errors under the original whole-repository TypeScript configuration. The new check is explicitly scoped to the Vercel portfolio application; it does not claim to validate that unused starter runtime.
- Unexpected runtime exceptions were not deliberately injected; the localized error boundary was typechecked and reviewed.

## Further material, only when the next phase needs it

No additional CV or STAT report is needed for the current implemented content.

- Optional: real Zhiyue screenshots/demo and selected Robot images if visual evidence should be added to these case studies.
- Optional: real Life photos, dates and descriptions when opening an additional category. No batch upload is necessary now.
- Needed only for Current Focus: a short statement of what Joey is currently working on and wants to explore next.
- Separate decision: whether any specific PDF should become a public CV download. Nothing has been enabled automatically.

## Evidence

Browser screenshots are local, ignored verification artifacts under `outputs/phase-1-qa`. Representative final captures include `home-en-desktop-final.png`, `home-en-390-final.png`, `home-zh-360-final.png`, `projects-en-desktop-final.png`, `robot-en-desktop-final.png`, and `music-player-en-390-final.png`.

To repeat: set `VERCEL=1`, run the build, run `pnpm run typecheck`, start the local compiled preview with `pnpm run start`, and run `node --test tests/portfolio-routes.test.mjs`. The preview listens only on `127.0.0.1:4173`.
