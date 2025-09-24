'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PVSSModal from '@/components/PVSSModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  const { currentLang, langContent } = useLanguage();
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
    <div className="flex flex-col w-full">
      <main className="flex-1">
        <Navigation />
      
      {/* Website Banner */}
      <section className="w-full -mt-2">
        {/* Desktop Banner */}
        <Image
          src="/images/PVNG_Hero_Banner_Desktop2.png"
          alt="PVNG Banner"
          width={1920}
          height={800}
          className="hidden lg:block w-full h-auto max-w-full object-contain"
        />
        {/* Tablet Banner */}
        <Image
          src="/images/PVNG_Hero_Banner_Desktop2.png"
          alt="PVNG Banner"
          width={1200}
          height={600}
          className="hidden md:block lg:hidden w-full h-auto max-w-full object-contain"
        />
        {/* Mobile Banner */}
        <Image
          src="/images/PVNG_Hero_Banner_Mobile.png"
          alt="PVNG Banner"
          width={800}
          height={600}
          className="block md:hidden w-full h-auto max-w-full object-contain"
        />
      </section>

      {/* Sustainability Section */}
      <section className="py-8 md:py-12 lg:py-16 px-5 bg-gradient-to-br from-blue-50 to-green-50 sustainability-section">
        <div className="max-w-6xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="section-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 relative" style={{textAlign: 'center', direction: 'ltr'}}>
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent" style={{textAlign: 'center', direction: 'ltr'}}>
                {langContent.heroTitle}
              </span>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
            </h2>
            
            <div className="space-y-3 text-base text-black leading-relaxed max-w-5xl mx-auto" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center'}}>
              <p className="fade-in" style={{animationDelay: '0.2s', direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
                {langContent.heroPara1}
              </p>
              
              <p className="fade-in" style={{animationDelay: '0.4s', direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
                {langContent.heroPara2}
              </p>
              
              <p className="fade-in font-medium text-gray-800" style={{animationDelay: '0.6s', direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
                {langContent.heroPara3}
              </p>
        </div>
        
            {/* Accent Line */}
            <div className="fade-in flex items-center justify-center mt-8" style={{animationDelay: '0.8s'}}>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-green-400"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-4"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>
        </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-4 md:py-6 lg:py-8 px-5 bg-white relative overflow-hidden services-showcase">
        {/* Subtle Blue Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-0 relative" style={{textAlign: 'center', direction: 'ltr'}}>
              <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent" style={{textAlign: 'center', direction: 'ltr'}}>
                {langContent.servicesTitle}
              </span>
              {/* Decorative Blue Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-1 -right-3 w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
            </h2>
            
            {/* Enhanced Accent Line */}
            <div className="flex items-center justify-center mb-8 -mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-4"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Fire Fighting Systems */}
            <div className="fade-in">
              <Link href="/services#service-1" className="relative block group">
                <Image src="/images/Firefighting_homepagecard.png" alt="Fire Fighting Systems" width={400} height={300} className="w-full h-auto cursor-pointer group-hover:brightness-75 transition-all duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-2 text-center">{langContent.service1Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-sm sm:text-base md:text-lg font-medium">{langContent.learnMore}</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 2 - Low Voltage (LV) Systems */}
            <div className="fade-in" style={{animationDelay: '0.1s'}}>
              <Link href="/services#service-2" className="relative block group">
                <Image src="/images/LV_homepagecard.png" alt="Low Voltage Systems" width={400} height={300} className="w-full h-auto cursor-pointer group-hover:brightness-75 transition-all duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-2 text-center">{langContent.service2Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-sm sm:text-base md:text-lg font-medium">{langContent.learnMore}</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 3 - Gas Piping Solutions */}
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <Link href="/services#service-3" className="relative block group">
                <Image src="/images/GasPipeline_homepagecard.png" alt="Gas Piping Solutions" width={400} height={300} className="w-full h-auto cursor-pointer group-hover:brightness-75 transition-all duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-2 text-center">{langContent.service3Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-sm sm:text-base md:text-lg font-medium">{langContent.learnMore}</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 4 - Commercial and Residential Security Systems */}
            <div className="fade-in" style={{animationDelay: '0.3s'}}>
              <Link href="/services#service-4" className="relative block group">
                <Image src="/images/ResenditialSec_homepagecard.png" alt="Security Systems" width={400} height={300} className="w-full h-auto cursor-pointer group-hover:brightness-75 transition-all duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-2 text-center">{langContent.service4Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-sm sm:text-base md:text-lg font-medium">{langContent.learnMore}</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 5 - Sustainability Consultants & Experts */}
            <div className="fade-in" style={{animationDelay: '0.4s'}}>
              <Link href="/services#service-5" className="relative block group">
                <Image src="/images/Sustainability_homepagecard.png" alt="Sustainability Consultants" width={400} height={300} className="w-full h-auto cursor-pointer group-hover:brightness-75 transition-all duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-2 text-center">{langContent.service5Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-sm sm:text-base md:text-lg font-medium">{langContent.learnMore}</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 6 - Solar Calculator */}
            <div className="fade-in mt-16 sm:col-span-2 lg:col-span-1" style={{animationDelay: '0.5s'}}>
              <div className="relative block group cursor-pointer" onClick={() => setIsPVSSModalOpen(true)} data-pvss-trigger>
                <div className="relative w-full h-64 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-6 right-6 w-20 h-20 bg-white rounded-full blur-md animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-yellow-200 rounded-full blur-lg animate-bounce"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-200 rounded-full blur-xl animate-ping"></div>
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-green-200 rounded-full blur-sm animate-pulse"></div>
                  </div>
                  
                  {/* Main Calculator Icon */}
                  <div className="absolute top-6 left-6 w-20 h-20 bg-white bg-opacity-25 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white border-opacity-30 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Solar Panel Icon */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-white bg-opacity-25 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white border-opacity-30 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  
                  {/* Lightning Bolt Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 bg-opacity-30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-yellow-300 border-opacity-40">
                    <svg className="w-8 h-8 text-yellow-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10h7l-9 13v-9H4l9-13v9z"/>
                    </svg>
                  </div>
                  
                  {/* Enhanced Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent bg-opacity-80 flex flex-col items-center justify-end p-8">
                    <div className="text-center">
                      <span className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 text-center bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                        {langContent.solarCalculator}
                      </span>
                      <div className="flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-white text-sm sm:text-base md:text-lg font-semibold mr-3">{langContent.calculateYourSystem}</span>
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white border-opacity-20 group-hover:border-opacity-40 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="pt-4 pb-8 md:pt-8 md:pb-16 lg:pt-12 lg:pb-20 px-5 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center">
            <div className="text-center fade-in">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">10+</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 font-semibold">{langContent.statsYearsExperience}</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">500+</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 font-semibold">{langContent.statsProjectsCompleted}</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">100%</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 font-semibold">{langContent.statsClientSatisfaction}</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">24/7</div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 font-semibold">{langContent.statsSupportAvailable}</div>
            </div>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
      
      {/* PVSS Calculator Modal */}
      <PVSSModal 
        isOpen={isPVSSModalOpen} 
        onClose={() => setIsPVSSModalOpen(false)} 
      />
    </div>
  );
}