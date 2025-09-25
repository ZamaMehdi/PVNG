'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { sendEmailJSNotification } from '@/lib/emailjs';

export default function ContactForm() {
  const { langContent } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      // Send email notification using EmailJS
      const emailData = {
        fullName: data.fullName as string,
        orgName: data.orgName as string,
        email: data.email as string,
        telNumber: data.telNumber as string,
        serviceType: data.serviceType as string,
        message: data.message as string,
        submittedAt: new Date(),
        ipAddress: 'Unknown' // We can't get IP from client-side
      };

      const emailSent = await sendEmailJSNotification(emailData);
      console.log('Email notification sent:', emailSent);

      if (emailSent) {
        // Success - show success message
        alert('Thank you for your enquiry! We will get back to you soon.');
        
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        // Fallback to email if EmailJS fails
        const to = 'info@pvngelectromechanical.com';
        const subject = encodeURIComponent(`Enquiry from ${data.fullName} (${data.orgName}) - Service: ${data.serviceType}`);
        const body = encodeURIComponent(`Full Name: ${data.fullName}\nOrganisation Name: ${data.orgName}\nEmail: ${data.email}\nTelephone Number: ${data.telNumber}\nService Required: ${data.serviceType}\n\nMessage:\n${data.message}`);

        const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Fallback to email
      const to = 'info@pvngelectromechanical.com';
      const subject = encodeURIComponent(`Enquiry from ${data.fullName} (${data.orgName}) - Service: ${data.serviceType}`);
      const body = encodeURIComponent(`Full Name: ${data.fullName}\nOrganisation Name: ${data.orgName}\nEmail: ${data.email}\nTelephone Number: ${data.telNumber}\nService Required: ${data.serviceType}\n\nMessage:\n${data.message}`);

      const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-5 bg-white relative overflow-hidden" style={{paddingTop: '6rem'}}>
      {/* Subtle Blue Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              {langContent.contactTitle}
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
          
          <p className="text-base md:text-lg mb-16 text-center max-w-4xl mx-auto text-gray-900 leading-relaxed">
            {langContent.contactIntro}
          </p>
        </div>

        <div className="service-card fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2">
                    {langContent.labelFullName}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {isSubmitting ? 'Sending...' : langContent.submitButton}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {langContent.getInTouch}
                </h3>
                
                <p className="text-lg mb-6">
                  {langContent.contactAlternativeCall}
                </p>
                
                <div 
                  className="text-lg font-semibold text-gray-800"
                  dangerouslySetInnerHTML={{ __html: langContent.contactPerson }}
                />
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {langContent.officeLocation}
                </h4>
                <p 
                  className="text-lg text-gray-900"
                  dangerouslySetInnerHTML={{ __html: langContent.officeAddress }}
                />
              </div>

              <div className="flex justify-center gap-6">
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  title="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  title="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  title="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
