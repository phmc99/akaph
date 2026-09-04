import { getPortalData } from "@/src/data/Portal/mocks";
import PortalScreen from "./PortalScreen";

interface RoleSelectProps {
  locale: "pt" | "en";
}

export default async function RoleSelect({ locale }: RoleSelectProps) {
  const data = await getPortalData(locale);
  return <PortalScreen data={data} locale={locale} />;
}
