import Link from "next/link";
import { RoleDetails } from "@/src/data/RoleDetails/models";
import { getLangText } from "@/src/data/utils";
import CopyEmailButton from "@/src/components/CopyEmailButton";
import ThemeToggle from "@/src/components/ThemeToggle";
import AppIcon from "@/src/components/AppIcon";

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
                <AppIcon name="terminal" className="text-[14px]" /> Tech & Software
              </button>
            ) : (
              <Link
                href={`/${locale}/developer`}
                className="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5"
              >
                <AppIcon name="terminal" className="text-[14px]" /> Tech & Software
              </Link>
            )}

            {!isDev ? (
              <button
                type="button"
                className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm transition-all flex items-center gap-1.5 font-semibold text-primary"
              >
                <AppIcon name="bjj" className="text-[14px]" /> Jiu-Jitsu (BJJ)
              </button>
            ) : (
              <Link
                href={`/${locale}/bjj`}
                className="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5"
              >
                <AppIcon name="bjj" className="text-[14px]" /> Jiu-Jitsu (BJJ)
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
                <AppIcon name="twitter" className="text-[16px]" />
              </a>
              <a
                aria-label="GitHub"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <AppIcon name="github" className="text-[16px]" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <AppIcon name="linkedin" className="text-[16px]" />
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
                <AppIcon name="calendar_month" className="text-[18px]" />
                <span>{locale === "pt" ? "Agendar Aula / Seminário" : "Book Class / Workshop"}</span>
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <AppIcon name="instagram" className="text-[20px]" />
              </a>
              <a
                aria-label="YouTube"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <AppIcon name="youtube" className="text-[20px]" />
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <AppIcon name="whatsapp" className="text-[20px]" />
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
              PH
            </div>
            <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary text-[11px] font-bold shadow">
              <AppIcon name={isDev ? "code" : "bjj"} className="text-[14px]" />
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
                      <AppIcon name={spec.icon} className="text-[16px] text-primary" />
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
                  <AppIcon name="arrow_outward" className="text-[16px] text-outline" />
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
                    <AppIcon name="arrow_outward" className="text-[16px] text-outline" />
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
                <AppIcon name="lightbulb" className="text-[18px] text-primary mt-0.5 flex-shrink-0" />
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
