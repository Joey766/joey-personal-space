import { SafeLink as Link } from "./SafeLink";

export function ProjectDetail({ content, locale, slug }: { content: any; locale: "zh" | "en"; slug: string }) {
  const project = content.projects.items.find((item: any) => item.slug === slug);
  const home = locale === "zh" ? "/" : "/en";
  const pageFor = (href: string) => `${home}${({ "#top": "", "#about": "/explore", "#career": "/work", "#projects": "/projects", "#life": "/life" } as Record<string, string>)[href] ?? href}`;
  if (!project) return <main className="project-detail"><Link href={`${home}#projects`}>← {content.projectBack}</Link><h1>404</h1></main>;
  const groups = project.groups ?? [{ title: locale === "zh" ? "技术" : "Technology", items: String(project.tags ?? "").split("/").map((item) => item.trim()).filter(Boolean) }];
  return <main className="project-detail"><header className="project-header"><Link className="jl" href={home} aria-label="AJ">AJ</Link><nav>{content.nav.map((item: any) => <Link key={item.label} href={pageFor(item.href)}>{item.label}</Link>)}</nav><Link href={pageFor("#projects")}>← {content.projectBack}</Link></header><section className="project-hero"><Link className="project-back" href={pageFor("#projects")}>← {content.projectBack}</Link><p>{String(content.projects.items.indexOf(project) + 1).padStart(2, "0")} / {content.projects.title}</p><h1>{project.title}</h1><h2>{project.subtitle}</h2><p className="project-copy">{project.copy}</p>{project.workflow && <div className="workflow">{project.workflow.map((step: string, index: number) => <span key={step}>{step}{index < project.workflow.length - 1 && <i>↓</i>}</span>)}</div>}</section><section className="project-groups">{groups.map((group: any) => <article key={group.title}><p>{group.title}</p><div>{group.items.map((item: string) => <span key={item}>{item}</span>)}</div></article>)}</section></main>;
}
