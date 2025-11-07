import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function HomePage() {
  return (
    <div className="main-container py-12 px-4 sm:px-6 lg:px-12">
      <CookieBanner />

      {/* Cabeçalho */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to MemeBlast IA</h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Create AI-powered memes instantly. Our service is completely free, fast,
          and easy to use. No registration required — just start generating your memes now!
        </p>
      </header>

      {/* Resumo dos serviços */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="service-card p-6 border rounded shadow hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-2">AI Meme Generator</h2>
          <p>Create high-quality memes instantly using AI with your custom text prompts.</p>
        </div>
        <div className="service-card p-6 border rounded shadow hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-2">Download Memes</h2>
          <p>Download your created memes directly to your device for sharing anywhere.</p>
        </div>
        <div className="service-card p-6 border rounded shadow hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-2">Share Online</h2>
          <p>Share your memes instantly to Twitter and other social media platforms.</p>
        </div>
        <div className="service-card p-6 border rounded shadow hover:shadow-lg transition">
          <h2 className="font-bold text-xl mb-2">Multilingual Support</h2>
          <p>Use the platform in English, Portuguese, or Spanish for global accessibility.</p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <a
          href="/generator"
          className="btn btn-primary text-lg sm:text-xl px-5 sm:px-6 py-3 sm:py-4 rounded-md"
        >
          Start Now for Free
        </a>
        <p className="mt-3 text-gray-700 text-sm sm:text-base">
          Enjoy our AI meme generator completely free, no signup required!
        </p>
      </div>

      {/* Banner de anúncios */}
      <AdBanner className="mt-6" />
    </div>
  );
    }
