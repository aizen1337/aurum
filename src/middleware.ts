import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 
const isDashboardRoute = createRouteMatcher(['/dashboard(.*)', '/onboarding(.*)']);
 
export default clerkMiddleware((auth, req) => {
  if (isDashboardRoute(req)) auth().protect();
});
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};