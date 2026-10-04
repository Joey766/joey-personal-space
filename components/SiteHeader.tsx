import { SafeLink as Link } from "./SafeLink";
import { chapters, localizedPath, type Locale } from "../content/routes";
import "./site-shell.css";

export function SiteHeader({ locale, path }: { locale: Locale; path: string }) {
  const canonical = path.replace(/^\/en(?=\/|$)/, "") || "/";
  return (
    <header className="site-header">
      <Link className="site-header__mark" href={localizedPath(locale)} aria-label={locale === "zh" ? "返回个人空间" : "Back to Personal Space"}>AJ</Link>
      <nav aria-label={locale === "zh" ? "主要导航" : "Main navigation"}>
        {chapters.map((chapter) => <Link key={chapter.path} href={localizedPath(locale, chapter.path)} aria-current={canonical === chapter.path || canonical.startsWith(`${chapter.path}/`) ? "page" : undefined}>{chapter[locale]}</Link>)}
      </nav>
      <Link className="site-header__locale" href={localizedPath(locale === "zh" ? "en" : "zh", canonical)} lang={locale === "zh" ? "en" : "zh-CN"} aria-label={locale === "zh" ? "Switch to English" : "切换为中文"}>{locale === "zh" ? "EN" : "中文"}<span aria-hidden="true"> ↗</span></Link>
    </header>
  );
}
