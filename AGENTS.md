# Pack 133 Repository Instructions

These instructions apply to every change in this repository.

## Brand authority

- Treat the current official Scouting America brand portal as the source of truth: <https://scouting.webdamdb.com/bp/#/>.
- The implementation was audited against **Scouting America Brand Guidelines - 2024**, particularly pages 7-16, 21-23, and 35. Before a material rebrand, check the portal for a newer guide and update `docs/brand-guidelines.md` if the rules changed.
- Do not copy design, text, photographs, or assets from Pack 970. Its site is an information-architecture reference only.

## Visual identity

- Use Cub Scouts Blue `#003F87` and Cub Scouts Gold `#FCD116` heavily. The official guide contains an inconsistent `#FDC116` on one color page; this repository uses `#FCD116`, the value specified with the approved screen-usage artwork.
- Approved supporting colors are Scouting America Red `#CE1126` (sparingly), Dark Blue `#003366`, Pale Blue `#9AB3D5`, Light Tan `#E9E9E4`, Tan `#D6CEBD`, Gray `#515354`, Dark Gray `#232528`, and White `#FFFFFF`.
- Use Montserrat as the primary display typeface and Arial as the body/fallback typeface. Times New Roman is permitted for a deliberate serif use. Do not introduce a new foundational type family without checking the current guide.
- Never redraw, recolor, crop, rotate, distort, add effects to, separate elements from, or combine anything with an official Scouting trademark. Preserve registration and trademark symbols included in supplied official artwork.
- Official Cub Scouts trademark artwork needs clear space on every side at least equal to the diamond's height. Use only artwork obtained from the official portal.
- `static/brand/scouting-america-logo.png` is the approved four-color corporate signature downloaded from the official portal. Keep it unchanged, on a white background, with the existing clear-space treatment. Use the official reversed asset instead if it must appear on a dark background.
- `static/pack133.jpg` is a custom unit mark, not an official Cub Scouts trademark. Keep it visually intact and do not represent it as nationally approved artwork.

## Voice and content

- Emphasize family, fun, friends, outdoor adventure, learning, leadership, service, character, safety, and welcome.
- Keep the site non-partisan and welcoming to eligible youth and families.
- Use `Cub Scouts®` and `Scouting America®` with the registration mark on the first prominent textual use when practical. Preserve the trademark attribution in the footer.
- Do not use `Prepared. For Life.®` unless the official tagline artwork/rules are followed and the Scouting America trademark or signature appears with it.
- Never publish youth names, rosters, private contact details, medical information, precise private locations, or photographs without the pack's required permissions. Strip unnecessary image location metadata.

## Review checklist

- The site is intentionally public-but-unlisted. Preserve the global `noindex` robots meta tag, do not add a sitemap, and do not block HTML crawling in `robots.txt`; crawlers must be able to read `noindex`. Remove this protection only with explicit owner approval.
- Run `npm run verify` before committing.
- For visual changes, check contrast, keyboard focus, responsive behavior, logo integrity, approved colors, approved fonts, and trademark notation.
- Update `docs/brand-guidelines.md` when a brand-related decision or approved asset changes.
