import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Open_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import regions from './metadata/regions';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
});

// Динамические метаданные на основе региона
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();

  // Отладка: проверим все заголовки

  // Получаем регион из middleware
  const region = headersList.get('x-region') || 'default';
  const pathname = headersList.get('x-pathname') || '/';

  const regionData = regions[region as keyof typeof regions];

  return {
    title: regionData.title,
    description: regionData.description,
    keywords: regionData.keywords,
    authors: [{ name: 'DoorHan Крым' }],
    creator: 'DoorHan Крым',
    publisher: 'DoorHan Крым',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(
      `https://${region === 'default' ? 'crimea' : region}.doorhan.ru`
    ),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: regionData.title,
      description: regionData.description,
      url: `https://${
        region === 'default' ? 'crimea' : region
      }.doorhan.ru${pathname}`,
      siteName: 'DoorHan Крым',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'DoorHan Крым',
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: regionData.title,
      description: regionData.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00205B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
