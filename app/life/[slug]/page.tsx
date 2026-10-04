import { notFound, redirect } from "next/navigation";
import { LifeArchive } from "../../../components/LifeArchive";
import { personalSpaceZh as content } from "../../../content/personal-space";

export default async function LifeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = content.life.archive.find((entry) => entry.slug === slug);
  if (!item) notFound();
  if (slug !== "music") redirect(`/life#${slug}`);
  return <LifeArchive content={content} locale="zh" slug={slug} />;
}
