"use client";
import Image from "next/image";
import { MapPin, CalendarClock } from "lucide-react";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import {Project} from "@/app/lib/demo-data";

type Props = {
    project: Project;
    index?: number;          // allow optional for AOS direction
    aos?: boolean;           // toggle AOS when used in grid
    tall?: boolean;          // true on home → bigger photo
};

export default function ProjectCard({ project, index = 0, aos, tall }: Props) {
    const coverHeight = tall ? "h-70 lg:h-[300px]" : "h-72";

    return (
        <article
            data-aos={aos ? (index % 2 === 0 ? "fade-right" : "fade-left") : undefined}
            className="group  font-montserrat overflow-hidden rounded-3xl bg-white shadow-md transition hover:shadow-2xl md:flex md:gap-8"
        >
            {/* Cover image */}
            <div className={`relative w-full md:w-1/3 ${coverHeight}`}>
                <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 50vw"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6 md:w-2/3">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    {/* Location */}
                    <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-accent" />
                        {project.location}
          </span>

                    {/* Date */}
                    <span className="flex items-center gap-1">
            <CalendarClock className="h-4 w-4 text-accent" />
                        {format(new Date(project.date), "yyyy-MM-dd")}
          </span>
                </div>

                {/* Description */}
                <p className="line-clamp-3 text-gray-700 leading-relaxed">
                    {project.shortDescription}
                </p>
            </div>
        </article>
    );
}



