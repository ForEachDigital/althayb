"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden">
            {hasMounted && (
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/placeholder.jpg"
                />
            )}

            <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/50 px-4 text-center text-white">


                    <Image
                        src="/logo.png"
                        alt="Althyab"
                        width={200}
                        height={200}
                        className="object-contain relative block h-80 w-80 shrink-0"
                        priority
                    />

                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                    حلول عقارية ترتقي بالطموح
                </h1>
                <p className="max-w-xl text-lg md:text-2xl">
                    نبني اليوم مجتمعات الغد في المملكة العربية السعودية
                </p>
            </div>
        </section>
    );
}

