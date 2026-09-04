import Image from "next/image";
import { MaisData } from "@/src/data/Mais/models";
import { getLangText } from "@/src/data/utils";

interface MaisScreenProps {
  data: MaisData;
  locale: "pt" | "en";
}

export default function MaisScreen({ data, locale }: MaisScreenProps) {
  const { roadmapTag, title, description, features, footer } = data;

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto space-y-gutter-lg pb-10">
      {/* Editorial Header */}
      <section className="flex flex-col pt-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-widest font-semibold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {getLangText(roadmapTag, locale)}
          </span>
        </div>

        <div className="space-y-1.5">
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
            {getLangText(title, locale)}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
            {getLangText(description, locale)}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feat) => (
          <article
            key={feat.id}
            className="group bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-200 rounded-xl p-4 shadow-sm flex flex-col gap-3 relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 ${
                    feat.iconBgClass || "bg-surface-container text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">{feat.icon}</span>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold">
                    {getLangText(feat.title, locale)}
                  </h2>
                </div>
              </div>

              <span
                className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm whitespace-nowrap ${
                  feat.statusClass || "bg-surface-container text-on-surface-variant"
                }`}
              >
                {getLangText(feat.status, locale)}
              </span>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {getLangText(feat.description, locale)}
            </p>

            {/* Gallery Image Preview if available */}
            {feat.previewImages && feat.previewImages.length > 0 && (
              <div className="grid grid-cols-2 gap-2 pt-1 mt-auto">
                {feat.previewImages.map((imgUrl, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface-container"
                  >
                    <Image
                      src={imgUrl}
                      alt="Preview photo"
                      fill
                      className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      {/* Editorial Footer */}
      <footer className="pt-2 flex flex-col items-center justify-center text-center space-y-1">
        <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">
          {getLangText(footer.version, locale)}
        </span>
        <p className="font-label-sm text-label-sm text-on-surface-variant/70">
          {getLangText(footer.subtext, locale)}
        </p>
      </footer>
    </div>
  );
}
