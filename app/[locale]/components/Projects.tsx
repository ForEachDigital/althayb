"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {projects} from "@/app/lib/demo-data";
import ProjectCard from "@/app/[locale]/components/ProjectCard";

export default function HomeProjectsSection() {
    const t = useTranslations("Projects");
    const locale = useLocale();

    return (
        <section id="projects" className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-center text-4xl font-bold text-primary font-palanquin">
                    {t("title")}
                </h2>

                {/* — cards — */}
                <div className="space-y-16">
                    {projects.slice(0, 4).map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} aos tall />
                    ))}
                </div>

                {/* — “view all” text button — */}
                <div className="mt-12 text-center">
                    <Link
                        href={`/${locale}/projects`}
                        className="inline-block text-3xl text-primary font-montserrat font-semibold underline underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                        {t("viewAll")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
