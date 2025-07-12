import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/app/lib/demo-data";

/**
 * Your public URL. Keep it in an env-var so
 * Vercel Preview → Production switch is automatic.
 *
 * NEXT_PUBLIC_SITE_URL=https://althyab.com
 */
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://althyab.com";

/** Locales you ship (match folder names under /app) */
const LOCALES = ["en", "ar"];

/** Static pages you really want indexed  (empty string === "/") */
const STATIC = ["", "projects"];

/** How long search engines may cache the sitemap (1 day) */
export const revalidate = 86400; // 24 h in seconds

export async function GET(_req: NextRequest) {
    /* ---- build the URL list ------------------------------------------- */

    const urls: { loc: string; changefreq: string }[] = [];

    /** add every static page for every locale */
    for (const locale of LOCALES) {
        for (const slug of STATIC) {
            urls.push({
                loc: `${SITE}/${locale}/${slug}`,
                changefreq: "weekly",
            });
        }
    }

    /** dynamic project pages (again for each locale)  */
    for (const locale of LOCALES) {
        projects.forEach((p) => {
            urls.push({
                loc: `${SITE}/${locale}/projects/${p.id}`, // change to p.slug if you have nice slugs
                changefreq: "monthly",
            });
        });
    }

    /* ---- XML output ---------------------------------------------------- */

    const xml =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        urls
            .map(
                (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
            )
            .join("\n") +
        `\n</urlset>`;

    return new NextResponse(xml, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
}
