'use client';

import Image from 'next/image';

interface FloatingCalculatorProps {
  onCalculatorClick?: () => void;
}

export default function FloatingCalculator({ onCalculatorClick }: FloatingCalculatorProps) {

  const handleCalculatorClick = () => {
    if (onCalculatorClick) {
      onCalculatorClick();
    } else {
      // Fallback: try to trigger modal if no callback provided
      const event = new CustomEvent('openPVSSModal');
      window.dispatchEvent(event);
    }
  };

  return (
    <>
      {/* Floating Calculator Icon */}
      <button
        onClick={handleCalculatorClick}
        className="fixed bottom-48 right-6 z-40 transition-all duration-200 group hover:scale-110"
        aria-label="Open Solar Calculator"
      >
        {/* Calculator Icon */}
        <div className="relative">
          <Image
            src="/images/calculatoricon.png"
            alt="Calculator"
            width={56}
            height={56}
            className="w-14 h-14 transition-transform duration-200"
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
            className="w-14 h-14 text-gray-700 transition-transform duration-200" 
            style={{ display: 'none' }}
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v4h10V4H7zm0 6v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 14v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 18v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/>
          </svg>
        </div>
      </button>
    </>
  );
}
