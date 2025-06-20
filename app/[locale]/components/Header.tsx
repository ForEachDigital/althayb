"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSelect from "@/components/LanguageSelect";

export default function Header() {
    /* ── state ─────────────────────────────────────── */
    const [open, setOpen] = useState(false);     // mobile drawer
    const [scrolled, setScrolled] = useState(false);

    /* ── i18n & routing helpers ────────────────────── */
    const t        = useTranslations("Header");
    const locale   = useLocale();
    const pathname = usePathname();
    const router   = useRouter();
    const isHome   = pathname === `/${locale}` || pathname === "/" || pathname === `/${locale}/`;
    const isRtl    = locale === "ar";

    /* ── change bg on scroll (desktop only) ────────── */
    useEffect(() => {
        if (!isHome) return;
        const onScroll = () => setScrolled(window.scrollY > 470);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    /* ── nav items ─────────────────────────────────── */
    const links = [
        { label: t("home"),    id: "hero"     },
        { label: t("about"),   id: "about"    },
        { label: t("goals"),   id: "goals"    },
        { label: t("stats"),   id: "stats"    },
        { label: t("projects"),id: "projects" },
        { label: t("partners"),id: "partners" },
        { label: t("contact"), id: "contact"  }
    ];

    /* ── smart navigation for anchors / pages ──────── */
    const handleNav = (hash: string) => {
        if (pathname === `/${locale}` || pathname === "/") {
            document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/${locale}/#${hash}`);
        }
        setOpen(false);
    };

    /* ── styles (mobile bar is solid; desktop gets blur) ─ */
    const base =
        "fixed inset-x-0 top-0 z-20 flex items-center h-14 md:h-16 transition-all duration-300";
    const mobile = "bg-white text-primary shadow-lg";
    const desktop = scrolled
        ? "md:bg-white/80 md:text-black md:shadow-lg"
        : "md:bg-white/10 md:backdrop-blur-sm md:text-black";

    return (
        <>
            {/* ==== TOP BAR ==================================================== */}
            <nav className={`${base} ${mobile} ${desktop}`}>
                <div className="container mx-auto flex w-full items-center justify-between px-4 py-2 md:py-3">
                    {/* Logo */}
                    <Link href={`/${locale}`} className="block shrink-0">
                        <Image src="/logo.png" width={50} height={24} alt="Althyab Logo" />
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden items-center gap-6 md:flex">
                        <LanguageSelect />
                        <ul className="flex gap-6">
                            {links.map(({ label, id }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => handleNav(id)}
                                        className="font-semibold  hover:text-accent transition-colors"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile burger */}
                    <button className="text-2xl md:hidden" onClick={() => setOpen(true)}>
                        <HiMenu />
                    </button>
                </div>
            </nav>

            {/* ==== MOBILE OVERLAY + DRAWER =============================== */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                    onClick={() => setOpen(false)}
                >
                    <aside
                        className={`
              absolute top-0 h-full w-64 space-y-6 bg-white p-6 shadow-xl
              transition-transform duration-300
              ${isRtl ? "left-0" : "right-0"}
            `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="mb-4 text-3xl" onClick={() => setOpen(false)}>
                            <HiX />
                        </button>

                        <LanguageSelect />

                        {links.map(({ label, id }) => (
                            <button
                                key={id}
                                onClick={() => handleNav(id)}
                                className="block py-2 text-lg font-bold hover:text-accent"
                            >
                                {label}
                            </button>
                        ))}
                    </aside>
                </div>
            )}
        </>
    );
}
