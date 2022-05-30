import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
  // Store the response so we can modify its headers
  const response = NextResponse.next();

  if (req.url.includes("hello")) {
    throw new Error("Error from Middleware!");
  }

  // Set custom header
  response.headers.set("x-hello-from", "middleware");

  // Return response
  return response;
}
