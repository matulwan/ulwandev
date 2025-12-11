// app/layout.tsx
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ulwan | Web Services',
  description: 'Premium web development services. I build engaging, high-performance websites and applications.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased bg-primary-bg text-text selection:bg-accent selection:text-primary-bg">
        {children}
      </body>
    </html>
  );
}