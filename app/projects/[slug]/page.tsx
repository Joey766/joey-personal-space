import { ProjectDetail } from "../../../components/ProjectDetail";
import { LocaleControl } from "../../../components/LocaleControl";
import { zh } from "../../../content/zh";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <><LocaleControl locale="zh" path={`/projects/${slug}`} /><ProjectDetail content={zh} locale="zh" slug={slug} /></>;
}
