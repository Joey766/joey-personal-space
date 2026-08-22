import { CareerArchive } from "../../components/CareerArchive";
import { careerZh } from "../../content/career";

export default function CareerPage() {
  return <CareerArchive content={careerZh} locale="zh" />;
}
