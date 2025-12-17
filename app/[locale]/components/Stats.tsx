"use client";
import { stats } from "@/app/lib/demo-data";
import { useTranslations } from "next-intl";
import {
    Ruler,
    Building2,
    LandPlot,
    Boxes,
} from "lucide-react";
import {
    useEffect,
    useMemo,
    useRef,
    useState,
    ComponentType,
} from "react";

/* ─── Shared hooks ─── */

function useInViewport(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            options
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, [options]);

    return { ref, visible };
}

function useCount(target: number, start: boolean, duration = 1500) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;
        let t0: number | null = null;

        const step = (ts: number) => {
            if (t0 === null) t0 = ts;
            const p = Math.min((ts - t0) / duration, 1);
            setValue(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);

    return value;
}

/* ─── Child card component ─── */

type StatCardProps = {
    label: string;
    number: number;
    prefix?: string;
    suffix?: string;
    icon: ComponentType<{ className?: string; strokeWidth?: number }>;
    visible: boolean;
    fmt: Intl.NumberFormat;
};

function StatCard({
                      label,
                      number,
                      prefix = "",
                      suffix = "",
                      icon: Icon,
                      visible,
                      fmt,
                  }: StatCardProps) {
    const current = useCount(number, visible);

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:scale-105">
                <Icon className="h-6 w-6" strokeWidth={2} />
            </div>

            <div className="mb-2 flex items-baseline gap-1 font-montserrat">
                <span
                    dir="ltr"
                    className="whitespace-nowrap text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-primary"
                >
                    {prefix}
                    {fmt.format(current)}
                    {suffix}
                </span>
            </div>

            <p className="text-sm font-semibold leading-snug text-gray-600">{label}</p>
        </div>
    );
}

/* ─── Stats section ─── */

export default function Stats() {
    const t = useTranslations("Stats");
    const { ref, visible } = useInViewport({ rootMargin: "0px 0px -20% 0px" });
    const fmt = useMemo(() => new Intl.NumberFormat("en-US"), []);
    const nbsp = "\u00A0";

    const cards = [
        {
            label: t("projectsCount"),
            number: stats.projectsCount,
            prefix: "+",
            icon: Boxes,
        },
        {
            label: t("landArea"),
            number: stats.landAreaM2,
            prefix: "+",
            suffix: `${nbsp}${t("m2Suffix")}`,
            icon: LandPlot,
        },
        {
            label: t("builtArea"),
            number: stats.builtAreaM2,
            prefix: "+",
            suffix: `${nbsp}${t("m2Suffix")}`,
            icon: Building2,
        },
        {
            label: t("unitsCount"),
            number: stats.unitsCount,
            prefix: "+",
            suffix: `${nbsp}${t("unitSuffix")}`,
            icon: Ruler,
        },
    ];

    return (
        <section id="stats" ref={ref} aria-label="Company Statistics" className="bg-gradient-to-b from-white to-primary-50/60 py-20">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-center text-4xl font-bold text-primary font-palanquin">
                    {t("title")}
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card) => (
                        <StatCard
                            key={card.label}
                            {...card}
                            visible={visible}
                            fmt={fmt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
