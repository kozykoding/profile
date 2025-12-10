import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

// In middleware auth mode, each page is protected by default.
// Exceptions are configured via the `unauthenticatedPaths` option.
export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/", "/callback", "/resume"],
  },
});

// Match against pages that require authentication
// Leave this out if you want authentication on every page in your application

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - callback (auth callback route)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|callback).*)",
    "/users/profile",
  ],
};

