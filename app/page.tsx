// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-primary-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-accent font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-primary-bg">
      <div className="loading-bar" id="loadingBar"></div>
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}