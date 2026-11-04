import Link from "next/link";
import { requireSession } from "@/lib/auth";
import { logoutAction } from "../actions";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const session = await requireSession();
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/admin" className="text-lg font-bold text-navy">Tromsølogopedene · Admin</Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-blue hover:underline" target="_blank">Se nettstedet</Link>
            <span className="hidden text-ink/70 sm:inline">{session.email}</span>
            <form action={logoutAction}>
              <button className="rounded-full border border-line px-4 py-2 font-semibold hover:bg-tint">Logg ut</button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
    </>
  );
}
