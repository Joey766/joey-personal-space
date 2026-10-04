export type Locale = "zh" | "en";

export function localizedPath(locale: Locale, path = "/") {
  const canonical = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en" ? `/en${canonical === "/" ? "" : canonical}` : canonical;
}

export function localeFromPath(path: string): Locale {
  return /^\/en(?:\/|$)/.test(path) ? "en" : "zh";
}

export const chapters = [
  { path: "/explore", zh: "探索", en: "Explore" },
  { path: "/career", zh: "职业", en: "Career" },
  { path: "/projects", zh: "项目", en: "Projects" },
  { path: "/life", zh: "生活", en: "Life" },
] as const;
