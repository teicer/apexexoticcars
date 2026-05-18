import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer w-full relative overflow-hidden rounded-2xl border px-8 py-4 font-medium backdrop-blur-xl transition-all duration-300 active:scale-[0.98]",
        "border-border bg-linear-to-l from-card via-white/80 to-over-card text-foreground",
        "hover:border-black/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.08)]",
        "dark:border-white/40 dark:from-white/10 dark:via-white/5 dark:to-white/20 dark:text-white",
        "dark:hover:border-white/60 dark:hover:from-white/15 dark:hover:to-white/25 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* shine effect */}
      <div className="absolute inset-0 bg-linear-to-l from-transparent via-black/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 dark:via-white/10" />
    </button>
  );
};

export default Button;
