import { NextResponse, type NextRequest } from "next/server";

// The URL is the source of truth for SSR language and metadata, including 404s.
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = { matcher: ["/((?!_next/|_vinext/|assets/|images/|videos/|logos/|favicon\\.svg).*)"] };
