import { SafeLink as Link } from "./SafeLink";
import { localizedPath, type Locale } from "../content/routes";
import { contact } from "../content/contact";
import "./site-shell.css";

export function SiteFooter({ locale }: { locale: Locale }) {
  return <footer className="site-footer">
    <Link className="site-footer__home" href={localizedPath(locale)}>{locale === "zh" ? "罗敖杰 · 个人空间" : "Joey Luo · Personal Space"}</Link>
    <div aria-label={locale === "zh" ? "联系与社交链接" : "Contact and social links"}>
      <Link href={`mailto:${contact.email}`}>{locale === "zh" ? "邮箱" : "Email"}</Link>
      <Link href={contact.github}>GitHub <span aria-hidden="true">↗</span></Link>
    </div>
    <span>2026</span>
  </footer>;
}
