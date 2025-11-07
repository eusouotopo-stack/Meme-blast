// src/components/AdBanner.js
import React from 'react'

/**
 * AdBanner component
 * - Placeholder for Adsense / alternative ad networks.
 * - When approved by AdSense, add the <script> into _document.js or _app,
 *   then uncomment the <ins> block below and replace data-ad-client/data-ad-slot.
 *
 * For testing you can keep a non-intrusive placeholder or a static sponsor banner image.
 */

export default function AdBanner({ className = '' }) {
  return (
    <div className={`w-full my-4 flex items-center justify-center ${className}`}>
      {/* === AD-SLOT PLACEHOLDER ===
        When ready, insert AdSense code here. Example:
        <ins className="adsbygoogle"
            style={{ display: 'block', width: 728, height: 90 }}
            data-ad-client="ca-pub-XXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        And run: (window.adsbygoogle = window.adsbygoogle || []).push({});
      */}
      <div className="w-full max-w-3xl h-20 rounded-lg border border-dashed border-slate-200 bg-white/60 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <div className="text-sm font-semibold">Ad / Sponsor</div>
          <div className="text-xs">Placeholder — insira código do AdSense aqui</div>
        </div>
      </div>
    </div>
  )
    }
