import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export const runtime = "nodejs";

const ALLOWED = ["image/jpeg", "image/png", "image/webp"];
const MAX = 4 * 1024 * 1024; // Vercel function body limit is 4.5 MB

export async function POST(req: Request) {
  if (!(await getSession())) return NextResponse.json({ error: "Ikke innlogget" }, { status: 401 });
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Bildelagring er ikke satt opp" }, { status: 503 });
  }
  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Ingen fil" }, { status: 400 });
  if (!ALLOWED.includes(file.type)) return NextResponse.json({ error: "Kun JPG, PNG eller WebP" }, { status: 400 });
  if (file.size > MAX) return NextResponse.json({ error: "Maks 4 MB" }, { status: 400 });
  const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-80);
  const blob = await put(`artikler/${safe}`, file, { access: "public", addRandomSuffix: true });
  return NextResponse.json({ url: blob.url });
}
