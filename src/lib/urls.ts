const base = import.meta.env.BASE_URL;

export function withBase(path = '/') {
  const cleanPath = path.replace(/^\//, '');
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}
