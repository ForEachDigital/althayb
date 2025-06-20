"use client";
import { useTranslations } from "next-intl";
import {
    Building2,
    ThumbsUp,
    Cpu,
    TrendingUp,
    ShieldCheck, CheckCircle2,
} from "lucide-react";

const icons = [Building2, ThumbsUp, Cpu, TrendingUp, ShieldCheck];

export default function Goals() {
    const t = useTranslations("Goals");
    const items = t.raw("list") as string[];         // array from JSON

    return (
        <section id="goals" className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="mb-10 text-center text-4xl font-bold text-primary font-montserrat">
                    {t("title")}
                </h2>

                {/* Card grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((goal, i) => {
                        const Icon = icons[i] ?? CheckCircle2;
                        return (
                            <div
                                key={goal}
                                className="group rounded-2xl border border-accent/30 bg-white p-8 shadow-sm transition hover:shadow-lg"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                                    <Icon className="h-6 w-6" strokeWidth={2} />
                                </div>
                                <p className="text-lg  leading-relaxed text-gray-700 font-montserrat">
                                    {goal}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
