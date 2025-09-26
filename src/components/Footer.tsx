'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const { langContent, currentLang } = useLanguage();
  
  // Debug: Log current language
  console.log('Footer currentLang:', currentLang);
  if (typeof window !== 'undefined') {
    console.log('HTML lang attribute:', document.documentElement.lang);
  }

  return (
    <footer className={`bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white ${currentLang === 'ar' ? 'rtl-footer' : 'ltr-footer'}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div>
            <div className="mb-6 flex flex-col items-center footer-logo-container" style={{textAlign: currentLang === 'ar' ? 'right' : 'center'}}>
              {/* Logo */}
              <div className="w-64 h-24 md:w-80 md:h-32 mb-4 flex justify-center">
                <Image
                  src="/images/logoonly.png"
                  alt="PVNG Logo"
                  width={320}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Text below logo */}
              <div className="text-center" style={{direction: 'ltr', textAlign: currentLang === 'ar' ? 'right' : 'center'}}>
                <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2" style={{transform: currentLang === 'ar' ? 'translateX(-50px)' : 'translateX(0)'}}>PVNG</div>
                <div className="text-white text-xs md:text-xs lg:text-xs font-medium opacity-90" style={{fontSize: '10px'}}>
                  YOUR PARTNER IN INTEGRATED SOLUTIONS
                </div>
              </div>
            </div>
            <p className={`text-gray-300 text-sm leading-relaxed mb-8 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}>
              {langContent.footerCompanyDescription}
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-white ${currentLang === 'ar' ? 'text-right' : 'text-center'}`}>{langContent.footerQuickLinks}</h3>
            <ul className="space-y-3" style={{textAlign: currentLang === 'ar' ? 'right' : 'center'}}>
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
            <h3 className={`text-lg font-semibold mb-6 text-white ${currentLang === 'ar' ? 'text-right' : 'text-center'}`}>{langContent.footerOurServices}</h3>
            <ul className="space-y-3" style={{textAlign: currentLang === 'ar' ? 'right' : 'center'}}>
              <li>
                <Link href="/services#service-1" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  {langContent.footerGasPipingSolutions}
                </Link>
              </li>
              <li>
                <Link href="/services#service-2" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  {langContent.footerFireFightingSystems}
                </Link>
              </li>
              <li>
                <Link href="/services#service-3" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  {langContent.footerLowVoltageSystems}
                </Link>
              </li>
              <li>
                <Link href="/services#service-4" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  {langContent.footerSecuritySystems}
                </Link>
              </li>
              <li>
                <Link href="/services#service-5" className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm">
                  {langContent.footerSustainabilityConsulting}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-white ${currentLang === 'ar' ? 'text-right' : 'text-center'}`}>{langContent.footerContactInfo}</h3>
            <div className="space-y-4" style={{textAlign: currentLang === 'ar' ? 'right' : 'center'}}>
              <div>
                <p className="text-gray-300 text-sm font-medium">{langContent.footerAddress}</p>
                <p className="text-gray-400 text-sm">Dubai, UAE</p>
              </div>
              
              <div>
                <p className="text-gray-300 text-sm font-medium">{langContent.footerPhone}</p>
                <a href="tel:+971522110379" className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-300">+971 52 211 0379</a>
              </div>
              
              <div>
                <p className="text-gray-300 text-sm font-medium">{langContent.footerEmail}</p>
                <a href="mailto:info@pvngelectromechanical.com" className="text-gray-400 text-sm hover:text-purple-400 transition-colors duration-300">info@pvngelectromechanical.com</a>
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
