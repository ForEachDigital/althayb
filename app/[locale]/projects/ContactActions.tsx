
"use client";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";      // lucide icons
import Link from "next/link";
import {BsWhatsapp} from "react-icons/bs";

interface Props {
    phone: string;               // e.g. "+966 59 990 4086"
    whatsapp: string;            // e.g. "+966 59 990 4086" or "966599904086"
}

export default function ContactActions({ phone, whatsapp }: Props) {
    const t = useTranslations("Contact");
    const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
    const whatsappHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;

    return (
        <section id="contact" className="py-16 bg-primary-50">
            <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
                <h2 className="text-3xl font-extrabold text-primary">{t("title")}</h2>
                <p className="text-gray-700">{t("subtitle")}</p>

                <div className="flex flex-wrap justify-center gap-6">
                    {/* Call */}
                    <Link
                        href={phoneHref}
                        className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
                    >
                        <Phone className="h-5 w-5" />
                        {t("call")}
                    </Link>

                    {/* WhatsApp */}
                    <Link
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                        <BsWhatsapp className="h-5 w-5" />
                        {t("whatsapp")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
