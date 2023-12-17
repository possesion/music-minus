import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const GET = async () => {
  const session = await getServerSession(authOptions as any);

  return NextResponse.json({ name: session?.user?.name ?? "Not logged In" });
};
