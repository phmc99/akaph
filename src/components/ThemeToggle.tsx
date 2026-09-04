"use client";

import { useEffect, useState } from "react";

import { MdWbSunny, MdDarkMode } from "react-icons/md";

interface ThemeToggleProps {
  variant?: "icon" | "pill";
  locale?: "pt" | "en";
}

export default function ThemeToggle({ variant = "icon", locale = "pt" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    if (variant === "pill") {
      return (
        <div className="inline-flex items-center p-1 rounded-full bg-surface-container shadow-sm">
          <div className="px-3 py-1 rounded-full font-label-sm text-label-sm font-medium bg-surface-container-lowest text-primary opacity-0">...</div>
        </div>
      );
    }
    return (
      <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant opacity-0" />
    );
  }

  if (variant === "pill") {
    return (
      <div className="inline-flex items-center p-1 rounded-full bg-surface-container shadow-sm">
        <button
          type="button"
          onClick={() => toggleTheme("light")}
          className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
            theme === "light"
              ? "bg-surface-container-lowest text-primary shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <MdWbSunny className="text-[15px]" />
          <span>{locale === "pt" ? "Claro" : "Light"}</span>
        </button>

        <button
          type="button"
          onClick={() => toggleTheme("dark")}
          className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
            theme === "dark"
              ? "bg-surface-container-lowest text-primary shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          <MdDarkMode className="text-[15px]" />
          <span>{locale === "pt" ? "Escuro" : "Dark"}</span>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
      className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
    >
      {theme === "light" ? (
        <MdWbSunny className="text-[18px]" />
      ) : (
        <MdDarkMode className="text-[18px]" />
      )}
    </button>
  );
}
