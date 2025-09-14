'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function About() {
  const { langContent } = useLanguage();

  return (
    <section id="about" className="py-20 px-5 bg-white relative overflow-hidden" style={{paddingTop: '6rem'}}>
      {/* Subtle Blue Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              {langContent.aboutTitle}
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
        
        {/* Our Story - Full Width */}
        <div className="fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:order-1">
              <p 
                className="text-base text-gray-900 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: langContent.aboutPara1 }}
            />
              <p 
                className="text-base text-gray-900 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: langContent.aboutPara2 }}
              />
              <p 
                className="text-base text-gray-900 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: langContent.aboutPara3 }}
              />
              <p 
                className="text-base text-gray-900 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: langContent.aboutPara4 }}
              />
            </div>
            
            {/* Image */}
            <div className="lg:order-2">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src="/images/LightBSolarP.jpeg"
                  alt="Light B Solar Project"
                  fill
                  className="object-contain rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Information */}
        <div className="mt-12">
          <div className="service-card fade-in">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Company Information</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            </div>
            <div 
              className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500"
              dangerouslySetInnerHTML={{ __html: langContent.aboutTradeLicense }}
            />
          </div>
        </div>
        
        {/* Our Leadership Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                Our Leadership
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
            
            <p className="text-sm md:text-base text-gray-900 leading-relaxed max-w-4xl mx-auto">
              Meet the visionary leaders who drive our success and shape our company's future.
            </p>
              </div>
              
          {/* Leadership Section - Separate Cards Layout */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Ghulam Ali */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Image Card */}
              <div className="service-card fade-in p-4 hover:transform-none">
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src="/images/GhulamAli_pic.jpg"
                    alt="Ghulam Ali"
                    fill
                    className="object-contain rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Content Card */}
              <div className="service-card fade-in p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ghulam Ali</h3>
                <div className="text-base font-semibold text-blue-600 mb-4">Environmental Management Specialist</div>
                
                <p className="text-sm text-gray-900 leading-relaxed mb-4">
                  {langContent.ghulamAliDescription}
                </p>
                
                {/* Certifications */}
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Key Certifications:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="text-xs text-gray-900 font-medium bg-gray-100 px-2 py-1 rounded-md">CF APMP</div>
                    <div className="text-xs text-gray-900 font-medium bg-gray-100 px-2 py-1 rounded-md">ISO 14001:2015 EMS</div>
                    <div className="text-xs text-gray-900 font-medium bg-gray-100 px-2 py-1 rounded-md">Carbon Reduction Plan Specialist</div>
                    <div className="text-xs text-gray-900 font-medium bg-gray-100 px-2 py-1 rounded-md">Bid Specialist (UK)</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hina Zehra */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Content Card */}
              <div className="service-card fade-in p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hina Zehra</h3>
                <div className="text-base font-semibold text-blue-600 mb-4">Operations Manager</div>
                
                <p className="text-sm text-gray-900 leading-relaxed mb-4">
                  {langContent.hinaZehraDescription}
                </p>
                
                {/* Key Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {langContent.hinaZehraResponsibilities.map((responsibility, index) => (
                      <div key={index} className="text-xs text-gray-900 font-medium bg-gray-100 px-2 py-1 rounded-md">
                        {responsibility}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Image Card */}
              <div className="service-card fade-in p-4 hover:transform-none">
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src="/images/HinaZKhan_pic.jpg"
                    alt="Hina Zehra"
                    fill
                    className="object-contain rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
