"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function CeoSection() {
    const t = useTranslations("ceo");
    const locale = useLocale();
    const isArabic = locale === "ar";

    return (
        <section
            id="ceo"
            className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16"
            aria-labelledby="ceo-heading"
        >
            {/* Animated Background */}
            <AnimatedBackground />

            <div className="container mx-auto max-w-7xl px-4">
                {/* Compact Badge */}
                <div className="mb-6 flex justify-center animate-slide-down">
                    <div className="group relative">
                        <div className="absolute -inset-1 animate-gradient-xy rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur group-hover:opacity-100" />
                        <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary shadow-lg">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                            </span>
                            {t("badge")}
                        </span>
                    </div>
                </div>

                {/* Creative Overlap Layout */}
                <div className="relative mx-auto max-w-5xl">
                    <article className={`group relative flex flex-col gap-6 md:flex-row md:items-center ${isArabic ? "md:flex-row-reverse" : ""}`}>
                        
                        {/* Animated Photo Card - Overlapping */}
                        <div className="relative z-10 mx-auto -mb-8 md:mx-0 md:mb-0 md:-mr-12 animate-slide-right">
                            <div className="group/photo relative">
                                {/* Rotating Gradient Border */}
                                <div className="absolute -inset-2 animate-spin-slow rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-xl transition-opacity duration-500 group-hover/photo:opacity-100" />
                                
                                {/* Photo Card */}
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-3 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                                    {/* Animated Shine Effect */}
                                    <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                    
                                    <div className="relative h-48 w-48 overflow-hidden rounded-2xl md:h-56 md:w-56">
                                        <Image
                                            src="/ceo.jpg"
                                            alt={`${t("name")} - ${t("title")}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/photo:scale-110 group-hover/photo:rotate-2"
                                            sizes="(max-width: 768px) 192px, 224px"
                                            priority
                                        />
                                        {/* Gradient Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/photo:opacity-100" />
                                    </div>

                                    {/* Floating Badge */}
                                    <div className="absolute -bottom-2 -right-2 animate-bounce-slow rounded-full bg-gradient-to-br from-accent to-accent/80 p-3 shadow-xl ring-4 ring-white">
                                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    {/* Floating Particles */}
                                    <div className="absolute -left-2 top-4 h-3 w-3 animate-float rounded-full bg-primary/40 blur-sm" style={{ animationDelay: '0s' }} />
                                    <div className="absolute -right-1 top-12 h-2 w-2 animate-float rounded-full bg-accent/40 blur-sm" style={{ animationDelay: '1.5s' }} />
                                    <div className="absolute bottom-8 left-2 h-2.5 w-2.5 animate-float rounded-full bg-primary/30 blur-sm" style={{ animationDelay: '3s' }} />
                                </div>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="group/content relative flex-1 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl md:p-10 animate-slide-left">
                            {/* Animated Background Gradient */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl transition-transform duration-700 group-hover/content:scale-150" />
                            <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl transition-transform duration-700 group-hover/content:scale-150" />

                            {/* Animated Corner Lines */}
                            <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 border-l-2 border-t-2 border-primary/20 transition-all duration-300 group-hover/content:h-16 group-hover/content:w-16 group-hover/content:border-primary/40" />
                            <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-accent/20 transition-all duration-300 group-hover/content:h-16 group-hover/content:w-16 group-hover/content:border-accent/40" />

                            <div className={`relative space-y-4 ${isArabic ? "text-right" : ""}`}>
                                {/* Name with Typing Animation */}
                                <header className="space-y-1.5">
                                    <h2
                                        id="ceo-heading"
                                        className="font-palanquin text-3xl font-black bg-gradient-to-r from-primary via-primary/80 to-accent bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent md:text-4xl"
                                    >
                                        {t("name")}
                                    </h2>
                                    <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                                        <div className="h-0.5 w-8 animate-expand bg-gradient-to-r from-accent to-accent/50" />
                                        <p className="font-montserrat text-xs font-extrabold uppercase tracking-[0.2em] text-accent animate-fade-in">
                                            {t("title")}
                                        </p>
                                        <div className="h-0.5 w-8 animate-expand bg-gradient-to-l from-accent to-accent/50" style={{ animationDelay: '0.2s' }} />
                                    </div>
                                </header>

                                {/* Message with Quote Styling */}
                                <div className="relative pl-4 md:pl-6">
                                    <div className={`absolute ${isArabic ? 'right-0' : 'left-0'} top-0 h-full w-1 animate-expand-vertical bg-gradient-to-b from-primary via-accent to-transparent`} />
                                    <p className="text-sm leading-relaxed text-gray-700 md:text-base animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                        {t("message")}
                                    </p>
                                </div>

                                {/* Quote Badge */}
                                <footer className="pt-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 px-4 py-2 backdrop-blur-sm">
                                        <svg className="h-4 w-4 animate-pulse text-accent" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-montserrat text-xs italic text-gray-600">
                                            {t("quote")}
                                        </span>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </article>

                    {/* Floating Decorative Elements */}
                    <div className="pointer-events-none absolute -left-4 top-1/2 h-16 w-16 -translate-y-1/2 animate-spin-very-slow rounded-lg border-2 border-dashed border-primary/20" />
                    <div className="pointer-events-none absolute -right-4 top-1/3 h-12 w-12 animate-spin-very-slow rounded-full border-2 border-dashed border-accent/20" style={{ animationDelay: '2s' }} />
                </div>
            </div>
        </section>
    );
}

// Animated Background Component
function AnimatedBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            {/* Animated Gradient Orbs */}
            <div className="absolute left-1/4 top-10 h-64 w-64 animate-morph rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 h-80 w-80 animate-morph rounded-full bg-gradient-to-bl from-accent/15 to-accent/5 blur-3xl" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-10 left-1/3 h-72 w-72 animate-morph rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl" style={{ animationDelay: '4s' }} />
            
            {/* Floating Geometric Shapes */}
            <div className="absolute left-[15%] top-[20%] h-20 w-20 animate-float-rotate opacity-20">
                <div className="h-full w-full rotate-45 bg-gradient-to-br from-primary to-primary/50" />
            </div>
            <div className="absolute right-[20%] top-[60%] h-16 w-16 animate-float-rotate opacity-20" style={{ animationDelay: '1.5s' }}>
                <div className="h-full w-full rounded-full bg-gradient-to-br from-accent to-accent/50" />
            </div>
            <div className="absolute left-[60%] top-[15%] h-12 w-12 animate-float-rotate opacity-20" style={{ animationDelay: '3s' }}>
                <div className="h-full w-full bg-gradient-to-br from-primary to-primary/50" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
            </div>

            {/* Animated Lines */}
            <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0" />
                        <stop offset="50%" stopColor="currentColor" className="text-primary" stopOpacity="1" />
                        <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" className="text-accent" stopOpacity="0" />
                        <stop offset="50%" stopColor="currentColor" className="text-accent" stopOpacity="1" />
                        <stop offset="100%" stopColor="currentColor" className="text-accent" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#line-gradient-1)" strokeWidth="2" className="animate-draw-line" />
                <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#line-gradient-2)" strokeWidth="2" className="animate-draw-line" style={{ animationDelay: '1s' }} />
            </svg>

            {/* Dotted Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    color: '#001B5A'
                }}
            />

            {/* Sparkle Effects */}
            <div className="absolute left-[10%] top-[25%] h-2 w-2 animate-sparkle rounded-full bg-primary" style={{ animationDelay: '0.5s' }} />
            <div className="absolute right-[15%] top-[40%] h-1.5 w-1.5 animate-sparkle rounded-full bg-accent" style={{ animationDelay: '1.5s' }} />
            <div className="absolute left-[70%] top-[70%] h-2 w-2 animate-sparkle rounded-full bg-primary" style={{ animationDelay: '2.5s' }} />
            <div className="absolute right-[45%] top-[15%] h-1.5 w-1.5 animate-sparkle rounded-full bg-accent" style={{ animationDelay: '3.5s' }} />
        </div>
    );
}