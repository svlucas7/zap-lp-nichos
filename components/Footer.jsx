import { WhatsAppIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-zapgray text-center border-t border-zapgreen">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
        <a href="https://zapgrafica.com.br" target="_blank" rel="noopener noreferrer" className="text-zapgreen font-semibold hover:underline">Site oficial</a>
        <a href="https://www.instagram.com/zap_grafica/" target="_blank" rel="noopener noreferrer" className="text-zapgreen font-semibold hover:underline">Instagram</a>
        <a href="https://www.facebook.com/zapgrafica/" target="_blank" rel="noopener noreferrer" className="text-zapgreen font-semibold hover:underline">Facebook</a>
        <a href="https://wa.me/+553125666500?text=Zap%20sob%20medida%20para%20voc%C3%AA%21" target="_blank" rel="noopener noreferrer" className="bg-zapgreen text-zapgray px-6 py-2 rounded-full font-semibold shadow hover:bg-[#00b84c] hover:text-white transition-colors duration-200 flex items-center gap-2">
          <WhatsAppIcon className="w-5 h-5" /> Fale com a Zap pelo WhatsApp
        </a>
      </div>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} Zap Gráfica. Todos os direitos reservados.</p>
    </footer>
  );
}
