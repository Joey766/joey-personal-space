import { PersonalSpace } from "../components/PersonalSpace";
import { zh } from "../content/zh";

export default function Home() {
  return <PersonalSpace content={{ nav: zh.nav, welcome: zh.welcome, bottom: zh.bottom }} locale="zh" />;
}
