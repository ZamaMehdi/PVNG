'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Projects() {
  const { langContent } = useLanguage();

  const projectCards = [
    {
      id: 1,
      title: langContent.project1Title,
      description: langContent.project1Desc,
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 2,
      title: langContent.project2Title,
      description: langContent.project2Desc,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 3,
      title: langContent.project3Title,
      description: langContent.project3Desc,
      image: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20 px-5 bg-white relative overflow-hidden" style={{paddingTop: '6rem'}}>
      {/* Subtle Blue Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              {langContent.projectsTitle}
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
            {langContent.projectsIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectCards.map((project, index) => (
            <div 
              key={project.id} 
              className="service-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
                <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-900">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        <div className="service-card fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {langContent.clientsTitle}
          </h3>
          <ul className="space-y-4">
            {langContent.projectsList.map((client, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-lg text-gray-900">{client}</span>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8 text-xl text-gray-900">
            {langContent.projectsOutro}
          </p>
        </div>
      </div>
    </section>
  );
}
