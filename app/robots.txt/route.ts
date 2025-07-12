import { NextResponse } from 'next/server';

export function GET() {
    const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://althyab.com';

    const body = `User-agent: *
Allow: /
Sitemap: ${site}/sitemap.xml
`;

    return new NextResponse(body, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
}
