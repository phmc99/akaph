import Link from "next/link";
import { MOCK_ROLE_LIST } from "../data/Role/mocks";

interface RoleSelectProps {
  locale: "pt" | "en"
}

export default function RoleSelect({ locale }: RoleSelectProps) {
  return (
    <>
      <h1>Pedro Costa</h1>
      <Link href={locale === "pt" ? "/en" : "/pt"}>
        {locale === "pt" ? "English" : "Português"}
      </Link>
      <div className="flex flex-col gap-2 items-center">
        {MOCK_ROLE_LIST.map((role) => (
          <Link
            key={role.id}
            aria-label={role.description[locale]}
            href={`${locale}/${role.pathname}`}
            className="bg-zinc-700 w-sm cursor-pointer">
            {role.name[locale]}
          </Link>
        ))}
      </div>
    </>
  );
}
