import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Hjem", path: "/" }, ...items];
  return (
    <nav aria-label="Brødsmulesti" className="text-sm text-ink/80">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === all.length - 1 ? (
              <span aria-current="page" className="font-medium text-navy">{it.name}</span>
            ) : (
              <Link href={it.path} className="inline-block py-2 underline-offset-4 hover:underline">{it.name}</Link>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={breadcrumbSchema(all)} />
    </nav>
  );
}
