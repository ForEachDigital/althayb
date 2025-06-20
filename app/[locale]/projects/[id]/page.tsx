import { notFound } from "next/navigation";
import {projects} from "@/app/lib/demo-data";
import ProjectMeta from "@/app/[locale]/projects/Meta";
import Gallery from "@/app/[locale]/projects/Gallery";


/* params arrives as a Promise ⬇ */
interface Params {
    locale: string;
    id: string;
}

export default async function ProjectDetails({
                                                 params,
                                             }: {
    params: Promise<Params>;
}) {
    /* ① await params */
    const { id } = await params;

    /* ② fetch project */
    const project = projects.find((p) => p.id === id);
    if (!project) notFound();

    /* ③ render UI */
    return (
        <main className="container mx-auto max-w-5xl px-4 py-24 space-y-12">
            <h1 className="text-3xl font-bold text-primary">{project.title}</h1>

            <ProjectMeta date={project.date} location={project.location} />

            <Gallery images={project.gallery} video={project.video} />

            <section className="space-y-4 leading-relaxed text-gray-800">
                <p className="text-lg font-semibold">{project.shortDescription}</p>
                <p>{project.description}</p>
            </section>
        </main>
    );
}

/* ------------ static params for SSG ------------- */
export async function generateStaticParams() {
    /* list all locales you support */
    const locales = ["ar", "en"]; // <-- adjust if needed

    return locales.flatMap((locale) =>
        projects.map((p) => ({ locale, id: p.id }))
    );
}
