import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  redirect(`/${slug}?${searchParams.toString()}`);
}
