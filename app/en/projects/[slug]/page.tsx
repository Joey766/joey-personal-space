import { ProjectDetail } from "../../../../components/ProjectDetail";
import { LocaleControl } from "../../../../components/LocaleControl";
import { en } from "../../../../content/en";

export default async function EnglishProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <><LocaleControl locale="en" path={`/en/projects/${slug}`} /><ProjectDetail content={en} locale="en" slug={slug} /></>;
}
