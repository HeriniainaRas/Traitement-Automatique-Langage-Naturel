import { ChatContainer } from "@/components/chat-container";
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground tracking-tight">
                Détection de SPAM / HAM
              </h1>
              <p className="text-xs text-muted-foreground">
                Analyse de message instantanné
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
        <ChatContainer />
      </div>
    </main>
  );
}
