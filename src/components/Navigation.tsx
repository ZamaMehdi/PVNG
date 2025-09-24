'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import PVSSModal from './PVSSModal';

export default function Navigation() {
  const { langContent, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [isPVSSModalOpen, setIsPVSSModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check screen size for mobile and tablet menus
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 500);
      setIsTablet(width >= 500 && width < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile and tablet menus when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        if (!target.closest('.mobile-menu-container') && !target.closest('[aria-label="Toggle mobile menu"]')) {
          setIsMobileMenuOpen(false);
        }
      }
      if (isTabletMenuOpen) {
        const target = event.target as Element;
        if (!target.closest('.tablet-menu-container') && !target.closest('[aria-label="Toggle tablet menu"]')) {
          setIsTabletMenuOpen(false);
        }
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
        if (isTabletMenuOpen) {
          setIsTabletMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen, isTabletMenuOpen]);

  return (
    <nav className={`${isHomePage ? (isScrolled ? 'scrolled-transparent' : 'transparent-header') : 'glass'} fixed top-0 left-0 right-0 z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="rounded-xl overflow-hidden -ml-6 -mt-4 w-12 h-12 md:w-[73px] md:h-[75px]">
            <img 
              src="/images/logo (2).png" 
              alt="PVNG Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-base md:text-lg lg:text-xl font-bold italic text-white -mt-2">PVNG</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <Link 
            href="/"
            className={`nav-link ${isActive('/') ? 'active' : ''} ${isHomePage ? 'text-white' : ''} text-sm sm:text-base`}
          >
            {langContent.navHome}
          </Link>
          <Link 
            href="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''} ${isHomePage ? 'text-white' : ''} text-sm sm:text-base`}
          >
            {langContent.navAbout}
          </Link>
          <Link 
            href="/services"
            className={`nav-link ${isActive('/services') ? 'active' : ''} ${isHomePage ? 'text-white' : ''} text-sm sm:text-base`}
          >
            {langContent.navServices}
          </Link>
          <Link 
            href="/projects"
            className={`nav-link ${isActive('/projects') ? 'active' : ''} ${isHomePage ? 'text-white' : ''} text-sm sm:text-base`}
          >
            {langContent.navProjects}
          </Link>
          <button 
            onClick={() => setIsPVSSModalOpen(true)}
            className={`nav-link ${isHomePage ? 'text-white' : ''} hover:opacity-80 transition-opacity text-sm sm:text-base`}
          >
            {langContent.navPVSS}
          </button>
          <Link 
            href="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''} ${isHomePage ? 'text-white' : ''} text-sm sm:text-base`}
          >
            {langContent.navContact}
          </Link>
        </div>
        
        {/* Desktop Language Button */}
        <div className="hidden lg:flex items-center gap-4">
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

        {/* Tablet Menu Button */}
        {isTablet && (
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 md:px-3 md:py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-xs md:text-sm"
            >
              {langContent.langButton}
            </button>
            <button
              onClick={() => setIsTabletMenuOpen(!isTabletMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${isHomePage ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle tablet menu"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isTabletMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 md:px-3 md:py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-xs md:text-sm"
          >
            {langContent.langButton}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${isHomePage ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle mobile menu"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu-container fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
        <div className="bg-black/70 backdrop-blur-md absolute top-0 left-0 right-0 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
          {/* Close button inside menu */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 pb-6 space-y-4">
            <Link 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
            >
              {langContent.navHome}
            </Link>
            <Link 
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/about') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
            >
              {langContent.navAbout}
            </Link>
            <Link 
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/services') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
            >
              {langContent.navServices}
            </Link>
            <Link 
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/projects') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
            >
              {langContent.navProjects}
            </Link>
            <button 
              onClick={() => {
                setIsPVSSModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-white hover:bg-white/10 text-base"
            >
              {langContent.navPVSS}
            </button>
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/contact') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
            >
              {langContent.navContact}
            </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tablet Menu Dropdown */}
      {isTablet && isTabletMenuOpen && (
        <div className="tablet-menu-container absolute top-full left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-white/10 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                href="/"
                onClick={() => setIsTabletMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {langContent.navHome}
              </Link>
              <Link 
                href="/about"
                onClick={() => setIsTabletMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/about') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {langContent.navAbout}
              </Link>
              <Link 
                href="/services"
                onClick={() => setIsTabletMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/services') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {langContent.navServices}
              </Link>
              <Link 
                href="/projects"
                onClick={() => setIsTabletMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/projects') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {langContent.navProjects}
              </Link>
              <button 
                onClick={() => {
                  setIsPVSSModalOpen(true);
                  setIsTabletMenuOpen(false);
                }}
                className="flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-white hover:bg-white/10 text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {langContent.navPVSS}
              </button>
              <Link 
                href="/contact"
                onClick={() => setIsTabletMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-base ${isActive('/contact') ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/10'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {langContent.navContact}
              </Link>
            </div>
          </div>
        </div>
      )}
      
      <PVSSModal 
        isOpen={isPVSSModalOpen} 
        onClose={() => setIsPVSSModalOpen(false)} 
      />
    </nav>
  );
}
