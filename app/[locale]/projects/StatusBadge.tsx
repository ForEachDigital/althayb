

"use client";
import { useTranslations } from "next-intl";
import { ProjectStatus } from "@/app/lib/demo-data";

const style: Record<ProjectStatus, string> = {
    for_sale: "bg-green-600 text-white",
    under_construction: "bg-yellow-500 text-white",
    sold: "bg-gray-400 text-white",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
    const t = useTranslations("Status");
    return (
        <span
            className={`${style[status]} rounded-full px-3 py-1 text-xl  font-montserrat font-semibold shadow-lg`}
        >
      {t(status)}
    </span>
    );
}


