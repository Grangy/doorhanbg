import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Получаем поддомен из заголовка host (более надежно)
  const host = request.headers.get('host') || '';

  const subdomain = host.split('.')[0];

  // Определяем регион по поддомену
  let region = 'default';

  if (subdomain === 'simferopol') region = 'simferopol';
  else if (subdomain === 'yalta') region = 'yalta';
  else if (subdomain === 'alushta') region = 'alushta';
  else if (subdomain === 'sevastopol') region = 'sevastopol';

  // Передаем регион в заголовках
  response.headers.set('x-region', region);
  response.headers.set('x-pathname', request.nextUrl.pathname);

  console.log('📤 Headers set:', {
    'x-region': region,
    'x-pathname': request.nextUrl.pathname,
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
