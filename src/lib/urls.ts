const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function withBase(path = '/') {
  const cleanPath = path.replace(/^\//, '');
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}
