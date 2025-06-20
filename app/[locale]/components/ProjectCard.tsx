"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarClock } from "lucide-react";
import { format } from "date-fns";
import { useLocale } from "next-intl";
import {Project} from "@/app/lib/demo-data";

type Props = { project: Project; index?: number };

export default function ProjectCard({ project, index = 0 }: Props) {
    const locale = useLocale();
    return (
        <article
            data-aos={index % 2 ? "fade-left" : "fade-right"}
            className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:shadow-xl"
        >
            <Link href={`/${locale}/projects/${project.id}`} className="block">
                {/* cover */}
                <div className="relative h-72">
                    <Image
                        src={project.gallery[0]}
                        alt={project.title}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* content */}
                <div className="flex flex-col gap-4 p-6 font-montserrat">
                    <h3 className="text-2xl font-semibold text-primary">
                        {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-accent" /> {project.location}
            </span>
                        <span className="flex items-center gap-1">
              <CalendarClock className="h-4 w-4 text-accent" />{" "}
                            {format(new Date(project.date), "yyyy-MM-dd")}
            </span>
                    </div>

                    <p className="line-clamp-3 text-gray-700">{project.shortDescription}</p>
                </div>
            </Link>
        </article>
    );
}
