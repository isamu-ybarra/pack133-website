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
];

test('production build contains every core route', async () => {
  await Promise.all(expectedPages.map((page) => access(new URL(`../dist/${page}`, import.meta.url))));
  await access(new URL('../dist/brand/scouting-america-logo.png', import.meta.url));
});

test('home page includes the primary content and accessible navigation', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(html, /Big adventures/);
  assert.match(html, /Join the adventure/);
  assert.match(html, /aria-label="Main navigation"/);
  assert.match(html, /Skip to main content/);
  assert.match(html, /name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex"/);
  if (process.env.GITHUB_ACTIONS === 'true') {
    const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
    assert.match(html, new RegExp(`href="/${repository}/join/"`));
    assert.doesNotMatch(html, new RegExp(`/${repository}(join|calendar|our-pack)`));
  }
});

test('the public preview does not advertise itself to search engines', async () => {
  const robots = await readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8');
  assert.equal(robots, 'User-agent: *\nAllow: /\n');
  await assert.rejects(access(new URL('../dist/sitemap-index.xml', import.meta.url)));
});

test('draft content is not included in public listings', async () => {
  const updates = await readFile(new URL('../dist/updates/index.html', import.meta.url), 'utf8');
  const calendar = await readFile(new URL('../dist/calendar/index.html', import.meta.url), 'utf8');
  assert.doesNotMatch(updates, /Unpublished draft example/);
  assert.doesNotMatch(calendar, /Unpublished draft example/);
});

test('verified public integrations are connected without exposing a placeholder email', async () => {
  const calendar = await readFile(new URL('../dist/calendar/index.html', import.meta.url), 'utf8');
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(calendar, /calendar\.google\.com\/calendar\/embed/);
  assert.match(calendar, /Subscribe to calendar/);
  assert.match(home, /Third Tuesday of each month/);
  assert.doesNotMatch(home, /mailto:/);
});

test('brand tokens and repository guidance match the official audit', async () => {
  const css = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8');
  const instructions = await readFile(new URL('../AGENTS.md', import.meta.url), 'utf8');
  const footer = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

  for (const token of ['#003f87', '#fcd116', '#ce1126', '#003366', '#9ab3d5', '#e9e9e4', '#d6cebd', '#515354', '#232528']) {
    assert.match(css.toLowerCase(), new RegExp(token));
  }
  assert.doesNotMatch(css, /Avenir/i);
  assert.match(css, /Montserrat Variable/);
  assert.match(instructions, /scouting\.webdamdb\.com\/bp/);
  assert.match(footer, /Cub Scouts® and Scouting America® are registered trademarks/);
  assert.match(footer, /brand\/scouting-america-logo\.png/);
});
