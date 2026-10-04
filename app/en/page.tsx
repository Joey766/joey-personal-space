import { PersonalSpace } from "../../components/PersonalSpace";
import { en } from "../../content/en";

export default function EnglishHome() { return <PersonalSpace content={{ nav: en.nav, welcome: en.welcome, bottom: en.bottom }} locale="en" />; }
