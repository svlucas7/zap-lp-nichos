import React from "react";

const NICHOS = [
  { title: "Eventos", url: "https://conteudo.zapgrafica.com.br/nicho-eventos-parceiro" },
  { title: "RH", url: "https://conteudo.zapgrafica.com.br/nicho-recursos-humanos-parceiro" },
  { title: "Escola", url: "https://conteudo.zapgrafica.com.br/nicho-escola-e-ensino-parceiro" },
  { title: "Hotelaria", url: "https://conteudo.zapgrafica.com.br/produtos-hotelaria" },
  { title: "Saúde e beleza", url: "https://conteudo.zapgrafica.com.br/nicho-saude" },
  { title: "Tecnologia", url: "https://conteudo.zapgrafica.com.br/nicho-tecnologia" },
  { title: "Alimentício", url: "https://conteudo.zapgrafica.com.br/produtos-alimenticio" },
  { title: "Bebês e crianças", url: "https://conteudo.zapgrafica.com.br/nicho-bebes-e-criancas" },
  { title: "Sustentáveis", url: "https://conteudo.zapgrafica.com.br/nicho-produtos-sustentaveis" },
  { title: "Joalheria", url: "https://conteudo.zapgrafica.com.br/nicho-joias-e-relogios" },
  { title: "Automotivo", url: "https://conteudo.zapgrafica.com.br/nicho-automotivo" },
  { title: "E-commerce", url: "https://conteudo.zapgrafica.com.br/nicho-servicos-digitais" },
  { title: "Advocacia", url: "https://conteudo.zapgrafica.com.br/nicho-advocacia" },
  { title: "Esportes e Fitness", url: "https://conteudo.zapgrafica.com.br/nicho-esportes-e-fitness" },
  { title: "Petshop", url: "https://conteudo.zapgrafica.com.br/produtos-petshop" },
  { title: "Casa e decoração", url: "https://conteudo.zapgrafica.com.br/nicho-casa-e-decoracao" },
  { title: "Turismo", url: "https://conteudo.zapgrafica.com.br/nicho-turismo-e-viagens" },
  { title: "Móveis e decoração", url: "https://conteudo.zapgrafica.com.br/nicho-moveis" },
  { title: "Moda", url: "https://conteudo.zapgrafica.com.br/nicho-moda-e-acessorios" },
  { title: "Cerimonial", url: "http://zapcerimonial.netlify.app/" },
];

const ZAP_CLASS_VIDEOS = [
  {
    title: "Como vender mais com a Zap Gráfica",
    url: "https://www.youtube.com/watch?v=mp274wRc2dY&list=PLnrtPPaEQLUFqoDGQDzo27WRp3hP_M7F7&index=17",
  },
  {
    title: "Dicas para impulsionar seu negócio",
    url: "https://www.youtube.com/watch?v=Wa1VNYyE0QY&list=PLnrtPPaEQLUFqoDGQDzo27WRp3hP_M7F7&index=7",
  },
  {
    title: "Como usar o portfólio Zap",
    url: "https://www.youtube.com/watch?v=Sdp6k_Z-sSY",
  },
];

const PRODUTOS = [
  "Comunicação",
  "Promocional",
  "Brindes",
  "Tecidos",
  "Embalagens",
  "Atacado",
  "Rótulos",
  "Digital",
];

