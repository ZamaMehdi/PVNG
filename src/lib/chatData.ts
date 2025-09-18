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
        question: 'What is PVNG\'s primary focus with fire fighting systems?',
        answer: 'PVNG\'s primary focus is on ensuring the safety of a property and its occupants.'
      },
      {
        id: 2,
        question: 'What services does PVNG offer for fire safety?',
        answer: 'They offer the design, installation, and meticulous maintenance of fire suppression and alarm systems.'
      },
      {
        id: 3,
        question: 'What kinds of properties do they provide fire fighting solutions for?',
        answer: 'They provide tailored fire fighting strategies for residential, commercial, and industrial properties.'
      },
      {
        id: 4,
        question: 'Do their installations comply with safety regulations?',
        answer: 'Yes, all their installations are rigorously compliant with the latest local and international safety regulations.'
      },
      {
        id: 5,
        question: 'What level of protection do their systems provide?',
        answer: 'Their systems provide an unparalleled level of peace of mind and robust protection against unforeseen fire hazards.'
      },
      {
        id: 6,
        question: 'How do their systems assist in an emergency?',
        answer: 'They offer early detection and rapid response capabilities.'
      },
      {
        id: 7,
        question: 'What kind of systems do they install?',
        answer: 'They install both conventional systems and advanced addressable solutions.'
      },
      {
        id: 8,
        question: 'What is the main goal of their fire fighting systems?',
        answer: 'The main goal is to offer reliable and efficient systems that integrate seamlessly with a property\'s overall infrastructure.'
      },
      {
        id: 9,
        question: 'Who handles the fire fighting system services?',
        answer: 'The services are delivered by a team of highly skilled and certified professionals.'
      },
      {
        id: 10,
        question: 'Are the fire fighting systems tailored to specific needs?',
        answer: 'Yes, they implement tailored fire fighting strategies.'
      },
      {
        id: 11,
        question: 'What is included in their service for fire fighting systems besides installation?',
        answer: 'Their service includes meticulous design and maintenance in addition to installation.'
      },
      {
        id: 12,
        question: 'What is the benefit of a seamless integration?',
        answer: 'Seamless integration ensures the systems work efficiently with the property\'s infrastructure.'
      },
      {
        id: 13,
        question: 'Do they focus on both fire suppression and fire alarm systems?',
        answer: 'Yes, they specialise in both fire suppression and alarm systems.'
      },
      {
        id: 14,
        question: 'How do their systems provide peace of mind?',
        answer: 'They provide robust protection against fire hazards, offering a sense of security and peace of mind.'
      },
      {
        id: 15,
        question: 'What are advanced addressable solutions?',
        answer: 'These are advanced fire fighting systems that PVNG implements.'
      },
      {
        id: 16,
        question: 'What is the role of a certified professional in their fire fighting service?',
        answer: 'Certified professionals are responsible for delivering the fire fighting services.'
      },
      {
        id: 17,
        question: 'Does the company\'s service include maintenance?',
        answer: 'Yes, the services include meticulous maintenance.'
      },
      {
        id: 18,
        question: 'What is the importance of early detection?',
        answer: 'Early detection is a key capability of their fire fighting systems for rapid response.'
      },
      {
        id: 19,
        question: 'What kind of properties can use their systems?',
        answer: 'Their systems are for residential, commercial, and industrial properties.'
      },
      {
        id: 20,
        question: 'What is their approach to design?',
        answer: 'Their approach to design is specialised and meticulous.'
      },
      {
        id: 21,
        question: 'What happens after the installation of a fire fighting system?',
        answer: 'They provide ongoing meticulous maintenance.'
      },
      {
        id: 22,
        question: 'Do they offer solutions for both small and large properties?',
        answer: 'They provide fire fighting strategies for residential, commercial, and industrial properties, suggesting solutions for various sizes.'
      },
      {
        id: 23,
        question: 'What types of fire hazards do they protect against?',
        answer: 'They provide protection against unforeseen fire hazards.'
      },
      {
        id: 24,
        question: 'What is a key feature of their systems\' response?',
        answer: 'A key feature is rapid response capabilities.'
      },
      {
        id: 25,
        question: 'What is one of the main components of their fire fighting systems?',
        answer: 'One of the main components is fire suppression systems.'
      },
      {
        id: 26,
        question: 'What is the other main component?',
        answer: 'The other main component is fire alarm systems.'
      },
      {
        id: 27,
        question: 'Do they offer conventional systems?',
        answer: 'Yes, they offer conventional fire fighting systems.'
      },
      {
        id: 28,
        question: 'Is there a focus on efficiency?',
        answer: 'Yes, they focus on reliable and efficient systems.'
      },
      {
        id: 29,
        question: 'What is one of the benefits of their fire fighting systems?',
        answer: 'They provide peace of mind.'
      },
      {
        id: 30,
        question: 'Are the systems easy to integrate?',
        answer: 'Yes, they are designed to integrate seamlessly with a property\'s overall infrastructure.'
      },
      {
        id: 31,
        question: 'How is the quality of their service ensured?',
        answer: 'The services are delivered by a team of highly skilled and certified professionals.'
      },
      {
        id: 32,
        question: 'What is the overall purpose of their fire fighting service?',
        answer: 'The overall purpose is to ensure the safety of property and its occupants.'
      }
    ]
  },
  {
    id: 2,
    name: 'Low Voltage (LV) Systems',
    icon: 'lightning',
    questions: [
      {
        id: 33,
        question: 'What is the role of efficient low voltage systems in modern buildings?',
        answer: 'Efficient low voltage systems are the backbone of any intelligent building.'
      },
      {
        id: 34,
        question: 'What services does PVNG provide for LV systems?',
        answer: 'They provide precise installation, rigorous testing, and ongoing maintenance of a diverse range of LV systems.'
      },
      {
        id: 35,
        question: 'What specific systems are included in their LV expertise?',
        answer: 'Their expertise includes structured cabling, advanced access control systems, video intercoms, and comprehensive building management systems (BMS).'
      },
      {
        id: 36,
        question: 'What is the purpose of structured cabling?',
        answer: 'Structured cabling is for seamless data flow.'
      },
      {
        id: 37,
        question: 'How do their access control systems enhance security?',
        answer: 'They are advanced systems that enhance security.'
      },
      {
        id: 38,
        question: 'What is the function of their video intercoms?',
        answer: 'Their video intercoms are intuitive and for communication.'
      },
      {
        id: 39,
        question: 'What does a Building Management System (BMS) do?',
        answer: 'A BMS provides centralised control of a facility.'
      },
      {
        id: 40,
        question: 'What is the purpose of these LV systems?',
        answer: 'The systems are crucial for creating modern, smart environments that are secure, connected, and efficient.'
      },
      {
        id: 41,
        question: 'Do they ensure that the systems work well together?',
        answer: 'Yes, they ensure seamless integration and optimal performance.'
      },
      {
        id: 42,
        question: 'How do these systems prepare infrastructure for the future?',
        answer: 'By ensuring seamless integration and optimal performance, they empower the infrastructure for the future.'
      },
      {
        id: 43,
        question: 'Who handles the LV system services?',
        answer: 'The services are delivered by a team of highly skilled and certified professionals.'
      },
      {
        id: 44,
        question: 'Does their service include testing?',
        answer: 'Yes, their service includes rigorous testing.'
      },
      {
        id: 45,
        question: 'Do they offer maintenance for LV systems?',
        answer: 'Yes, they offer ongoing maintenance.'
      },
      {
        id: 46,
        question: 'What does the term "diverse range" imply about their LV systems?',
        answer: 'It implies that they work with many different types of LV systems.'
      },
      {
        id: 47,
        question: 'What is the benefit of a smart environment created by these systems?',
        answer: 'The benefit is that the environments are secure, connected, and efficient.'
      },
      {
        id: 48,
        question: 'How is the installation of LV systems described?',
        answer: 'The installation is described as precise.'
      },
      {
        id: 49,
        question: 'What is the role of an LV system in a building?',
        answer: 'It acts as the backbone of an intelligent building.'
      },
      {
        id: 50,
        question: 'Do their LV services go beyond just installation?',
        answer: 'Yes, they also provide testing and maintenance.'
      },
      {
        id: 51,
        question: 'Are their LV systems designed for optimal performance?',
        answer: 'Yes, they ensure optimal performance.'
      },
      {
        id: 52,
        question: 'What is one of the key outcomes of their LV solutions?',
        answer: 'One outcome is a secure and connected environment.'
      },
      {
        id: 53,
        question: 'Can their systems manage the entire building?',
        answer: 'Yes, they offer comprehensive Building Management Systems (BMS) for centralised control.'
      },
      {
        id: 54,
        question: 'What is the goal of their LV services?',
        answer: 'The goal is to create modern, smart environments.'
      },
      {
        id: 55,
        question: 'What makes their video intercoms stand out?',
        answer: 'They are described as intuitive.'
      },
      {
        id: 56,
        question: 'Do their services cover both residential and commercial buildings?',
        answer: 'The document states they serve both commercial and residential clients, so it can be inferred that these services are for both.'
      },
      {
        id: 57,
        question: 'What is one of the benefits of their LV systems?',
        answer: 'The benefit is that they are remarkably efficient in their operation.'
      },
      {
        id: 58,
        question: 'What does "seamless data flow" refer to?',
        answer: 'It refers to the function of their structured cabling systems.'
      },
      {
        id: 59,
        question: 'Is their LV expertise limited to a few systems?',
        answer: 'No, their expertise encompasses a diverse range of systems.'
      },
      {
        id: 60,
        question: 'What is the purpose of rigorous testing?',
        answer: 'Rigorous testing ensures the quality and performance of the LV systems.'
      },
      {
        id: 61,
        question: 'What kind of environment do their systems help create?',
        answer: 'They help create a modern, smart environment.'
      },
      {
        id: 62,
        question: 'How is their LV system service delivered?',
        answer: 'It is meticulously delivered by their team.'
      }
    ]
  },
  {
    id: 3,
    name: 'Gas Piping Solutions',
    icon: 'pipe',
    questions: [
      {
        id: 63,
        question: 'What are the core principles of PVNG\'s gas piping solutions?',
        answer: 'Safety and precision are at the core of their gas piping solutions.'
      },
      {
        id: 64,
        question: 'What services do they provide for gas piping?',
        answer: 'They provide secure and highly reliable gas piping installations for commercial and residential applications.'
      },
      {
        id: 65,
        question: 'Is their team qualified for gas piping work?',
        answer: 'Yes, their team of engineers is highly trained and rigorously certified.'
      },
      {
        id: 66,
        question: 'What steps are involved in their gas piping projects?',
        answer: 'The process includes gas system design, installation, pressure testing, and comprehensive certification processes.'
      },
      {
        id: 67,
        question: 'Do they follow safety protocols?',
        answer: 'Yes, they adhere to the strictest safety protocols throughout every phase of the project.'
      },
      {
        id: 68,
        question: 'What is their commitment regarding gas supply systems?',
        answer: 'They are committed to ensuring maximum safety, optimal efficiency, and full compliance with all local and international standards.'
      },
      {
        id: 69,
        question: 'What kind of applications do they serve with gas piping?',
        answer: 'They serve commercial and residential applications.'
      },
      {
        id: 70,
        question: 'How is their installation described?',
        answer: 'The installation is described as flawless.'
      },
      {
        id: 71,
        question: 'What is the purpose of pressure testing?',
        answer: 'Pressure testing is part of their process to ensure the system\'s integrity.'
      },
      {
        id: 72,
        question: 'What is the benefit of a secure gas piping installation?',
        answer: 'A secure installation provides a highly reliable gas supply.'
      },
      {
        id: 73,
        question: 'Do they only handle installation?',
        answer: 'No, they also handle gas system design and certification.'
      },
      {
        id: 74,
        question: 'What does "adhering to the strictest safety protocols" mean?',
        answer: 'It means they follow very strict rules to ensure safety at all times.'
      },
      {
        id: 75,
        question: 'What is the goal of their gas piping solutions?',
        answer: 'The goal is to ensure maximum safety and optimal efficiency.'
      },
      {
        id: 76,
        question: 'What certifications do they hold?',
        answer: 'Their team of engineers is rigorously certified.'
      },
      {
        id: 77,
        question: 'What kind of team handles the gas piping?',
        answer: 'The team consists of highly trained and certified engineers.'
      },
      {
        id: 78,
        question: 'What is the final step in their gas piping process?',
        answer: 'The final step is comprehensive certification processes.'
      },
      {
        id: 79,
        question: 'What is the purpose of the comprehensive certification?',
        answer: 'It gives the client complete confidence in their system\'s integrity.'
      },
      {
        id: 80,
        question: 'What kind of supply do they provide?',
        answer: 'They provide a secure and highly reliable gas supply.'
      },
      {
        id: 81,
        question: 'Does their service cover both businesses and homes?',
        answer: 'Yes, they provide installations for commercial and residential applications.'
      },
      {
        id: 82,
        question: 'What is the first step in their project process?',
        answer: 'The first step is meticulous gas system design.'
      },
      {
        id: 83,
        question: 'What is the benefit of a reliable gas piping installation?',
        answer: 'It provides a secure gas supply.'
      },
      {
        id: 84,
        question: 'What standards do they comply with?',
        answer: 'They comply with all local and international standards.'
      },
      {
        id: 85,
        question: 'What is the importance of a certified team?',
        answer: 'A certified team ensures that the work is done with a high level of expertise and safety.'
      },
      {
        id: 86,
        question: 'Is their service for a wide range of applications?',
        answer: 'Yes, they provide installations for a wide array of commercial and residential applications.'
      },
      {
        id: 87,
        question: 'What is the quality of their installation?',
        answer: 'The installation is described as flawless.'
      },
      {
        id: 88,
        question: 'What does "optimal efficiency" mean for gas piping?',
        answer: 'It means the system works at its best without wasting gas.'
      },
      {
        id: 89,
        question: 'What is their core philosophy for gas piping?',
        answer: 'Their core philosophy is based on safety and precision.'
      },
      {
        id: 90,
        question: 'Does their service give clients peace of mind?',
        answer: 'Yes, the comprehensive certification gives clients complete confidence in their system\'s integrity.'
      },
      {
        id: 91,
        question: 'Are their engineers well-trained?',
        answer: 'Yes, their team of engineers is highly trained.'
      },
      {
        id: 92,
        question: 'What is a key step to ensure the system\'s integrity?',
        answer: 'Thorough pressure testing is a key step.'
      },
      {
        id: 93,
        question: 'Is their service available for both businesses and homes?',
        answer: 'Yes, for commercial and residential applications.'
      }
    ]
  },
  {
    id: 4,
    name: 'Commercial and Residential Security Systems',
    icon: 'shield',
    questions: [
      {
        id: 94,
        question: 'What is PVNG\'s main priority when it comes to security systems?',
        answer: 'Safeguarding assets and personnel is their priority.'
      },
      {
        id: 95,
        question: 'What features are included in their security solutions?',
        answer: 'Their systems include advanced CCTV surveillance, sophisticated intruder alarms, intelligent video intercoms, and integrated access control systems.'
      },
      {
        id: 96,
        question: 'Are the security systems customizable?',
        answer: 'Yes, they offer state-of-the-art and highly customisable security solutions.'
      },
      {
        id: 97,
        question: 'What are the benefits of their CCTV surveillance?',
        answer: 'It includes remote monitoring capabilities.'
      },
      {
        id: 98,
        question: 'What do their intruder alarms provide?',
        answer: 'Intruder alarms provide immediate alerts.'
      },
      {
        id: 99,
        question: 'How do their solutions create a secure perimeter?',
        answer: 'They blend cutting-edge technology with intuitive design to create impenetrable security perimeters.'
      },
      {
        id: 100,
        question: 'What is the purpose of their integrated access control systems?',
        answer: 'They are used for managing entry and exit points.'
      },
      {
        id: 101,
        question: 'What kind of properties are their security systems for?',
        answer: 'They provide maximum protection for commercial establishments and residential properties alike.'
      },
      {
        id: 102,
        question: 'What is their approach to designing security systems?',
        answer: 'Their approach is to meticulously tailor solutions to specific security needs.'
      },
      {
        id: 103,
        question: 'What is one of the main components of their security systems?',
        answer: 'One of the main components is advanced CCTV surveillance.'
      },
      {
        id: 104,
        question: 'Do their systems include alarms?',
        answer: 'Yes, they include sophisticated intruder alarms.'
      },
      {
        id: 105,
        question: 'What makes their video intercoms different?',
        answer: 'They are described as intelligent.'
      },
      {
        id: 106,
        question: 'Do they offer solutions for businesses?',
        answer: 'Yes, they offer solutions for commercial establishments.'
      },
      {
        id: 107,
        question: 'Do they offer solutions for homes?',
        answer: 'Yes, they offer solutions for residential properties.'
      },
      {
        id: 108,
        question: 'What kind of protection do they provide?',
        answer: 'They provide maximum protection.'
      },
      {
        id: 109,
        question: 'What kind of technology do they use?',
        answer: 'They use cutting-edge technology.'
      },
      {
        id: 110,
        question: 'What is a key feature of their intruder alarms?',
        answer: 'A key feature is that they provide immediate alerts.'
      },
      {
        id: 111,
        question: 'Are their security solutions comprehensive?',
        answer: 'Yes, they are comprehensive systems.'
      },
      {
        id: 112,
        question: 'What is the benefit of a customised solution?',
        answer: 'A customised solution is meticulously tailored to specific security needs.'
      },
      {
        id: 113,
        question: 'What is the function of access control systems?',
        answer: 'They manage entry and exit points.'
      },
      {
        id: 114,
        question: 'What is the overall goal of their security services?',
        answer: 'The overall goal is to effectively protect a property.'
      },
      {
        id: 115,
        question: 'Do their solutions have a design aspect?',
        answer: 'Yes, they blend technology with intuitive design.'
      },
      {
        id: 116,
        question: 'What is the purpose of CCTV surveillance?',
        answer: 'CCTV surveillance is used for remote monitoring.'
      },
      {
        id: 117,
        question: 'Is their security system service a priority for them?',
        answer: 'Yes, safeguarding assets and personnel is their priority.'
      },
      {
        id: 118,
        question: 'What is an example of a component of their systems?',
        answer: 'An example is intelligent video intercoms.'
      },
      {
        id: 119,
        question: 'What does "impenetrable security perimeters" mean?',
        answer: 'It means the security systems are designed to be very strong and difficult to breach.'
      },
      {
        id: 120,
        question: 'Do they only offer new installations?',
        answer: 'The document mentions installation as part of a service, but the core description is about the security solutions themselves.'
      },
      {
        id: 121,
        question: 'What are the key elements of their security solutions?',
        answer: 'The key elements are advanced CCTV, intruder alarms, video intercoms, and access control.'
      },
      {
        id: 122,
        question: 'Can a customer get a security system that is not a one-size-fits-all solution?',
        answer: 'Yes, they offer highly customisable security solutions.'
      },
      {
        id: 123,
        question: 'What is the main purpose of their security systems?',
        answer: 'Their main purpose is to protect property effectively.'
      }
    ]
  },
  {
    id: 5,
    name: 'Sustainability Consultants & Experts',
    icon: 'building',
    questions: [
      {
        id: 124,
        question: 'What is PVNG\'s commitment regarding sustainability?',
        answer: 'They have a deep commitment to a greener future and promoting sustainable development.'
      },
      {
        id: 125,
        question: 'What kind of solutions do their sustainability consultants offer?',
        answer: 'They offer strategic advice and practical, actionable solutions.'
      },
      {
        id: 126,
        question: 'What areas do they guide clients through?',
        answer: 'They guide clients through energy efficiency improvements, renewable energy integration, and sustainable building practices.'
      },
      {
        id: 127,
        question: 'What is their goal with sustainability?',
        answer: 'Their goal is to empower clients to reduce their environmental footprint while optimising operational costs and enhancing long-term value.'
      },
      {
        id: 128,
        question: 'What are the benefits of solar energy for homeowners?',
        answer: 'It is a powerful step towards energy independence, provides significant savings on electricity bills, reduces reliance on the grid, and can increase property value.'
      },
      {
        id: 129,
        question: 'What is the Shams Dubai programme?',
        answer: 'It is a programme launched by DEWA that encourages homeowners to install solar photovoltaic (PV) panels on their rooftops to generate electricity.'
      },
      {
        id: 130,
        question: 'What is net metering under the Shams Dubai programme?',
        answer: 'Net metering allows for any surplus electricity generated to be exported to DEWA\'s grid, and the homeowner receives credit for it on their bill.'
      },
      {
        id: 131,
        question: 'How can energy storage solutions help homeowners?',
        answer: 'Batteries allow homeowners to store excess solar energy generated during the day for use at night or during peak demand periods.'
      },
      {
        id: 132,
        question: 'What other benefits do batteries offer?',
        answer: 'They provide enhanced energy security, act as a backup power source during outages, and help in optimising energy usage to avoid high peak-time tariffs.'
      },
      {
        id: 133,
        question: 'Is the Dubai government exploring energy storage?',
        answer: 'Yes, the government, through DEWA, is actively exploring and investing in large-scale energy storage projects.'
      },
      {
        id: 134,
        question: 'Is wind energy a common option for individual homes in Dubai?',
        answer: 'It is less common in urban environments like Dubai compared to solar, but it can be a viable option in certain open or coastal areas.'
      },
      {
        id: 135,
        question: 'What is the Dubai Clean Energy Strategy 2050?',
        answer: 'This strategy aims to transform Dubai into a global hub for clean energy and a green economy by progressively increasing the share of clean energy in Dubai\'s total power output.'
      },
      {
        id: 136,
        question: 'Do their sustainability services offer strategic advice?',
        answer: 'Yes, they offer strategic advice.'
      },
      {
        id: 137,
        question: 'What kind of solutions do their consultants provide?',
        answer: 'They provide practical, actionable solutions.'
      },
      {
        id: 138,
        question: 'What is the environmental benefit for clients?',
        answer: 'Clients can significantly reduce their environmental footprint.'
      },
      {
        id: 139,
        question: 'What is the economic benefit for clients?',
        answer: 'Clients can optimise operational costs and enhance long-term value.'
      },
      {
        id: 140,
        question: 'What are the three main areas of focus for their consultants?',
        answer: 'They focus on energy efficiency, renewable energy integration, and sustainable building practices.'
      },
      {
        id: 141,
        question: 'What is the purpose of the Shams Dubai programme?',
        answer: 'The purpose is to encourage homeowners to generate their own electricity from solar panels.'
      },
      {
        id: 142,
        question: 'How does solar energy contribute to energy independence?',
        answer: 'By generating your own electricity from solar panels, you become less reliant on the grid.'
      },
      {
        id: 143,
        question: 'What happens to surplus solar energy in Dubai?',
        answer: 'It can be exported to DEWA\'s grid, and the homeowner receives credit for it.'
      },
      {
        id: 144,
        question: 'What is the primary benefit of energy storage solutions?',
        answer: 'They allow you to use stored solar energy at night or during peak demand periods.'
      },
      {
        id: 145,
        question: 'How do batteries help with energy security?',
        answer: 'They provide enhanced energy security and act as a backup power source during outages.'
      },
      {
        id: 146,
        question: 'What is the purpose of DEWA\'s investment in large-scale energy storage?',
        answer: 'The purpose is to enhance grid stability and integrate more renewables.'
      },
      {
        id: 147,
        question: 'What are the two main energy sources mentioned in the sustainability section for homes?',
        answer: 'Solar and wind energy are mentioned.'
      },
      {
        id: 148,
        question: 'Can wind turbines be a viable option in Dubai?',
        answer: 'Yes, in certain open or coastal areas or as part of a hybrid system.'
      },
      {
        id: 149,
        question: 'What does the Dubai Clean Energy Strategy 2050 aim to do?',
        answer: 'It aims to increase the share of clean energy in Dubai\'s total power output.'
      },
      {
        id: 150,
        question: 'Do their consultants help with integrating renewable energy sources?',
        answer: 'Yes, they facilitate the seamless integration of renewable energy sources.'
      },
      {
        id: 151,
        question: 'What is the long-term goal for clients who use their sustainability services?',
        answer: 'The long-term goal is to enhance long-term value.'
      },
      {
        id: 152,
        question: 'What is an example of a sustainable building practice they champion?',
        answer: 'They champion sustainable building practices.'
      },
      {
        id: 153,
        question: 'How does embracing solar energy affect electricity bills?',
        answer: 'It provides significant savings on electricity bills.'
      },
      {
        id: 154,
        question: 'How does PVNG help clients achieve their sustainability goals?',
        answer: 'They provide strategic advice and practical solutions.'
      },
      {
        id: 155,
        question: 'What is the purpose of the sustainability section in the document?',
        answer: 'It aligns with the company\'s deep commitment to a greener future.'
      }
    ],
    subServices: [
      {
        id: 6,
        name: 'Solar Energy for Homeowners',
        icon: 'sun',
        questions: [
          {
            id: 156,
            question: 'What are the benefits of solar energy for homeowners?',
            answer: 'It is a powerful step towards energy independence, provides significant savings on electricity bills, reduces reliance on the grid, and can increase property value.'
          },
          {
            id: 157,
            question: 'What is the Shams Dubai programme?',
            answer: 'It is a programme launched by DEWA that encourages homeowners to install solar photovoltaic (PV) panels on their rooftops to generate electricity.'
          },
          {
            id: 158,
            question: 'What is net metering under the Shams Dubai programme?',
            answer: 'Net metering allows for any surplus electricity generated to be exported to DEWA\'s grid, and the homeowner receives credit for it on their bill.'
          },
          {
            id: 159,
            question: 'How does solar energy contribute to energy independence?',
            answer: 'By generating your own electricity from solar panels, you become less reliant on the grid.'
          },
          {
            id: 160,
            question: 'What happens to surplus solar energy in Dubai?',
            answer: 'It can be exported to DEWA\'s grid, and the homeowner receives credit for it.'
          },
          {
            id: 161,
            question: 'What is the purpose of the Shams Dubai programme?',
            answer: 'The purpose is to encourage homeowners to generate their own electricity from solar panels.'
          },
          {
            id: 162,
            question: 'How does embracing solar energy affect electricity bills?',
            answer: 'It provides significant savings on electricity bills.'
          }
        ]
      },
      {
        id: 7,
        name: 'Energy Storage Solutions',
        icon: 'battery',
        questions: [
          {
            id: 163,
            question: 'How can energy storage solutions help homeowners?',
            answer: 'Batteries allow homeowners to store excess solar energy generated during the day for use at night or during peak demand periods.'
          },
          {
            id: 164,
            question: 'What other benefits do batteries offer?',
            answer: 'They provide enhanced energy security, act as a backup power source during outages, and help in optimising energy usage to avoid high peak-time tariffs.'
          },
          {
            id: 165,
            question: 'Is the Dubai government exploring energy storage?',
            answer: 'Yes, the government, through DEWA, is actively exploring and investing in large-scale energy storage projects.'
          },
          {
            id: 166,
            question: 'What is the primary benefit of energy storage solutions?',
            answer: 'They allow you to use stored solar energy at night or during peak demand periods.'
          },
          {
            id: 167,
            question: 'How do batteries help with energy security?',
            answer: 'They provide enhanced energy security and act as a backup power source during outages.'
          },
          {
            id: 168,
            question: 'What is the purpose of DEWA\'s investment in large-scale energy storage?',
            answer: 'The purpose is to enhance grid stability and integrate more renewables.'
          }
        ]
      },
      {
        id: 8,
        name: 'Wind Energy Solutions',
        icon: 'wind',
        questions: [
          {
            id: 169,
            question: 'Is wind energy a common option for individual homes in Dubai?',
            answer: 'It is less common in urban environments like Dubai compared to solar, but it can be a viable option in certain open or coastal areas.'
          },
          {
            id: 170,
            question: 'What is the Dubai Clean Energy Strategy 2050?',
            answer: 'This strategy aims to transform Dubai into a global hub for clean energy and a green economy by progressively increasing the share of clean energy in Dubai\'s total power output.'
          },
          {
            id: 171,
            question: 'Can wind turbines be a viable option in Dubai?',
            answer: 'Yes, in certain open or coastal areas or as part of a hybrid system.'
          },
          {
            id: 172,
            question: 'What does the Dubai Clean Energy Strategy 2050 aim to do?',
            answer: 'It aims to increase the share of clean energy in Dubai\'s total power output.'
          },
          {
            id: 173,
            question: 'What are the two main energy sources mentioned in the sustainability section for homes?',
            answer: 'Solar and wind energy are mentioned.'
          },
          {
            id: 174,
            question: 'Can wind turbines be part of a hybrid system?',
            answer: 'Yes, wind turbines can be integrated as part of a hybrid renewable energy system in suitable locations.'
          }
        ]
      }
    ]
  }
];












