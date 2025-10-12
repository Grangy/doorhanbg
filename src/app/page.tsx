import { headers } from 'next/headers';

async function getRegion() {
  const headersList = await headers();
  const region = headersList.get('x-region') || 'default';
  return region;
}

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ProductGrid from '@/components/ProductGrid';
import AboutSection from '@/components/AboutSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default async function Home() {
  const region = await getRegion();
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection region={region} />
      <StatsSection />
      <ProductGrid />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </main>
  );
}
