'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
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
      telNumber: formData.get('telNumber'),
      email: formData.get('email'),
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
          full_name: data.fullName,
          organisation_name: data.orgName,
          telephone_number: data.telNumber,
          email: data.email,
          service_type: data.serviceType,
          message: data.message,
          subject: `New Contact Form Submission from ${data.fullName} (${data.orgName}) - Service: ${data.serviceType}`,
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
      const subject = encodeURIComponent(`New Contact Form Submission from ${data.fullName} (${data.orgName}) - Service: ${data.serviceType}`);
      const body = encodeURIComponent(`New Contact Form Submission\n\nFull Name: ${data.fullName}\nOrganisation Name: ${data.orgName}\nEmail: ${data.email}\nTelephone Number: ${data.telNumber}\nService Required: ${data.serviceType}\n\nMessage:\n${data.message}\n\n---\nThis message was sent from the PVNG website contact form.`);
      
      const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      alert('Please send the email that opened in your email client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Dark Header Section */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 pt-32 pb-20 px-5">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-wide" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
              {langContent.contactGetInTouch}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {langContent.contactGetInTouchDesc}
            </p>
          </div>
        </section>

        {/* Light Gray Contact Information Section */}
        <section className="bg-gray-100 py-16 px-5">
          <div className="max-w-6xl mx-auto">
            {/* Contact Information Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase tracking-wide" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
                {langContent.contactInfo}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
                {langContent.contactInfoDesc}
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactPhone}</h3>
                <div className="space-y-2 mb-4 text-center">
                  <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>+971 50 123 4567</p>
                </div>
                <p className="text-sm text-gray-500 text-center" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactPhoneDesc}</p>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactEmail}</h3>
                <div className="space-y-2 mb-4 text-center">
                  <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>finance@pvngelectromechanical.com</p>
                  <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>info@pvngelectromechanical.com</p>
                  <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>sales@pvngelectromechanical.com</p>
                </div>
                <p className="text-sm text-gray-500 text-center" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactEmailDesc}</p>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactAddress}</h3>
                <div className="space-y-1 mb-4 text-center">
                  <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactAddressLine1}</p>
                  <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactAddressLine2}</p>
                  <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactAddressLine3}</p>
                  {langContent.contactAddressLine4 && <p className="text-gray-700 font-medium" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactAddressLine4}</p>}
                </div>
                <p className="text-sm text-gray-500 text-center" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>{langContent.contactAddressDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase tracking-wide" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
                  {langContent.contactSendMessage}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {langContent.contactSendMessageDesc}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-gray-100 rounded-xl p-8">
                    <div className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2">
                      {langContent.labelFullName}
                    </label>
                     <input
                       type="text"
                       id="fullName"
                       name="fullName"
                       required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                     />
                </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      {langContent.labelEmail}
                    </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                     />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-800 mb-2">
                    {langContent.labelServiceType}
                  </label>
                   <select
                     id="serviceType"
                     name="serviceType"
                     required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
                   />
                </div>

                 <button
                   type="submit"
                   disabled={isSubmitting}
                        className="w-full bg-blue-900 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                        {isSubmitting ? (currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...') : langContent.submitButton}
                </button>
                    </div>
                  </div>
              </form>
            </div>

              {/* Map Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase tracking-wide" style={{direction: 'ltr', textAlign: 'center', textAlignLast: 'center', unicodeBidi: 'bidi-override', display: 'block', width: '100%'}}>
                  {langContent.contactVisitLocation}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {langContent.contactVisitLocationDesc}
                </p>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">BMW Road, Near Sedana Trading</p>
                      <p className="text-sm text-gray-400">Sharjah Industrial 1, UAE</p>
                    </div>
                  </div>
                </div>
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