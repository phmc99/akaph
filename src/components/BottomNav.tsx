"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavProps {
  locale: "pt" | "en";
}

export default function BottomNav({ locale }: BottomNavProps) {
  const pathname = usePathname();

  const isPortal = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isBio = pathname.includes("/developer") || pathname.includes("/bjj");
  const isLinks = pathname.includes("/links");
  const isMais = pathname.includes("/mais");

  // Determine Bio link destination (keep current role if already on a role route, else default to /developer)
  const bioHref = pathname.includes("/bjj") ? `/${locale}/bjj` : `/${locale}/developer`;

  const navItems = [
    {
      key: "portal",
      label: "Portal",
      icon: "home",
      href: `/${locale}`,
      isActive: isPortal,
    },
    {
      key: "bio",
      label: "Bio",
      icon: "person_pin",
      href: bioHref,
      isActive: isBio,
    },
    {
      key: "links",
      label: "Links",
      icon: "share",
      href: `/${locale}/links`,
      isActive: isLinks,
    },
    {
      key: "mais",
      label: "Mais",
      icon: "more_horiz",
      href: `/${locale}/mais`,
      isActive: isMais,
    },
  ];

  return (
    <nav className="fixed bottom-0 sm:bottom-4 left-0 right-0 z-50 w-full flex justify-center pointer-events-none px-4 pb-safe">
      <div className="pointer-events-auto w-full max-w-md h-16 px-4 flex items-center justify-around bg-surface/85 backdrop-blur-xl sm:rounded-full border border-surface-container-high/60 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            aria-current={item.isActive ? "page" : undefined}
            className={`flex flex-col items-center justify-center min-w-[54px] min-h-[44px] transition-all duration-200 ${
              item.isActive
                ? "text-primary font-semibold scale-105"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: item.isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
