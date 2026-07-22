import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Protect admin routes
  if (pathname.startsWith('/blog/admin') || pathname.startsWith('/projects/admin')) {
    const token = request.cookies.get('admin_token')?.value;

    const loginUrl = pathname.startsWith('/blog/admin') ? '/blog/login' : '/projects/login';

    if (!token) {
      return NextResponse.redirect(new URL(loginUrl, request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // Invalid token
      return NextResponse.redirect(new URL(loginUrl, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/admin/:path*', '/projects/admin/:path*'],
};
