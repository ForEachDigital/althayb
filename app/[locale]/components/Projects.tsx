"use client";
import Image from "next/image";
import { projects } from "@/app/lib/demo-data";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations("Projects");

    return (
        <section id="projects" className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-center text-4xl font-bold text-primary font-palanquin">
                    {t("title")}
                </h2>

                <div className="space-y-20">
                    {projects.map((proj, i) => (
                        <article
                            key={proj.id}
                            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                            className="overflow-hidden rounded-2xl bg-white shadow-sm md:flex md:gap-6"
                        >
                            {/* Taller cover image */}
                            <div className="relative h-80 w-full md:h-auto md:w-1/3">
                                <Image
                                    src={proj.gallery[0]}
                                    alt={proj.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col p-6 md:w-2/3">
                                <h3 className="mb-1 text-2xl font-semibold text-primary">
                                    {proj.title}
                                </h3>

                                {proj.location && (
                                    <div className="mb-4 flex items-center gap-2 text-gray-500">
                                        <MapPin className="h-5 w-5 text-accent" />
                                        <span>{proj.location}</span>
                                    </div>
                                )}

                                <p className="line-clamp-3 text-gray-700 leading-relaxed font-montserrat">
                                    {proj.shortDescription}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
