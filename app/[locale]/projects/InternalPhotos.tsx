

/* --------------------------------------------------------------
   app/components/projects/InternalPhotos.tsx
-------------------------------------------------------------- */
"use client";

import Gallery from "@/app/[locale]/projects/Gallery";
import { useTranslations } from "next-intl";

interface Props {
    images: string[];        // internal photos only
}

export default function InternalPhotos({ images }: Props) {
    const t = useTranslations("Projects");   // "الصور الداخلية للمشروع" / "Project Interiors"

    // Skip rendering if no internal photos were provided
    if (!images || images.length === 0) return null;

    return (
        <section id="internal-photos" className="py-16 space-y-8">
            <h2 className="text-center text-2xl font-bold text-primary">
                {t("internalPhotos")}
            </h2>

            {/* Re-use the interactive Gallery component */}
            <Gallery images={images} />
        </section>
    );
}
