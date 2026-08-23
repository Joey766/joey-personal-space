import { LifeArchive } from "../../../../components/LifeArchive";
import { personalSpaceEn } from "../../../../content/personal-space";

export default async function EnglishLifeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LifeArchive content={personalSpaceEn} locale="en" slug={slug} />;
}
