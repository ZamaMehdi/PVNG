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
        
        {/* Company Values & Mission */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 via-blue-25 to-blue-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              {/* Company Values */}
              <div className="fade-in">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Quality Excellence</h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">Delivering superior solutions that exceed industry standards and client expectations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Innovation</h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">Embracing cutting-edge technology and sustainable practices for future-ready solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Reliability</h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">Building lasting partnerships through consistent, dependable service delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Sustainability</h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">Committed to environmental responsibility and sustainable development practices.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="fade-in">
                <div className="bg-blue-900 rounded-2xl p-8 text-center">
                  <div className="space-y-8">
                    <div className="bg-white rounded-lg p-4 text-left">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">Trade License No: <span className="font-normal">921160</span></p>
                          <p className="text-sm font-bold text-gray-800">Tenant No: <span className="font-normal">0420240902005775</span></p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Our Mission</h4>
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        To provide innovative electromechanical solutions that enhance safety, efficiency, and sustainability while building lasting partnerships with our clients through excellence in service delivery.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Our Vision</h4>
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        To be the leading electromechanical solutions provider in Dubai, recognized for our commitment to innovation, sustainability, and exceptional client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Leadership Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-30"></div>
          
          <div className="text-center mb-16 relative z-10">
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
              Meet the visionary leaders who drive our success and shape our company&apos;s future.
            </p>
              </div>
              
          {/* Leadership Section - Individual Backgrounds */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Ghulam Ali */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Subtle Background Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-30"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src="/images/GhulamAli_pic.jpg"
                    alt="Ghulam Ali"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
                
                <div className="fade-in">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ghulam Ali</h3>
                  <div className="text-lg font-semibold text-blue-600 mb-6">Environmental Management Specialist</div>
                  
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed mb-6">
                    {langContent.ghulamAliDescription}
                  </p>
                  
                  {/* Certifications */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Certifications:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">CF APMP</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">ISO 14001:2015 EMS</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Carbon Reduction Plan Specialist</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Bid Specialist (UK)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hina Zehra */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Subtle Background Elements */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
                <div className="fade-in lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Hina Zehra</h3>
                  <div className="text-lg font-semibold text-blue-600 mb-6">Operations Manager</div>
                  
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed mb-6">
                    {langContent.hinaZehraDescription}
                  </p>
                  
                  {/* Key Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {langContent.hinaZehraResponsibilities.map((responsibility, index) => (
                        <div key={index} className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">
                          {responsibility}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full h-80 lg:h-96 lg:order-1">
                  <Image
                    src="/images/HinaZKhan_pic.jpg"
                    alt="Hina Zehra"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Mr. Thiru */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Subtle Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-red-100 rounded-full blur-3xl opacity-30"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src="/images/thiru.jpg"
                    alt="Mr. Thiru"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>
                
                <div className="fade-in">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mr. Thiru</h3>
                  <div className="text-lg font-semibold text-blue-600 mb-6">Head of Electromechanical, Firefighting & Gas Pipeline Works</div>
                  
                  <p className="text-sm md:text-base text-gray-900 leading-relaxed mb-6">
                    Mr. Thiru is the head of our electromechanical, firefighting, and gas pipeline works and maintenance division. His expertise is a direct result of years of hands-on experience, and his reputation has earned him a loyal client base who work exclusively with him. He has recently expanded his portfolio to include specialized low voltage and security systems, broadening our service offerings. His commitment to ensuring &quot;class in service&quot; is the guiding principle behind every project he oversees.
                  </p>
                  
                  {/* Key Expertise */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Expertise:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Electromechanical Systems</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Firefighting Systems</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Gas Pipeline Works</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Low Voltage Systems</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Security Systems</div>
                      <div className="text-sm text-gray-900 font-medium bg-gray-100 px-3 py-2 rounded-md">Maintenance & Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Achievements */}
        <div className="mt-20">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 relative">
                  <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Our Achievements
                  </span>
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-1 -right-3 w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
                </h2>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-400"></div>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-4"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="service-card fade-in text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">10+</h3>
                  <p className="text-sm text-gray-600">Years of Excellence</p>
                </div>

                <div className="service-card fade-in text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>

                <div className="service-card fade-in text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">100%</h3>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>

                <div className="service-card fade-in text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7</h3>
                  <p className="text-sm text-gray-600">Support Available</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
