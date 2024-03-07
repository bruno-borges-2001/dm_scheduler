import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'
import { cookieName, fallbackLng, languages } from './lib/i18n/settings'

acceptLanguage.languages([...languages])

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|images).*)']
}

export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  const { pathname } = new URL(req.url)
  requestHeaders.set('x-url', pathname);

  let lng

  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  requestHeaders.set('x-language', lng);

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url), { headers: requestHeaders })
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer')!)
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next({ request: { headers: requestHeaders } })
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next({ request: { headers: requestHeaders } })
}