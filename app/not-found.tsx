import { headers } from "next/headers";
import { RouteState } from "../components/RouteState";
import { localeFromPath } from "../content/routes";

export default async function NotFound() {
  const locale = localeFromPath((await headers()).get("x-site-pathname") || "/");
  return <RouteState locale={locale} />;
}
