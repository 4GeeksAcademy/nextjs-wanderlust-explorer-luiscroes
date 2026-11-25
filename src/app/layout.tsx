import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { FavoritesProvider } from '@/context/FavoritesContext';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wanderlust Explorer',
  description: 'Descubre, busca y guarda experiencias únicas alrededor del mundo.',
};

const RootLayout = ({ children }: LayoutProps<'/'>) => (
  <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
    <body className="flex min-h-full flex-col bg-stone-50 text-stone-900">
      <FavoritesProvider>
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-8 md:py-10">{children}</main>
        <Footer />
      </FavoritesProvider>
    </body>
  </html>
);

export default RootLayout;
