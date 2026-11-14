import { NextResponse, type NextRequest } from 'next/server';

// "/" has no page of its own: send visitors to their language (Spanish unless the browser prefers English).
export function middleware(request: NextRequest) {
  const preferred = request.headers.get('accept-language')?.split(',')[0]?.trim().toLowerCase() ?? '';
  const locale = preferred.startsWith('en') ? 'en' : 'es';
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = { matcher: '/' };
