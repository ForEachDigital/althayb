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

                {/* Developer Credit - Enhanced */}
                <div className="group relative mt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {/* Decorative Border */}
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm transition-all duration-500 group-hover:via-accent/40" />
                    
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-white/10 hover:shadow-xl hover:shadow-accent/10">
                        {/* Animated Background Gradient */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shine group-hover:opacity-100" />
                        
                        {/* Content */}
                        <div className="relative flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-white/90">Crafted with</span>
                                
                                {/* Animated Heart */}
                                <span className="relative inline-flex h-5 w-5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" style={{ animationDuration: '2s' }} />
                                    <svg 
                                        className="relative h-5 w-5 animate-pulse text-accent drop-shadow-[0_0_8px_rgba(184,150,39,0.6)]" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                        style={{ animationDuration: '1.5s' }}
                                    >
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                
                                <span className="text-sm font-medium text-white/90">by</span>
                            </div>
                            
                            {/* Foreach Link with Enhanced Style */}
                            <Link 
                                href="https://foreachtech.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent/80 px-4 py-1.5 font-bold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-105 hover:from-accent/90 hover:to-accent hover:shadow-xl hover:shadow-accent/50"
                            >
                                {/* Company Logo/Icon */}
                                <svg className="h-4 w-4 transition-transform duration-300 group-hover/link:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                
                                <span className="relative text-sm tracking-wide">
                                    Foreach
                                    {/* Sparkles */}
                                    <span className="pointer-events-none absolute -right-2 -top-1 h-1.5 w-1.5 animate-sparkle rounded-full bg-white" style={{ animationDelay: '0s' }} />
                                    <span className="pointer-events-none absolute -left-1 -top-2 h-1 w-1 animate-sparkle rounded-full bg-white" style={{ animationDelay: '0.7s' }} />
                                    <span className="pointer-events-none absolute -bottom-1 right-0 h-1 w-1 animate-sparkle rounded-full bg-white" style={{ animationDelay: '1.4s' }} />
                                </span>
                                
                                {/* Arrow Icon */}
                                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Corner Decorations */}
                        <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-accent/40 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-accent" />
                        <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-accent/40 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:border-accent" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
