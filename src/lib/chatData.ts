export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface SubService {
  id: number;
  name: string;
  icon: string;
  questions: Question[];
}

export interface ServiceQA {
  id: number;
  name: string;
  icon: string;
  questions: Question[];
  subServices?: SubService[];
}

export const chatServices: ServiceQA[] = [
  {
    id: 1,
    name: 'Fire Fighting Systems',
    icon: 'fire-extinguisher',
    questions: [
      {
        id: 1,
        question: 'What types of fire fighting systems do you install?',
        answer: 'We install comprehensive fire suppression and alarm systems, from conventional systems to advanced addressable solutions. Our installations include fire detection systems, sprinkler systems, fire extinguishers, and emergency lighting systems, all compliant with local and international safety regulations.'
      },
      {
        id: 2,
        question: 'Do you provide maintenance services for fire systems?',
        answer: 'Yes, we offer comprehensive maintenance services for all fire fighting systems. Our maintenance includes regular inspections, testing, cleaning, and repairs to ensure your systems remain in optimal working condition and comply with safety standards.'
      },
      {
        id: 3,
        question: 'Are your fire systems compliant with Dubai regulations?',
        answer: 'Absolutely. All our fire fighting systems are rigorously compliant with the latest Dubai Civil Defence regulations and international safety standards. We ensure full compliance throughout the design, installation, and maintenance phases.'
      }
    ]
  },
  {
    id: 2,
    name: 'Low Voltage (LV) Systems',
    icon: 'bolt',
    questions: [
      {
        id: 4,
        question: 'What LV systems do you specialize in?',
        answer: 'We specialize in structured cabling, access control systems, video intercoms, and building management systems (BMS). Our LV solutions create modern, smart environments that are secure, connected, and remarkably efficient in operation.'
      },
      {
        id: 5,
        question: 'Do you provide smart building solutions?',
        answer: 'Yes, we design and implement comprehensive smart building solutions including centralized building management systems, automated controls, and integrated security systems that enhance efficiency and convenience.'
      },
      {
        id: 6,
        question: 'What is included in your LV system installation?',
        answer: 'Our LV installation includes precise installation, rigorous testing, and ongoing maintenance of structured cabling, access control, video intercoms, and BMS systems. We ensure seamless integration and optimal performance.'
      }
    ]
  },
  {
    id: 3,
    name: 'Gas Piping Solutions',
    icon: 'gas',
    questions: [
      {
        id: 7,
        question: 'What types of gas piping installations do you handle?',
        answer: 'We provide secure and reliable gas piping installations for both commercial and residential applications. Our services include gas system design, installation, pressure testing, and certification for various gas supply requirements.'
      },
      {
        id: 8,
        question: 'Are your engineers certified for gas work?',
        answer: 'Yes, our engineers are highly trained and rigorously certified for gas piping work. They adhere to the strictest safety protocols throughout every phase of the project to ensure maximum safety and compliance.'
      },
      {
        id: 9,
        question: 'Do you provide gas system testing and certification?',
        answer: 'Absolutely. We conduct thorough pressure testing and provide comprehensive certification processes to ensure maximum safety, optimal efficiency, and full compliance with all local and international standards.'
      }
    ]
  },
  {
    id: 4,
    name: 'Security Systems',
    icon: 'shield',
    questions: [
      {
        id: 10,
        question: 'What security solutions do you offer?',
        answer: 'We offer state-of-the-art security solutions including CCTV surveillance, intruder alarms, video intercoms, and access control systems. Our solutions are highly customizable and designed to protect both commercial and residential properties.'
      },
      {
        id: 11,
        question: 'Do you provide remote monitoring capabilities?',
        answer: 'Yes, our CCTV surveillance systems include remote monitoring capabilities for comprehensive property protection. You can monitor your property from anywhere with our advanced security technology.'
      },
      {
        id: 12,
        question: 'Can you integrate different security systems?',
        answer: 'Absolutely. We specialize in integrating various security systems including CCTV, intruder alarms, and access control into a unified security solution that provides maximum protection and ease of management.'
      }
    ]
  },
  {
    id: 5,
    name: 'Sustainability Consultants & Experts',
    icon: 'building',
    questions: [
      {
        id: 13,
        question: 'What sustainability services do you provide?',
        answer: 'We provide strategic sustainability consulting including energy efficiency improvements, renewable energy integration, and sustainable building practices. Our experts guide you through reducing environmental footprint while optimizing operational costs.'
      },
      {
        id: 14,
        question: 'What renewable energy solutions do you offer?',
        answer: 'We offer comprehensive renewable energy solutions including solar energy for homeowners, energy storage systems, and wind energy assessments. Our solutions are tailored to Dubai\'s climate and regulatory environment.'
      },
      {
        id: 15,
        question: 'How do you help with energy efficiency?',
        answer: 'We provide energy efficiency assessments, optimization strategies, and implementation support to help reduce energy consumption and operational costs while improving environmental sustainability.'
      }
    ],
    subServices: [
      {
        id: 6,
        name: 'Solar Energy for Homeowners',
        icon: 'sun',
        questions: [
          {
            id: 17,
            question: 'What are the benefits of solar energy for homeowners?',
            answer: 'Solar energy provides energy independence, significant savings on electricity bills, reduced carbon footprint, and potentially increased property value. Solar panels harness Dubai\'s abundant sunshine to generate clean, renewable electricity for your home.'
          },
          {
            id: 18,
            question: 'How does Dubai\'s Shams Dubai program work?',
            answer: 'Shams Dubai, launched by DEWA, encourages homeowners to install solar PV panels on rooftops. The program allows net metering, meaning surplus electricity can be exported to DEWA\'s grid, and homeowners receive credit on their electricity bill.'
          },
          {
            id: 19,
            question: 'What is included in solar panel installation?',
            answer: 'Our solar installation includes custom solar panel installation, system design, maintenance services, and guidance on energy efficiency optimization. We ensure your system is properly integrated and compliant with Dubai regulations.'
          }
        ]
      },
      {
        id: 7,
        name: 'Energy Storage Solutions',
        icon: 'battery',
        questions: [
          {
            id: 20,
            question: 'How do energy storage batteries work with solar systems?',
            answer: 'Energy storage batteries store excess solar energy generated during the day for use at night or during peak demand periods. This reduces reliance on grid electricity and provides enhanced energy security and backup power during outages.'
          },
          {
            id: 21,
            question: 'What types of battery storage do you offer?',
            answer: 'We offer advanced battery storage systems for reliable power backup, smart energy management solutions, and both grid-tie and off-grid energy storage configurations tailored to your specific needs.'
          },
          {
            id: 22,
            question: 'Are battery systems cost-effective in Dubai?',
            answer: 'As battery technology advances and becomes more accessible, it aligns with Dubai\'s vision for a smart and sustainable city. Battery systems help optimize energy usage to avoid high peak-time tariffs and provide energy independence.'
          }
        ]
      },
      {
        id: 8,
        name: 'Wind Energy Solutions',
        icon: 'wind',
        questions: [
          {
            id: 23,
            question: 'Is wind energy viable for homes in Dubai?',
            answer: 'While less common than solar in urban Dubai, wind energy can be viable in certain areas or as part of hybrid renewable energy systems. Small-scale wind turbines can supplement electricity generation in open or coastal areas with consistent wind patterns.'
          },
          {
            id: 24,
            question: 'What wind energy services do you provide?',
            answer: 'We provide wind turbine installation and maintenance services, site assessment and wind resource evaluation, and integration with existing power systems and grid connectivity for suitable locations.'
          },
          {
            id: 25,
            question: 'How does wind energy fit into Dubai\'s renewable strategy?',
            answer: 'Dubai\'s Clean Energy Strategy 2050 includes research into various renewable technologies, including wind power. While solar is currently the focus, wind energy contributes to Dubai\'s goal of becoming a global hub for clean energy.'
          }
        ]
      }
    ]
  }
];
