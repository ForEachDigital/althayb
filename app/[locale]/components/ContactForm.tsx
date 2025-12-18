"use client";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import { useTranslations } from "next-intl";

const inputStyle =
    "w-full rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 dark:bg-gray-800/80 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:hover:border-gray-500 dark:focus:border-accent dark:focus:bg-gray-800";

export default function ContactForm() {
    const t = useTranslations("Contact");

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const form = e.currentTarget; // Store form reference before async
        const formData = new FormData(form);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            message: formData.get("message") as string,
        };

        if (!data.name || !data.email || !data.message) {
            setError("Please fill in all required fields");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSent(true);
            form.reset(); // Use stored reference
        } catch (err) {
            console.error("Contact form error:", err);
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (sent)
        return (
            <div className="rounded-xl bg-green-50 border-2 border-green-200 p-6 text-center shadow-sm dark:bg-green-900/20 dark:border-green-700">
                <p className="text-green-700 font-semibold dark:text-green-400">{t("success")}</p>
            </div>
        );

    return (
        <form onSubmit={handleSubmit} className="flex flex-col my-5 gap-5">
            {error && (
                <div className="rounded-xl bg-red-50 border-2 border-red-200 p-4 text-center shadow-sm dark:bg-red-900/20 dark:border-red-700">
                    <p className="text-red-700 text-sm dark:text-red-400">{error}</p>
                </div>
            )}
            <input
                className={inputStyle}
                name="name"
                placeholder={t("name")}
                required
            />
            <input
                className={inputStyle}
                type="email"
                name="email"
                placeholder={t("email")}
                required
            />
            <input
                className={inputStyle}
                type="tel"
                name="phone"
                placeholder={t("phone")}
            />
            <textarea
                className={inputStyle}
                name="message"
                rows={5}
                placeholder={t("message")}
                required
            />

            <Button
                type="submit"
                label={t("send")}
                loading={loading}
                fullWidth
                variant="primary"
            />
        </form>
    );
}
