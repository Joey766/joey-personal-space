import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { SafeLink as Link } from "./SafeLink";
import { localizedPath, type Locale } from "../content/routes";
import "./route-state.css";

export function RouteState({ locale }: { locale: Locale }) {
  return <main className="route-state"><SiteHeader locale={locale} path="/" />
    <section><p>404</p><h1>{locale === "zh" ? "这里还没有页面" : "This page isn't here"}</h1><p>{locale === "zh" ? "链接可能已更新。你可以回到个人空间，或继续查看项目。" : "The link may have changed. Return to Personal Space or continue to the projects."}</p>
      <div><Link href={localizedPath(locale)}>{locale === "zh" ? "返回首页" : "Back home"} →</Link><Link href={localizedPath(locale, "/projects")}>{locale === "zh" ? "查看项目" : "View projects"} ↗</Link></div>
    </section><SiteFooter locale={locale} /></main>;
}
