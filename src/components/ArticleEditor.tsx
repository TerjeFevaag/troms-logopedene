"use client";

import Link from "next/link";
import { useActionState, useRef, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExt from "@tiptap/extension-link";
import ImageExt from "@tiptap/extension-image";
import { saveArticleAction } from "@/app/admin/actions";
import { slugify } from "@/lib/slug";

type Initial = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: string;
  coverImageUrl?: string | null;
  coverAlt?: string | null;
  status?: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

const input = "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3";
const tb = "rounded-lg border border-line px-3 py-1.5 text-sm font-semibold hover:bg-tint data-[on=true]:bg-blue data-[on=true]:text-white";

async function upload(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const j = await res.json();
  if (!res.ok) throw new Error(j.error ?? "Opplasting feilet");
  return j.url as string;
}

export function ArticleEditor({ initial = {} }: { initial?: Initial }) {
  const [state, action, pending] = useActionState(saveArticleAction, undefined);
  const [title, setTitle] = useState(initial.title ?? "");
  const [slug, setSlug] = useState(initial.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initial.slug));
  const [cover, setCover] = useState(initial.coverImageUrl ?? "");
  const [body, setBody] = useState(initial.body ?? "");
  const [msg, setMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const inlineRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      LinkExt.configure({ openOnClick: false }),
      ImageExt,
    ],
    content: initial.body ?? "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose-site min-h-[320px] rounded-b-xl border border-t-0 border-line bg-white px-5 py-4 focus:outline-none",
        "aria-label": "Artikkeltekst",
      },
    },
    onUpdate: ({ editor }) => setBody(editor.getHTML()),
  });

  async function onCover(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setMsg("Laster opp …");
    try {
      setCover(await upload(f));
      setMsg("");
    } catch (err) {
      setMsg((err as Error).message);
    }
  }

  async function onInline(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f || !editor) return;
    const alt = window.prompt("Beskriv bildet kort (alt-tekst):") ?? "";
    setMsg("Laster opp …");
    try {
      const url = await upload(f);
      editor.chain().focus().setImage({ src: url, alt }).run();
      setMsg("");
    } catch (err) {
      setMsg((err as Error).message);
    }
    e.target.value = "";
  }

  function setLink() {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Adresse (https://…)", prev ?? "https://");
    if (url === null) return;
    if (url === "") editor.chain().focus().unsetLink().run();
    else editor.chain().focus().setLink({ href: url }).run();
  }

  return (
    <form action={action} className="space-y-6">
      {initial.id && <input type="hidden" name="id" value={initial.id} />}
      <input type="hidden" name="body" value={body} />
      <input type="hidden" name="coverImageUrl" value={cover} />

      <div>
        <label htmlFor="title" className="font-semibold text-navy">Tittel</label>
        <input
          id="title"
          name="title"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (!slugTouched) setSlug(slugify(e.target.value));
          }}
          className={`${input} text-xl font-semibold`}
        />
      </div>

      <div>
        <label htmlFor="slug" className="font-semibold text-navy">Adresse (slug)</label>
        <div className="flex items-center gap-2">
          <span className="text-ink/60">/artikler/</span>
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(slugify(e.target.value));
            }}
            className={input}
          />
        </div>
      </div>

      <div>
        <label htmlFor="excerpt" className="font-semibold text-navy">Kort ingress (vises i oversikter, maks 300 tegn)</label>
        <textarea id="excerpt" name="excerpt" rows={3} maxLength={300} defaultValue={initial.excerpt ?? ""} className={input} />
      </div>

      <fieldset className="rounded-2xl border border-line bg-white p-5">
        <legend className="px-2 font-semibold text-navy">Omslagsbilde</legend>
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover} alt="" className="mb-4 max-h-56 rounded-xl object-cover" />
        )}
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={onCover} className="block" />
        {cover && (
          <button type="button" onClick={() => { setCover(""); if (fileRef.current) fileRef.current.value = ""; }} className="mt-2 text-sm text-red-700 underline">Fjern bilde</button>
        )}
        <label htmlFor="coverAlt" className="mt-4 block font-semibold text-navy">Bildebeskrivelse (alt-tekst)</label>
        <input id="coverAlt" name="coverAlt" defaultValue={initial.coverAlt ?? ""} className={input} />
      </fieldset>

      <div>
        <p className="font-semibold text-navy">Tekst</p>
        <div className="mt-1 flex flex-wrap gap-2 rounded-t-xl border border-line bg-tint p-2" role="toolbar" aria-label="Formatering">
          <button type="button" className={tb} data-on={editor?.isActive("bold")} onClick={() => editor?.chain().focus().toggleBold().run()}>Fet</button>
          <button type="button" className={tb} data-on={editor?.isActive("italic")} onClick={() => editor?.chain().focus().toggleItalic().run()}>Kursiv</button>
          <button type="button" className={tb} data-on={editor?.isActive("heading", { level: 2 })} onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>Overskrift</button>
          <button type="button" className={tb} data-on={editor?.isActive("heading", { level: 3 })} onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}>Underoverskrift</button>
          <button type="button" className={tb} data-on={editor?.isActive("bulletList")} onClick={() => editor?.chain().focus().toggleBulletList().run()}>Punktliste</button>
          <button type="button" className={tb} data-on={editor?.isActive("orderedList")} onClick={() => editor?.chain().focus().toggleOrderedList().run()}>Nummerert liste</button>
          <button type="button" className={tb} data-on={editor?.isActive("blockquote")} onClick={() => editor?.chain().focus().toggleBlockquote().run()}>Sitat</button>
          <button type="button" className={tb} data-on={editor?.isActive("link")} onClick={setLink}>Lenke</button>
          <button type="button" className={tb} onClick={() => inlineRef.current?.click()}>Bilde</button>
          <input ref={inlineRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={onInline} className="hidden" />
        </div>
        <EditorContent editor={editor} />
      </div>

      <details className="rounded-2xl border border-line bg-white p-5">
        <summary className="cursor-pointer font-semibold text-navy">Søkemotor (valgfritt)</summary>
        <label htmlFor="seoTitle" className="mt-4 block font-semibold text-navy">SEO-tittel</label>
        <input id="seoTitle" name="seoTitle" defaultValue={initial.seoTitle ?? ""} maxLength={70} className={input} />
        <label htmlFor="seoDescription" className="mt-4 block font-semibold text-navy">SEO-beskrivelse</label>
        <textarea id="seoDescription" name="seoDescription" rows={2} maxLength={170} defaultValue={initial.seoDescription ?? ""} className={input} />
      </details>

      {(state?.error || msg) && <p role="alert" className="font-semibold text-red-700">{state?.error ?? msg}</p>}

      <div className="flex flex-wrap items-center gap-3">
        <button name="intent" value="publish" disabled={pending} className="min-h-12 rounded-full bg-blue px-7 font-semibold text-white hover:bg-blue-dark disabled:opacity-60">
          {initial.status === "published" ? "Lagre og hold publisert" : "Publiser"}
        </button>
        <button name="intent" value="draft" disabled={pending} className="min-h-12 rounded-full border-2 border-blue px-7 font-semibold text-blue hover:bg-white disabled:opacity-60">
          {initial.status === "published" ? "Lagre som kladd (avpubliser)" : "Lagre kladd"}
        </button>
        <Link href="/admin" className="px-3 font-semibold text-ink/70 hover:underline">Avbryt</Link>
      </div>
    </form>
  );
}
