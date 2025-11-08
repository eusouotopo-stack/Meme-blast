// src/components/AdBanner.js
import React from "react";

export default function AdBanner({ className }) {
  return (
    <div
      className={`w-full bg-gray-200 h-24 flex justify-center items-center rounded-xl ${className}`}
    >
      {/* Substitua este div pelo código do seu AdSense */}
      <span className="text-gray-500">Banner de Anúncio</span>
    </div>
  );
}
