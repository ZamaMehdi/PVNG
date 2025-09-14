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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navigation />
      
      {/* Website Banner */}
      <section className="w-full">
        {/* Desktop Banner */}
        <img
          src="/images/PVNG_Hero_Banner_Desktop.png"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent">
                Sustainable Solutions. Lasting Impact.
              </span>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
              <p className="fade-in" style={{animationDelay: '0.2s'}}>
                At <span className="font-semibold text-blue-700">PVNG Electromechanical Works L.L.C.</span>, we are committed to powering a greener tomorrow. With over a decade of experience in Dubai's electromechanical sector, we deliver innovative solutions that not only meet your needs today but also protect the environment for future generations.
              </p>
              
              <p className="fade-in" style={{animationDelay: '0.4s'}}>
                Our expert team integrates sustainable practices, energy-efficient systems, and cutting-edge technology to create safer, smarter, and more eco-friendly spaces. Whether it's for commercial or residential projects, we focus on reducing environmental impact while maximizing performance and reliability.
              </p>
              
              <p className="fade-in font-medium text-gray-800" style={{animationDelay: '0.6s'}}>
                Partner with us to build a better future — one that values efficiency, responsibility, and long-term sustainability. At PVNG, it's more than service; it's a commitment to preserving the planet while driving progress.
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
      <section className="py-20 px-5 bg-white relative overflow-hidden" style={{paddingTop: '6rem'}}>
        {/* Subtle Blue Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
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
            <div className="service-card fade-in">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service1Heading}</h3>
              <p className="text-gray-900 mb-6">{langContent.service1Para}</p>
              <Link href="/services#service-1" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 - Low Voltage (LV) Systems */}
            <div className="service-card fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service2Heading}</h3>
              <p className="text-gray-900 mb-6">{langContent.service2Para}</p>
              <Link href="/services#service-2" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 - Gas Piping Solutions */}
            <div className="service-card fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service3Heading}</h3>
              <p className="text-gray-900 mb-6">{langContent.service3Para}</p>
              <Link href="/services#service-3" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 - Commercial and Residential Security Systems */}
            <div className="service-card fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service4Heading}</h3>
              <p className="text-gray-900 mb-6">{langContent.service4Para}</p>
              <Link href="/services#service-4" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 5 - Sustainability Consultants & Experts */}
            <div className="service-card fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service5Heading}</h3>
              <p className="text-gray-900 mb-6">{langContent.service5Para}</p>
              <Link href="/services#service-5" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-xl text-white opacity-90">Years Experience</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-xl text-white opacity-90">Projects Completed</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-xl text-white opacity-90">Client Satisfaction</div>
            </div>
            <div className="text-center fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-xl text-white opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-900 mb-8">
              Contact us today for a consultation and let us help you with your electromechanical needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="btn-primary">
                {langContent.navContact}
              </Link>
              <Link href="/services" className="btn-secondary">
                {langContent.navServices}
              </Link>
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