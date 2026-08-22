import { CareerArchive } from "../../../components/CareerArchive";
import { careerEn } from "../../../content/career";

export default function EnglishCareerPage() {
  return <CareerArchive content={careerEn} locale="en" />;
}
