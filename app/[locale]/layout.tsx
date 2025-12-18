// app/[locale]/layout.tsx
import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import React from "react";
import Header from "@/app/[locale]/components/Header";
import AOSInit from "@/components/_components/AOSInit";
import SiteFooter from "@/app/[locale]/components/SiteFooter";
import FloatingContact from "@/app/[locale]/components/FloatingContact";
import { Analytics } from "@vercel/analytics/next";
import { socials } from "@/app/lib/demo-data";
import { SpeedInsights } from "@vercel/speed-insights/next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://althyab.com";

type LayoutProps = {
    children: React.ReactNode;
    params: Promise<{ locale: "ar" | "en" }>;
};

/* ---------- PER-LOCALE METADATA ---------- */
export async function generateMetadata(
    { params }: LayoutProps,
    _parent: ResolvingMetadata
): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === "ar";

    const orgNameEn = "Althyab Global Company";
    const orgNameAr = "شركة الذياب العالمية للاستثمار";

    const title = isAr
        ? orgNameAr
        : orgNameEn;

    const description = isAr
        ? "شركة الذياب العالمية للاستثمار: شركة سعودية رائدة في الاستثمار والتطوير، تقدم مشاريع سكنية وتجارية متوافقة مع رؤية 2030."
        : "Althyab Global Company is a Saudi investment and development firm delivering residential and commercial projects aligned with Vision 2030.";

    const ogLocale = isAr ? "ar_SA" : "en_US";

    return {
        metadataBase: new URL(siteUrl),
        title: {
            default: title,
            template: isAr ? `%s | ${orgNameAr}` : `%s | ${orgNameEn}`,
        },
        description,
        // keywords don't help much in 2025, but harmless to keep if you want
        keywords: isAr
            ? [
                "شركة الذياب","شركة الذياب العالمية للاستثمار", "الذياب العالمية", "الاستثمار العقاري",
                "مشاريع سكنية السعودية", "تطوير تجاري السعودية", "رؤية 2030 عقار"
            ]
            : [
                "Althyab", "Althyab Global", "Althyab Global Company", "Saudi investment",
                "Saudi real estate", "Residential projects Saudi Arabia",
                "Commercial development KSA", "Vision 2030 real estate"
            ],
        icons: { icon: "/althyab_fav.svg" },
        openGraph: {
            title,
            description,
            url: isAr ? `${siteUrl}/ar` : `${siteUrl}/en`,
            siteName: isAr ? orgNameAr : orgNameEn,
            locale: ogLocale,
            type: "website",
            images: [
                {
                    url: `${siteUrl}/og-cover.jpg`,
                    width: 1200,
                    height: 630,
                    alt: isAr ? orgNameAr : orgNameEn,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${siteUrl}/og-cover.jpg`],
            site: "@althyab_sa",
        },
        alternates: {
            canonical: isAr ? `${siteUrl}/ar` : `${siteUrl}/en`,
            languages: {
                en: `${siteUrl}/en`,
                ar: `${siteUrl}/ar`,
            },
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        other: { "theme-color": "#0B2340" },
    };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);

    const isAr = locale === "ar";
    const orgNameEn = "Althyab Global Company";
    const orgNameAr = "شركة الذياب العالمية للاستثمار";

    /* ---------- JSON-LD (localized) ---------- */
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: isAr ? orgNameAr : orgNameEn,                  // <-- localized name
        alternateName: isAr ? orgNameEn : orgNameAr,         // <-- the other language
        url: siteUrl,
        logo: `${siteUrl}/althyab_logo.svg`,
        sameAs: [
            "https://www.facebook.com/althyab",
            "https://www.instagram.com/althyab",
            "https://www.linkedin.com/company/althyab"
        ],
        description: isAr
            ? "شركة سعودية رائدة في الاستثمار والتطوير العقاري."
            : "A leading Saudi investment and real-estate development company.",
        address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "Riyadh",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: socials.phone,
            contactType: "customer service",
            availableLanguage: ["ar", "en"],                   // <-- languages
        }
    };

    // Optional: WebSite schema with SearchAction and language
    const siteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: isAr ? orgNameAr : orgNameEn,
        alternateName: isAr ? orgNameEn : orgNameAr,
        inLanguage: isAr ? "ar" : "en",
        url: siteUrl,
        potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/${isAr ? "ar" : "en"}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <html dir={isAr ? "rtl" : "ltr"} lang={locale}>
        <head>
            <link rel="icon" href="/althyab_logo.svg" type="image/png" sizes="any" />
            <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
            {/* Fallback title for very old crawlers */}
            <title>{isAr ? orgNameAr : orgNameEn}</title>
        </head>
        <body className="overflow-x-hidden">
        <NextIntlClientProvider locale={locale}>
            <Header />
            <AOSInit />
            <Analytics />
            <SpeedInsights />
            {children}
            <SiteFooter />
            <FloatingContact socials={socials} />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
