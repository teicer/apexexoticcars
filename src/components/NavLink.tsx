"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "../lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "text-text-main  md:text-xl lg:text-2xl font-semibold tracking-wide gradient-primary-text",
        path.startsWith(href) ? "gradient-primary-text-active" : "",
      )}
    >
      {children}
    </Link>
  );
}
