// src/components/MemeCanvas.js
import React from "react";

export default function MemeCanvas({ imageUrl }) {
  if (!imageUrl) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-100 rounded-xl">
        <p className="text-gray-400">O meme aparecerá aqui...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <img
        src={imageUrl}
        alt="Meme gerado"
        className="rounded-xl shadow-lg max-w-full h-auto"
      />
    </div>
  );
}
