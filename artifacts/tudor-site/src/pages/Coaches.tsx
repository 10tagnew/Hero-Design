import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Highlights } from '@/components/Highlights';
import { QuickLinks } from '@/components/QuickLinks';
import { Newsletter } from '@/components/Newsletter';
import { Podcast } from '@/components/Podcast';
import { Footer } from '@/components/Footer';

export default function Coaches() {
  return (
    <>
      <Hero />
      <Features />
      <Highlights />
      <QuickLinks />
      <Newsletter />
      <Podcast />
      <Footer />
    </>
  );
}
