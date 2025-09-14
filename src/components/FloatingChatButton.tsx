'use client';

import { useState } from 'react';
import ChatSystem from './ChatSystem';

export default function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-20 right-6 z-40 bg-white text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-200 group animate-bounce hover:animate-none"
        aria-label="Open Chat"
        style={{ animationDuration: '2s' }}
      >
        <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        
        {/* Animated notification dot */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
      </button>
      
      {/* Chat System */}
      <ChatSystem isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
