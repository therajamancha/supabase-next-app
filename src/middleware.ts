import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define paths that don't require authentication

const guestRoutes = ["/admin/login", "/admin/signup", "/admin/forgot-password"];

const access_token = `sb-${process.env.NEXT_PUBLIC_SUPABASE_ID}-auth-token`;

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(access_token)?.value;
  const { pathname } = request.nextUrl;

  const isGuestRoute = guestRoutes.includes(pathname);

  if (accessToken && isGuestRoute) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (!accessToken && !isGuestRoute) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
