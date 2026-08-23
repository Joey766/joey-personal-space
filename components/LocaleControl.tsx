import { SafeLink as Link } from "./SafeLink";
import "./locale-control.css";

export function LocaleControl({ locale, path }: { locale: "zh" | "en"; path: string }) {
  const href = locale === "zh" ? `/en${path}` : path.replace(/^\/en/, "") || "/";
  return <Link className="locale-control" href={href} aria-label="Switch language">中文 / EN</Link>;
}
