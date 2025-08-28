import { ZapClassIcon } from './Icons';

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

export default function ZapClassSection() {
  return (
    <section className="py-12 px-4 bg-[#232021]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <ZapClassIcon className="w-7 h-7 text-zapgreen" /> Confira nossos conteúdos estratégicos e aumente suas vendas!
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {ZAP_CLASS_VIDEOS.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zapgray rounded-lg p-4 flex flex-col items-center shadow hover:scale-105 transition-transform duration-200"
            >
              <img src={`https://img.youtube.com/vi/${video.url.split("v=")[1].split("&")[0]}/hqdefault.jpg`} alt={video.title} className="rounded mb-2 w-full h-32 object-cover" />
              <span className="font-semibold text-zapgreen">{video.title}</span>
            </a>
          ))}
          <div className="bg-zapgray rounded-lg p-4 flex flex-col items-center justify-center shadow">
            <span className="font-semibold text-zapgreen mb-2">Vídeo de orçamento ainda em edição com o Matheus</span>
            <span className="text-xs text-gray-400">Em breve</span>
          </div>
        </div>
        <a
          href="https://www.youtube.com/watch?v=cEuwqewUBuw&list=PLnrtPPaEQLUFqoDGQDzo27WRp3hP_M7F7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-zapgreen font-semibold hover:underline"
        >
          Ver playlist completa
        </a>
      </div>
    </section>
  );
}
