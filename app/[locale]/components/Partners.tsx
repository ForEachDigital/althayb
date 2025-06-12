import Image from "next/image";
import {partners} from "@/app/lib/demo-data";

export default function Partners() {
    return (
        <section id="partners" className="py-16">
            <div className="container mx-auto max-w-5xl px-4 text-center">
                <h2 className="mb-8 text-3xl font-semibold text-primary-600">
                    شركاؤنا
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-8">
                    {partners.map(({ name, logo, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative h-30 w-40 opacity-80 transition-opacity hover:opacity-100"
                        >
                            <Image
                                src={logo}
                                alt={name}
                                fill
                                className="object-contain"
                                sizes="160px"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}


