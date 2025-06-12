

import Image from "next/image";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import ContactForm from "@/app/[locale]/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact",
};

export default function ContactPage() {
    const t = useTranslations("Contact");

    return (
        <main className="bg-gray-50 py-20">
            <div className="container  mx-auto grid justify-center items-center max-w-6xl gap-12 px-4 md:grid-cols-2">
                {/* Illustration / hero side */}
                <div className="relative hidden h-[450px] w-full md:block">
                    <Image
                        src="/logo.png" /* add any nice free image */
                        alt="Contact illustration"
                        fill
                        className="object-cover rounded-3xl shadow-lg"
                        priority
                    />
                </div>

                {/* Form side */}
                <div className="flex flex-col justify-center">
                    <h1 className="mb-6 text-4xl font-bold text-primary font-palanquin">
                        {t("pageTitle")}
                    </h1>
                    <p className="mb-10 max-w-md text-gray-600">{t("pageSubtitle")}</p>

                    <ContactForm />
                </div>
            </div>
        </main>
    );
}


