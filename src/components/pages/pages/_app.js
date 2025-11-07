// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <meta name="theme-color" content="#0ea5a4" />
        <meta name="description" content="Crie memes grátis e compartilhe instantaneamente com MemeBlast!" />

        {/* ==== Local para inserir o script do Google AdSense quando tiver aprovação ==== */}
        {/*
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
        */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
    }
