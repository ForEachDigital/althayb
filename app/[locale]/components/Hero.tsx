"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";

export default function Hero() {
    const [hasMounted, setHasMounted] = useState(false);
    const t = useTranslations("Hero");
    const locale = useLocale();

    useEffect(() => setHasMounted(true), []);


    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            {hasMounted && (
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/hero2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/placeholder.jpg"
                />
            )}

            <div
                className="relative z-10 flex h-full flex-col items-center justify-center bg-black/50 px-4 text-center text-white">
                <Image
                    src="/althyab_white.svg"
                    alt="Althyab"
                    width={400}
                    height={250}
                        className="object-contain relative block h-60 w-100 shrink-0"
                    priority
                />

                <h1 className="mb-4 text-4xl font-bold font-montserrat md:text-6xl">{t("headline")}</h1>
                <p className="mb-10 max-w-xl text-lg  font-montserrat md:text-2xl">{t("subheading")}</p>

                {/* CTA buttons --------------------------------------------------- */}
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Primary | glide gradient */}
                    <Link href={`/${locale}/projects`} className="group relative">
                        <button
                            // onClick={handleScroll}
                            className="relative overflow-hidden  rounded-full px-15 py-4 font-bold text-white shadow-lg
               [background-size:400%] bg-gradient-to-r from-accent via-primary to-success
               transition-transform duration-300 hover:scale-110"
                            style={{animation: "gradient-x 6s ease infinite"}}
                        >
                            <span className="relative z-10 font-montserrat ">{t("ctaProjects")}</span>

                            {/* sheen */}
                            <span
                                className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:-translate-x-full
                 before:bg-white/40 before:blur-[6px] before:content-[''] hover:before:animate-[sheen_1.2s_ease]"
                            />
                        </button>
                    </Link>


                    {/* Secondary | outline morph */}
                    <Link href={`/${locale}/contact`} className="group  font-montserrat relative">
    <span
        className="relative z-10 flex items-center gap-2 rounded-full px-10 py-4 font-bold
                 text-white transition-transform duration-300 group-hover:scale-105"
    >
      {t("ctaContact")}
        {/* arrow */}
        <svg
            className="h-4 w-4 -translate-x-1 transition-transform duration-300 group-hover:translate-x-0"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
        <path d="M5 12h14M13 5l7 7-7 7"/>
      </svg>
    </span>

                        {/* border → fill overlay */}
                        <span
                            className="absolute inset-0 rounded-full border-2 border-primary transition-[clip-path] duration-500
                 group-hover:[animation:fillMorph_.5s_forwards] group-hover:bg-primary/90"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
