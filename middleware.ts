import { NextRequest, NextResponse } from 'next/server';

const API_HOST = 'api.beanhear.com';
const ALLOWED = new Set(['/', '/assn', '/inngestServe', '/api-host.html', '/favicon.ico', '/icon.svg']);

export function middleware(req: NextRequest) {
  const host = req.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (host !== API_HOST) return NextResponse.next();

  const { pathname } = req.nextUrl;
  if (ALLOWED.has(pathname) || pathname.startsWith('/assn') || pathname.startsWith('/inngestServe') || pathname.startsWith('/.well-known/')) {
    return NextResponse.next();
  }
  return NextResponse.json({ error: 'Not found on api.beanhear.com' }, { status: 404 });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
