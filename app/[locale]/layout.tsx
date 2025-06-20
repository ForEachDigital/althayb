/* app/[locale]/layout.tsx */
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

/* ------------ global SEO ------------- */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    /* Title pattern: pageTitle | Althyab Real Estate Development */
    title: {
        default: "Althyab Real Estate Development",
        template: "%s | Althyab Real Estate Development",
    },

    description:
        "Althyab is a Saudi real-estate developer building modern residential and commercial communities across the Kingdom.",

    icons: {
        icon: "/logo.png",
    },


    openGraph: {
        title: "Althyab Real Estate Development",
        description:
            "Discover Althyab's innovative residential and commercial projects across Saudi Arabia.",
        url: siteUrl,
        siteName: "Althyab",
        locale: "ar_SA",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Althyab Real Estate Development",
        description:
            "Building tomorrow’s integrated communities in Saudi Arabia.",
    },

    alternates: {
        canonical: siteUrl,
    },
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    /* params is a Promise under dynamic [locale] segment */
    params: Promise<{ locale: string }>;
}) {
    /* Resolve locale */
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();

    /* Ensure server components render in the correct locale */
    setRequestLocale(locale);

    return (
        <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
        <head>
            {/* Favicon */}
            <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
            <title>Althyab </title>
        </head>

        <body>
        <NextIntlClientProvider locale={locale}>
            <Header />
            <AOSInit />   {/* Global scroll-animation init */}
            {children}
            <SiteFooter />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
