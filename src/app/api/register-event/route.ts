import { NextResponse } from "next/server";

// Simulated DB or metadata update
export async function POST(req: Request) {
  const data = await req.json();

  // You could also store this to Clerk's user metadata or a DB
  console.log("Registering Event:", data);

  return NextResponse.json({ success: true });
}
