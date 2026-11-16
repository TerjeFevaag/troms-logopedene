import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHeader({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: { name: string; path: string }[];
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="bg-tint">
      <div className="mx-auto max-w-site px-4 py-10 sm:px-6 md:py-14">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-sage-dark">{eyebrow}</p>}
        <h1 lang="nb" className="mt-3 max-w-3xl break-words hyphens-manual text-3xl font-bold min-[400px]:text-4xl md:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-ink md:text-xl">{lead}</p>}
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}
