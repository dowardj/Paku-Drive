import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition";
  const variantClass =
    variant === "primary"
      ? "bg-bronze text-white hover:bg-[#8c6e45]"
      : "border border-white/70 bg-white/10 text-white hover:bg-white/20";

  return (
    <Link href={href} className={`${baseClass} ${variantClass}`}>
      {children}
    </Link>
  );
}
