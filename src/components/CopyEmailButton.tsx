"use client";

import { useState } from "react";

interface CopyEmailButtonProps {
  email?: string;
  locale?: "pt" | "en";
  variant?: "primary" | "pill" | "subtle" | "bar";
  label?: string;
}

export default function CopyEmailButton({
  email = "Pedro@tatami-dev.io",
  locale = "pt",
  variant = "primary",
  label,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const defaultText = label || (locale === "pt" ? "Copiar e-mail" : "Copy email");
  const copiedText = locale === "pt" ? "Copiado! ✓" : "Copied! ✓";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  if (variant === "bar") {
    return (
      <div className="flex items-center justify-between p-2.5 pl-3.5 rounded-xl bg-surface-container-low shadow-sm w-full">
        <div className="flex items-center gap-2 min-w-0 mr-2">
          <span className="material-symbols-outlined text-[18px] text-outline">mail</span>
          <span className="font-body-sm text-body-sm text-on-surface truncate select-all">
            {email}
          </span>
        </div>
        <button
          type="button"
          aria-label="Copiar endereço de e-mail"
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container active:scale-95 flex items-center gap-1 transition-all flex-shrink-0"
        >
          <span className="material-symbols-outlined text-[15px] text-primary">content_copy</span>
          <span className="font-label-sm text-label-sm font-semibold">
            {copied ? (locale === "pt" ? "Copiado!" : "Copied!") : (locale === "pt" ? "Copiar" : "Copy")}
          </span>
        </button>
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className="flex-1 min-w-[130px] h-9 px-3 rounded-full bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container flex items-center justify-center gap-1.5 active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined text-[16px] text-primary">content_copy</span>
        <span className="font-label-md text-label-md font-medium">
          {copied ? copiedText : defaultText}
        </span>
      </button>
    );
  }

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container active:scale-95 transition-all"
      >
        <span className="material-symbols-outlined text-[18px]">
          {copied ? "check" : "mail"}
        </span>
        <span>{copied ? copiedText : defaultText}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 shadow-sm"
    >
      <span className="material-symbols-outlined text-[16px]">
        {copied ? "check" : "content_copy"}
      </span>
      <span>{copied ? copiedText : defaultText}</span>
    </button>
  );
}
