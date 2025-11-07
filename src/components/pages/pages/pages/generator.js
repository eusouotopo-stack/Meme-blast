// pages/generator.js
import { useState, useRef } from 'react'
import Link from 'next/link'
import MemeCanvas from '../src/components/MemeCanvas'
import AdBanner from '../src/components/AdBanner'
import htmlToImage from 'html-to-image'

export default function Generator() {
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [templateUrl, setTemplateUrl] = useState('/templates/drake.jpg')
  const previewRef = useRef(null)
  const [downloadUrl, setDownloadUrl] = useState(null)

  const templates = [
    { name: 'Drake', url: '/templates/drake.jpg' },
    { name: 'Distracted Boyfriend', url: '/templates/distracted.jpg' },
    { name: 'Two Buttons', url: '/templates/twobuttons.jpg' }
  ]

  const handleExport = async () => {
    if (!previewRef.current) return
    const dataUrl = await htmlToImage.toJpeg(previewRef.current, { quality: 0.95 })
    setDownloadUrl(dataUrl)
  }

  return (
    <div className="main-container py-12">
      {/* Header / breadcrumb */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Gerador de Memes</h1>
        <Link href="/" className="btn btn-ghost text-sm">← Voltar para Home</Link>
      </div>

      {/* Banner de anúncio */}
      <AdBanner />

      {/* Seção de seleção de template e texto */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Escolha um Template
            <select
              className="border rounded p-2 text-sm"
              value={templateUrl}
              onChange={e => setTemplateUrl(e.target.value)}
            >
              {templates.map(t => (
                <option key={t.url} value={t.url}>{t.name}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Texto Superior
            <input
              type="text"
              className="border rounded p-2 text-sm"
              value={topText}
              onChange={e => setTopText(e.target.value)}
              placeholder="Digite o texto superior"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Texto Inferior
            <input
              type="text"
              className="border rounded p-2 text-sm"
              value={bottomText}
              onChange={e => setBottomText(e.target.value)}
              placeholder="Digite o texto inferior"
            />
          </label>

          <div className="flex flex-col gap-2 mt-4">
            <button onClick={handleExport} className="btn btn-primary">
              Gerar Meme
            </button>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download="meme.jpg"
                className="btn btn-ghost text-center"
              >
                Baixar Meme
              </a>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="bg-slate-50 p-4 rounded-xl shadow flex justify-center">
          <div ref={previewRef}>
            <MemeCanvas template={templateUrl} topText={topText} bottomText={bottomText} />
          </div>
        </div>
      </section>

      {/* Banner de anúncio final */}
      <AdBanner className="my-12" />
    </div>
  )
    }
