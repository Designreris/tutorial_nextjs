import { NextResponse } from "next/server"

// CORS //
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000", "https://www.google.co.uk"]

export function middleware(request: Request) {
  // Method 1 //
  // if (request.url.includes("/api/")) {}

  // Method 2 //
  // const regex = new RegExp('/api/*')
  // if (regex.test(request.url)) {}

  // CORS //
  const origin = request.headers.get("origin")
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }

  return NextResponse.next()
}

// Method 3 //
export const config = {
  matcher: "/api/:path*",
}

// @NOTE: Can use conditionals or matchers.
