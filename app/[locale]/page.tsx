import type { Metadata } from "next";
import { useLocale } from "next-intl";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Goals    from "./components/Goals";
import Stats    from "./components/Stats";
import Projects from "@/app/[locale]/components/Projects";
import Partners from "./components/Partners";

/* ---------- PAGE-SPECIFIC METADATA ---------- */
export const metadata: Metadata = {
    title: "Home",
    description:
        "Althyab Global Company – a leading Saudi investment and development firm shaping the future of residential and commercial real estate.",
    keywords: [
        "Althyab",
        "Saudi real estate",
        "Saudi investment",
        "Vision 2030 projects",
        "Residential development Saudi Arabia",
        "Commercial projects KSA",
        "شركة الذياب العالمية للاستثمار"
    ],
    openGraph: {
        title: "Althyab Global Company — Saudi Real Estate & Investment",
        description:
            "Explore Althyab’s innovative residential and commercial projects across Saudi Arabia.",
        url: "https://althyab.com",
        type: "website",
        images: [
            {
                url: "https://www.althyab.com/althyab_logo.svg",
                width: 1200,
                height: 630,
                alt: "Althyab Global Company Cover"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Althyab Global Company",
        description:
            "Building the future of investment and development in Saudi Arabia.",
        images: ["https://www.althyab.com/althyab_fav.svg"]
    }
};

export default function Home() {
    const locale = useLocale(); // "ar" | "en"

    /* ---------- JSON-LD STRUCTURED DATA ---------- */
    const breadcrumbLD = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: locale === "ar" ? "الرئيسية" : "Home",
                item: "https://althyab.com"
            }
        ]
    };

    const webPageLD = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: locale === "ar" ? "الصفحة الرئيسية" : "Home",
        url: "https://althyab.com",
        description:
            "Althyab Global Company is a Saudi investment and development firm delivering innovative residential and commercial projects.",
        inLanguage: locale
    };

    return (
        <main id="top" className="scroll-smooth">
            {/* Structured-data scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLD) }}
            />

            {/* Existing sections (each component already wraps with <section>) */}
            <Hero />
            <About />
            <Goals />
            <Stats />
            <Projects />
            <Partners />
        </main>
    );
}
