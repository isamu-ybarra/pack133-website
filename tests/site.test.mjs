import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { test } from 'node:test';

const expectedPages = [
  'index.html',
  'our-pack/index.html',
  'calendar/index.html',
  'join/index.html',
  'new-families/index.html',
  'resources/index.html',
  'updates/index.html',
  '404.html',
  'robots.txt',
  'sitemap-index.xml',
];

test('production build contains every core route', async () => {
  await Promise.all(expectedPages.map((page) => access(new URL(`../dist/${page}`, import.meta.url))));
});

test('home page includes the primary content and accessible navigation', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(html, /Big adventures/);
  assert.match(html, /Join the adventure/);
  assert.match(html, /aria-label="Main navigation"/);
  assert.match(html, /Skip to main content/);
  if (process.env.GITHUB_ACTIONS === 'true') {
    const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
    assert.match(html, new RegExp(`href="/${repository}/join/"`));
    assert.doesNotMatch(html, new RegExp(`/${repository}(join|calendar|our-pack)`));
  }
});

test('draft content is not included in public listings', async () => {
  const updates = await readFile(new URL('../dist/updates/index.html', import.meta.url), 'utf8');
  const calendar = await readFile(new URL('../dist/calendar/index.html', import.meta.url), 'utf8');
  assert.doesNotMatch(updates, /Unpublished draft example/);
  assert.doesNotMatch(calendar, /Unpublished draft example/);
});

test('placeholder integrations fail safely', async () => {
  const calendar = await readFile(new URL('../dist/calendar/index.html', import.meta.url), 'utf8');
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(calendar, /Calendar connection coming soon/);
  assert.match(home, /Meeting schedule coming soon/);
  assert.doesNotMatch(home, /mailto:/);
});
