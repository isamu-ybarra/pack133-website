const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/Chicago',
});

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/Chicago',
});

export function formatEventDate(start: Date, end?: Date) {
  const date = dateFormat.format(start);
  const startTime = timeFormat.format(start);
  const endTime = end ? `–${timeFormat.format(end)}` : '';
  return `${date} · ${startTime}${endTime}`;
}

export function formatPublishDate(date: Date) {
  return dateFormat.format(date);
}
