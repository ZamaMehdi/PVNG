'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import PVSSModal from '@/components/PVSSModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesPage() {
  const { currentLang } = useLanguage();
  const [isPVSSModalOpen, setIsPVSSModalOpen] = useState(false);

  useEffect(() => {
    // Update HTML attributes based on current language
    document.documentElement.lang = currentLang;
    // Keep layout direction as LTR (left-to-right) for both languages
    document.documentElement.dir = 'ltr';
  }, [currentLang]);

  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Navigation />
        <Services />
      </main>
      
      <Footer />
      
      {/* Hidden PVSS Modal Trigger for FloatingChatButton */}
      <button 
        onClick={() => setIsPVSSModalOpen(true)} 
        data-pvss-trigger 
        className="hidden"
        aria-hidden="true"
      />
      
      {/* PVSS Calculator Modal */}
      <PVSSModal 
        isOpen={isPVSSModalOpen} 
        onClose={() => setIsPVSSModalOpen(false)} 
      />
    </div>
  );
}
