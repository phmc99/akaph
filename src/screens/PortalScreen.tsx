import Link from "next/link";
import Image from "next/image";
import { PortalData } from "@/src/data/Portal/models";
import { getLangText } from "@/src/data/utils";
import CopyEmailButton from "@/src/components/CopyEmailButton";
import ThemeToggle from "@/src/components/ThemeToggle";
import AppIcon from "@/src/components/AppIcon";

interface PortalScreenProps {
  data: PortalData;
  locale: "pt" | "en";
}

export default function PortalScreen({ data, locale }: PortalScreenProps) {
  const { status, hero, pathSelection, dailyLife, editorialSummary } = data;

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto space-y-8 md:space-y-10 pb-8">
      {/* Availability Pill & Theme Toggle Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-label-sm text-label-sm text-on-surface tracking-tight">
            {getLangText(status, locale)}
          </span>
        </div>

        {/* <div className="self-start sm:self-auto">
          <ThemeToggle variant="pill" locale={locale} />
        </div> */}
      </div>

      {/* Hero Header */}
      <header className="space-y-4 max-w-2xl">
        <div className="space-y-2">
          <p className="font-label-md text-label-md text-primary uppercase tracking-widest font-semibold">
            {getLangText(hero.tag, locale)}
          </p>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight sm:text-[36px]">
            {getLangText(hero.title, locale)}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {getLangText(hero.description, locale)}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <CopyEmailButton email={hero.email} locale={locale} />
          {hero.socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
            >
              <AppIcon name={s.icon} className="text-[16px]" />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </header>

      {/* Path Selection Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
              {getLangText(pathSelection.title, locale)}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {getLangText(pathSelection.subtitle, locale)}
            </p>
          </div>
          <AppIcon name="alt_route" className="text-primary text-[24px]" />
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Dev Card */}
          <article className="group relative flex flex-col p-5 sm:p-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-sm overflow-hidden border-none">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed shadow-sm">
                  <AppIcon name="terminal" className="text-[20px]" />
                </div>
                <div>
                  {/* <span className="inline-block px-2 py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-secondary-fixed text-on-secondary-fixed mb-0.5 font-medium">
                    {getLangText(pathSelection.devCard.badge, locale)}
                  </span> */}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                    {getLangText(pathSelection.devCard.title, locale)}
                  </h3>
                </div>
              </div>
              {/* <AppIcon name="arrow_forward" className="text-outline group-hover:text-primary group-hover:translate-x-1 transition-all text-[22px]" /> */}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              {getLangText(pathSelection.devCard.description, locale)}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {pathSelection.devCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-3 border-none flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                {getLangText(pathSelection.devCard.metaText, locale)}
              </span>
              <Link
                href={`/${locale}${pathSelection.devCard.href}`}
                className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:underline"
              >
                <span>{getLangText(pathSelection.devCard.linkText, locale)}</span>
                <AppIcon name="arrow_right_alt" className="text-[16px]" />
              </Link>
            </div>
          </article>

          {/* BJJ Card */}
          <article className="group relative flex flex-col p-5 sm:p-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-sm overflow-hidden border-none">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-sm">
                  <AppIcon name="sports_martial_arts" className="text-[20px]" />
                </div>
                <div>
                  {/* <span className="inline-block px-2 py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-tertiary-fixed-dim text-on-tertiary-fixed-variant mb-0.5 font-medium">
                    {getLangText(pathSelection.bjjCard.badge, locale)}
                  </span> */}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                    {getLangText(pathSelection.bjjCard.title, locale)}
                  </h3>
                </div>
              </div>
              {/* <AppIcon name="arrow_forward" className="text-outline group-hover:text-tertiary group-hover:translate-x-1 transition-all text-[22px]" /> */}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              {getLangText(pathSelection.bjjCard.description, locale)}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {pathSelection.bjjCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-3 border-none flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                {getLangText(pathSelection.bjjCard.metaText, locale)}
              </span>
              <Link
                href={`/${locale}${pathSelection.bjjCard.href}`}
                className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary font-semibold hover:underline"
              >
                <span>{getLangText(pathSelection.bjjCard.linkText, locale)}</span>
                <AppIcon name="arrow_right_alt" className="text-[16px]" />
              </Link>
            </div>
          </article>
        </div>

        {/* Cross Approach Card */}
        {/* <article className="p-5 sm:p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider bg-secondary-container text-on-secondary-container font-semibold">
                {getLangText(pathSelection.crossCard.badge, locale)}
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                • {getLangText(pathSelection.crossCard.subtitle, locale)}
              </span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              {getLangText(pathSelection.crossCard.title, locale)}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg">
              {getLangText(pathSelection.crossCard.description, locale)}
            </p>
          </div>
          <Link
            href={`/${locale}/developer`}
            className="px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md whitespace-nowrap transition-colors flex-shrink-0"
          >
            {getLangText(pathSelection.crossCard.actionText, locale)}
          </Link>
        </article> */}
      </section>

      {/* Daily Life Section */}
      {/* <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
            {getLangText(dailyLife.title, locale)}
          </h3>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {getLangText(dailyLife.location, locale)}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dailyLife.cards.map((card, idx) => (
            <div key={idx} className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-sm bg-surface-container">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <span className="font-label-sm text-label-sm text-white font-medium tracking-tight">
                  {getLangText(card.title, locale)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Editorial Summary Section */}
      {/* <section className="p-5 sm:p-6 rounded-xl bg-surface-container-low shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {getLangText(editorialSummary.title, locale)}
          </h3>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
            {getLangText(editorialSummary.tag, locale)}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {editorialSummary.items.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-surface-container-lowest">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-1">
                {getLangText(item.label, locale)}
              </span>
              <p className="font-body-md text-body-md text-on-surface font-medium">
                {getLangText(item.value, locale)}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
            {getLangText(editorialSummary.footerText, locale)}
          </p>
          <Link
            href={`/${locale}/developer`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all whitespace-nowrap w-full sm:w-auto"
          >
            <span>{getLangText(editorialSummary.buttonText, locale)}</span>
            <AppIcon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
      </section> */}
    </div>
  );
}
