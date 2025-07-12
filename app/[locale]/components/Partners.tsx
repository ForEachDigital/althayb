"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { partners } from "@/app/lib/demo-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Partners() {
    const t = useTranslations("Partners");

    return (
        <section id="partners" className="py-16 bg-gray-50">
            <div className="container mx-auto max-w-5xl px-4 text-center">
                <h2 className="mb-8 text-3xl font-semibold font-montserrat text-primary-600">
                    {t("title")}
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    centeredSlides
                    loop
                    speed={6000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    spaceBetween={32}
                    className="partners-carousel"
                >
                    {partners.map(({ id, name, logo, url }) => (
                        <SwiperSlide key={id} className="flex justify-center">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative h-24 w-32 sm:h-28 sm:w-40 opacity-80 transition-opacity hover:opacity-100"
                            >
                                <Image
                                    src={logo}
                                    alt={name}
                                    fill
                                    className="object-contain"
                                    sizes="160px"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .partners-carousel .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.4s ease, opacity 0.4s ease;
                }
                .partners-carousel .swiper-slide-active {
                    transform: scale(1.15);
                    opacity: 1;
                }
                .partners-carousel .swiper-slide-next,
                .partners-carousel .swiper-slide-prev {
                    transform: scale(0.9);
                    opacity: 0.9;
                }
            `}</style>
        </section>
    );
}
