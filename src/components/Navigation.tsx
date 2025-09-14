'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const { currentLang, langContent, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isHomePage = pathname === '/';

  return (
    <nav className={`${isHomePage ? 'transparent-header' : 'glass'} fixed top-0 left-0 right-0 z-50`}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className={`text-xl font-bold ${isHomePage ? 'text-white' : 'text-gray-900'}`}>PVNG</span>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <Link 
            href="/"
            className={`nav-link ${isActive('/') ? 'active' : ''} ${isHomePage ? 'text-white' : ''}`}
          >
            {langContent.navHome}
          </Link>
          <Link 
            href="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''} ${isHomePage ? 'text-white' : ''}`}
          >
            {langContent.navAbout}
          </Link>
          <Link 
            href="/services"
            className={`nav-link ${isActive('/services') ? 'active' : ''} ${isHomePage ? 'text-white' : ''}`}
          >
            {langContent.navServices}
          </Link>
          <Link 
            href="/projects"
            className={`nav-link ${isActive('/projects') ? 'active' : ''} ${isHomePage ? 'text-white' : ''}`}
          >
            {langContent.navProjects}
          </Link>
          <Link 
            href="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''} ${isHomePage ? 'text-white' : ''}`}
          >
            {langContent.navContact}
          </Link>
        </div>
        
        <button 
          onClick={toggleLanguage}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          {langContent.langButton}
        </button>
      </div>
    </nav>
  );
}
