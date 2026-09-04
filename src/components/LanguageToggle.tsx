"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageToggleProps {
  locale: "pt" | "en";
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleToggle = () => {
    const nextLocale = locale === "pt" ? "en" : "pt";
    let newPath = pathname;

    if (pathname.startsWith(`/${locale}`)) {
      newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    } else {
      newPath = `/${nextLocale}${pathname}`;
    }

    router.push(newPath);
  };

  return (
    <button
      type="button"
      aria-label="Language switch"
      onClick={handleToggle}
      className="h-9 px-3 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors"
    >
      <span className={locale === "pt" ? "font-semibold text-primary" : "text-on-surface-variant font-normal"}>
        PT
      </span>
      <span className="text-outline mx-0.5">/</span>
      <span className={locale === "en" ? "font-semibold text-primary" : "text-on-surface-variant font-normal"}>
        EN
      </span>
    </button>
  );
}
