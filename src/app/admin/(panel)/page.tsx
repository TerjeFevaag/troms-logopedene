import Link from "next/link";
import { ConfirmDelete } from "@/components/ConfirmDelete";
import { adminListArticles } from "@/lib/articles";
import { deleteArticleAction, setStatusAction } from "../actions";

export const dynamic = "force-dynamic";

const fmt = new Intl.DateTimeFormat("nb-NO", { dateStyle: "medium", timeStyle: "short" });

export default async function AdminHome({ searchParams }: { searchParams: Promise<{ lagret?: string; slettet?: string }> }) {
  const sp = await searchParams;
  const list = await adminListArticles();
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">Artikler</h1>
        <Link href="/admin/nytt" className="inline-flex min-h-12 items-center rounded-full bg-blue px-6 font-semibold text-white hover:bg-blue-dark">+ Ny artikkel</Link>
      </div>
      {sp.lagret && <p role="status" className="mt-4 rounded-xl bg-white p-4 font-semibold text-sage-dark">Artikkelen er lagret.</p>}
      {sp.slettet && <p role="status" className="mt-4 rounded-xl bg-white p-4 font-semibold text-sage-dark">Artikkelen er slettet.</p>}
      {list.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-line bg-white p-8 text-center text-ink/80">Ingen artikler ennå. Skriv den første!</p>
      ) : (
        <ul className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
          {list.map((a) => (
            <li key={a.id} className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5">
              <div className="min-w-0">
                <Link href={`/admin/${a.id}`} className="block truncate text-lg font-bold text-navy hover:underline">{a.title}</Link>
                <p className="text-sm text-ink/70">
                  <span className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-semibold ${a.status === "published" ? "bg-sage-light/50 text-sage-dark" : "bg-tint text-ink"}`}>
                    {a.status === "published" ? "Publisert" : "Kladd"}
                  </span>
                  Oppdatert {fmt.format(a.updatedAt)}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <Link href={`/admin/${a.id}`} className="rounded-full border border-line px-4 py-2 font-semibold hover:bg-tint">Rediger</Link>
                {a.status === "published" && (
                  <Link href={`/artikler/${a.slug}`} target="_blank" className="rounded-full border border-line px-4 py-2 font-semibold hover:bg-tint">Vis</Link>
                )}
                <form action={setStatusAction}>
                  <input type="hidden" name="id" value={a.id} />
                  <input type="hidden" name="to" value={a.status === "published" ? "draft" : "published"} />
                  <button className="rounded-full border border-line px-4 py-2 font-semibold hover:bg-tint">{a.status === "published" ? "Avpubliser" : "Publiser"}</button>
                </form>
                <form action={deleteArticleAction}>
                  <input type="hidden" name="id" value={a.id} />
                  <ConfirmDelete />
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
