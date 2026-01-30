"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageInputProps {
  onSubmit: (message: string) => void;
  disabled?: boolean;
  className?: string;
}

export function MessageInput({ onSubmit, disabled, className }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSubmit(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex gap-3 rounded-2xl border border-border bg-card p-3 shadow-lg",
        className
      )}
    >
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Veuillez entrer votre message ici..."
        disabled={disabled}
        className="min-h-15 max-h-30 resize-none border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
        rows={2}
      />
      <Button
        type="submit"
        disabled={!message.trim() || disabled}
        size="icon"
        className="h-10 w-10 shrink-0 rounded-xl self-end"
      >
        <Send className="h-4 w-4" />
        <span className="sr-only">Analyser le message</span>
      </Button>
    </form>
  );
}
