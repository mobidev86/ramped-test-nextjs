import { NextResponse, type NextRequest as NextAuthRequest } from "next/server";
import * as jwt from "jsonwebtoken";
import { adminRoutes, publicRoutes } from "@/constants/routes";

type NextRequest = NextAuthRequest & {
  user?: any;
};

const verifyToken = (exp: number) => {
  if (exp < Math.floor(Date.now() / 1000)) {
    return false;
  } else {
    return true;
  }
};

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const decodedToken: any = jwt.decode(token as string);
  const currentPath = request.nextUrl.pathname;
  const LOGIN_URL = "/auth/login";
  const DASHBOARD_URL = "/dashboard";

  if (currentPath === "/") {
    return Response.redirect(new URL(DASHBOARD_URL, request.url));
  }

  // Handle token presence and appropriate redirects
  if (token && verifyToken(decodedToken?.exp)) {
    if (publicRoutes.includes(currentPath)) {
      // If token exists and user is on /login, redirect to dashboard
      return Response.redirect(new URL(DASHBOARD_URL, request.url));
    } else if (adminRoutes.includes(currentPath)) {
      if (decodedToken?.email) {
        return NextResponse.next();
      } else {
        return Response.redirect(new URL(DASHBOARD_URL, request.url));
      }
    }
    // If token exists and user is on any other page (except /admin), stay there
    return NextResponse.next();
  } else {
    if (!publicRoutes.includes(currentPath)) {
      // If no token and not on /login or /admin, redirect to login
      return Response.redirect(new URL(LOGIN_URL, request.url));
    }
    // If no token and on /login or /admin, stay there (allow access)
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};