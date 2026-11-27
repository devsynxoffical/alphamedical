// URLs rendered by <LandingPage>. Kept separate from src/data/landingPages.ts so
// the router can register these routes without loading the page content.
// A build-time check in src/seo/routes.ts fails the build if they drift apart.
export const landingPagePaths: string[] = [
  '/medical-billing-services',
  '/revenue-cycle-management-services',
  '/medical-billing-for-small-practices',
  '/medical-billing-services-florida',
  '/medical-billing-services-virginia',
  '/denial-management-services',
]
