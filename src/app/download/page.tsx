'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import About from '@/components/About';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import { generateCompanyPDF } from '@/lib/generatePDF';

export default function DownloadPage() {
  const { currentLang } = useLanguage();
  const [hasGenerated, setHasGenerated] = useState(false);

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = 'ltr';
  }, [currentLang]);

  useEffect(() => {
    if (!hasGenerated) {
      setHasGenerated(true);
      // Generate PDF after a short delay to ensure content is rendered
      setTimeout(() => {
        generateCompanyPDF();
      }, 2000);
    }
  }, [hasGenerated]);

  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 bg-white">
        <Navigation />
        <div className="print-page-container">
          <About />
          <Services />
          <ContactForm />
        </div>
        <Footer />
      </main>
    </div>
  );
}

