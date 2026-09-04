import Link from "next/link";
import { LinksData } from "@/src/data/Links/models";
import { getLangText } from "@/src/data/utils";
import CopyEmailButton from "@/src/components/CopyEmailButton";
import ThemeToggle from "@/src/components/ThemeToggle";
import LanguageToggle from "@/src/components/LanguageToggle";
import AppIcon from "@/src/components/AppIcon";

interface LinksScreenProps {
  data: LinksData;
  locale: "pt" | "en";
}

export default function LinksScreen({ data, locale }: LinksScreenProps) {
  const { status, hero, sections, directContact, footer } = data;

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto pb-6">
      {/* Top Utility Ribbon: Status Pill, Theme & Language toggles */}
      <div className="flex items-center justify-between gap-2 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-label-sm text-label-sm text-on-surface font-medium">
            {getLangText(status, locale)}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle variant="pill" locale={locale} />
          <LanguageToggle locale={locale} />
        </div>
      </div>

      {/* Profile Hero (Editorial Style) */}
      <section className="flex flex-col items-center text-center mb-8 px-2">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full p-1 bg-surface-container shadow-md">
            <div className="w-full h-full rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-3xl shadow-sm">
              GD
            </div>
          </div>
          <div
            className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-1 flex items-center justify-center shadow-sm"
            title={getLangText(hero.verifiedText, locale)}
          >
            <AppIcon name="verified" className="text-[15px]" />
          </div>
        </div>

        <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-1.5">
          {hero.name}
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto mb-4 leading-relaxed">
          {getLangText(hero.bio, locale)}
        </p>

        {/* Copy Email Action & Social Quick Icons */}
        <div className="flex items-center justify-center flex-wrap gap-2 w-full max-w-xs mb-1">
          <CopyEmailButton variant="subtle" email={hero.email} locale={locale} />
          <div className="flex items-center gap-1.5">
            {hero.socials.map((social) => (
              <a
                key={social.label}
                aria-label={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container-lowest shadow-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors"
              >
                <AppIcon name={social.icon} className="text-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section key={idx} className="flex flex-col gap-2.5 mb-7">
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
              {getLangText(section.title, locale)}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {section.links.map((link) => {
              const isInternal = link.href.startsWith("/");
              const linkHref = isInternal ? `/${locale}${link.href}` : link.href;

              const cardClasses = `group relative flex items-center justify-between p-3.5 rounded-xl shadow-sm hover:shadow-md transition-all ${
                link.isHighlighted
                  ? "bg-secondary-container/60 hover:bg-secondary-container"
                  : "bg-surface-container-lowest hover:bg-surface-container-low"
              } ${link.isFullWidth ? "sm:col-span-2" : ""}`;

              const Content = (
                <>
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        link.isHighlighted
                          ? "bg-primary text-on-primary shadow-sm"
                          : "bg-surface-container-low text-primary group-hover:bg-primary-fixed"
                      }`}
                    >
                      <AppIcon name={link.icon} className="text-[20px]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm text-[15px] font-semibold text-on-surface truncate">
                          {getLangText(link.title, locale)}
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {getLangText(link.subtitle, locale)}
                      </span>
                    </div>
                  </div>
                  <AppIcon
                    name={link.isExternal ? "open_in_new" : "arrow_forward"}
                    className={`text-[18px] group-hover:translate-x-0.5 transition-all flex-shrink-0 ${
                      link.isHighlighted ? "text-primary" : "text-outline group-hover:text-primary"
                    }`}
                  />
                </>
              );

              return isInternal ? (
                <Link key={link.id} href={linkHref} className={cardClasses}>
                  {Content}
                </Link>
              ) : (
                <a
                  key={link.id}
                  href={linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                  {Content}
                </a>
              );
            })}
          </div>
        </section>
      ))}

      {/* Direct Contact & Messaging */}
      <section className="flex flex-col gap-3 mb-4">
        <div className="flex items-center justify-between px-1">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
            {getLangText(directContact.title, locale)}
          </span>
        </div>

        {/* Quick Messaging Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {directContact.options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container active:scale-95 transition-all"
            >
              <AppIcon name={opt.icon} className={`text-[20px] ${opt.colorClass || ""}`} />
              <span className="font-label-md text-label-md font-medium">{opt.label}</span>
            </a>
          ))}
        </div>

        {/* Copy Email Bar */}
        <CopyEmailButton variant="bar" email={directContact.email} locale={locale} />
      </section>

      {/* Editorial Signoff Footer */}
      <footer className="flex flex-col items-center justify-center py-4 text-center">
        <p className="font-body-sm text-body-sm text-outline">
          {getLangText(footer.locationText, locale)}
        </p>
        <p className="font-label-sm text-label-sm text-outline-variant mt-0.5">
          {footer.versionText}
        </p>
      </footer>
    </div>
  );
}
