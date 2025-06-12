"use client";
import ProjectCard from "./ProjectCard";
import {projects} from "@/app/lib/demo-projects";

export default function ProjectsGrid() {
    return (
        <div className="space-y-20">
            {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
            ))}
        </div>
    );
}


