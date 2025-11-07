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

      {/* Conteúdo explicativo / SEO */}
      <article className="prose max-w-none text-slate-800 mt-8">
        <h2>Bem-vindo ao MemeBlast — Crie memes instantaneamente!</h2>
        <p>
          MemeBlast é uma plataforma gratuita que permite criar, personalizar e compartilhar memes em segundos.
          Sem precisar de cadastro ou instalação, você pode usar os templates populares ou enviar sua própria imagem.
          Nosso objetivo é tornar a criação de memes rápida, divertida e acessível para todos.
        </p>

        <p>
          A experiência é totalmente responsiva: funciona perfeitamente em celulares, tablets e desktops. Adicione texto superior e inferior, gere o meme e compartilhe imediatamente. MemeBlast é ideal para redes sociais, grupos de amigos ou qualquer pessoa que queira expressar sua criatividade.
        </p>

        <p>
          Para usuários preocupados com privacidade, garantimos que nenhum dado pessoal é armazenado sem consentimento. Os cookies são usados apenas para melhorar a navegação e a experiência, conforme detalhado na nossa <Link href="/privacy" className="underline text-primary">Política de Privacidade</Link>.
        </p>

        <h3>Como MemeBlast mantém você engajado</h3>
        <p>
          Diferente de outros geradores de memes, não há necessidade de criar contas ou baixar softwares pesados. A geração de memes acontece inteiramente no navegador, garantindo velocidade e segurança.
        </p>

        <p>
          Para monetização e manutenção do serviço gratuito, utilizamos banners discretos. Isso garante que você continue usando todas as funcionalidades sem interrupções, e mantém a plataforma sustentável.
        </p>

        <h3>Compartilhe com facilidade</h3>
        <p>
          Após criar seu meme, compartilhe diretamente nas redes sociais ou copie o link para enviar aos amigos. Quanto mais compartilhar, maior a viralidade e engajamento da plataforma. MemeBlast incentiva a criatividade e diversão de todos os usuários.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
        </p>

        <p>
          Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
        </p>

        <p className="text-center mt-6">
          <Link href="/generator" className="btn btn-primary text-lg px-6 py-3">
            Clique aqui para gerar memes agora!
          </Link>
        </p>
      </article>

      {/* Grid de funcionalidades */}
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <h4 className="font-bold text-lg mb-2">Crie Memes Rápido</h4>
          <p className="text-slate-600 text-sm">
            Escolha um template popular ou carregue o seu. Adicione texto e compartilhe instantaneamente.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <h4 className="font-bold text-lg mb-2">Totalmente Grátis</h4>
          <p className="text-slate-600 text-sm">
            Use todos os recursos sem criar conta ou pagar nada. Ideal para diversão imediata.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <h4 className="font-bold text-lg mb-2">Compartilhe Fácil</h4>
          <p className="text-slate-600 text-sm">
            Copie o link ou compartilhe direto nas redes sociais. Quanto mais compartilhar, mais viraliza.
          </p>
        </div>
      </section>

      {/* Banner de anúncio final */}
      <AdBanner className="my-12" />

      {/* Rodapé com links obrigatórios AdSense */}
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
