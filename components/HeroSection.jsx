import { motion } from 'framer-motion';
import { WhatsAppIcon } from './Icons';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center bg-zapgreen text-zapgray">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-bold mb-4">
        ENCONTRE O SEU NICHO E PERSONALIZE COMO QUISER!
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-2xl mb-6">
        Com apenas um clique, conheça a categoria perfeita para o seu negócio
      </motion.p>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        href="https://wa.me/+553125666500?text=Zap%20sob%20medida%20para%20voc%C3%AA%21"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zapgray text-zapgreen px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-zapgreen hover:text-white transition-colors duration-200 flex items-center gap-2"
      >
        <WhatsAppIcon className="w-6 h-6" /> Fale com a Zap pelo WhatsApp
      </motion.a>
    </section>
  );
}
