"use client";

import {projects} from "@/app/lib/demo-data";
import ProjectCard from "@/app/[locale]/components/ProjectCard";

export default function ProjectsGrid() {
    return (
        <div className="space-y-16">
            {projects.map((p) => (
                <ProjectCard key={p.id} project={p} tall={false} />
            ))}
        </div>
    );
}
