

/* --------------------------------------------------------------
   app/components/projects/InternalPhotos.tsx
-------------------------------------------------------------- */
"use client";

import Gallery from "@/app/[locale]/projects/Gallery";
import { useTranslations } from "next-intl";

interface Props {
    images: string[];        // internal photos only
    video?: string;          // internal video (optional)
}

export default function InternalPhotos({ images, video }: Props) {
    const t = useTranslations("Projects");   // "الصور الداخلية للمشروع" / "Project Interiors"

    // Skip rendering if no internal photos or video were provided
    const hasImages = images && images.length > 0;
    const hasVideo = video && video.length > 0;
    
    if (!hasImages && !hasVideo) return null;

    return (
        <section id="internal-photos" className="py-16 space-y-8">
            <h2 className="text-center text-2xl font-bold text-primary">
                {t("internalPhotos")}
            </h2>

            {/* Show internal video if available */}
            {hasVideo && (
                <div className="w-full max-w-3xl mx-auto">
                    <video
                        controls
                        className="w-full max-h-[500px] rounded-2xl shadow-lg object-contain"
                        preload="metadata"
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {/* Show internal photos if available */}
            {hasImages && <Gallery images={images} />}
        </section>
    );
}
