import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await new Promise(async (resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, 3000);
  });

  return NextResponse.json({});
}
