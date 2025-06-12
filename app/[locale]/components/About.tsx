"use client";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("About");

    return (
        <section id="about" className="bg-primary text-white py-20">
            <div className="container mx-auto max-w-4xl px-4 text-center">
                <h2 className="mb-6 text-4xl font-bold font-palanquin">{t("title")}</h2>
                <p className="text-lg leading-loose text-gray-100 font-montserrat">
                    {t("paragraph")}
                </p>
            </div>
        </section>
    );
}
