// pages/_app.js
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import CookieBanner from '../src/components/CookieBanner'

export default function MyApp({ Component, pageProps }) {
  const [acceptedCookies, setAcceptedCookies] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookiesAccepted')
    if (stored === 'true') setAcceptedCookies(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setAcceptedCookies(true)
  }

  return (
    <>
      {/* === Header === */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="main-container flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-primary">
            MemeBlast
          </Link>
          <nav className="flex gap-5 text-sm text-slate-600">
            <Link href="/about">Sobre</Link>
            <Link href="/privacy">Privacidade</Link>
            <Link href="/terms">Termos</Link>
            <Link href="/contact">Contato</Link>
          </nav>
        </div>
      </header>

      {/* === Main Page === */}
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>

      {/* === Footer === */}
      <footer className="site-footer bg-slate-50 border-t border-slate-200">
        <div className="main-container flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} MemeBlast — Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="/privacy">Política</Link>
            <Link href="/terms">Termos</Link>
            <Link href="/contact">Contato</Link>
          </div>
        </div>
      </footer>

      {/* === Cookie Banner === */}
      {!acceptedCookies && <CookieBanner onAccept={handleAccept} />}
    </>
  )
    }
