"use client";
import {projects} from "@/app/lib/demo-data";

import ProjectCard from "@/app/[locale]/components/ProjectCard";

export default function ProjectsGrid() {
    return (
        <div className="w-full px-4">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>
        </div>
    );
}
