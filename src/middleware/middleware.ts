import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    // Obtenemos el token desde las cookies
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin", "admin/:path*"]
};
