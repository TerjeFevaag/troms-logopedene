import { notFound } from "next/navigation";
import { ArticleEditor } from "@/components/ArticleEditor";
import { adminGetArticle } from "@/lib/articles";

export const dynamic = "force-dynamic";

export default async function EditArticle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = Number.isInteger(Number(id)) ? await adminGetArticle(Number(id)) : null;
  if (!a) notFound();
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Rediger artikkel</h1>
      <ArticleEditor initial={a} />
    </>
  );
}
