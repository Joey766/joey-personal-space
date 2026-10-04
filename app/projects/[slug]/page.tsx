import { notFound } from "next/navigation";
import { ProjectDetail } from "../../../components/ProjectDetail";
import { getProject } from "../../../content/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} locale="zh" />;
}
