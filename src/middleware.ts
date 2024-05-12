import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
 
const isDashboardRoute = createRouteMatcher(['/dashboard(.*)', '/onboarding(.*)']);
 
export default clerkMiddleware((auth, req) => {
  if (isDashboardRoute(req)) auth().protect();
  if (
    auth().userId && !auth().orgId && !req.nextUrl.pathname.endsWith('/onboarding')
    ) {
    const organizationSelection = new URL(
      '/onboarding',
      req.url,
    );

    return NextResponse.redirect(organizationSelection);
    };
})
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}