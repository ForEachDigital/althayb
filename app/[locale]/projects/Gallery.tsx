"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {AiFillCloseSquare, AiOutlineCloseSquare} from "react-icons/ai";

interface Props {
    images: string[];
    video?: string;
}

export default function Gallery({ images, video }: Props) {
    const [open, setOpen] = useState(false);
    const [startAt, setStartAt] = useState(0);

    /* tell react-modal where the app root is */
    useEffect(() => {
        Modal.setAppElement("body");
    }, []);

    const openViewer = (idx: number) => {
        setStartAt(idx);
        setOpen(true);
    };

    return (
        <>
            {/* Preview + thumbs */}
            <div className="flex flex-col gap-4">
                <div
                    className="relative h-64 cursor-zoom-in sm:h-96"
                    onClick={() => openViewer(0)}
                >
                    <Image
                        src={images[0]}
                        alt="cover"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                <div className="flex flex-wrap gap-3">
                    {images.map((src, i) => (
                        <div
                            key={src}
                            onClick={() => openViewer(i)}
                            className="relative h-20 w-28 cursor-pointer overflow-hidden rounded-md border"
                        >
                            <Image src={src} alt="" fill className="object-cover" />
                        </div>
                    ))}
                    {video && (
                        <button
                            onClick={() => openViewer(images.length)}
                            className="flex h-20 w-28 items-center justify-center rounded-md border bg-gray-100 text-sm font-semibold"
                        >
                            ▶ Video
                        </button>
                    )}
                </div>
            </div>

            {/* Light-box */}
            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                className="fixed inset-0 flex items-center justify-center bg-black/80 p-4"
                overlayClassName="fixed inset-0 z-50"
            >
                <Swiper
                    initialSlide={startAt}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    centeredSlides      // still fine to keep
                    className="w-full max-w-[90vw] h-[90vh] mx-auto"
                >
                    {images.map((src, i) => (
                        <SwiperSlide           // ① one image only
                            key={src}
                            className="flex items-center justify-center"
                        >
                            {/* ② responsive width <= wrapper */}
                            <Image
                                src={src}
                                alt={`slide-${i}`}
                                fill
                                sizes="(max-width: 768px) 90vw, 1200px"
                                className="max-w-full rounded-lg max-h-[90vh] w-auto object-contain"
                            />
                        </SwiperSlide>
                    ))}

                    {video && (
                        <SwiperSlide className="flex items-center justify-center basis-full">
                            {/* you can let it shrink on narrow screens */}
                            <video
                                src={video}
                                controls
                                className="mx-auto max-h-[90vh] max-w-full rounded-lg"
                            />
                        </SwiperSlide>
                    )}
                </Swiper>


                <button
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 text-3xl text-white"
                >
                    <AiOutlineCloseSquare className="w-12 h-12" />
                </button>
            </Modal>
        </>
    );
}
