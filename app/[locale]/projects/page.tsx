

import { Metadata } from "next";
import { useTranslations } from "next-intl";
import ProjectsGrid from "@/app/[locale]/projects/ProjectsGrid";


export const metadata: Metadata = {
    title: "Projects",
};

export default function ProjectsPage() {
    const t = useTranslations("Projects");

    return (
        <main className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <h1 className="mb-12 text-center text-4xl font-bold text-primary font-palanquin">
                    {t("pageTitle")}
                </h1>
                <ProjectsGrid />
            </div>
        </main>
    );
}


