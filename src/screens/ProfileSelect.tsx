import Link from "next/link";
import { MOCK_ROLE_LIST } from "../data/Role/mocks";

interface ProfileSelectProps {
  locale?: "pt" | "en"
}

export default function ProfileSelect({ locale = "pt" }: ProfileSelectProps) {

  return (
    <>
      <h1>Pedro Costa</h1>
      <div className="flex flex-col gap-2 items-center">
        {MOCK_ROLE_LIST.map((role) => (
          <Link
            key={role.id}
            aria-label={role.description[locale]}
            href={`${locale != "pt" ? locale : ""}/${role.pathname}`}
            className="bg-zinc-700 w-sm cursor-pointer">
            {role.name[locale]}
          </Link>
        ))}
      </div>
    </>
  );
}
