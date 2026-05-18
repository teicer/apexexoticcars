import { cn } from "@/lib/utils";
import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

function IconButton({ icon, onClick, className }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground`,
        className,
      )}
    >
      {icon}
    </button>
  );
}

export default IconButton;
