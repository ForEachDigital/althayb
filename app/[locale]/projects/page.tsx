/* app/[locale]/projects/page.tsx */
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import ProjectsGrid from "@/app/[locale]/projects/ProjectsGrid";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
    const t = useTranslations("Projects");

    return (
        <main className="bg-gray-50 py-30">
            {/* full-width wrapper (no max-w) */}
            <div className="w-full px-4">
                <h1 className="mb-12 text-center font-palanquin text-4xl font-bold text-primary">
                    {t("pageTitle")}
                </h1>

                {/* responsive grid (1-2-3 cols) defined inside ProjectsGrid */}
                <ProjectsGrid />
            </div>
        </main>
    );
}
