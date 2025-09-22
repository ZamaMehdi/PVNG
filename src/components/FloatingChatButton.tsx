'use client';

import { useState, useEffect } from 'react';
import ChatSystem from './ChatSystem';

export default function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for mobile display
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop: Individual Floating Buttons (≥ 500px) */}
      {!isMobile && (
        <>
          {/* Calculator Button */}
          <button
            onClick={() => {
              const modalTrigger = document.querySelector('[data-pvss-trigger]') as HTMLElement;
              if (modalTrigger) {
                modalTrigger.click();
              } else {
                const event = new CustomEvent('openPVSSModal');
                window.dispatchEvent(event);
              }
            }}
            className="fixed bottom-48 right-6 z-40 p-2 hover:bg-gray-100 rounded-full transition-all duration-200 group"
            aria-label="Open Solar Calculator"
          >
            <img 
              src="/images/calculatoricon.png" 
              alt="Calculator" 
              className="w-12 h-10 group-hover:scale-110 transition-transform duration-200"
              onError={(e) => {
                console.log('Calculator icon failed to load, using SVG fallback');
                e.currentTarget.style.display = 'none';
                const svgFallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (svgFallback) svgFallback.style.display = 'block';
              }}
            />
            <svg 
              className="w-12 h-10 text-gray-700 group-hover:scale-110 transition-transform duration-200" 
              style={{ display: 'none' }}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v4h10V4H7zm0 6v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 14v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 18v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/>
            </svg>
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/971501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-28 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-200 group"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>

          {/* Chat Button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-200 group animate-bounce hover:animate-none"
            aria-label="Open Chat"
            style={{ animationDuration: '2s' }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            
            {/* Animated notification dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            
            {/* Pulsing ring animation */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
          </button>
        </>
      )}

      {/* Mobile: Collapsible Floating Action Button Group (< 500px) */}
      {isMobile && (
        <div className="fixed bottom-20 right-0 z-40">
        {/* Expanded Menu */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 space-y-3 mb-2">
            {/* Calculator Button */}
            <button
              onClick={() => {
                // Try to find and trigger the PVSS modal on the current page
                const modalTrigger = document.querySelector('[data-pvss-trigger]') as HTMLElement;
                if (modalTrigger) {
                  modalTrigger.click();
                } else {
                  // Fallback: dispatch custom event
                  const event = new CustomEvent('openPVSSModal');
                  window.dispatchEvent(event);
                }
                setIsExpanded(false);
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 group"
              aria-label="Open Solar Calculator"
            >
              <img 
                src="/images/calculatoricon.png" 
                alt="Calculator" 
                className="w-12 h-10 group-hover:scale-110 transition-transform duration-200"
                onError={(e) => {
                  console.log('Calculator icon failed to load, using SVG fallback');
                  // Hide the image and show SVG fallback
                  e.currentTarget.style.display = 'none';
                  const svgFallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (svgFallback) svgFallback.style.display = 'block';
                }}
              />
              {/* SVG Fallback Calculator Icon */}
              <svg 
                className="w-12 h-10 text-gray-700 group-hover:scale-110 transition-transform duration-200" 
                style={{ display: 'none' }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v4h10V4H7zm0 6v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 14v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 18v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/>
              </svg>
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-200 group block"
              aria-label="Contact us on WhatsApp"
              onClick={() => setIsExpanded(false)}
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>

            {/* Chat Button */}
            <button
              onClick={() => {
                setIsChatOpen(true);
                setIsExpanded(false);
              }}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-200 group"
              aria-label="Open Chat"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
            </button>
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`text-gray-600 hover:text-gray-800 transition-all duration-300 group ${isExpanded ? '' : 'arrow-container-bounce'}`}
          aria-label="Toggle Action Menu"
        >
          <div className="relative">
            {/* Transparent background */}
            <div className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/50 ${isExpanded ? 'bg-white/30 border-white/50' : ''}`}></div>
            
            {/* Glowing background effect */}
            <div className={`absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 ${isExpanded ? 'opacity-30' : ''}`}></div>
            
            {/* Arrow with enhanced animation - positioned above blur */}
            <div className="relative z-10">
              <svg 
                className={`w-8 h-8 transition-all duration-500 ${isExpanded ? 'rotate-180 scale-110' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            
            {/* Pulsing ring effect */}
            <div className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-300 ${isExpanded ? 'opacity-0' : 'opacity-75 animate-ping'}`}></div>
          </div>
        </button>
        </div>
      )}
      
      {/* Chat System */}
      <ChatSystem isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
