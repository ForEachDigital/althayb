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

/* ------------ global SEO ------------- */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "دليل التميز | خدمات صيانة متكاملة",
    description:
        "دليل التميز هو موقع سعودي متخصص في تقديم خدمات منزلية احترافية تشمل الكهرباء، التكييف، التنظيف، السباكة، الإنترنت، والمزيد.",
    icons: {
        icon: "/dalil_logo.png",
    },
    openGraph: {
        title: "دليل التميز | خدمات منزلية احترافية",
        description:
            "احصل على أفضل الخدمات المنزلية مع دليل التميز — جودة، سرعة، وأسعار مناسبة في جميع أنحاء المملكة.",
        url: siteUrl,
        siteName: "دليل التميز",
        locale: "ar_SA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "دليل التميز",
        description:
            "منصة رائدة في الخدمات المنزلية تشمل الكهرباء، السباكة، التكييف، والمزيد.",
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
    /** params is a Promise under dynamic [locale] segment */
    params: Promise<{ locale: string }>;
}) {
    /* Resolve locale */
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();

    /* Lock static rendering */
    setRequestLocale(locale);

    return (
        <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
        <head>
            <link rel="icon" href="/dalil_logo.png" type="image/png" />
        </head>

        <body>
        <NextIntlClientProvider locale={locale}>
            <Header />
            <AOSInit />

            {children}

        </NextIntlClientProvider>

        </body>
        </html>
    );
}
