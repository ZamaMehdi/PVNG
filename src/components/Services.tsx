'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PVSSModal from './PVSSModal';

function Modal({ children, isOpen, onClose }: { children: React.ReactNode; isOpen: boolean; onClose: () => void }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (isOpen) {
      setStyle({
        position: "absolute",
        top: `${window.scrollY + window.innerHeight / 2}px`,
        left: `${window.scrollX + window.innerWidth / 2}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="absolute inset-0 z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="sticky top-4 right-4 float-right z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition-colors">×</button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default function Services() {
  const { langContent, currentLang } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isPVSSModalOpen, setIsPVSSModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for mobile banner
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      // Simply prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const services = [
    {
      id: 1,
      heading: langContent.service3Heading,
      description: langContent.service3Para,
      image: '/images/GasPL.jpg',
      icon: 'gas'
    },
    {
      id: 2,
      heading: langContent.service1Heading,
      description: langContent.service1Para,
      image: '/images/fire fighting system.png',
      icon: 'fire-extinguisher'
    },
    {
      id: 3,
      heading: langContent.service2Heading,
      description: langContent.service2Para,
      image: '/images/LVsystem.jpg',
      icon: 'bolt'
    },
    {
      id: 4,
      heading: langContent.service4Heading,
      description: langContent.service4Para,
      image: '/images/commercial and residential security.jpg',
      icon: 'shield'
    },
    {
      id: 5,
      heading: langContent.service5Heading,
      description: langContent.service5Para,
      image: '/images/SustCE.jpg',
      icon: 'building'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      'fire-extinguisher': (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      'bolt': (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      'gas': (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      'shield': (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      'building': (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    };
    return icons[iconName as keyof typeof icons] || null;
  };

  return (
    <>
      {/* Product Banner */}
      <section className="w-full pt-32 bg-black">
        {isMobile ? (
          <Image
            src="/images/PNVG_Services_Banner_Mobile.gif"
            alt="Products Banner Mobile"
            width={700}
            height={600}
            className="w-full h-[600px] object-fill"
            style={{
              display: 'block',
              imageRendering: '-webkit-optimize-contrast'
            }}
          />
        ) : (
          <Image
            src="/images/productbanner.gif"
            alt="Products Banner"
            width={1200}
            height={450}
            className="w-full h-[450px] object-fill"
            style={{
              display: 'block',
              imageRendering: '-webkit-optimize-contrast'
            }}
          />
        )}
      </section>

      <section id="services" className="py-12 px-5 bg-white relative overflow-hidden services-section" style={{paddingTop: '3rem'}}>
        {/* Subtle Blue Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20 relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Main Title with Enhanced Styling */}
            <div className="fade-in relative z-10">
              <h2 className="section-title text-lg sm:text-2xl md:text-4xl font-bold mb-0 relative" style={{textAlign: 'center', direction: 'ltr'}}>
                <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-800 bg-clip-text text-transparent drop-shadow-lg" style={{textAlign: 'center', direction: 'ltr'}}>
                  {langContent.servicesTitle}
                </span>
                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-80 animate-bounce shadow-lg"></div>
                <div className="absolute -bottom-2 -right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full opacity-80 animate-bounce shadow-lg" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
              </h2>
            </div>

            {/* Enhanced Accent Line */}
            <div className="fade-in relative z-10" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center mb-6 -mt-6">
                <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-blue-400 to-blue-500 rounded-full"></div>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mx-6 rounded-full shadow-lg"></div>
                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Description with Better Typography */}
            <div className="fade-in relative z-10" style={{animationDelay: '0.4s'}}>
              <div className="max-w-4xl mx-auto">
                <p className="text-base leading-relaxed text-black font-medium">
                  {langContent.servicesIntro}
                </p>
              </div>
            </div>

          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={`service-${service.id}`} className="fade-in scroll-mt-20" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        {getIcon(service.icon)}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                        <span dangerouslySetInnerHTML={{ __html: service.heading }} />
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-base text-black leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: service.description }} />
                      </p>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent[`service${service.id}Feature1Desc` as keyof typeof langContent] }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent[`service${service.id}Feature2Desc` as keyof typeof langContent] }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent[`service${service.id}Feature3Desc` as keyof typeof langContent] }} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.heading}
                        width={600}
                        height={400}
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sustainability Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solar Energy Compact Card */}
              <div className="fade-in" style={{ animationDelay: '1.0s' }}>
                <div className="service-card h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilitySolarHeading }} />
                    </h3>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <p className="text-base text-black leading-relaxed">
                        {langContent.sustainabilitySolarPara1.split('.')[0]}.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.solarFeature1 }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.solarFeature2 }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.solarFeature3 }} />
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveModal('solar');
                      }}
                      className="btn-primary w-full mt-6"
                    >
                      {langContent.readMore}
                    </button>
                  </div>
                </div>
              </div>

              {/* Energy Storage Compact Card */}
              <div className="fade-in" style={{ animationDelay: '1.2s' }}>
                <div className="service-card h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityStorageHeading }} />
                    </h3>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <p className="text-base text-black leading-relaxed">
                        {langContent.sustainabilityStoragePara1.split('.')[0]}.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.storageFeature1 }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.storageFeature2 }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.storageFeature3 }} />
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveModal('storage');
                      }}
                      className="btn-primary w-full mt-6"
                    >
                      {langContent.readMore}
                    </button>
                  </div>
                </div>
              </div>

              {/* Wind Energy Compact Card */}
              <div className="fade-in" style={{ animationDelay: '1.4s' }}>
                <div className="service-card h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityWindHeading }} />
                    </h3>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <p className="text-base text-black leading-relaxed">
                        {langContent.sustainabilityWindPara1.split('.')[0]}.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.windFeature1 }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.windFeature2 }} />
                          </p>
                        </div>
                        <div className={`flex items-start gap-3 ${currentLang === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-black">
                            <span dangerouslySetInnerHTML={{ __html: langContent.windFeature3 }} />
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveModal('wind');
                      }}
                      className="btn-primary w-full mt-6"
                    >
                      {langContent.readMore}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PVSS Calculator Standalone Section */}
          <div className="mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-2 border-green-200 hover:border-green-400 transition-all duration-300 cursor-pointer group shadow-xl hover:shadow-2xl" onClick={() => setIsPVSSModalOpen(true)}>
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 p-4">
                    <Image 
                      src="/images/calculatoricon.png" 
                      alt="Calculator" 
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {langContent.pvssCalculatorTitle}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    {langContent.pvssCalculatorSubtitle}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      {langContent.pvssFeature1}
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      {langContent.pvssFeature2}
                    </p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">
                      {langContent.pvssFeature3}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>{langContent.pvssCalculatorButton}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Detailed Cards */}
      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)}
      >
        <div className="p-8">

              {/* Solar Energy Modal */}
              {activeModal === 'solar' && (
                <div className="service-card">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilitySolarHeading }} />
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-base text-black leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilitySolarPara1 }} />
                        </p>
                        
                        <p className="text-base text-black leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilitySolarPara2 }} />
                        </p>
                      </div>
                    </div>
                    
                    {/* Image Side */}
                    <div>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src="/images/SolarEhome.jpg"
                          alt="Solar panels in a green field"
                          width={600}
                          height={400}
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Energy Storage Modal */}
              {activeModal === 'storage' && (
                <div className="service-card">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityStorageHeading }} />
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-base text-black leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityStoragePara1 }} />
                        </p>
                        
                        <p className="text-base text-black leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityStoragePara2 }} />
                        </p>
                      </div>
                    </div>
                    
                    {/* Image Side */}
                    <div>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src="/images/EnergySS.jpg"
                          alt="Energy storage batteries"
                          width={600}
                          height={400}
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Wind Energy Modal */}
              {activeModal === 'wind' && (
                <div className="service-card">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityWindHeading }} />
                        </h3>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-base text-black leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityWindPara1 }} />
                        </p>
                        
                        <p className="text-base text-black leading-relaxed">
                          <span dangerouslySetInnerHTML={{ __html: langContent.sustainabilityWindPara2 }} />
                        </p>
                      </div>
                    </div>
                    
                    {/* Image Side */}
                    <div>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src="/images/wind energy.jpg"
                          alt="Wind turbines at sunset"
                          width={600}
                          height={400}
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
        </div>
      </Modal>

      {/* PVSS Calculator Modal */}
      <PVSSModal 
        isOpen={isPVSSModalOpen} 
        onClose={() => setIsPVSSModalOpen(false)} 
      />
    </>
  );
}