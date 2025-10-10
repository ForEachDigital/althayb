// app/sitemap/route.ts
import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/app/lib/demo-data";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://althyab.com";
const LOCALES = ["en", "ar"];
const STATIC = ["", "projects"]; // "" === home
export const revalidate = 86400; // 24h

type UrlItem = { loc: string; changefreq: "weekly" | "monthly" };

function alternatesFor(loc: string) {
    // loc is like https://.../en or /ar or /en/projects
    const path = loc.replace(SITE, "");        // e.g., /en or /ar/projects/123
    const pathNoLocale = path.replace(/^\/(en|ar)/, ""); // strip leading /en|/ar
    const hrefEn = `${SITE}/en${pathNoLocale || ""}`;
    const hrefAr = `${SITE}/ar${pathNoLocale || ""}`;
    const hrefDefault = SITE + (pathNoLocale || "");
    return [
        { hreflang: "en", href: hrefEn },
        { hreflang: "ar", href: hrefAr },
        { hreflang: "x-default", href: hrefDefault },
    ];
}

function urlNode(u: UrlItem) {
    const alts = alternatesFor(u.loc)
        .map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
        .join("\n");
    return `  <url>
    <loc>${u.loc}</loc>
${alts}
    <changefreq>${u.changefreq}</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`;
}

export async function GET(_req: NextRequest) {
    const urls: UrlItem[] = [];

    // static pages (each locale)
    for (const locale of LOCALES) {
        for (const slug of STATIC) {
            const tail = slug ? `/${slug}` : "";
            urls.push({ loc: `${SITE}/${locale}${tail}`, changefreq: "weekly" });
        }
    }

    // dynamic project pages (each locale)
    for (const locale of LOCALES) {
        projects.forEach((p) => {
            urls.push({
                loc: `${SITE}/${locale}/projects/${p.id}`,
                changefreq: "monthly",
            });
        });
    }

    const xml =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
        `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
        urls.map(urlNode).join("\n") +
        `\n</urlset>`;

    return new NextResponse(xml, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
}
