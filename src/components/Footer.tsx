'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { langContent, currentLang } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div>
            <div className="mb-6">
              <span className={`text-xl font-bold ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>PVNG Electromechanical Works</span>
            </div>
            <p className={`text-gray-300 text-sm leading-relaxed mb-8 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
              {langContent.footerCompanyDescription}
            </p>
            <div className="flex items-center justify-center gap-6">
              <a href="mailto:info@pvng.com" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl">
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="tel:+971501234567" className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl">
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/pvng" className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl">
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-white ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.footerQuickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  {langContent.footerHome}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  {langContent.footerAboutUs}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  {langContent.footerServices}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  {langContent.footerProjects}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                  {langContent.footerContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-white ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.footerOurServices}</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm cursor-pointer">
                  {langContent.footerSolarEnergySystems}
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm cursor-pointer">
                  {langContent.footerSecuritySystems}
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm cursor-pointer">
                  {langContent.footerLowVoltageSystems}
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm cursor-pointer">
                  {langContent.footerGasPipingSolutions}
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm cursor-pointer">
                  {langContent.footerSustainabilityConsulting}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-white ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>{langContent.footerContactInfo}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm font-medium">{langContent.footerAddress}</p>
                <p className="text-gray-400 text-sm">Dubai, UAE</p>
              </div>
              
              <div>
                <p className="text-gray-300 text-sm font-medium">{langContent.footerPhone}</p>
                <a href="tel:+971501234567" className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-300">+971 50 123 4567</a>
              </div>
              
              <div>
                <p className="text-gray-300 text-sm font-medium">{langContent.footerEmail}</p>
                <a href="mailto:info@pvng.com" className="text-gray-400 text-sm hover:text-purple-400 transition-colors duration-300">info@pvng.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-sm text-gray-400">PVNG Electromechanical Works L.L.C.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{langContent.footerAllRightsReserved}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
