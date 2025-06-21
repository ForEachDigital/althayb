

"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import clsx from "clsx";

/** Change or fetch these keys from your CMS if you like */
export interface Socials {
    phone?: string;      // +966 5 555 5555
    whatsapp?: string;   // +966 5 555 5555
}

export default function FloatingContact({ socials }: { socials: Socials }) {
    const [open] = useState(true);           // always open; remove the state if you
                                             // never plan to re-enable the toggle
    const { phone = "", whatsapp = "" } = socials ?? {};
    if (!phone && !whatsapp) return null;

    return (
        <div className="fixed bottom-6 end-6 z-40 md:bottom-8 md:end-8">
            <div
                className={clsx(
                    "flex flex-col gap-5 transition-all duration-200",
                    open ? "opacity-100" : "pointer-events-none opacity-0"
                )}
            >
                {whatsapp && (
                    <a
                        href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-dance flex h-11 w-11 items-center justify-center
                       rounded-full bg-[#25D366] text-white shadow-lg
                       hover:scale-110 md:h-12 md:w-12"
                    >
                        <FaWhatsapp size={30} />
                    </a>
                )}

                {phone && (
                    <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="animate-dance flex h-11 w-11 items-center justify-center
                       rounded-full bg-blue-600 text-white shadow-lg
                       hover:scale-110 md:h-12 md:w-12"
                    >
                        <FaPhoneAlt size={18} />
                    </a>
                )}
            </div>
        </div>
    );
}


