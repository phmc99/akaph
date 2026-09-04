"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdPerson } from "react-icons/md";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  locale: "pt" | "en";
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname();

  let headerTitle = "Home";
  if (pathname.includes("/developer")) {
    headerTitle = "Bio // Tech";
  } else if (pathname.includes("/bjj")) {
    headerTitle = "Bio // BJJ";
  } else if (pathname.includes("/links")) {
    headerTitle = "Links";
  } else if (pathname.includes("/mais")) {
    headerTitle = "Mais";
  }

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container-high/40">
      <div className="max-w-3xl mx-auto h-16 px-4 sm:px-6 md:px-8 flex items-center justify-between gap-gutter-sm w-full">
        <Link href={`/${locale}`} className="flex items-center gap-gutter-sm min-w-0 flex-shrink-0 group">
          <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs shadow-sm">
            PH
          </div>
          <div className="flex items-center gap-1.5 pl-1">
            {/* <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> */}
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate group-hover:text-primary transition-colors">
              {headerTitle}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <LanguageToggle locale={locale} />
          <ThemeToggle variant="icon" locale={locale} />
          <div className="flex items-center pl-0.5">
            <div className="w-8 h-8 rounded-full bg-surface-container-high ring-2 ring-primary/20 overflow-hidden flex items-center justify-center text-xs font-bold text-primary">
              <MdPerson className="text-[20px] text-primary" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
