"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const nav = [
    { label: "من نحن", href: "#about" },
    { label: "أهدافنا", href: "#goals" },
    { label: "الإحصائيات", href: "#stats" },
    { label: "مشاريعنا", href: "#projects" },
    { label: "شركاؤنا", href: "#partners" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 64);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 shadow-md backdrop-blur-none"
                    : "bg-white/10 backdrop-blur-lg"
            } ${scrolled ? "text-black" : "text-white"}`}
        >
            <div className="container mx-auto w-full flex h-16 items-center justify-between px-4">
                {/* —— Logo —— */}
                <a href="#hero" onClick={handleScroll("#hero")} className="relative block h-15 w-32 shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Althyab"
                        fill
                        className="object-contain"
                        priority
                    />
                </a>

                {/* —— Desktop nav —— */}
                <nav className="hidden gap-8 md:flex">
                    {nav.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={handleScroll(href)}
                            className="text-sm font-bold hover:text-primary-500 transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
