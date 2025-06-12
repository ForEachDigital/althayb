

"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import {Project} from "@/app/lib/demo-projects";

/* Slide-in via AOS; index passed from grid */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    const t = useTranslations("Projects");
    const direction = index % 2 === 0 ? "fade-right" : "fade-left";

    return (
        <article
            data-aos={direction}
            className="overflow-hidden rounded-2xl bg-white shadow-sm lg:flex lg:gap-8"
        >
            {/* Cover */}
            <div className="relative h-72 w-full lg:h-auto lg:w-1/2 xl:w-1/3">
                <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6 lg:w-1/2 xl:w-2/3">
                <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-accent" />
              {project.location}
          </span>
                    <span>• {project.area}</span>
                    <span
                        className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                            project.status === "completed"
                                ? "bg-success/10 text-success"
                                : "bg-accent/10 text-accent"
                        }`}
                    >
            {t(project.status)}
          </span>
                </div>

                <p className="line-clamp-3 text-gray-700">{project.short}</p>
            </div>
        </article>
    );
}


