import { CatalogIcon } from './Icons';

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

export default function OptionsSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <CatalogIcon className="w-7 h-7 text-zapgreen" /> Procurando algo diferente?
        </h2>
        <p className="mb-4">Veja tudo o que temos em linhas e produtos:</p>
        <a
          href="https://zapgrafica.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-6 text-zapgreen font-semibold hover:underline"
        >
          Ver catálogo completo
        </a>
        <ul className="flex flex-wrap justify-center gap-3 mb-2">
          {PRODUTOS.map((item) => (
            <li key={item} className="bg-zapgreen text-zapgray px-4 py-2 rounded-full font-medium shadow hover:bg-[#00b84c] transition-colors duration-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
