'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const CategoriesGrid = dynamic(() => import('@/components/CategoriesGrid'), {
  ssr: false,
});

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoriesGrid />
      <Footer />
    </main>
  );
}
