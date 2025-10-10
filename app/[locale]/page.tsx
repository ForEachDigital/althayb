// app/[locale]/page.tsx
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Goals    from "./components/Goals";
import Stats    from "./components/Stats";
import Projects from "@/app/[locale]/components/Projects";
import Partners from "./components/Partners";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://althyab.com";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();          // "ar" | "en"
    const t = await getTranslations("meta.home");

    // Pull localized strings from your JSON files (meta.home.title/description)
    const title = t("title");
    const description = t("description");
    const isAr = locale === "ar";

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: isAr ? `${SITE}/ar` : `${SITE}/en`,
            type: "website",
            // Use a proper 1200x630 image (your previous code pointed to an SVG)
            images: [{ url: `${SITE}/og-cover.jpg`, width: 1200, height: 630, alt: title }],
            locale: isAr ? "ar_SA" : "en_US",
            siteName: isAr ? "شركة الذياب العالمية للاستثمار" : "Althyab Global Company",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${SITE}/og-cover.jpg`],
        },
        alternates: {
            canonical: isAr ? `${SITE}/ar` : `${SITE}/en`,
            languages: {
                en: `${SITE}/en`,
                ar: `${SITE}/ar`,
                "x-default": SITE,     // optional but nice to have
            },
        },
    };
}

export default async function Home() {
    const locale = await getLocale();
    const isAr = locale === "ar";

    /* ---------- JSON-LD (localized) ---------- */
    const breadcrumbLD = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: isAr ? "الرئيسية" : "Home",
                item: isAr ? `${SITE}/ar` : `${SITE}/en`,
            },
        ],
    };

    const webPageLD = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: isAr ? "الصفحة الرئيسية" : "Home",
        url: isAr ? `${SITE}/ar` : `${SITE}/en`,
        description: isAr
            ? "شركة الذياب العالمية للاستثمار: شركة سعودية رائدة في الاستثمار والتطوير العقاري."
            : "Althyab Global Company is a Saudi investment and development firm delivering residential and commercial projects.",
        inLanguage: locale,
    };

    return (
        <main id="top" className="scroll-smooth">
            {/* Structured-data scripts */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLD) }} />

            <Hero />
            <About />
            <Goals />
            <Stats />
            <Projects />
            <Partners />
        </main>
    );
}
