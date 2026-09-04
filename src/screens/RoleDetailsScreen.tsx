import Link from "next/link";
import { RoleDetails } from "@/src/data/RoleDetails/models";
import { getLangText } from "@/src/data/utils";
import CopyEmailButton from "@/src/components/CopyEmailButton";
import ThemeToggle from "@/src/components/ThemeToggle";

interface RoleDetailsScreenProps {
  details: RoleDetails;
  locale: "pt" | "en";
}

export default function RoleDetailsScreen({ details, locale }: RoleDetailsScreenProps) {
  const isDev = details.role === "developer";

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto space-y-12">
      {/* TOP EDITORIAL INTRO BLOCK */}
      <section className="flex flex-col pt-2 space-y-6">
        {/* Row 1: Profile Switcher & Theme Toggle */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Profile Switcher: Tech vs BJJ */}
          <div className="inline-flex items-center p-1 bg-surface-container-high rounded-full self-start">
            {isDev ? (
              <button
                type="button"
                className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm transition-all flex items-center gap-1.5 font-semibold text-primary"
              >
                <span className="material-symbols-outlined text-[14px]">terminal</span> Tech & Software
              </button>
            ) : (
              <Link
                href={`/${locale}/developer`}
                className="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[14px]">terminal</span> Tech & Software
              </Link>
            )}

            {!isDev ? (
              <button
                type="button"
                className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm transition-all flex items-center gap-1.5 font-semibold text-primary"
              >
                <span>🥋</span> Jiu-Jitsu (BJJ)
              </button>
            ) : (
              <Link
                href={`/${locale}/bjj`}
                className="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5"
              >
                <span>🥋</span> Jiu-Jitsu (BJJ)
              </Link>
            )}
          </div>

          {/* Theme Toggle */}
          <div className="self-end sm:self-auto">
            <ThemeToggle variant="pill" locale={locale} />
          </div>
        </div>

        {/* Status Pill */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm">
              {getLangText(details.availability, locale)}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-snug">
            {getLangText(details.title, locale)}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {getLangText(details.bio, locale)}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {isDev ? (
            <>
              <CopyEmailButton variant="pill" locale={locale} email="Pedro@tatami-dev.io" />
              <a
                aria-label="Twitter / X"
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                aria-label="GitHub"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </>
          ) : (
            <>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>{locale === "pt" ? "Agendar Aula / Seminário" : "Book Class / Workshop"}</span>
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                aria-label="YouTube"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
            </>
          )}
        </div>
      </section>

      {/* AVATAR / ATMOSPHERE CARD */}
      <section className="relative w-full rounded-2xl overflow-hidden bg-surface-container p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-2xl shadow-md">
              GD
            </div>
            <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary text-[11px] font-bold shadow">
              {isDev ? <span className="material-symbols-outlined text-[14px]">code</span> : "🥋"}
            </span>
          </div>

          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                {details.avatar.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-surface-container-highest text-on-surface-variant">
                {getLangText(details.avatar.title, locale)}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              {getLangText(details.avatar.quote, locale)}
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW & SPECIFICATIONS GRID */}
      <section className="space-y-3">
        <h2 className="font-label-md text-label-md uppercase tracking-wider text-outline px-1">
          {locale === "pt" ? "Overview & Especificações" : "Overview & Specifications"}
        </h2>
        <div className="bg-surface-container-low rounded-2xl p-5 sm:p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {details.specs.map((spec, idx) => {
            const isFullSpan = spec.isStack || (spec.tags && spec.tags.length > 4);
            return (
              <div
                key={idx}
                className={`flex flex-col space-y-1 ${isFullSpan ? "sm:col-span-2 md:col-span-3 pt-2 border-t border-surface-container-high" : ""
                  }`}
              >
                <span className="font-label-md text-label-md text-outline">
                  {getLangText(spec.label, locale)}
                </span>
                {spec.tags && spec.tags.length > 0 ? (
                  <div className="font-body-md text-body-md text-on-surface flex flex-wrap gap-1.5 pt-0.5">
                    {spec.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-surface-container-highest text-on-surface font-label-sm text-label-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-1.5">
                    {spec.icon && (
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        {spec.icon}
                      </span>
                    )}
                    <span>{getLangText(spec.value, locale)}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CAREER / MARTIAL JOURNEY TIMELINE */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
            {isDev ? "Career Journey" : (locale === "pt" ? "Trajetória Marcial" : "Martial Journey")}
          </h2>
          <span className="font-label-sm text-label-sm text-outline">
            {isDev ? "2016 — 2026" : "2010 — 2026"}
          </span>
        </div>

        <div className="relative pl-6 space-y-7 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
          {details.timeline.map((item, idx) => (
            <div key={idx} className="relative flex flex-col gap-1 group">
              <span
                className={`absolute -left-6 top-1.5 w-3 h-3 rounded-full shadow-sm ${item.isCurrent ? "bg-primary" : "bg-secondary-fixed-dim"
                  }`}
              />
              <div className="flex items-baseline justify-between">
                <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">
                  {getLangText(item.title, locale)}
                </h3>
                <span
                  className={`font-label-sm text-label-sm font-medium ${item.isCurrent ? "text-primary" : "text-outline"
                    }`}
                >
                  {item.period}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-outline">
                {getLangText(item.subtitle, locale)}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                {getLangText(item.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTED WORK CARDS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
            {isDev
              ? "Highlighted Work"
              : (locale === "pt" ? "Realizações & Metodologias" : "Achievements & Methodologies")}
          </h2>
          <span className="font-label-sm text-label-sm text-outline">
            {details.projects.length} {locale === "pt" ? "Projetos" : "Projects"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
                  <span>{proj.title}</span>
                  <span className="material-symbols-outlined text-[16px] text-outline">
                    arrow_outward
                  </span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {getLangText(proj.description, locale)}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIDE PROJECTS & EXPLORING */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight px-1">
            {isDev
              ? "Side Projects & Open Source"
              : (locale === "pt" ? "Side Projects & Ferramentas" : "Side Projects & Tools")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {details.sideProjects.map((sp, idx) => (
              <a
                key={idx}
                href={sp.link}
                target="_blank"
                rel="noreferrer"
                className="block p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                      {sp.title}
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-outline">
                      arrow_outward
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {getLangText(sp.description, locale)}
                  </p>
                </div>
                <span className="font-label-sm text-label-sm text-primary pt-2 block">
                  {sp.domain}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Ideas exploring */}
        <div className="space-y-3">
          <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight px-1">
            {locale === "pt" ? "Ideias que estou explorando" : "Ideas I'm exploring"}
          </h2>
          <div className="p-5 sm:p-6 rounded-2xl bg-surface-container-low grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.exploringIdeas.map((idea, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 flex-shrink-0">
                  lightbulb
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {getLangText(idea.text, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL FOOTER SIGN-OFF */}
      <footer className="pt-6 pb-2 text-center space-y-2">
        <p className="font-body-md text-body-md text-on-surface">
          {getLangText(details.footer.quote, locale)}
        </p>
        <div className="flex items-center justify-center gap-4 text-outline font-label-sm text-label-sm">
          <span>{details.footer.copyright}</span>
          <span>•</span>
          <span>{getLangText(details.footer.subtitle, locale)}</span>
        </div>
      </footer>
    </div>
  );
}
