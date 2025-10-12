'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const ProductsList = dynamic(() => import('@/components/ProductsList'), {
  ssr: false,
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductsList />
      <Footer />
    </main>
  );
}
