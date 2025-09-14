'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  const { currentLang, langContent } = useLanguage();

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
      <section className="w-full">
        {/* Desktop Banner */}
        <img
          src="/images/PVNG_Hero_Banner_Desktop2.png"
          alt="PVNG Banner"
          className="hidden md:block w-full h-auto max-w-full object-contain"
        />
        {/* Mobile Banner */}
        <img
          src="/images/PVNG_Hero_Banner_Mobile.png"
          alt="PVNG Banner"
          className="block md:hidden w-full h-auto max-w-full object-contain"
        />
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-5 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent">
                Sustainable Solutions. Lasting Impact.
              </span>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
              <p className="fade-in" style={{animationDelay: '0.2s'}}>
                At <span className="font-semibold text-blue-700">PVNG Electromechanical Works L.L.C.</span>, we are committed to powering a greener tomorrow. With over a decade of experience in Dubai&apos;s electromechanical sector, we deliver innovative solutions that not only meet your needs today but also protect the environment for future generations.
              </p>
              
              <p className="fade-in" style={{animationDelay: '0.4s'}}>
                Our expert team integrates sustainable practices, energy-efficient systems, and cutting-edge technology to create safer, smarter, and more eco-friendly spaces. Whether it&apos;s for commercial or residential projects, we focus on reducing environmental impact while maximizing performance and reliability.
              </p>
              
              <p className="fade-in font-medium text-gray-800" style={{animationDelay: '0.6s'}}>
                Partner with us to build a better future — one that values efficiency, responsibility, and long-term sustainability. At PVNG, it&apos;s more than service; it&apos;s a commitment to preserving the planet while driving progress.
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
      <section className="py-12 px-5 bg-white relative overflow-hidden" style={{paddingTop: '2rem'}}>
        {/* Subtle Blue Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                {langContent.servicesTitle}
              </span>
              {/* Decorative Blue Elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-1 -right-3 w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
            </h2>
            
            {/* Enhanced Accent Line */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-4"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Fire Fighting Systems */}
            <div className="fade-in">
              <Link href="/services#service-1" className="relative block group">
                <img src="/images/Firefighting_homepagecard.png" alt="Fire Fighting Systems" className="w-auto h-auto cursor-pointer" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-2xl font-normal mb-2 text-center">{langContent.service1Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-lg font-medium">Learn More</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 2 - Low Voltage (LV) Systems */}
            <div className="fade-in" style={{animationDelay: '0.1s'}}>
              <Link href="/services#service-2" className="relative block group">
                <img src="/images/LV_homepagecard.png" alt="Low Voltage Systems" className="w-auto h-auto cursor-pointer" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-2xl font-normal mb-2 text-center">{langContent.service2Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-lg font-medium">Learn More</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 3 - Gas Piping Solutions */}
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <Link href="/services#service-3" className="relative block group">
                <img src="/images/GasPipeline_homepagecard.png" alt="Gas Piping Solutions" className="w-auto h-auto cursor-pointer" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-2xl font-normal mb-2 text-center">{langContent.service3Heading}</span>
                  <div className="flex items-center">
                    <span className="text-white text-lg font-medium">Learn More</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 4 - Commercial and Residential Security Systems */}
            <div className="fade-in" style={{animationDelay: '0.3s'}}>
              <Link href="/services#service-4" className="relative block group">
                <img src="/images/ResenditialSec_homepagecard.png" alt="Security Systems" className="w-auto h-auto cursor-pointer" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-2xl font-normal mb-2 text-center">Security Systems</span>
                  <div className="flex items-center">
                    <span className="text-white text-lg font-medium">Learn More</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service 5 - Sustainability Consultants & Experts */}
            <div className="fade-in" style={{animationDelay: '0.4s'}}>
              <Link href="/services#service-5" className="relative block group">
                <img src="/images/Sustainability_homepagecard.png" alt="Sustainability Consultants" className="w-auto h-auto cursor-pointer" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 flex flex-col items-center justify-end p-4">
                  <span className="text-white text-2xl font-normal mb-2 text-center">Sustainable Consultants</span>
                  <div className="flex items-center">
                    <span className="text-white text-lg font-medium">Learn More</span>
                    <div className="w-8 h-0.5 bg-white ml-2"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 px-5 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">10+</div>
              <div className="text-lg text-blue-100 font-semibold">Years Experience</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">500+</div>
              <div className="text-lg text-blue-100 font-semibold">Projects Completed</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">100%</div>
              <div className="text-lg text-blue-100 font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-lg text-blue-100 font-semibold">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}