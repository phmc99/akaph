import { RoleDetails } from "../data/RoleDetails/models";
import RoleDetailsScreenComponent from "./RoleDetailsScreen";

interface RoleDetailsProps {
  locale: "pt" | "en";
  role: string;
  details: RoleDetails;
}

export default function RoleDetailsScreen({ locale, details }: RoleDetailsProps) {
  return <RoleDetailsScreenComponent details={details} locale={locale} />;
}
