"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function CeoSection() {
    const t = useTranslations("ceo");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            id="ceo"
            className="relative overflow-hidden bg-gray-50 py-20"
            aria-labelledby="ceo-heading"
        >
            {/* Geometric Background */}
            <GeometricBackground />

            <div className="container mx-auto max-w-5xl px-4">
                {/* Badge */}
                <div className="mb-6 flex justify-center">
                    <span
                        className="inline-flex items-center rounded-full bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
                        aria-label={t("badge")}
                    >
                        {t("badge")}
                    </span>
                </div>

                {/* Main Card */}
                <article className="relative rounded-3xl bg-white/95 p-8 shadow-xl ring-1 ring-black/5 md:p-12">

                    {/* Decorative Blur Elements */}
                    <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
                    <div className="pointer-events-none absolute -right-14 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

                    <div className={`grid gap-10 md:grid-cols-[260px_1fr] md:items-center ${isArabic ? "md:grid-cols-[1fr_260px]" : ""}`}>

                        {/* CEO Photo */}
                        <div className="flex justify-center">
                            <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full p-[5px] bg-gradient-to-br from-primary/40 via-primary/20 to-accent/40 shadow-2xl">
                                <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-100">
                                    <Image
                                        src="/ceo.jpg"
                                        alt={`${t("name")} - ${t("title")}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 224px, 256px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className={`space-y-4 ${isArabic ? "text-right" : ""}`}>
                            {/* Name + Title */}
                            <header>
                                <h2
                                    id="ceo-heading"
                                    className="font-palanquin text-3xl font-bold text-primary md:text-4xl"
                                >
                                    {t("name")}
                                </h2>
                                <p className="mt-1 font-montserrat text-sm font-semibold uppercase tracking-wide text-accent">
                                    {t("title")}
                                </p>
                            </header>

                            {/* Message */}
                            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-gray-700 md:text-lg">
                                {t("message")}
                            </p>

                            {/* Quote Line */}
                            <footer className={`mt-6 flex items-center gap-3 text-sm text-gray-600 ${isArabic ? "flex-row-reverse" : ""}`}>
                                <span className="inline-block h-px w-14 bg-accent/60" aria-hidden="true" />
                                <span className="font-montserrat italic">{t("quote")}</span>
                            </footer>
                        </div>

                    </div>
                </article>
            </div>
        </section>
    );
}

// Extracted component for background
function GeometricBackground() {
    return (
        <div
            className="absolute inset-0 -z-10"
            aria-hidden="true"
        >
            <div
                className="absolute -top-32 -right-40 h-[600px] w-[900px] -rotate-12 rounded-tr-[300px] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 blur-sm"
            />
        </div>
    );
}