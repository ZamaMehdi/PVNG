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
        <img
          src="/images/Website Banner.png"
          alt="PVNG Banner"
          className="w-full h-[600px] object-fill"
          style={{display: 'block'}}
        />
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
            <div className="service-card fade-in">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service1Heading}</h3>
              <p className="text-gray-900 mb-6">Complete fire safety solutions for residential, commercial, and industrial properties with cutting-edge technology.</p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="service-card fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service4Heading}</h3>
              <p className="text-gray-900 mb-6">Advanced CCTV, access control, and intruder alarm systems for maximum protection and peace of mind.</p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="service-card fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{langContent.service5Heading}</h3>
              <p className="text-gray-900 mb-6">Solar energy, energy storage, and sustainable building practices consulting for a greener future.</p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="card fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{langContent.aboutTitle}</h2>
                <p className="text-lg text-gray-900 mb-6">
                  With over a decade of excellence in the electromechanical sector, we deliver robust and innovative solutions that underscore our unwavering commitment to quality, reliability, and client satisfaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="icon-box">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <h4>Quality</h4>
                  </div>
                  <div className="icon-box">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h4>Innovation</h4>
                  </div>
                  <div className="icon-box">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <h4>Partnership</h4>
                  </div>
                </div>
              </div>
              <div className="fade-in-right">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
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