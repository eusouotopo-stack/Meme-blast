import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function About() {
  return (
    <div className="main-container py-12">
      <CookieBanner />
      <h1 className="text-3xl font-bold mb-4">Sobre o MemeBlast IA</h1>
      <p>
        {/* Conteúdo >800 palavras */}
      </p>
      <AdBanner className="mt-6" />
    </div>
  );
    }
