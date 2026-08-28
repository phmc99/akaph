import Image from "next/image";
import { RoleDetails } from "../data/RoleDetails/models";

interface RoleDetailsProps {
  locale: "pt" | "en"
  role: string
  details: RoleDetails
}

export default async function RoleDetailsScreen({ locale, role, details }: RoleDetailsProps) {
  return (
    <>
      <h1>{details.name[locale]}</h1>
      <p>{details.description[locale]}</p>
      <Image src={details.profilePicture} alt="profile image" width={150} height={150} className="rounded-full" loading="eager" />
      <ul>
        {details.sections.map((section) => (
          <li key={`${role}-section-${section.id}`}>
            <h2>{section.name[locale]}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.htmlDescription[locale] }} />
          </li>
        ))}
      </ul>
    </>
  );
}
