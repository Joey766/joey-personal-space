import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import { localeFromPath, localizedPath } from "../content/routes";
import { getProject } from "../content/projects";
import "./globals.css";
import "../components/visual-hierarchy.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const path = (await headers()).get("x-site-pathname") || "/";
  const locale = localeFromPath(path);
  const canonical = localizedPath("zh", path);
  const labels: Record<string, { zh: string; en: string }> = {
    "/": { zh: "罗敖杰 · 个人空间", en: "Joey Luo · Personal Space" },
    "/explore": { zh: "探索", en: "Explore" },
    "/career": { zh: "职业旅程", en: "Career" },
    "/projects": { zh: "项目与构建", en: "Projects" },
    "/life": { zh: "生活", en: "Life" },
    "/life/music": { zh: "音乐影像", en: "Music Archive" },
  };
  const project = canonical.startsWith("/projects/") ? getProject(canonical.split("/")[2]) : undefined;
  const title = project?.[locale].title || labels[canonical]?.[locale] || (locale === "zh" ? "页面未找到" : "Page not found");
  const description = project?.[locale].summary || (locale === "zh" ? "罗敖杰的个人空间：探索数学与 AI，记录职业实践、产品构建和生活。" : "Joey Luo's personal space: mathematics, AI, career experience, projects, and life beyond work.");
  return {
    metadataBase: new URL("https://joey-personal-space.vercel.app"),
    title: canonical === "/" ? title : `${title} · Joey Luo`, description,
    alternates: { canonical: localizedPath(locale, canonical), languages: { "zh-CN": localizedPath("zh", canonical), en: localizedPath("en", canonical) } },
    openGraph: { title, description, locale: locale === "zh" ? "zh_CN" : "en_US", type: "website" },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    ...(!labels[canonical] && !project ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = localeFromPath((await headers()).get("x-site-pathname") || "/");
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body
        className={`${manrope.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">{locale === "zh" ? "跳到主要内容" : "Skip to content"}</a>
        <div id="main-content" tabIndex={-1}>{children}</div>
      </body>
    </html>
  );
}
