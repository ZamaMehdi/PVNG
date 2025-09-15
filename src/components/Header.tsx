'use client';

import { content } from '@/lib/content';

interface HeaderProps {
  currentLang: 'en' | 'ar';
}

export default function Header({ currentLang }: HeaderProps) {
  const langContent = content[currentLang];

  return (
    <header className="gradient-bg text-white py-16 px-5 text-center shadow-lg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#002d5f" 
            fillOpacity="0.2" 
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,122.7C672,128,768,160,864,170.7C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow fade-in">
          {langContent.headerTitle}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto fade-in delay-200">
          {langContent.headerSubtitle}
        </p>
      </div>
    </header>
  );
}






