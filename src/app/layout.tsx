import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Mitch Quarfot | Data, AdTech & Cloud Solutions',
  description:
    'Consulting and advisory services for data platforms, AdTech/MarTech strategy, technical evaluations, and measurement solutions.',
  keywords: [
    'data consulting',
    'AdTech',
    'MarTech',
    'Snowflake',
    'cloud data',
    'attribution',
    'solution engineering',
  ],
  openGraph: {
    title: 'Mitch Quarfot | Data, AdTech & Cloud Solutions',
    description:
      'Consulting and advisory services for data platforms, AdTech/MarTech strategy, and measurement solutions.',
    url: 'https://quarfot.io',
    siteName: 'quarfot.io',
    images: [{ url: 'https://quarfot.io/headshot.png', width: 800, height: 800 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitch Quarfot | Data, AdTech & Cloud Solutions',
    description:
      'Consulting and advisory services for data platforms, AdTech/MarTech strategy, and measurement solutions.',
    images: ['https://quarfot.io/headshot.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
