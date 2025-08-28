import { SampleIcon } from './Icons';

export default function KitSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <SampleIcon className="w-7 h-7 text-zapgreen" /> KIT DE AMOSTRAS
        </h2>
        <p className="mb-4">Mostre, convença e conquiste: o mostruário que vende por você.</p>
        <a
          href="https://www.zapgrafica.com.br/home/categoria/amostra-parceiro-zap/parceiro-zap"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zapgreen text-zapgray px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#00b84c] hover:text-white transition-colors duration-200"
        >
          Garanta seu kit agora
        </a>
      </div>
    </section>
  );
}
