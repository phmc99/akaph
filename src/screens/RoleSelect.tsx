import Link from "next/link";
import { MOCK_ROLE_LIST } from "../data/Role/mocks";

interface RoleSelectProps {
  locale: "pt" | "en"
}

export default function RoleSelect({ locale }: RoleSelectProps) {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-2 text-mauve-100">Pedro Costa</h1>
      <h2 className="text-lg mb-8 text-mauve-400">{locale === "pt" ? "Seja bem-vindo(a)!" : "Welcome!"}</h2>

      <div className="flex flex-col gap-2 items-center mb-8">
        {MOCK_ROLE_LIST.map((role) => (
          <Link
            key={role.id}
            aria-label={role.description[locale]}
            href={role.disabled ? "#" : `${locale}/${role.pathname}`}
            className={
              `bg-mauve-700 text-mauve-300 w-xs text-center py-4 rounded-xl 
              ${role.disabled ? "pointer-events-none opacity-30" : "cursor-pointer"}
              `
            }
          >
            {role.name[locale]}
          </Link>
        ))}
      </div>

      <Link href={locale === "pt" ? "/en" : "/pt"} className="text-zinc-700 underline">
        {locale === "pt" ? "English 🇺🇸" : "Português 🇧🇷"}
      </Link>
    </main>
  );
}
