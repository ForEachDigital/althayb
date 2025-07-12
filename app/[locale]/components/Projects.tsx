"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import ProjectCard from "@/app/[locale]/components/ProjectCard";
import {projects} from "@/app/lib/demo-data";

export default function HomeProjectsSection() {
    const t = useTranslations("Projects");
    const locale = useLocale() as "ar" | "en";

    return (
        <section id="projects" aria-label="Featured Projects" className="bg-gray-50 py-20">
            {/* full-width wrapper */}
            <div className="w-full px-4">
                <h2 className="mb-12 text-center font-palanquin text-4xl font-bold text-primary">
                    {t("title")}
                </h2>

                {/* exactly 3 cards */}
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>

                {/* view-all link */}
                <div className="mt-12 text-center">
                    <Link
                        href={`/${locale}/projects`}
                        className="inline-block font-montserrat text-3xl font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
                    >
                        {t("viewAll")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
