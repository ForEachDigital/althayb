import { notFound } from "next/navigation";
import Gallery from "@/app/[locale]/projects/Gallery";
import ProjectMeta from "@/app/[locale]/projects/Meta";
import StatusBadge from "@/app/[locale]/projects/StatusBadge";
import {projects} from "@/app/lib/demo-data";

/* params arrives as Promise because of outer [locale] */
interface Params { locale: string; id: string }

export default async function ProjectDetails({
                                                 params,
                                             }: { params: Promise<Params> }) {
    const { id, locale } = await params;

    const mylocale = locale as 'ar' | 'en';
    const project = projects.find((p) => p.id === id);
    if (!project) notFound();

    return (
        <main className="container mx-auto max-w-5xl px-4 py-24 space-y-14">
            {/* gallery */}
            <Gallery images={project.gallery} video={project.video} />

            {/* header */}
            <header className="flex flex-col gap-2" data-aos="fade-right">
                <h1 className="text-3xl font-bold font-montserrat text-primary">
                    {project.title[mylocale]}
                </h1>

                <div className="flex items-center gap-4">
                    <StatusBadge status={project.status} />
                    <ProjectMeta
                        date={project.date}
                        location={project.location[mylocale]}
                    />
                </div>
            </header>

            {/* description */}
            <section
                className="space-y-4 leading-relaxed text-gray-800 prose max-w-none"
                data-aos="fade-left"
            >
                <p className="text-lg font-semibold">
                    {project.shortDescription[mylocale]}
                </p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: project.description[mylocale],
                    }}
                />
            </section>
        </main>
    );
}

/* static params for prerender */
export async function generateStaticParams() {
    const locales = ["ar", "en"];
    return locales.flatMap((locale) =>
        projects.map((p) => ({ locale, id: p.id })),
    );
}
