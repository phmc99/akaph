import Image from "next/image";
import { RoleDetails } from "../data/RoleDetails/models";
import Link from "next/link";

interface RoleDetailsProps {
  locale: "pt" | "en"
  role: string
  details: RoleDetails
}

export default async function RoleDetailsScreen({ locale, role, details }: RoleDetailsProps) {
  return (
    <main className="h-screen bg-zinc-950 w-2/3 m-auto flex flex-col items-center">
      <div className="flex gap-4 items-center mt-8">
        <Image src={details.profilePicture} alt="profile image" width={100} height={100} className="rounded-full" loading="eager" />
        <div>
          <h1 className="text-2xl  text-mauve-100">Pedro Costa</h1>
          <h1 className="text-lg mb-2 text-mauve-300">{details.name[locale]}</h1>
          <p className=" text-mauve-500">{details.description[locale]}</p>
        </div>
      </div>
      <ul className="mt-8 w-2/3 h-3/4 margin-auto p-2 space-y-4 overflow-y-scroll">
        {details.sections.map((section) => (
          <li key={`${role}-section-${section.id}`} className="bg-zinc-900 p-4 rounded-lg shadow shadow-mauve-900">
            <h2>{section.name[locale]}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.htmlDescription[locale] }} />
          </li>
        ))}
      </ul>

      <Link href={`/${locale}`} className="bottom-1 fixed text-zinc-700 underline">{locale === "pt" ? "Voltar" : "Back"}</Link>
    </main>
  );
}
