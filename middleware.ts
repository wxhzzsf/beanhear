import { NextRequest, NextResponse } from 'next/server';

const API_HOST = 'api.beanhear.com';
const CALLABLE_PATHS = new Set([
  '/me',
  '/catalog',
  '/entitlements',
  '/unlock',
  '/ahaComplete',
  '/recordStoryPlay',
  '/voices-list',
  '/voices-create',
  '/voices-delete',
  '/jobs-get',
  '/jobs-list',
  '/preferences-update',
  '/account-delete',
  '/purchases-reconcile',
  '/purchases-sync',
  '/push-register',
]);

export function middleware(req: NextRequest) {
  const host = req.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (host !== API_HOST) return NextResponse.next();

  const { pathname } = req.nextUrl;
  if (pathname === '/' || pathname === '/api-host.html') {
    const url = req.nextUrl.clone();
    url.pathname = '/api-host.html';
    return NextResponse.rewrite(url);
  }
  if (CALLABLE_PATHS.has(pathname) || pathname.startsWith('/assn') || pathname.startsWith('/inngestServe') || pathname.startsWith('/.well-known/')) {
    return NextResponse.next();
  }
  if (pathname === '/favicon.ico' || pathname === '/icon.svg') {
    return NextResponse.next();
  }
  return NextResponse.json({ error: 'Not found on api.beanhear.com' }, { status: 404 });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
