
import type { Metadata } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://althyab.com";

/* ---------- GLOBAL SEO METADATA ---------- */
export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: {
        default: "Althyab Global Company",
        template: "%s | Althyab Global Company",
    },

    description:
        "Althyab Global Company is a leading Saudi investment and development firm delivering transformative residential and commercial projects across the Kingdom.",

    keywords: [
        "Althyab",
        "Althyab Global",
        "Saudi investment",
        "Saudi real estate",
        "Residential projects Saudi Arabia",
        "Commercial development KSA",
        "Vision 2030 real estate",
        "استثمار عقاري",
        "عقارات السعودية"
    ],

    icons: { icon: "/althyab_fav.svg" },

    openGraph: {
        title: "Althyab Global Company",
        description:
            "Explore Althyab’s visionary real estate and investment projects in Saudi Arabia — aligned with Vision 2030.",
        url: siteUrl,
        siteName: "Althyab Global Company",
        locale: "ar_SA",
        type: "website",
        images: [
            {
                url: `${siteUrl}/og-cover.jpg`,
                width: 1200,
                height: 630,
                alt: "Althyab Global Company Cover",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Althyab Global Company",
        description:
            "Building the future of investment and development in Saudi Arabia.",
        images: [`${siteUrl}/og-cover.jpg`],
        site: "@althyab_sa", // change if you have a real handle
    },

    alternates: {
        canonical: siteUrl,
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

    other: {
        "theme-color": "#0B2340",
    },
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    /* Resolve locale from dynamic segment */
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);

    /* JSON-LD organization schema */
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Althyab Global Company",
        url: siteUrl,
        logo: `${siteUrl}/althyab_logo.svg`,
        sameAs: [
            "https://www.facebook.com/althyab",   // replace with real
            "https://www.instagram.com/althyab",
            "https://www.linkedin.com/company/althyab"
        ],
        description:
            "Althyab Global Company is a Saudi investment and real-estate firm delivering innovative residential and commercial developments.",
        address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "Riyadh",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: socials.phone,
            contactType: "customer service",
        },
    };

    return (
        <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
        <head>
            {/* Fav-icon */}
            <link rel="icon" href="/althyab_logo.svg" type="image/png" sizes="any" />

            {/* Mobile viewport */}
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,viewport-fit=cover"
            />

            {/* Structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            {/* Static fallback title for older crawlers */}
            <title>Althyab Global Company</title>
        </head>

        <body className="overflow-x-hidden">
        <NextIntlClientProvider locale={locale}>
            <Header />
            <AOSInit />
            <Analytics />
            {children}
            <SiteFooter />
            <FloatingContact socials={socials} />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
