import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors min-h-12";
const variants = {
  primary: "bg-blue text-white hover:bg-blue-dark",
  secondary: "bg-sage-dark text-white hover:bg-sage",
  outline: "border-2 border-blue text-blue hover:bg-blue hover:text-white",
  light: "bg-white text-blue hover:bg-tint",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const external = /^(https?:|mailto:|tel:)/.test(href);
  return external ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}
