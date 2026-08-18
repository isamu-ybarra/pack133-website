# Editing the Pack 133 website

All public website content is visible in this public repository. Never publish rosters, private contact information, medical information, or photos without the required permission.

## Edit an existing page

Open a file in `src/content/pages/` on GitHub, select the pencil icon, edit the Markdown below the `---` frontmatter block, and commit the change to `main`.

## Add an event

Create `src/content/events/short-event-name.md` with this structure:

```md
---
title: Pinewood Derby
description: Race day details for Pack 133 families.
startDate: 2027-02-06T09:00:00-06:00
endDate: 2027-02-06T12:00:00-06:00
location: Add the public event location
featured: true
registrationUrl: https://example.com/optional-registration
draft: false
---

Add the event details, arrival instructions, and what to bring here.
```

Use `-06:00` for Central Standard Time and `-05:00` for Central Daylight Time. Set `draft: true` until an event is ready to publish.

## Add an update

Create `src/content/updates/short-update-name.md`:

```md
---
title: Your update title
description: One short sentence shown on the updates page.
publishDate: 2027-01-15
tags:
  - reminder
draft: false
---

Write the announcement here.
```

## Connect Google Calendar

The Google Calendar must be public to embed on a public site. Add its public embed URL and normal calendar URL to `src/data/site.json`. If either value is empty, the site shows a safe placeholder instead of a broken frame or link.

## Add photos

Place approved images in `static/images/`. Use descriptive filenames and include meaningful alt text wherever the image is referenced. Strip unnecessary location metadata before committing photos.
