'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
// import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PVSSModal from '@/components/PVSSModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactPage() {
  const { currentLang, langContent } = useLanguage();
  const [isPVSSModalOpen, setIsPVSSModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Update HTML attributes based on current language
    document.documentElement.lang = currentLang;
    // Keep layout direction as LTR (left-to-right) for both languages
    document.documentElement.dir = 'ltr';
  }, [currentLang]);

  // Initialize scroll animations
  useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      orgName: formData.get('orgName'),
      email: formData.get('email'),
      telNumber: formData.get('telNumber'),
      serviceType: formData.get('serviceType'),
      message: formData.get('message'),
    };

    try {
      // Using Web3Forms for reliable email delivery
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // You'll need to get this from web3forms.com
          name: data.fullName,
          organization: data.orgName,
          email: data.email,
          phone: data.telNumber,
          service: data.serviceType,
          message: data.message,
          subject: `New Enquiry from ${data.fullName} (${data.orgName}) - Service: ${data.serviceType}`,
          from_name: 'PVNG Contact Form',
          reply_to: data.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback to mailto if API fails
      const to = 'zamamehdi9@gmail.com';
      const subject = encodeURIComponent(`New Enquiry from ${data.fullName} (${data.orgName}) - Service: ${data.serviceType}`);
      const body = encodeURIComponent(`New Contact Form Submission\n\nFull Name: ${data.fullName}\nOrganisation Name: ${data.orgName}\nEmail: ${data.email}\nTelephone Number: ${data.telNumber}\nService Required: ${data.serviceType}\n\nMessage:\n${data.message}\n\n---\nThis message was sent from the PVNG website contact form.`);
      
      const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      alert('Please send the email that opened in your email client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-24 px-5 text-center overflow-hidden" style={{paddingTop: '8rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
                Get In Touch
              </span>
            </div>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              {langContent.contactTitle}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed mb-12">
              {langContent.contactIntro}
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+971565463955" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a 
                href="mailto:zamamehdi9@gmail.com" 
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 px-5 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your preferred way to reach us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Phone Card */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h3>
                  <p className="text-gray-600 mb-6 text-lg">Speak directly with our team</p>
                  <a href="tel:+971565463955" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    +971 56 546 3955
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h3>
                  <p className="text-gray-600 mb-6 text-lg">Send us your inquiry</p>
                  <a href="mailto:zamamehdi9@gmail.com" className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    zamamehdi9@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h3>
                  <p className="text-gray-600 mb-6 text-lg">Our office location</p>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                    <div className="text-center" dangerouslySetInnerHTML={{ __html: langContent.officeAddress }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-5 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                  Send Message
                </span>
              </div>
               <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
                 <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                   Let's Start a Conversation
                 </span>
               </h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                 Fill out the form below and we'll get back to you within 24 hours. We're excited to hear about your project!
               </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2">
                      {langContent.labelFullName}
                    </label>
                     <input
                       type="text"
                       id="fullName"
                       name="fullName"
                       required
                       className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     />
                  </div>

                  <div>
                    <label htmlFor="orgName" className="block text-sm font-semibold text-gray-800 mb-2">
                      {langContent.labelOrgName}
                    </label>
                     <input
                       type="text"
                       id="orgName"
                       name="orgName"
                       className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      {langContent.labelEmail}
                    </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       required
                       className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     />
                  </div>

                  <div>
                    <label htmlFor="telNumber" className="block text-sm font-semibold text-gray-800 mb-2">
                      {langContent.labelTelNumber}
                    </label>
                     <input
                       type="tel"
                       id="telNumber"
                       name="telNumber"
                       className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-800 mb-2">
                    {langContent.labelServiceType}
                  </label>
                   <select
                     id="serviceType"
                     name="serviceType"
                     required
                     className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   >
                    <option value="">{langContent.optionSelectService}</option>
                    <option value="Fire Fighting Systems">{langContent.optionFire}</option>
                    <option value="Low Voltage (LV) Systems">{langContent.optionLV}</option>
                    <option value="Gas Piping Solutions">{langContent.optionGas}</option>
                    <option value="Commercial and Residential Security Systems">{langContent.optionSecurity}</option>
                    <option value="Sustainability Consultants & Experts">{langContent.optionSustainability}</option>
                    <option value="Other">{langContent.optionOther}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    {langContent.labelMessage}
                  </label>
                   <textarea
                     id="message"
                     name="message"
                     rows={5}
                     className="form-textarea w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     placeholder="Tell us about your project requirements..."
                   />
                </div>

                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="btn-primary w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                 >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {isSubmitting ? 'Sending...' : langContent.submitButton}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 px-5 bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-8">Follow Our Journey</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Stay connected with us on social media for project updates, industry insights, and company news
            </p>
            
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="#" 
                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="Twitter"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center text-white hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center text-white hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                title="WhatsApp"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Hidden PVSS Modal Trigger for FloatingChatButton */}
      <button 
        onClick={() => setIsPVSSModalOpen(true)} 
        data-pvss-trigger 
        className="hidden"
        aria-hidden="true"
      />
      
      {/* PVSS Calculator Modal */}
      <PVSSModal 
        isOpen={isPVSSModalOpen} 
        onClose={() => setIsPVSSModalOpen(false)} 
      />
    </div>
  );
}
