import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';
import { ThemeProviders } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brands Palettes | Hexadecimal brands colors.',
  description: 'List of hexadecimal brands colors.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-[#161616] bg-white text-white min-h-screen antialiased ${inter.className}`}
        suppressHydrationWarning
      >
        <ThemeProviders>
          <main>
            <Sidebar />
            {children}
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
