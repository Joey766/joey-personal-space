# Asset register

This register describes the current portfolio implementation. The running site uses video, raster images, and CSS atmosphere; it does not use a procedural Three.js ocean-liner scene.

| Asset | Used by | Source / treatment |
| --- | --- | --- |
| Cinematic doorway MP4 | Homepage | Existing external CloudFront URL in `content/site.ts`. Original creator/license is not established in this repository. Retained as supplied; CSS doorway fallback covers reduced motion and playback failure. |
| `images/mascot/hero-mascot-localized.webp` | Homepage mascot | Derived from the existing `hero-mascot.png` using built-in imagegen to remove only the baked speech bubble. Figure and transparency retained; Sharp encoded a 640px WebP. The new speech is localized HTML. |
| `images/mascot/{football,chess,piano}.webp` | Mascot interest scenes | 240px WebP encodings of the existing PNGs, loaded after the first interest expansion. Original PNGs retained. Original asset provenance/license is not documented. |
| `videos/life/music/*.mp4` and matching `.jpg` posters | Music archive | Four existing recordings/posters described in `content/music-videos.ts`. No extra date, location, creator, or license information has been inferred. Videos load only after opening a player; posters have explicit dimensions and gallery posters load lazily. |
| `logos/*` | Career | Existing company-logo assets, retained in the repository. Official ownership belongs to the corresponding organizations; no additional reuse license is asserted here. |
| Stars, aurora, meteors, doorway fallback | Content pages / Homepage | CSS/HTML effects authored in the site. Motion respects the reduced-motion preference. |
| Manrope | Shared typography | Existing `next/font/google` integration provided by Vinext, with system-font fallback. |

The reference CV and STAT 334 report stay outside public assets. No CV download is enabled. Unused legacy CSS may still mention remote image URLs; those selectors are not used by the current portfolio pages.
