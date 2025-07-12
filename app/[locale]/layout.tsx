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
import FloatingContact from "@/app/[locale]/components/FloatingContact";
import { Analytics } from "@vercel/analytics/next";
import {socials} from "@/app/lib/demo-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://althyab.com";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    /* Title pattern: pageTitle | Althyab Global Company */
    title: {
        default: "Althyab Global Company",
        template: "%s | Althyab Global Company",
    },

    description:
        "Althyab Global Company is a Saudi investment firm leading innovative residential and commercial development across the Kingdom.",

    icons: {
        icon: "/althyab_fav.svg",
    },

    openGraph: {
        title: "Althyab Global Company",
        description:
            "Discover Althyab’s innovative investment and real estate projects across Saudi Arabia.",
        url: siteUrl,
        siteName: "Althyab Global Company",
        locale: "ar_SA",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Althyab Global Company",
        description:
            "Shaping the future of investment and development in Saudi Arabia.",
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
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);

    return (
        <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
        <head>
            <link rel="icon" href="/althyab_logo.svg" type="image/png" sizes="any" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,viewport-fit=cover"
            />
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
