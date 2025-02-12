import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Dashboard',
  description: 'Weather forecast application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight hover:text-gray-200 transition-colors duration-200">
                  Weather Dashboard
                </h1>
                <Navigation />
              </div>
            </div>
          </div>
        </header>
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
