import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function Home() {
  return (
    <div>
      <CookieBanner />
      <AdBanner className="mb-4" />
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao MemeBlast IA</h1>
      <p>
        {/* Aqui vai o conteúdo >800 palavras exigido pelo AdSense */}
      </p>
      <AdBanner className="mt-6" />
    </div>
  );
    }
