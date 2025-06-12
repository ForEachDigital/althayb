"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {Facebook, InstagramIcon} from "lucide-react";
import {AiOutlineWhatsApp} from "react-icons/ai";


export default function SiteFooter() {
    const t = useTranslations("Footer");
    const year = new Date().getFullYear();

    const socials = [
        { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61576235373156", icon: Facebook },
        { name: "Instagram", href: "https://www.instagram.com/foreach_4h/", icon: InstagramIcon },
        { name: "WhatsApp", href: "https://wa.me/966000000000", icon: AiOutlineWhatsApp },
    ];

    return (
        <footer className="relative bg-primary text-white">
            {/* Decorative wave */}
            <svg
                className="absolute -top-1 w-full text-primary"
                viewBox="0 0 1440 60"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0 C320,60 640,60 960,0 C1280,-60 1600,-60 1920,0 L1920,60 L0,60 Z"
                    fill="currentColor"
                />
            </svg>

            <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-12">
                {/* Logo */}
                <Link href="#hero" className="relative block h-30 w-36">
                    <Image
                        src="/logo.svg"
                        alt="Althyab"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Social links */}
                <div className="flex gap-6">
                    {socials.map(({ name, href, icon: Icon }) => (
                        <Link
                            key={name}
                            href={href}
                            target="_blank"
                            aria-label={name}
                            className="hover:text-accent transition"
                        >
                            <Icon className="h-8 w-8" />
                        </Link>
                    ))}
                </div>

                {/* Rights line */}
                <p className="text-center text-sm opacity-85">
                    {t("rights", { year })}
                </p>
            </div>
        </footer>
    );
}
