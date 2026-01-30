"use client";

import { useState, useRef, useEffect } from "react";
import { MessageBubble } from "./message-bubble";
import { AnalysisResult, type AnalysisType } from "./analysis-result";
import { LoadingIndicator } from "./loading-indicator";
import { MessageInput } from "./message-input";
import { Shield } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

interface Analysis {
  id: string;
  type: AnalysisType;
  confidence: number;
  explanation: string;
}

type ChatItem =
  | { kind: "message"; data: Message }
  | { kind: "analysis"; data: Analysis }
  | { kind: "loading"; id: string };

// Remplacez ceci par l'URL de votre API Railway
const RAILWAY_API_URL = "https://spamcheckapi-production.up.railway.app/api/predict/";

// Fonction pour appeler l'API
async function fetchAnalysis(message: string): Promise<{ type: AnalysisType; confidence: number; explanation: string }> {
  try {
    const response = await fetch(RAILWAY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'analyse du message");
    }

    const data = await response.json();

    // On attend un objet de la forme :
    // { prediction: { label: "spam" | "ham", confidence: number } }
    if (
      !data ||
      !data.prediction ||
      typeof data.prediction.label !== "string" ||
      typeof data.prediction.confidence !== "number" ||
      !["spam", "ham"].includes(data.prediction.label)
    ) {
      throw new Error("Réponse inattendue de l'API");
    }

    // Pour l'affichage et compatibilité avec AnalysisResult
    const label = data.prediction.label as AnalysisType;
    const confidence = data.prediction.confidence;

    let explanation = label === "spam"
      ? "Ce message a été prédit comme spam par notre modèle."
      : "Ce message a été prédit comme légitime (ham) par notre modèle.";

    return {
      type: label,
      confidence: confidence,
      explanation
    };
  } catch (error: any) {
    return {
      type: "uncertain",
      confidence: 0,
      explanation: "Impossible d'analyser le message pour le moment, merci de réessayer plus tard."
    };
  }
}

export function ChatContainer() {
  const [items, setItems] = useState<ChatItem[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [items]);

  const handleSubmit = async (message: string) => {
    const messageId = Date.now().toString();
    const loadingId = `loading-${messageId}`;
    
    // Afficher le message envoyé par l'utilisateur (ou le système)
    setItems(prev => [
      ...prev,
      { kind: "message", data: { id: messageId, content: message, isUser: true } },
      { kind: "loading", id: loadingId }
    ]);
    
    setIsAnalyzing(true);

    // Appel à l'API Railway
    const result = await fetchAnalysis(message);

    setItems(prev => [
      ...prev.filter(item => !(item.kind === "loading" && item.id === loadingId)),
      {
        kind: "analysis",
        data: {
          id: `analysis-${messageId}`,
          type: result.type,
          confidence: Math.round(result.confidence),
          explanation: result.explanation
        }
      }
    ]);
    
    setIsAnalyzing(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
      >
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Commencez votre analyse 
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Entrez un message texte ci-dessous pour vérifier s'il s'agit de spam ou non. 
              Notre IA analysera le contenu et fournira un score de confiance.
            </p>
          </div>
        ) : (
          items.map((item) => {
            if (item.kind === "message") {
              return (
                <MessageBubble
                  key={item.data.id}
                  content={item.data.content}
                  isUser={item.data.isUser}
                />
              );
            }
            if (item.kind === "analysis") {
              return (
                <AnalysisResult
                  key={item.data.id}
                  type={item.data.type}
                  confidence={item.data.confidence}
                  explanation={item.data.explanation}
                />
              );
            }
            if (item.kind === "loading") {
              return <LoadingIndicator key={item.id} />;
            }
            return null;
          })
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-border bg-background/80 backdrop-blur-sm p-4">
        <div className="max-w-2xl mx-auto">
          <MessageInput onSubmit={handleSubmit} disabled={isAnalyzing} />
        </div>
      </div>
    </div>
  );
}
