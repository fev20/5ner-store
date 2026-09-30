import { hostnameThemes, themes } from '../data/themeData.js';

export function resolveTheme() {
  if (typeof window === 'undefined') return themes.digital;

  const queryTheme = new URLSearchParams(window.location.search).get('theme');
  const hostname = window.location.hostname.replace(/^www\./, '').toLowerCase();
  const defaultTheme = import.meta.env.VITE_DEFAULT_THEME || 'digital';

  // Exact recovered precedence: query -> hostname -> build default.
  // An invalid query value reaches the final digital fallback (it does not try hostname again).
  return themes[queryTheme || hostnameThemes[hostname] || defaultTheme] || themes.digital;
}
