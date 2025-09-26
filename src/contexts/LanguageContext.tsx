'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, Content } from '@/lib/content';

interface LanguageContextType {
  currentLang: 'en' | 'ar';
  langContent: Content;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLang = localStorage.getItem('pvng-language') as 'en' | 'ar' | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setCurrentLang(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
    localStorage.setItem('pvng-language', newLang);
  };

  const langContent = content[currentLang];

  return (
    <LanguageContext.Provider value={{ currentLang, langContent, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

















