import { notFound } from "next/navigation";
import Gallery from "@/app/[locale]/projects/Gallery";
import ProjectMeta from "@/app/[locale]/projects/Meta";
import StatusBadge from "@/app/[locale]/projects/StatusBadge";
import {projects} from "@/app/lib/demo-data";
import ProjectMap from "@/app/[locale]/projects/ProjectMap";
import ContactActions from "@/app/[locale]/projects/ContactActions";
import InternalPhotos from "@/app/[locale]/projects/InternalPhotos";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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
        <main className="container mx-auto max-w-5xl px-4 py-24 space-y-14 bg-gray-50">
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

                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        // نضيف Tailwind أو أي تنسيق إضافي للـ<strong>
                        strong: ({...props}) =>
                            <strong className="font-bold text-xl" {...props} />,
                        p: ({...props}) =>
                            <p className=" leading-relaxed  text-xl text-gray-700 " {...props} />,
                        ul: ({...props}) =>
                            <ul className="list-disc list-inside" {...props} />,
                        li: ({...props}) =>
                            <li className="leading-relaxed text-xl text-gray-700" {...props} />,
                        a: ({...props}) =>
                            <a className="text-primary hover:underline" {...props} />,
                        br: ({...props}) =>
                            <br className="my-2" {...props} />,
                    }}
                >
                    {project.description[mylocale]}
                </ReactMarkdown >

            </section>

            <InternalPhotos images={project.internalPhotos} />
            {/* Dynamic map */}

            <ProjectMap coordinates={project.coordinates} />

            <ContactActions
                phone="+966555000000"
                whatsapp="201009051798"
            />
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
