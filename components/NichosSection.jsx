import { NichoIcon } from './Icons';

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

export default function NichosSection() {
  return (
    <section className="py-12 px-4 bg-[#232021]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <NichoIcon className="w-7 h-7 text-zapgreen" /> Segmentos & Nichos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {NICHOS.map((nicho) => (
            <div key={nicho.title} className="bg-zapgray rounded-xl p-6 flex flex-col items-center shadow hover:scale-105 transition-transform duration-200">
              <div className="w-12 h-12 mb-3 bg-zapgreen rounded-full flex items-center justify-center text-zapgray font-bold text-xl">
                {nicho.title.charAt(0)}
              </div>
              <span className="font-semibold mb-2 text-center">{nicho.title}</span>
              <a
                href={nicho.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zapgreen text-zapgray px-4 py-2 rounded-full font-medium shadow hover:bg-[#00b84c] hover:text-white transition-colors duration-200 mt-2"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
