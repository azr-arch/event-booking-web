import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
// import { DEFAULT_REDIRECT, PUBLIC_ROUTES } from "@/routes";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { Role } from "@prisma/client";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  const isPublicRoute =
    nextUrl.pathname === "/" ||
    nextUrl.pathname.startsWith("/sign-in") ||
    nextUrl.pathname.startsWith("/sign-up");

  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  const isClientProtectedRoute = nextUrl.pathname.startsWith("/app");
  const isApiRoute = nextUrl.pathname.startsWith("/api");
  const isStaticFile = nextUrl.pathname.match(
    /\.(png|jpg|jpeg|svg|css|js|ico|woff2|ttf)$/
  );

  console.log(
    `Request: ${nextUrl.pathname}, Authenticated: ${!!token}, Role: ${
      token?.role || "None"
    }`
  );

  if (!token && (isPublicRoute || isStaticFile)) {
    return NextResponse.next();
  }

  // Block unauthorized API access
  if (isApiRoute && !token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Handling authenticated users
  if (token) {
    if (token.role === Role.ADMIN || token.role === Role.ORGANIZER) {
      if (!isAdminRoute) {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }
    }

    if (token.role === Role.ATTENDEE) {
      if (!isClientProtectedRoute) {
        return NextResponse.redirect(new URL("/app", req.url));
      }
    }
  } else {
    // Handling unauthenitcated request
    // User is where they shouldnt be
    if (isAdminRoute || isClientProtectedRoute) {
      const callbackRoute = encodeURIComponent(nextUrl.pathname);
      return NextResponse.redirect(
        new URL(`/sign-in?callbackUrl=${callbackRoute}`, req.url)
      );
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
