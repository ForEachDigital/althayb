"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Facebook, InstagramIcon } from "lucide-react";
import {
    AiOutlineWhatsApp,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaTiktok, FaTelegramPlane, FaSnapchatGhost } from "react-icons/fa";

export default function SiteFooter() {
    const t = useTranslations("Footer");
    const year = new Date().getFullYear();

    const socials = [
        { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61576235373156", icon: Facebook },
        { name: "Instagram", href: "https://www.instagram.com/foreach_4h/", icon: InstagramIcon },
        { name: "WhatsApp", href: "https://wa.me/+966599904086", icon: AiOutlineWhatsApp },
        { name: "Twitter", href: "https://x.com", icon: AiOutlineTwitter },
        { name: "TikTok", href: "https://tiktok.com", icon: FaTiktok },
        { name: "Snapchat", href: "https://snapchat.com", icon: FaSnapchatGhost },
        { name: "Telegram", href: "https://t.me", icon: FaTelegramPlane },
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
                <Link href="#hero" className="relative block h-40 w-56">
                    <Image
                        src="/althyab_white.svg"
                        alt="Althyab"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Social links */}
                <div className="flex flex-wrap justify-center gap-4">
                    {socials.map(({ name, href, icon: Icon }) => (
                        <Link
                            key={name}
                            href={href}
                            target="_blank"
                            aria-label={name}
                            className="hover:text-accent transition"
                        >
                            <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                        </Link>
                    ))}
                </div>

                {/* Rights line */}
                <p className="text-center text-sm opacity-85">
                    {t("rights", { year })}
                </p>

                {/* Developer Credit */}
                <div className="group relative mt-2">
                    <div className="flex items-center justify-center gap-2 text-xs opacity-60 transition-all duration-300 group-hover:opacity-100">
                        <span>Crafted with</span>
                        <span className="relative inline-flex h-4 w-4">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-75" />
                            <svg 
                                className="relative h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span>by</span>
                        <Link 
                            href="https://foreachtech.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative font-semibold text-accent transition-all duration-300 hover:text-white"
                        >
                            <span className="relative z-10">Foreach</span>
                            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                            {/* Sparkle effect on hover */}
                            <span className="pointer-events-none absolute -right-1 -top-1 h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
