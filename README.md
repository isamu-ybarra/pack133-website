# Cub Scout Pack 133 Website

A fast, static website for Cub Scout Pack 133 in The Colony, Texas. Astro turns editable Markdown files into the finished site, and GitHub Actions publishes the site to GitHub Pages.

Brand and trademark work must follow [AGENTS.md](AGENTS.md) and the maintained [brand guidelines and audit](docs/brand-guidelines.md), which reference the official Scouting America brand portal.

The deployed preview is intentionally public but unlisted: every page carries a `noindex` directive and the build emits no sitemap. Do not remove those protections until the pack intentionally launches for public discovery.

## Before launch

The verified meeting, charter, BeAScout, and calendar details are already connected. Complete the remaining items in the [production-readiness questionnaire](docs/production-readiness-questionnaire.md):

1. Add a pack-managed public contact method in `src/data/site.json`.
2. Replace the two sample events in `src/content/events/`.
3. Replace the sample welcome post in `src/content/updates/`.
4. Add confirmed dues, uniform, communication, and new-family guidance.
5. Add only photos that the pack has permission to publish, with useful alt text.
6. Update the Parent Orientation deck to current Scouting America branding before publishing a PDF.

## Local preview

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Use `npm run verify` before committing a larger change.

## Editing content in GitHub

See [CONTRIBUTING.md](CONTRIBUTING.md) for copyable event and update templates. Content changes pushed to `main` are checked and published automatically.

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys the `main` branch to GitHub Pages. In the repository settings, select **GitHub Actions** as the Pages source.

The site initially supports a project URL such as `https://owner.github.io/pack133-website/`. See [docs/custom-domain.md](docs/custom-domain.md) when the pack is ready to connect its own domain.
