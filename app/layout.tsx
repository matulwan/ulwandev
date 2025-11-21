// app/layout.tsx
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ulwan Ukail - Fullstack Web Developer',
  description: 'Ulwan Ukail - Fullstack Web Developer. I turn caffeine into websites.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}