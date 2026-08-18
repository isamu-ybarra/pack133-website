import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' && repository;

export default defineConfig({
  output: 'static',
  publicDir: './static',
  site: process.env.SITE_URL || (isGitHubPages
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : 'http://localhost:4321'),
  base: process.env.SITE_BASE || (isGitHubPages ? `/${repository}` : '/'),
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
