"use client";
import React, { useState } from "react";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "@/lib/firebase";
import { Button } from "@/components/Button";
import { useTranslations } from "next-intl";

const inputStyle =
    "w-full rounded-xl border border-outline/60 bg-white px-4 py-3 text-sm shadow-sm focus:border-primary focus:ring-1 focus:ring-primary/40 outline-none transition";

export default function ContactForm() {
    const t = useTranslations("Contact");

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // const data = Object.fromEntries(
        //     new FormData(e.currentTarget)
        // ) as Record<string, string>;
        //
        // if (!data.name || !data.email || !data.message) return; // basic check
        //
        // setLoading(true);
        // try {
        //     await addDoc(collection(db, "contact_messages"), {
        //         ...data,
        //         createdAt: serverTimestamp(),
        //     });
        //     setSent(true);
        // } finally {
        //     setLoading(false);
        // }
    }

    if (sent)
        return (
            <p className="rounded-xl bg-success/10 p-6 text-center text-success">
                {t("success")}
            </p>
        );

    return (
        <form onSubmit={handleSubmit} className="flex flex-col my-5 gap-5">
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
