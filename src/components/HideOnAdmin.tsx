"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Hides public site chrome (header/footer) on /admin routes. */
export function HideOnAdmin({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <>{children}</>;
}
