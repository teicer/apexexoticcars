import React from "react";
import { cn } from "../lib/utils";

type BreakPoints = Partial<{
  base: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  sm: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  md: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  lg: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  xl: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  _2xl: 1 | 2 | 3 | 4 | 5 | 6 | 12;
}>;

const GRID_ = {
  base: {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    12: "grid-cols-12",
  },
  sm: {
    1: "sm:rid-cols-1",
    2: "sm:rid-cols-2",
    3: "sm:rid-cols-3",
    4: "sm:rid-cols-4",
    5: "sm:rid-cols-5",
    6: "sm:rid-cols-6",
    12: "sm:grid-cols-12",
  },
  md: {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    12: "md:grid-cols-12",
  },
  lg: {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    12: "lg:grid-cols-12",
  },
  xl: {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    12: "xl:grid-cols-12",
  },
  _2xl: {
    1: "2xl:grid-cols-1",
    2: "2xl:grid-cols-2",
    3: "2xl:grid-cols-3",
    4: "2xl:grid-cols-4",
    5: "2xl:grid-cols-5",
    6: "2xl:grid-cols-6",
    12: "2xl:grid-cols-12",
  },
} as const;

function clcFromCols(cols?: BreakPoints) {
  const c = { base: 1, ...cols };
  const out: string[] = [];
  if (c.base) out.push(GRID_.base[c.base as keyof typeof GRID_.base]);
  if (c.sm) out.push(GRID_.sm[c.sm as keyof typeof GRID_.sm]);
  if (c.md) out.push(GRID_.md[c.md as keyof typeof GRID_.md]);
  if (c.lg) out.push(GRID_.lg[c.lg as keyof typeof GRID_.lg]);
  if (c.xl) out.push(GRID_.xl[c.xl as keyof typeof GRID_.xl]);
  if (c._2xl) out.push(GRID_._2xl[c._2xl as keyof typeof GRID_._2xl]);
  return out.join(" ");
}
export default function ResponsiveGrid({
  children,
  cols = { base: 1, sm: 2, lg: 3 },
  gap = "gap-6",
  className,
}: {
  children: React.ReactNode;
  cols?: BreakPoints;
  gap?: "gap-0" | "gap-1" | "gap-2" | "gap-3" | "gap-4" | "gap-5" | "gap-6" | "gap-8" | "gap-10";
  className?: string;
}) {
  return <div className={cn("grid", clcFromCols(cols), gap, className)}>{children}</div>;
}
