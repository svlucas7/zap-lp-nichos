import Head from 'next/head';
import { motion } from 'framer-motion';
import { WhatsAppIcon, CatalogIcon, SampleIcon, NichoIcon, ZapClassIcon } from '../components/Icons';
import HeroSection from '../components/HeroSection';
import OptionsSection from '../components/OptionsSection';
import ZapClassSection from '../components/ZapClassSection';
import KitSection from '../components/KitSection';
import NichosSection from '../components/NichosSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zap Gráfica - Nichos</title>
        <meta name="description" content="Landing page profissional para a Zap Gráfica. Encontre o seu nicho e personalize como quiser!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HeroSection />
        <OptionsSection />
        <ZapClassSection />
        <KitSection />
        <NichosSection />
      </main>
      <Footer />
    </>
  );
}
