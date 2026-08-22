import { ProjectDetail } from "../../../components/ProjectDetail";
import { zh } from "../../../content/zh";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetail content={zh} locale="zh" slug={slug} />;
}
