"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, localizedPath } from "../content/routes";
import { SafeLink as Link } from "../components/SafeLink";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import "../components/route-state.css";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const path = usePathname() || "/";
  const locale = localeFromPath(path);
  return <main className="route-state"><SiteHeader locale={locale} path={path} />
    <section><p>{locale === "zh" ? "页面加载遇到问题" : "Something interrupted this page"}</p><h1>{locale === "zh" ? "稍后再试一次" : "Let's try again"}</h1><p>{locale === "zh" ? "你可以重新加载这一页，或返回个人空间继续浏览。" : "Reload this page, or return to Personal Space to keep exploring."}</p><div><button type="button" onClick={reset}>{locale === "zh" ? "重新加载" : "Try again"}</button><Link href={localizedPath(locale)}>{locale === "zh" ? "返回首页" : "Back home"} →</Link></div></section><SiteFooter locale={locale} /></main>;
}
