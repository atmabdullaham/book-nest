import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect the /add-book route
  if (pathname === "/add-book") {
    const authCookie = request.cookies.get("auth");

    if (!authCookie) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-book"],
};
