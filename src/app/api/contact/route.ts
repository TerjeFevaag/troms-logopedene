import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 4000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message || !body.consent) {
    return NextResponse.json({ error: "Fyll ut navn, e-post, melding og samtykke." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Tromsølogopedene <onboarding@resend.dev>";
  if (!key || !to) {
    return NextResponse.json(
      { error: "Skjemaet er ikke satt opp ennå. Ring oss i stedet." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `Ny henvendelse fra ${name}`,
      text: `Navn: ${name}\nE-post: ${email}\nTelefon: ${phone || "-"}\n\n${message}`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "Kunne ikke sende. Prøv igjen eller ring oss." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
