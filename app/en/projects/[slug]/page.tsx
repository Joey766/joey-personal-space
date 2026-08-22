import { ProjectDetail } from "../../../../components/ProjectDetail";
import { en } from "../../../../content/en";

export default async function EnglishProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetail content={en} locale="en" slug={slug} />;
}
