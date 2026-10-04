import { SafeLink as Link } from "./SafeLink";
import { AmbientBackground } from "./AmbientBackground";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { creditMatrices, type PortfolioProject } from "../content/projects";
import { localizedPath, type Locale } from "../content/routes";
import "./project-case.css";

type CreditPeriod = "annual" | "twoYear" | "fiveYear";

function CreditMatrixTable({ period, locale }: { period: CreditPeriod; locale: Locale }) {
  const captions = {
    annual: { zh: "一年转移矩阵 P", en: "One-year transition matrix P" },
    twoYear: { zh: "两年转移矩阵 P²", en: "Two-year transition matrix P²" },
    fiveYear: { zh: "五年转移矩阵 P⁵", en: "Five-year transition matrix P⁵" },
  };
  const precision = period === "annual" ? 3 : period === "twoYear" ? 6 : 8;
  return <table>
    <caption>{captions[period][locale]}</caption>
    <thead><tr><th scope="col">{locale === "zh" ? "从 / 到" : "From / To"}</th>{creditMatrices.states.map((state) => <th scope="col" key={state}>{state}</th>)}</tr></thead>
    <tbody>{creditMatrices[period].map((row, rowIndex) => <tr key={creditMatrices.states[rowIndex]}><th scope="row">{creditMatrices.states[rowIndex]}</th>{row.map((value, cellIndex) => <td key={cellIndex}>{value.toFixed(precision)}</td>)}</tr>)}</tbody>
  </table>;
}

export function ProjectDetail({ project, locale }: { project: PortfolioProject; locale: Locale }) {
  const copy = project[locale];
  return <main className="project-case">
    <AmbientBackground variant="projects" />
    <SiteHeader locale={locale} path={`/projects/${project.slug}`} />
    <section className="project-case__hero">
      <Link className="project-case__back" href={localizedPath(locale, "/projects")}>← {locale === "zh" ? "所有项目" : "All projects"}</Link>
      <p className="project-case__eyebrow">{copy.context}</p>
      <h1>{copy.title}</h1><p className="project-case__subtitle">{copy.subtitle}</p>
      <p className="project-case__summary">{copy.summary}</p>
      <div className="project-case__meta"><span>{copy.status}</span><span className="project-case__period">{project.period[locale]}</span></div>
      <ul className="project-case__tools" aria-label={locale === "zh" ? "技术与工具" : "Technologies and tools"}>{project.technologies.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      <ol className="project-case__workflow" aria-label={locale === "zh" ? "工作流程" : "Workflow"}>{copy.workflow.map((step) => <li key={step}>{step}</li>)}</ol>
    </section>
    <div className="project-case__body">{copy.sections.map((section, index) => <section className="project-case__section" key={section.title} aria-labelledby={`case-section-${index}`}>
      <div><span>{String(index + 1).padStart(2, "0")}</span><h2 id={`case-section-${index}`}>{section.title}</h2></div>
      <div>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
        {section.visual === "credit-matrices" && <div className="project-case__matrices">
          <CreditMatrixTable period="annual" locale={locale} />
          <CreditMatrixTable period="twoYear" locale={locale} />
          <p className="project-case__source">{locale === "zh" ? "三状态矩阵与结果：STAT 334 最终报告，第 6、14 页。IG：投资级；HY：高收益级。" : "Three-state matrices and results: final STAT 334 report, pp. 6 and 14. IG: Investment Grade; HY: High Yield."}</p>
        </div>}
        {section.visual === "credit-five-year" && <div className="project-case__matrices">
          <CreditMatrixTable period="fiveYear" locale={locale} />
          <p className="project-case__source">{locale === "zh" ? "五年矩阵与汽车行业案例：STAT 334 最终报告，第 17 页。" : "Five-year matrix and automotive cases: final STAT 334 report, p. 17."}</p>
        </div>}
      </div>
    </section>)}</div>
    {project.repository && <div className="project-case__repository"><Link href={project.repository}>{locale === "zh" ? "查看网站代码" : "View the website repository"} <span aria-hidden="true">↗</span></Link></div>}
    <SiteFooter locale={locale} />
  </main>;
}
