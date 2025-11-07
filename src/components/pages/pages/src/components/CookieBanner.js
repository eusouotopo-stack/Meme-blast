// src/components/CookieBanner.js
import Link from 'next/link'

export default function CookieBanner({ onAccept }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[700px] bg-white shadow-xl border border-slate-200 rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <div className="text-sm text-slate-700 leading-snug">
        🍪 Este site utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com o uso de cookies.
        <Link href="/privacy" className="text-primary font-medium ml-1 underline">Saber mais</Link>.
      </div>
      <button
        onClick={onAccept}
        className="btn btn-primary text-sm px-4 py-2"
      >
        Aceitar
      </button>
    </div>
  )
    }
