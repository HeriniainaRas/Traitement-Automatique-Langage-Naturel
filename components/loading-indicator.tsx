"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingIndicatorProps {
  className?: string;
}

export function LoadingIndicator({ className }: LoadingIndicatorProps) {
  return (
    <div
      className={cn(
        "flex w-full animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
        "justify-start",
        className
      )}
    >
      <div className="max-w-[85%] md:max-w-[70%]">
        <div className="rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Analyse...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
