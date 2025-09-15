'use client';

import { useState } from 'react';
import { chatServices, ServiceQA, Question, SubService } from '@/lib/chatData';

interface ChatSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatSystem({ isOpen, onClose }: ChatSystemProps) {
  const [selectedService, setSelectedService] = useState<ServiceQA | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const getIcon = (iconName: string) => {
    const icons = {
      'fire-extinguisher': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      'bolt': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      'gas': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      'shield': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      'building': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      'sun': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      'battery': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      'wind': (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    };
    return icons[iconName as keyof typeof icons] || null;
  };

  const handleServiceSelect = (service: ServiceQA) => {
    setSelectedService(service);
    setSelectedSubService(null);
    setSelectedQuestion(null);
  };

  const handleSubServiceSelect = (subService: SubService) => {
    setSelectedSubService(subService);
    setSelectedQuestion(null);
  };

  const handleQuestionSelect = (question: Question) => {
    setSelectedQuestion(question);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    setSelectedSubService(null);
    setSelectedQuestion(null);
  };

  const handleBackToSubServices = () => {
    setSelectedSubService(null);
    setSelectedQuestion(null);
  };

  const handleBackToQuestions = () => {
    setSelectedQuestion(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-t-2xl shadow-2xl border border-gray-200 flex flex-col">
      {/* Simple Header */}
      <div className="bg-gray-50 p-4 rounded-t-2xl border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">PVNG Support</h3>
            <p className="text-xs text-green-600">● Online</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {!selectedService && (
          <div className="space-y-3">
            {/* Welcome Message */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm text-gray-800">Hi! I&apos;m here to help you learn about our services. What would you like to know?</p>
              </div>
            </div>

            {/* Service Options */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 ml-8 mb-2">Choose a service:</p>
              {chatServices.map((service) => (
                <div key={service.id} className="space-y-1">
                  {/* Main Service */}
                  <button
                    onClick={() => handleServiceSelect(service)}
                    className="ml-8 bg-white border border-gray-200 rounded-lg p-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-left w-full max-w-xs shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        {getIcon(service.icon)}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{service.name}</span>
                    </div>
                  </button>
                  
                  {/* Sub-services */}
                  {service.subServices && service.subServices.length > 0 && (
                    <div className="ml-12 space-y-1">
                      {service.subServices.map((subService) => (
                        <button
                          key={subService.id}
                          onClick={() => handleSubServiceSelect(subService)}
                          className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-2 hover:from-green-100 hover:to-blue-100 hover:border-green-300 transition-all duration-200 text-left w-full max-w-xs shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
                              {getIcon(subService.icon)}
                            </div>
                            <span className="text-xs font-medium text-gray-700">{subService.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Questions View */}
        {selectedService && !selectedSubService && !selectedQuestion && (
          <div className="space-y-3">
            {/* Back button as message */}
            <div className="flex justify-end">
              <button
                onClick={handleBackToServices}
                className="bg-blue-500 text-white rounded-lg px-3 py-2 text-sm hover:bg-blue-600 transition-colors"
              >
                ← Back to Services
              </button>
            </div>

            {/* Service selection message */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm text-gray-800">Great choice! Here are common questions about <strong>{selectedService.name}</strong>:</p>
              </div>
            </div>

            {/* Questions as clickable messages */}
            <div className="space-y-2">
              {selectedService.questions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleQuestionSelect(question)}
                  className="ml-8 bg-white border border-gray-200 rounded-lg p-3 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-left w-full max-w-xs shadow-sm"
                >
                  <p className="text-sm text-gray-800">{question.question}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sub-service Questions View */}
        {selectedSubService && !selectedQuestion && (
          <div className="space-y-3">
            {/* Back button as message */}
            <div className="flex justify-end">
              <button
                onClick={handleBackToSubServices}
                className="bg-blue-500 text-white rounded-lg px-3 py-2 text-sm hover:bg-blue-600 transition-colors"
              >
                ← Back to {selectedService?.name}
              </button>
            </div>

            {/* Sub-service selection message */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm text-gray-800">Here are questions about <strong>{selectedSubService.name}</strong>:</p>
              </div>
            </div>

            {/* Sub-service Questions as clickable messages */}
            <div className="space-y-2">
              {selectedSubService.questions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleQuestionSelect(question)}
                  className="ml-8 bg-white border border-gray-200 rounded-lg p-3 hover:bg-green-50 hover:border-green-300 transition-all duration-200 text-left w-full max-w-xs shadow-sm"
                >
                  <p className="text-sm text-gray-800">{question.question}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Answer View */}
        {selectedQuestion && (
          <div className="space-y-3">
            {/* Back button as message */}
            <div className="flex justify-end">
              <button
                onClick={selectedSubService ? handleBackToSubServices : handleBackToQuestions}
                className="bg-blue-500 text-white rounded-lg px-3 py-2 text-sm hover:bg-blue-600 transition-colors"
              >
                ← Back to {selectedSubService ? selectedSubService.name : 'Questions'}
              </button>
            </div>

            {/* Question as user message */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">{selectedQuestion.question}</p>
              </div>
            </div>

            {/* Answer as bot message */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm text-gray-800">{selectedQuestion.answer}</p>
              </div>
            </div>

            {/* Follow-up message */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-sm text-gray-800 mb-3">Need more help? I can connect you with our experts!</p>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors">
                    Contact Us
                  </button>
                  <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded text-xs hover:bg-blue-50 transition-colors">
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
