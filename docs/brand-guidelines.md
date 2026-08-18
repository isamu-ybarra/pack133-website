# Pack 133 brand guidelines and audit

## Authority and scope

The official authority is the [Scouting America brand portal](https://scouting.webdamdb.com/bp/#/). This repository does not vendor the copyrighted brand-guide PDF or official logo artwork. Maintainers should retrieve the latest materials from the portal when needed.

This site was audited on August 18, 2026 against **Scouting America Brand Guidelines - 2024**, focusing on the organization palette and fonts (pages 14-16), Cub Scouts positioning, trademark, and palette (pages 21-23), and trademark protection (page 35).

## Working design system

| Role | Approved value | Usage |
| --- | --- | --- |
| Cub Scouts Blue | `#003F87` | Primary brand surfaces, headings, links |
| Cub Scouts Gold | `#FCD116` | Primary accent and action color |
| Scouting America Red | `#CE1126` | Small accents only |
| Dark Blue | `#003366` | Dark backgrounds and deeper blue layering |
| Pale Blue | `#9AB3D5` | Supporting blue surfaces |
| Light Tan | `#E9E9E4` | Neutral section backgrounds |
| Tan | `#D6CEBD` | Rules and borders |
| Gray | `#515354` | Supporting copy |
| Dark Gray | `#232528` | Body copy |
| White | `#FFFFFF` | Primary neutral and reversed content |

Montserrat, the guide's approved open-source alternative to Proxima Nova, is bundled with the site. Arial is the body and fallback family.

## Logo and trademark rules

- Use official trademark artwork only as downloaded from the official portal.
- Keep artwork colors, type, proportions, elements, clear space, and included trademark symbols unchanged.
- Do not apply shadows, glows, bevels, tints, screens, crops, rotations, or decorative effects to official artwork.
- Do not use the Cub Scouts wolf independently from the approved trademark.
- Keep clear space around the official Cub Scouts trademark at least equal to the height of its diamond.
- The supplied Pack 133 camping mark is treated as a custom unit identity. Its use here does not imply that Scouting America has reviewed or approved it.
- The footer uses the official four-color `Scouting America-Logo-4c-BC.png` asset from portal asset ID `157851947`, downloaded August 18, 2026. It remains unmodified on white with dedicated clear space. Do not substitute the retired gold fleur-de-lis.
- The footer carries a trademark attribution; first prominent textual references use registration marks where practical.

## Voice and imagery

Pack 133 communication should feel trustworthy, adventurous, welcoming, family-centered, safe, and useful. Content should connect adventure with learning, leadership, service, character, and friendship. It must remain non-partisan.

Use real Pack 133 photography only after confirming publication permission. Favor active, natural moments that show safe, inclusive, age-appropriate Scouting experiences. Do not publish private identifying information or precise private locations, and remove unnecessary image metadata.

## Audit results

| Area | Finding | Resolution |
| --- | --- | --- |
| Primary colors | Blue matched; gold and red were approximate | Replaced with the official digital values |
| Supporting colors | Several invented tints were used | Replaced with approved blue, tan, gray, and white values |
| Red usage | A large content card and placeholder used red surfaces | Reduced red to small accents |
| Typography | Avenir was the foundational family | Replaced with bundled Montserrat and Arial |
| Unit logo | The logo was circularly cropped and rotated in the hero | Restored the complete square artwork without rotation or clipping |
| Trademark notation | Registration marks and attribution were absent | Added first-use marks and footer attribution |
| Official artwork | The site originally contained only the custom unit mark | Added the approved four-color Scouting America corporate signature to a white footer affiliation strip with clear space |
| Brand voice | Adventure, safety, family, service, and welcome were present | Retained and documented; maintain non-partisan language |
| Photography | Only abstract placeholders are present | Require permission and privacy review before adding real photos |
| Future-agent guidance | No persistent repository guidance existed | Added `AGENTS.md` and automated regression checks |

## Before adding an official logo or new campaign

1. Check the portal for the latest guide and approved artwork.
2. Confirm the asset's permitted context and download the correct screen-use format.
3. Preserve the artwork exactly and implement the required clear space.
4. Review the page at phone and desktop widths, including contrast and reversed-logo rules.
5. Update this document with the asset source, date, and placement decision.
