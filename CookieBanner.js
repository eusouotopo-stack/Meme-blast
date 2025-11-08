// src/components/CookieBanner.js
import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-4 rounded-xl shadow-lg flex justify-between items-center z-50">
      <p>
        Este site usa cookies para melhorar sua experiência.{" "}
        <a href="/privacy" className="underline">
          Saiba mais
        </a>
      </p>
      <button onClick={acceptCookies} className="ml-4 btn btn-primary">
        Aceitar
      </button>
    </div>
  );
}
