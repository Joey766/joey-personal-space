import { LifeArchive } from "../../../components/LifeArchive";
import { personalSpaceZh } from "../../../content/personal-space";

export default async function LifeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LifeArchive content={personalSpaceZh} locale="zh" slug={slug} />;
}
