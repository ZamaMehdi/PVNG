export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceQA {
  id: number;
  name: string;
  description: string;
  icon: string;
  image: string;
  questions: Question[];
}

export const chatServices: ServiceQA[] = [
  {
    id: 1,
    name: "Fire Fighting Systems",
    description: "Comprehensive fire suppression and alarm systems for residential, commercial, and industrial properties.",
    icon: "fire-extinguisher",
    image: "/images/fire fighting system.png",
    questions: [
      {
        id: "fire-1",
        question: "What types of fire fighting systems do you install?",
        answer: "We install a comprehensive range of fire fighting systems including conventional and advanced addressable fire alarm systems, sprinkler systems, fire suppression systems, smoke detection systems, and emergency lighting systems. Our systems are designed to meet both local and international safety standards."
      },
      {
        id: "fire-2", 
        question: "Do you provide maintenance services for fire fighting systems?",
        answer: "Yes, we provide comprehensive maintenance services including regular inspections, testing, repairs, and system upgrades. Our certified technicians ensure your fire fighting systems remain in optimal working condition and comply with all safety regulations."
      },
      {
        id: "fire-3",
        question: "What certifications do your fire fighting systems comply with?",
        answer: "Our fire fighting systems comply with UAE Civil Defense requirements, NFPA standards, and other international safety regulations. We ensure all installations meet the latest local and international safety standards for maximum protection."
      },
      {
        id: "fire-4",
        question: "How long does a typical fire fighting system installation take?",
        answer: "Installation time varies depending on the size and complexity of the project. For residential properties, installation typically takes 1-3 days. Commercial and industrial projects may take 1-4 weeks. We provide detailed timelines during the consultation phase."
      },
      {
        id: "fire-5",
        question: "Can you retrofit fire fighting systems in existing buildings?",
        answer: "Yes, we specialize in retrofitting fire fighting systems in existing buildings. Our team conducts thorough assessments to design systems that integrate seamlessly with existing infrastructure while meeting current safety standards."
      }
    ]
  },
  {
    id: 2,
    name: "Low Voltage (LV) Systems",
    description: "Advanced low voltage systems including structured cabling, access control, and building management systems.",
    icon: "bolt",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    questions: [
      {
        id: "lv-1",
        question: "What low voltage systems do you specialize in?",
        answer: "We specialize in structured cabling systems, access control systems, video intercoms, building management systems (BMS), data networking, CCTV systems, and integrated security solutions. Our systems are designed for seamless connectivity and optimal performance."
      },
      {
        id: "lv-2",
        question: "Do you provide smart building solutions?",
        answer: "Yes, we offer comprehensive smart building solutions including IoT integration, automated lighting control, HVAC management, energy monitoring systems, and centralized building management platforms that enhance efficiency and reduce operational costs."
      },
      {
        id: "lv-3",
        question: "What is structured cabling and why is it important?",
        answer: "Structured cabling is a standardized approach to cabling infrastructure that supports multiple hardware uses and provides a foundation for all communications systems. It's essential for reliable data transmission, scalability, and future-proofing your building's technology infrastructure."
      },
      {
        id: "lv-4",
        question: "Can you integrate LV systems with existing infrastructure?",
        answer: "Absolutely. Our team specializes in integrating new low voltage systems with existing infrastructure. We conduct thorough assessments and design solutions that work harmoniously with your current systems while providing enhanced functionality."
      },
      {
        id: "lv-5",
        question: "What maintenance services do you offer for LV systems?",
        answer: "We provide comprehensive maintenance services including system monitoring, performance optimization, software updates, hardware repairs, and 24/7 technical support. Our proactive maintenance ensures maximum uptime and system reliability."
      }
    ]
  },
  {
    id: 3,
    name: "Gas Piping Solutions",
    description: "Safe and reliable gas piping installations with certified engineers and comprehensive safety protocols.",
    icon: "gas",
    image: "/images/Gas pipeline.jpeg",
    questions: [
      {
        id: "gas-1",
        question: "What types of gas piping systems do you install?",
        answer: "We install various gas piping systems including natural gas distribution networks, LPG systems, industrial gas lines, residential gas connections, and commercial gas infrastructure. All installations are performed by certified engineers following strict safety protocols."
      },
      {
        id: "gas-2",
        question: "Are your gas piping installations certified?",
        answer: "Yes, all our gas piping installations undergo rigorous pressure testing and receive comprehensive certification. We ensure full compliance with UAE gas safety regulations and international standards for maximum safety and reliability."
      },
      {
        id: "gas-3",
        question: "What safety measures do you implement during gas piping installation?",
        answer: "We implement comprehensive safety measures including proper ventilation planning, leak detection systems, emergency shut-off valves, pressure monitoring, and regular safety inspections. Our certified engineers follow strict safety protocols throughout the installation process."
      },
      {
        id: "gas-4",
        question: "Do you provide emergency gas line repair services?",
        answer: "Yes, we offer 24/7 emergency gas line repair services. Our certified technicians are available round-the-clock to address gas leaks, line breaks, and other emergency situations to ensure your safety and minimize downtime."
      },
      {
        id: "gas-5",
        question: "What is the typical lifespan of gas piping systems you install?",
        answer: "Our gas piping systems are designed for long-term reliability with proper maintenance. Typically, our installations have a lifespan of 20-30 years or more, depending on the materials used and environmental conditions. We provide maintenance schedules to maximize system longevity."
      }
    ]
  },
  {
    id: 4,
    name: "Security Systems",
    description: "Advanced security solutions including CCTV surveillance, intruder alarms, and access control systems.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    questions: [
      {
        id: "security-1",
        question: "What security systems do you offer?",
        answer: "We offer comprehensive security solutions including CCTV surveillance systems, intruder alarm systems, access control systems, video intercoms, perimeter security, motion detection systems, and integrated security management platforms."
      },
      {
        id: "security-2",
        question: "Can I monitor my security system remotely?",
        answer: "Yes, our security systems include remote monitoring capabilities through mobile apps and web interfaces. You can view live feeds, receive alerts, control access, and manage your security system from anywhere in the world."
      },
      {
        id: "security-3",
        question: "Do you provide 24/7 security monitoring services?",
        answer: "Yes, we offer 24/7 professional monitoring services with our security operations center. Our trained operators monitor your premises around the clock and can dispatch emergency services when needed."
      },
      {
        id: "security-4",
        question: "What is the difference between residential and commercial security systems?",
        answer: "Residential systems focus on home protection with user-friendly interfaces, while commercial systems are designed for larger properties with multiple access points, advanced integration capabilities, and centralized management. We customize solutions based on your specific needs."
      },
      {
        id: "security-5",
        question: "Can security systems be integrated with other building systems?",
        answer: "Absolutely. Our security systems can be integrated with fire alarm systems, building management systems, lighting control, and HVAC systems for comprehensive building automation and enhanced security management."
      }
    ]
  },
  {
    id: 5,
    name: "Sustainability Consultants",
    description: "Expert sustainability consulting including energy efficiency, renewable energy integration, and sustainable building practices.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    questions: [
      {
        id: "sustainability-1",
        question: "What sustainability consulting services do you provide?",
        answer: "We provide comprehensive sustainability consulting including energy audits, renewable energy feasibility studies, carbon footprint assessments, green building certifications, energy efficiency improvements, and sustainable building design consulting."
      },
      {
        id: "sustainability-2",
        question: "Do you help with solar energy installation?",
        answer: "Yes, we provide end-to-end solar energy solutions including feasibility studies, system design, installation, and maintenance. We work with Shams Dubai program and help clients navigate net metering and government incentives."
      },
      {
        id: "sustainability-3",
        question: "What is your experience with green building certifications?",
        answer: "Our team has extensive experience with various green building certifications including LEED, Estidama, and other regional sustainability standards. We guide clients through the certification process and help implement sustainable building practices."
      },
      {
        id: "sustainability-4",
        question: "How can you help reduce energy costs?",
        answer: "We conduct comprehensive energy audits to identify inefficiencies and recommend cost-effective improvements. Our solutions include LED lighting upgrades, HVAC optimization, smart building controls, and renewable energy integration to significantly reduce energy costs."
      },
      {
        id: "sustainability-5",
        question: "Do you provide carbon footprint reduction strategies?",
        answer: "Yes, we develop comprehensive carbon footprint reduction strategies including energy efficiency measures, renewable energy adoption, waste reduction programs, and sustainable operational practices. We help clients achieve their environmental goals while improving profitability."
      }
    ]
  }
];
