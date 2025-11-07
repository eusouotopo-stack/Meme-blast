import { useState } from "react";
import MemeCanvas from "../src/components/MemeCanvas.js";
import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

// Multilanguage (i18n) básico
const languages = {
  en: {
    title: "AI Meme Generator",
    placeholder: "Type a funny situation...",
    generate: "Generate Meme",
  },
  pt: {
    title: "Gerador de Memes com IA",
    placeholder: "Digite uma situação engraçada...",
    generate: "Gerar Meme",
  },
  es: {
    title: "Generador de Memes con IA",
    placeholder: "Escribe una situación divertida...",
    generate: "Generar Meme",
  },
};

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("en");

  // Função para trocar idioma
  const handleLanguage = (e) => setLang(e.target.value);

  // Função para gerar meme via IA (Hugging Face API)
  const generateMeme = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/YourModelHere",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer YOUR_HUGGINGFACE_API_KEY",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error("Erro ao gerar meme:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="main-container py-12">
      <CookieBanner />

      {/* Menu multilíngue */}
      <div className="flex justify-end mb-6">
        <select
          value={lang}
          onChange={handleLanguage}
          className="border rounded px-3 py-1"
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
          <option value="es">Español</option>
        </select>
      </div>

      <h1 className="text-3xl font-bold mb-4">{languages[lang].title}</h1>

      {/* Textarea do prompt */}
      <textarea
        className="border rounded p-3 w-full mb-4"
        rows="3"
        placeholder={languages[lang].placeholder}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/* Botão Gerar Meme */}
      <button
        onClick={generateMeme}
        className="btn btn-primary mb-6"
        disabled={loading}
      >
        {loading ? "Loading..." : languages[lang].generate}
      </button>

      {/* Preview do Meme */}
      <MemeCanvas imageUrl={imageUrl} />

      {/* Botão para compartilhar o meme */}
      {imageUrl && (
        <div className="flex justify-center mt-4 gap-4">
          <a
            href={imageUrl}
            download="meme.png"
            className="btn btn-primary"
          >
            Download Meme
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              imageUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Share on Twitter
          </a>
        </div>
      )}

      {/* Banner de anúncios */}
      <AdBanner className="mt-6" />
    </div>
  );
    }
