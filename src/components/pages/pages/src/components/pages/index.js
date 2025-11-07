// pages/index.js
import Link from 'next/link'
import AdBanner from '../src/components/AdBanner'

export default function Home() {
  return (
    <div className="main-container py-12">
      {/* Menu personalizado */}
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-primary">MemeBlast</h1>
        <ul className="flex gap-6 text-slate-600 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/privacy">Privacidade</Link></li>
          <li><Link href="/terms">Termos</Link></li>
          <li><Link href="/contact">Contato</Link></li>
          <li><Link href="/generator" className="btn btn-primary">Gerar Meme</Link></li>
        </ul>
      </nav>

      {/* Banner de anúncio */}
      <AdBanner />

      {/* Conteúdo explicativo — SEO / AdSense */}
      <article className="prose max-w-none text-slate-800">
        <h2>Bem-vindo ao MemeBlast — Crie memes instantaneamente</h2>
        <p>
          MemeBlast é uma ferramenta gratuita que permite criar e compartilhar memes em segundos, sem precisar de cadastro ou instalação. Nosso objetivo é oferecer uma experiência divertida e simples, ideal para redes sociais, grupos de amigos e qualquer pessoa que queira expressar sua criatividade de forma rápida.
        </p>

        <p>
          Nossa plataforma é totalmente responsiva, funcionando perfeitamente em celulares, tablets e desktops. Você pode escolher entre dezenas de templates de memes populares ou carregar seu próprio template. Depois, basta adicionar texto superior e inferior, clicar em "Gerar" e compartilhar instantaneamente.
        </p>

        <p>
          Para usuários preocupados com privacidade, garantimos que nenhum dado pessoal é armazenado sem consentimento. Além disso, utilizamos cookies apenas para melhorar a experiência de navegação, conforme detalhado em nossa <Link href="/privacy" className="underline text-primary">Política de Privacidade</Link>.
        </p>

        <h3>Como o MemeBlast mantém você engajado</h3>
        <p>
          O MemeBlast combina simplicidade com funcionalidade. Diferente de outros geradores, não há necessidade de baixar programas pesados ou criar contas. A geração de memes acontece inteiramente no navegador, garantindo rapidez e segurança.
        </p>

        <p>
          Para monetizar o serviço e manter tudo gratuito, utilizamos banners de anúncios discretos, garantindo que a experiência não seja interrompida. Você também pode optar pela versão premium futura, que permitirá acesso a recursos exclusivos sem anúncios.
        </p>

        <h3>Compartilhamento fácil</h3>
        <p>
          Depois de criar seu meme, você pode compartilhar diretamente nas redes sociais ou copiar o link para enviar a amigos. Quanto mais você compartilha, mais pessoas descobrem a ferramenta, aumentando a viralidade do site. Isso ajuda a criar uma comunidade ativa de usuários que gostam de se divertir e expressar sua criatividade.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
        </p>

        <p>
          Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
        </p>

        <p>
          <Link href="/generator" className="btn btn-primary mt-4 inline-block">Clique aqui para gerar memes agora!</Link>
        </p>
      </article>

      {/* Banner de anúncio no final */}
      <AdBanner />

      {/* Rodapé com links exigidos pelo AdSense */}
      <footer className="mt-16 border-t border-slate-200 py-6 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} MemeBlast — Todos os direitos reservados.</div>
        <div className="flex gap-4">
          <Link href="/about">Sobre</Link>
          <Link href="/privacy">Privacidade</Link>
          <Link href="/terms">Termos</Link>
          <Link href="/contact">Contato</Link>
        </div>
      </footer>
    </div>
  )
    }