export default function Home() {
  return (
    <div className="bg-[#272325] min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center bg-[#00d355] text-[#272325]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">ENCONTRE O SEU NICHO E PERSONALIZE COMO QUISER!</h1>
        <p className="text-lg md:text-2xl mb-6">Com apenas um clique, conheça a categoria perfeita para o seu negócio</p>
        <a
          href="https://wa.me/+553125666500?text=Zap%20sob%20medida%20para%20voc%C3%AA%21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#272325] text-[#00d355] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#00b84c] hover:text-white transition-colors duration-200"
        >
          Fale com a Zap pelo WhatsApp
        </a>
      </section>

      {/* Opções Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Procurando algo diferente?</h2>
          <p className="mb-4">Veja tudo o que temos em linhas e produtos:</p>
          <a
            href="https://zapgrafica.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 text-[#00d355] font-semibold hover:underline"
          >
            Ver catálogo completo
          </a>
          <ul className="flex flex-wrap justify-center gap-3 mb-2">
            {PRODUTOS.map((item) => (
              <li key={item} className="bg-[#00d355] text-[#272325] px-4 py-2 rounded-full font-medium shadow hover:bg-[#00b84c] transition-colors duration-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Zap Class Section */}
      <section className="py-12 px-4 bg-[#232021]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Confira nossos conteúdos estratégicos e aumente suas vendas!</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {ZAP_CLASS_VIDEOS.map((video, idx) => (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#272325] rounded-lg p-4 flex flex-col items-center shadow hover:scale-105 transition-transform duration-200"
              >
                <img src={`https://img.youtube.com/vi/${video.url.split("v=")[1].split("&")[0]}/hqdefault.jpg`} alt={video.title} className="rounded mb-2 w-full h-32 object-cover" />
                <span className="font-semibold text-[#00d355]">{video.title}</span>
              </a>
            ))}
            <div className="bg-[#272325] rounded-lg p-4 flex flex-col items-center justify-center shadow">
              <span className="font-semibold text-[#00d355] mb-2">Vídeo de orçamento ainda em edição com o Matheus</span>
              <span className="text-xs text-gray-400">Em breve</span>
            </div>
          </div>
          <a
            href="https://www.youtube.com/watch?v=cEuwqewUBuw&list=PLnrtPPaEQLUFqoDGQDzo27WRp3hP_M7F7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#00d355] font-semibold hover:underline"
          >
            Ver playlist completa
          </a>
        </div>
      </section>

      {/* Kit de Amostras Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">KIT DE AMOSTRAS</h2>
          <p className="mb-4">Mostre, convença e conquiste: o mostruário que vende por você.</p>
          <a
            href="https://www.zapgrafica.com.br/home/categoria/amostra-parceiro-zap/parceiro-zap"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00d355] text-[#272325] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#00b84c] hover:text-white transition-colors duration-200"
          >
            Garanta seu kit agora
          </a>
        </div>
      </section>

      {/* Nichos Section */}
      <section className="py-12 px-4 bg-[#232021]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Segmentos & Nichos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {NICHOS.map((nicho) => (
              <div key={nicho.title} className="bg-[#272325] rounded-xl p-6 flex flex-col items-center shadow hover:scale-105 transition-transform duration-200">
                {/* Icon placeholder */}
                <div className="w-12 h-12 mb-3 bg-[#00d355] rounded-full flex items-center justify-center text-[#272325] font-bold text-xl">
                  {nicho.title.charAt(0)}
                </div>
                <span className="font-semibold mb-2 text-center">{nicho.title}</span>
                <a
                  href={nicho.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00d355] text-[#272325] px-4 py-2 rounded-full font-medium shadow hover:bg-[#00b84c] hover:text-white transition-colors duration-200 mt-2"
                >
                  Saiba mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#272325] text-center border-t border-[#00d355]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <a href="https://zapgrafica.com.br" target="_blank" rel="noopener noreferrer" className="text-[#00d355] font-semibold hover:underline">Site oficial</a>
          <a href="https://www.instagram.com/zapgrafica/" target="_blank" rel="noopener noreferrer" className="text-[#00d355] font-semibold hover:underline">Instagram</a>
          <a href="https://www.facebook.com/zapgrafica/" target="_blank" rel="noopener noreferrer" className="text-[#00d355] font-semibold hover:underline">Facebook</a>
          <a href="https://wa.me/+553125666500?text=Zap%20sob%20medida%20para%20voc%C3%AA%21" target="_blank" rel="noopener noreferrer" className="bg-[#00d355] text-[#272325] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#00b84c] hover:text-white transition-colors duration-200">Fale com a Zap pelo WhatsApp</a>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Zap Gráfica. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
