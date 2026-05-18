import { cn } from "@/lib/utils";
import React from "react";

export default function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-secondary lg:text-md text-sm", className)}>{children}</p>;
}
