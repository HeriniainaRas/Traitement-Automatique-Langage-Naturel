"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export type AnalysisType = "ham" | "spam" | "uncertain";

interface AnalysisResultProps {
  type: AnalysisType;
  confidence: number;
  explanation: string;
  className?: string;
}

const typeConfig = {
  ham: {
    label: "Non Spam",
    description: "Message non spam",
    icon: CheckCircle2,
    bgColor: "bg-ham-light",
    textColor: "text-ham",
    progressColor: "bg-ham",
  },
  spam: {
    label: "SPAM",
    description: "Message spam",
    icon: XCircle,
    bgColor: "bg-spam-light",
    textColor: "text-spam",
    progressColor: "bg-spam",
  },
  uncertain: {
    label: "Incertitude",
    description: "Incertitude de l'analyse",
    icon: AlertTriangle,
    bgColor: "bg-uncertain-light",
    textColor: "text-uncertain",
    progressColor: "bg-uncertain",
  },
};

export function AnalysisResult({
  type,
  confidence,
  explanation,
  className,
}: AnalysisResultProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex w-full animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
        "justify-start",
        className
      )}
    >
      <div className="max-w-[85%] md:max-w-[70%] w-full">
        <div
          className={cn(
            "rounded-2xl rounded-bl-md border border-border bg-card p-4 shadow-sm"
          )}
        >
          {/* Header with label and confidence badge */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className={cn("rounded-full p-1.5", config.bgColor)}>
                <Icon className={cn("h-4 w-4", config.textColor)} />
              </div>
              <div>
                <span className={cn("font-semibold text-sm", config.textColor)}>
                  {config.label}
                </span>
                <p className="text-xs text-muted-foreground">
                  {config.description}
                </p>
              </div>
            </div>
            
            {/* Confidence badge */}
            <div
              className={cn(
                "flex items-center justify-center rounded-full px-3 py-1",
                config.bgColor
              )}
            >
              <span className={cn("text-sm font-bold", config.textColor)}>
                {confidence}%
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-3">
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700 ease-out",
                  config.progressColor
                )}
                style={{ width: `${confidence}%` }}
              />
            </div>
          </div>

          {/* Explanation */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
}
