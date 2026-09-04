export interface langStringObject {
  en: string;
  pt: string;
}

export function getLangText(
  obj: langStringObject | string | undefined,
  locale: "pt" | "en"
): string {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[locale] || obj.pt || obj.en || "";
}
