'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { generateCompanyPDF } from '@/lib/generatePDF';

export default function PDFDownloadButton() {
  const { langContent } = useLanguage();

  const handleDownload = () => {
    generateCompanyPDF(langContent);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-32 right-4 z-40 p-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Download Company Information PDF"
      title="Download Company Information (PDF)"
    >
      <svg 
        className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 3v6h6" 
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 18h6" 
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 15h6" 
        />
      </svg>
    </button>
  );
}

