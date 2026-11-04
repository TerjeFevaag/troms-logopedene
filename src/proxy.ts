import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// Coarse gate: redirect unauthenticated users away from /admin. Every admin page,
// action and API route ALSO re-checks the session server-side (requireSession).
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();
  const token = req.cookies.get("tl_session")?.value;
  let ok = false;
  if (token && process.env.AUTH_SECRET) {
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.AUTH_SECRET));
      ok = true;
    } catch {}
  }
  if (!ok) return NextResponse.redirect(new URL("/admin/login", req.url));
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
