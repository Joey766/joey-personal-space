import { AmbientParticles } from "./AmbientParticles";
import { BrandPage } from "./BrandPage";
import "./ambient-brand-page.css";

export function AmbientBrandPage({ content, locale, page }: { content: any; locale: "zh" | "en"; page: "explore" | "build" | "think" | "life" }) {
  return <div className="ambient-brand-page"><AmbientParticles variant="explore" /><BrandPage content={content} locale={locale} page={page} /></div>;
}
