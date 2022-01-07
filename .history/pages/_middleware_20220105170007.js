import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // Token will exist if user logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  console.log(token);
  const { pathname } = req.nextUrl;

  // Allow request if the following is true
  // 1) if it is a request for next-auth session & provider fetching
  // 2) if token exist
  //   if (pathname.includes(`/api/auth`) || token) {
  //     return NextResponse.next();
  //   }

  //   // redirect them to login  if they dont have token AND are requesting a protected route
  //   if (!token && pathname !== '/login') {
  //     return NextResponse.redirect('/login');
  //   }
}
