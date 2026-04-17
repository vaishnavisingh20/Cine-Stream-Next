import React from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import { FavoritesProvider } from '@/context/FavoritesContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cine-Stream - Discover Movies',
  description: 'Your ultimate movie discovery platform powered by OMDB API',
  keywords: 'movies, cinema, streaming, omdb, search movies',
  openGraph: {
    title: 'Cine-Stream',
    description: 'Discover amazing movies',
    images: '/og-image.jpg',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoritesProvider>
          <Navbar />
          <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {children}
          </main>
        </FavoritesProvider>
      </body>
    </html>
  );
}