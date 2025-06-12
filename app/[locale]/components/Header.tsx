"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LanguageSelect from "@/components/LanguageSelect";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const t       = useTranslations("Header");
    const locale  = useLocale();
    const pathname = usePathname();

    /* Is this the home page? */
    const isHome =
        pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;

    useEffect(() => {
        if (!isHome) return;
        const onScroll = () => setScrolled(window.scrollY > 64);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    /* Nav items */
    const nav = [
        { label: t("home"),    href: "#hero"     },
        { label: t("about"),   href: "#about"    },
        { label: t("goals"),   href: "#goals"    },
        { label: t("stats"),   href: "#stats"    },
        { label: t("projects"),href: "#projects" },
        { label: t("partners"),href: "#partners" },
        { label: t("contact"), href: "/contact"  },   // real page
    ];

    /* Smooth-scroll only for #anchors on home */
    const handleScroll = (hash: string) => (e: React.MouseEvent) => {
        if (!isHome || !hash.startsWith("#")) return;   // let Link work normally
        e.preventDefault();
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    /* Styling */
    const headerStyle = isHome
        ? scrolled
            ? "bg-white/95 shadow-md text-black"
            : "bg-white/10 backdrop-blur-lg text-white"
        : "bg-white shadow-md text-black";

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerStyle}`}>
            <div className="container mx-auto flex h-16 w-full items-center justify-between px-4">
                {/* Logo */}
                <Link
                    href={`/${locale}#hero`}
                    onClick={handleScroll("#hero")}
                    className="relative block h-15 w-32 shrink-0"
                >
                    <Image src="/logo.png" alt="Althyab" fill className="object-contain" priority />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    <LanguageSelect />

                    {nav.map(({ label, href }) => {
                        const isAnchor  = href.startsWith("#");

                        /* ➜ Always point anchors to home root when away from home */
                        const fullHref = isAnchor
                            ? (isHome ? href : `/${locale}${href}`)   // ✔ fixes /contact#about bug
                            : `/${locale}${href}`;                   // normal pages

                        /* ➜ Only smooth–scroll when we're on home *and* link is anchor */
                        const clickHandler = isHome && isAnchor ? handleScroll(href) : undefined;

                        return (
                            <Link
                                key={href}
                                href={fullHref}
                                onClick={clickHandler}
                                className="text-sm font-bold transition-colors hover:text-accent"
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
