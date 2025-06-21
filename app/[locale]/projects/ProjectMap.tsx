

"use client";
import { useTranslations } from "next-intl";

export default function ProjectMap({
                                       coordinates,
                                   }: {
    coordinates: { lat: number; lng: number };
}) {
    const t = useTranslations("map");          // title string: { "title": "الموقع" / "Location" }
    const { lat, lng } = coordinates;
    const src = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

    return (
        <section id="location" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-800">
                    {t("title")}
                </h2>

                <div className="h-96 w-full overflow-hidden rounded-xl shadow-lg">
                    <iframe
                        title="project map"
                        src={src}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}


