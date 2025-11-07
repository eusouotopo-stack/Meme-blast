import { useState } from "react";
import MemeCanvas from "../src/components/MemeCanvas.js";
import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Aqui vai função de gerar meme via IA (Hugging Face API)

  return (
    <div className="main-container py-12">
      <CookieBanner />
      <h1 className="text-3xl font-bold mb-4">Gerador de Memes com IA</h1>
      <textarea
        className="border rounded p-3 w-full mb-4"
        rows="3"
        placeholder="Digite uma situação engraçada..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="btn btn-primary mb-6">
        {loading ? "Gerando..." : "Gerar Meme"}
      </button>
      <MemeCanvas imageUrl={imageUrl} />
      <AdBanner className="mt-6" />
    </div>
  );
}
