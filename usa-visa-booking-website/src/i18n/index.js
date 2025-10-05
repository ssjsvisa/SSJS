import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        services: "Visa Services",
        about: "About Us",
        contact: "Contact Us",
        analytics: "Analytics"
      },
      
      // Homepage
      home: {
        hero: {
          title: "Your Journey to America Starts Here",
          subtitle: "Professional visa application services to make your American dream a reality",
          buttonText: "Explore Visa Services"
        },
        welcome: {
          title: "Welcome to SSJS Visa Services! 👋",
          subtitle: "We're thrilled to have you here! Our expert team is dedicated to making your American dream a reality with professional visa application services.",
          whyChoose: "Why Choose SSJS?",
          benefits: [
            "✈️ Expert guidance for all visa types",
            "📄 Complete application assistance", 
            "⚡ Fast processing times",
            "🎯 High success rate",
            "💬 24/7 customer support"
          ],
          exploreServices: "Explore Visa Services",
          freeConsultation: "Get Free Consultation",
          disclaimer: "This welcome message appears only on your first visit"
        },
        introduction: {
          title: "USA Visa Application Process",
          subtitle: "Navigating the U.S. visa application process can be complex. We're here to guide you every step of the way."
        },
        services: {
          title: "Our Visa Services",
          subtitle: "We provide comprehensive assistance for all types of U.S. visas",
          tourist: {
            title: "Tourist Visa (B-2)",
            description: "Perfect for leisure travel, visiting family, or medical treatment in the United States."
          },
          business: {
            title: "Business Visa (B-1)",
            description: "For business meetings, conferences, and professional consultations in the U.S."
          },
          student: {
            title: "Student Visa (F-1)",
            description: "For academic studies at U.S. universities, colleges, and educational institutions."
          },
          work: {
            title: "Work Visa (H-1B)",
            description: "For skilled professionals seeking employment opportunities in the United States."
          },
          family: {
            title: "Family Visa",
            description: "For family reunification and spouse/fiancé visas to join loved ones in the U.S."
          },
          investment: {
            title: "Investment Visa",
            description: "For entrepreneurs and investors looking to establish business ventures in the U.S."
          },
          viewAll: "View All Visa Services"
        },
        cta: {
          title: "Ready to Start Your Visa Application?",
          subtitle: "Contact our expert team today for personalized guidance and support throughout your visa application process.",
          buttonText: "Contact Us Now"
        },
        trustedPartner: {
          title: "Your Trusted Visa Partner",
          description1: "The USA visa application process involves several steps, from determining the right visa type for your purpose to preparing documentation and attending the visa interview. At SSJS, we provide expert guidance through each stage.",
          description2: "Our team of experienced professionals will help you understand the requirements, prepare your application, and maximize your chances of approval. We stay current with the latest immigration policies and procedures to provide you with accurate advice.",
          description3: "Whether you're planning to visit the United States for tourism, business, education, or work, we offer specialized services tailored to your specific needs.",
          learnMore: "Learn More About Us"
        },
        connecting: {
          title: "Connecting Nations, Building Futures",
          description: "SSJS Visa Services specializes in strengthening the connection between India and the United States through professional visa consulting services, cultural exchange programs, and educational opportunities."
        },
        stats: {
          successfulVisas: "Successful Visas",
          yearsExperience: "Years Experience",
          successRate: "Success Rate"
        }
      },

      // Contact Page
      contact: {
        title: "Contact Us",
        subtitle: "Get in touch with our visa experts for personalized assistance",
        quickContact: "Quick Contact",
        getStartedToday: "Get Started Today",
        sendUsRequirement: "Send Us Requirement or Feedback",
        fillOutForm: "Fill out the form below, and we'll get back to you soon",
        contactInfo: "Contact Information",
        personalInfo: "Personal Information",
        visaServiceType: "Visa Service Type", 
        tellUs: "Tell Us About Your Requirements or Feedback",
        form: {
          firstName: "First Name",
          lastName: "Last Name", 
          email: "Email Address",
          phone: "Phone Number",
          visaType: "Visa Type",
          message: "Your Message",
          messagePlaceholder: "Please share your feedback about our services, suggestions for improvement, questions about our visa assistance process, or any other comments you'd like us to know. Your feedback helps us serve you better.",
          firstNamePlaceholder: "Enter your first name",
          lastNamePlaceholder: "Enter your last name",
          emailPlaceholder: "Enter your email address",
          submit: "Send Message",
          sending: "Sending...",
          selectVisa: "Select Visa Type",
          required: "This field is required",
          invalidEmail: "Invalid email address",
          invalidPhone: "Invalid phone number",
          visaTypes: {
            tourist: "Tourist Visa (B-2)",
            business: "Business Visa (B-1)", 
            student: "Student Visa (F-1)",
            work: "Work Visa (H-1B)",
            family: "Family Visa",
            investment: "Investment Visa",
            other: "Other"
          }
        },
        success: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        error: "Sorry, there was an error sending your message. Please try again or contact us directly.",
        info: {
          phone: "Phone",
          email: "Email", 
          hours: "Business Hours",
          hoursValue: "Monday - Friday: 9:00 AM - 6:00 PM"
        },
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Common questions about contacting us",
          items: [
            {
              question: "What information should I prepare before the consultation?",
              answer: "Before your consultation, it's helpful to have details about your travel plans, purpose of visit, personal information, employment history, and any previous U.S. visa applications or denials."
            },
            {
              question: "How long does it take to get a response after submitting the contact form?",
              answer: "We typically respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling us directly."
            },
            {
              question: "Do you offer remote consultations?",
              answer: "Yes, we offer consultations via phone, video call, or email for clients who cannot visit our office in person."
            },
            {
              question: "Is there a fee for initial consultations?",
              answer: "We offer a complimentary 15-minute initial assessment. For more detailed consultations, there is a nominal fee that can be applied toward future services if you decide to proceed with us."
            },
            {
              question: "What languages do your consultants speak?",
              answer: "Our consultants are fluent in English, Spanish, Mandarin, Hindi, and Arabic to better serve our diverse clientele."
            },
            {
              question: "Can you help with urgent visa applications?",
              answer: "Yes, we offer expedited services for urgent cases, though additional fees may apply. Please contact us directly to discuss your specific timeline and needs."
            }
          ]
        }
      },

      // Services Page
      services: {
        title: "Our Visa Services",
        subtitle: "Comprehensive visa application assistance for all your needs",
        learnMore: "Learn More",
        intro: {
          title: "Our Visa Services",
          subtitle: "Expert Guidance for Every Visa Category",
          description: "At SSJS, we offer specialized consulting services for all U.S. visa categories. Our team of experienced professionals will guide you through the entire application process, from initial assessment to final submission and interview preparation."
        },
        tabs: {
          b1b2: "B1/B2 VISA",
          f1: "F1 VISA", 
          h1b: "H1B VISA",
          l1: "L1 VISA",
          other: "OTHER VISAS"
        },
        visaTypes: {
          b1b2: {
            title: "B1/B2 Business & Tourist Visa",
            description: "The B1/B2 visa is a non-immigrant visa for people who want to enter the United States temporarily for business (B1), tourism, pleasure, or visiting (B2). The B1 visa is specifically for business travelers, while the B2 visa is for tourists.",
            details: "These visas are typically issued for up to 10 years and allow for multiple entries, with each stay generally limited to six months. B1/B2 visas are ideal for tourists, family visits, business meetings, conferences, or seeking medical treatment in the U.S.",
            processing: "Processing time: 2-4 weeks",
            duration: "Duration: Up to 6 months per visit",
            eligibility: {
              title: "Eligibility Requirements",
              items: [
                "Purpose of travel is temporary",
                "Sufficient funds to cover expenses",
                "Strong ties to home country",
                "Intent to return after visit"
              ]
            },
            documents: {
              title: "Required Documents",
              items: [
                "Valid passport",
                "DS-160 form",
                "Passport-style photos",
                "Interview appointment letter",
                "Financial documents"
              ]
            }
          },
          f1: {
            title: "F1 Student Visa",
            description: "The F1 visa is for international students who want to pursue academic education at accredited U.S. universities, colleges, high schools, or language training programs.",
            details: "F1 visas allow students to stay in the U.S. for the duration of their academic program, plus additional time for practical training. Students can work on-campus and may be eligible for off-campus employment under certain conditions.",
            processing: "Processing time: 3-5 weeks",
            duration: "Duration: Length of academic program + grace period",
            eligibility: {
              title: "Eligibility Requirements",
              items: [
                "Acceptance at SEVP-approved school",
                "Full-time enrollment",
                "Sufficient financial resources",
                "English proficiency",
                "Intent to return home after studies"
              ]
            },
            documents: {
              title: "Required Documents",
              items: [
                "I-20 form from school",
                "SEVIS fee receipt",
                "Academic transcripts",
                "Standardized test scores",
                "Financial proof"
              ]
            }
          },
          h1b: {
            title: "H1B Work Visa",
            description: "The H1B visa is for specialty occupations that require specialized knowledge and a bachelor's degree or higher in a specific field.",
            details: "H1B visas are initially granted for up to 3 years and can be extended for an additional 3 years. This visa requires employer sponsorship and is subject to annual caps, making early application crucial.",
            processing: "Processing time: 3-6 months",
            duration: "Duration: Up to 6 years total",
            eligibility: {
              title: "Eligibility Requirements",
              items: [
                "Bachelor's degree or equivalent",
                "Job offer from US employer",
                "Specialty occupation",
                "Employer petition approval"
              ]
            },
            documents: {
              title: "Required Documents",
              items: [
                "I-129 petition (filed by employer)",
                "Educational credentials",
                "Job offer letter",
                "Labor Condition Application",
                "Resume and portfolio"
              ]
            }
          },
          l1: {
            title: "L1 Visa",
            description: "The L1 visa allows multinational companies to transfer executives, managers, or employees with specialized knowledge from their foreign offices to U.S. locations.",
            details: "L1A visas are for executives and managers (up to 7 years), while L1B visas are for employees with specialized knowledge (up to 5 years). This visa can lead to permanent residency.",
            processing: "Processing time: 2-4 months",
            duration: "Duration: L1A up to 7 years, L1B up to 5 years",
            eligibility: {
              title: "Eligibility Requirements",
              items: [
                "Employment with qualifying organization",
                "1 year of continuous employment abroad",
                "Executive, managerial, or specialized knowledge role",
                "Related entity in the U.S."
              ]
            },
            documents: {
              title: "Required Documents",
              items: [
                "I-129 petition",
                "Corporate documents",
                "Employment verification",
                "Organizational charts",
                "Job description"
              ]
            }
          },
          other: {
            title: "Other Visa Categories",
            description: "In addition to the main visa categories, SSJS provides comprehensive consulting services for various other U.S. visa types designed for specific purposes and situations. Each visa category has its own specific requirements and application procedures.",
            secondDescription: "Our experts are well-versed in the nuances of all U.S. visa categories and can help you determine the most appropriate visa for your specific circumstances. We provide customized guidance for each visa type, ensuring that your application meets all the necessary requirements.",
            buttonText: "Contact Us for Other Visa Types",
            additionalTitle: "Additional Visa Categories We Handle",
            categories: [
              {
                name: "J-1 Exchange Visitor",
                description: "For educational and cultural exchange programs, including students, scholars, teachers, professors, research assistants, and trainees."
              },
              {
                name: "O-1 Extraordinary Ability",
                description: "For individuals with extraordinary ability or achievement in sciences, arts, education, business, athletics, motion picture or television industry."
              },
              {
                name: "E-1/E-2 Treaty Trader/Investor",
                description: "For individuals from countries with commerce and navigation treaties with the U.S. who are engaging in substantial trade or investing significantly in a U.S. business."
              },
              {
                name: "K-1 Fiancé(e)",
                description: "For fiancé(e)s of U.S. citizens, allowing them to travel to the U.S. to marry their U.S. citizen petitioner within 90 days of arrival."
              },
              {
                name: "R-1 Religious Worker",
                description: "For ministers and religious workers coming temporarily to the U.S. to work in a religious capacity."
              },
              {
                name: "EB-5 Immigrant Investor",
                description: "For investors who make a substantial investment in a new commercial enterprise in the U.S. that creates jobs for U.S. workers."
              }
            ],
            servicesTitle: "Our Services for All Visa Types",
            servicesItems: [
              "Visa eligibility assessment",
              "Documentation preparation and review",
              "Form filling assistance",
              "Interview preparation",
              "Application status tracking",
              "Post-approval guidance"
            ]
          }
        },
        processSteps: {
          title: "General Application Process",
          subtitle: "Our Streamlined Approach to U.S. Visa Applications",
          step1: {
            title: "Initial Consultation",
            description: "We begin with a comprehensive assessment of your situation to determine the most appropriate visa category and approach."
          },
          step2: {
            title: "Documentation",
            description: "We help you gather and prepare all necessary documents according to the specific requirements of your visa type."
          },
          step3: {
            title: "Application Filing",
            description: "We assist with completing forms accurately and submitting your application properly to maximize chances of approval."
          },
          step4: {
            title: "Interview Preparation",
            description: "We thoroughly prepare you for the visa interview with practice sessions and strategic guidance."
          }
        },
        whyChoose: {
          title: "Why Choose SSJS?",
          subtitle: "Your Success is Our Priority",
          stats: {
            success: {
              value: "98%",
              label: "Success Rate"
            },
            experience: {
              value: "2+",
              label: "Years Experience"
            },
            clients: {
              value: "2000+",
              label: "Happy Clients"
            },
            visas: {
              value: "15+",
              label: "Visa Types"
            }
          }
        },
        indiaUsPartnership: {
          title: "India-US Visa Partnership",
          subtitle: "Building Bridges Between Two Great Nations",
          description: "SSJS Visa Services is proud to facilitate cultural and professional exchanges between India and the United States. Our expertise helps build stronger connections between these two dynamic nations.",
          buttonText: "Start Your Journey Today",
          stats: {
            students: {
              value: "150,000+",
              label: "Indian students in the US annually"
            },
            trade: {
              value: "$160 Billion",
              label: "In bilateral trade"
            },
            diaspora: {
              value: "4.8 Million",
              label: "Indian Americans in the US"
            },
            h1bVisas: {
              value: "85,000+",
              label: "H1B visas issued annually"
            }
          }
        }
      },

      // About Page  
      about: {
        title: "About SSJS Visa Services",
        subtitle: "Your trusted partner for U.S. visa applications",
        whoWeAre: {
          title: "Who We Are",
          mainTitle: "SSJS - Your Bridge to America",
          description: "SSJS Visa Services is a premier consulting firm specializing in U.S. visa applications and immigration services. Founded with the mission to simplify the complex visa application process, we have been helping individuals, families, and businesses achieve their American dreams for over a decade.",
          secondParagraph: "Our team of experienced immigration consultants and legal advisors brings deep knowledge of U.S. immigration law and procedures. We understand that each client's situation is unique, which is why we provide personalized guidance tailored to your specific needs and circumstances.",
          thirdParagraph: "Whether you're planning to visit the United States for tourism, business, education, or to reunite with family, we are here to guide you through every step of the visa application process with expertise, dedication, and care."
        },
        mission: {
          title: "Our Mission",
          mainTitle: "Helping You Achieve Your American Dream",
          description: "At SSJS Visa Services, our mission is to make the U.S. visa application process as smooth and stress-free as possible for our clients. We believe that everyone deserves the opportunity to pursue their dreams in America, and we are committed to providing the expert guidance and support needed to make that happen.",
          secondParagraph: "We strive to demystify the complex world of U.S. immigration law by breaking down complicated procedures into manageable steps. Our goal is not just to help you complete your application, but to ensure you understand the process and feel confident every step of the way.",
          services: {
            title: "What Sets Us Apart:",
            expertGuidance: {
              title: "Expert Guidance",
              description: "We provide professional advice based on the latest immigration policies and procedures."
            },
            personalizedService: {
              title: "Personalized Service",
              description: "We tailor our approach to each client's unique situation and requirements."
            },
            simplifiedProcess: {
              title: "Simplified Process",
              description: "We break down complex procedures into manageable steps for our clients."
            },
            comprehensiveSupport: {
              title: "Comprehensive Support",
              description: "We assist with every aspect of the application process from start to finish."
            },
            transparency: {
              title: "Transparency",
              description: "We maintain clear communication and set realistic expectations about the process."
            },
            clientSuccess: {
              title: "Client Success",
              description: "We measure our success by the successful outcomes of our clients."
            }
          }
        },
        whyChoose: {
          title: "Why Choose SSJS",
          subtitle: "Industry Experience & Trust Highlights",
          stats: {
            experience: {
              value: "2+ Years",
              description: "Over a decade of specialized experience in U.S. visa consulting"
            },
            applications: {
              value: "2,000+",
              description: "Successful visa applications across all categories"
            },
            support: {
              value: "24/7",
              description: "Round-the-clock client support throughout the application process"
            },
            security: {
              value: "100%",
              description: "Confidentiality and security for all client information"
            }
          }
        },
        testimonials: {
          title: "Client Testimonials",
          subtitle: "What Our Clients Say About Us",
          clients: {
            johnDoe: {
              quote: "SSJS Visa Services made the entire process seamless and stress-free. Their expertise and attention to detail were invaluable in securing my business visa. I highly recommend their services!",
              name: "John Doe",
              title: "Business Visa Applicant"
            },
            janeSmith: {
              quote: "As an international student, I was overwhelmed by the visa application process. SSJS guided me through every step, answering all my questions promptly. Thanks to them, I'm now studying at my dream university!",
              name: "Jane Smith",
              title: "F1 Student Visa Holder"
            },
            robertMiller: {
              quote: "Our company regularly transfers employees to our U.S. office, and SSJS has been our trusted partner for years. Their knowledge of L1 visa requirements is exceptional, and their service is always professional and efficient.",
              name: "Robert Miller",
              title: "HR Director, Global Tech Inc."
            }
          }
        }
      },

      // Footer
      footer: {
        companyName: "SSJS Visa Services",
        description: "Professional visa application services to help you achieve your American dream.",
        quickLinks: "Quick Links",
        visaTypes: "Visa Types",
        contactInfo: "Contact Info",
        services: "Services", 
        contact: "Contact",
        followUs: "Follow Us",
        copyright: "SSJS Visa Services. All rights reserved.",
        tagline: "India-USA Visa Experts",
        phone: "Phone:",
        email: "Email:",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        visaLinks: {
          b1b2: "B1/B2 Tourist & Business",
          f1: "F1 Student", 
          h1b: "H1B Work",
          l1: "L1 Intra-company Transfer"
        }
      },

      // Visitor Counter
      visitor: {
        visitors: "Visitors",
        latestAppointments: "Latest Appointments",
        facebookPrompt: "Want to see more evidence? Visit our Facebook page",
        visitFacebook: "Visit Facebook Page"
      },

      // Common
      common: {
        loading: "Loading...",
        error: "An error occurred",
        tryAgain: "Try Again",
        close: "Close",
        back: "Back",
        next: "Next",
        submit: "Submit",
        cancel: "Cancel",
        save: "Save"
      }
    }
  },

  // Hindi Language (hi)
  hi: {
    translation: {
      // Navigation
      nav: {
        home: "होम",
        services: "वीज़ा सेवाएं",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        analytics: "एनालिटिक्स"
      },
      
      // Homepage
      home: {
        hero: {
          title: "अमेरिका की आपकी यात्रा यहीं से शुरू होती है",
          subtitle: "आपके अमेरिकी सपने को साकार करने के लिए पेशेवर वीज़ा आवेदन सेवाएं",
          buttonText: "वीज़ा सेवाएं देखें"
        },
        welcome: {
          title: "SSJS वीज़ा सेवाओं में आपका स्वागत है! 👋",
          subtitle: "हम आपको यहाँ पाकर बहुत खुश हैं! हमारी विशेषज्ञ टीम पेशेवर वीज़ा आवेदन सेवाओं के साथ आपके अमेरिकी सपने को साकार करने के लिए समर्पित है।",
          whyChoose: "SSJS क्यों चुनें?",
          benefits: [
            "✈️ Orientación experta para todos los tipos de visa",
            "📄 Asistencia completa en la solicitud",
            "⚡ Tiempos de procesamiento rápidos",
            "🎯 Alta tasa de éxito",
            "💬 Soporte al cliente 24/7"
          ],
          exploreServices: "Explorar Servicios de Visa",
          freeConsultation: "Obtener Consulta Gratuita",
          disclaimer: "Este mensaje de bienvenida aparece solo en tu primera visita"
        },
        introduction: {
          title: "Proceso de Solicitud de Visa de EE.UU.",
          subtitle: "Navegar por el proceso de solicitud de visa de EE.UU. puede ser complejo. Estamos aquí para guiarte en cada paso del camino."
        },
        services: {
          title: "Nuestros Servicios de Visa",
          subtitle: "Proporcionamos asistencia integral para todos los tipos de visas de EE.UU.",
          tourist: {
            title: "Visa de Turista (B-2)",
            description: "Perfecta para viajes de placer, visitar familia o tratamiento médico en Estados Unidos."
          },
          business: {
            title: "Visa de Negocios (B-1)",
            description: "Para reuniones de negocios, conferencias y consultas profesionales en EE.UU."
          },
          student: {
            title: "Visa de Estudiante (F-1)",
            description: "Para estudios académicos en universidades, colegios e instituciones educativas de EE.UU."
          },
          work: {
            title: "Visa de Trabajo (H-1B)",
            description: "Para profesionales calificados que buscan oportunidades de empleo en Estados Unidos."
          },
          family: {
            title: "Visa Familiar",
            description: "Para reunificación familiar y visas de cónyuge/prometido para unirse a seres queridos en EE.UU."
          },
          investment: {
            title: "Visa de Inversión",
            description: "Para empresarios e inversionistas que buscan establecer empresas en EE.UU."
          },
          viewAll: "Ver Todos los Servicios de Visa"
        },
        cta: {
          title: "¿Listo para Comenzar tu Solicitud de Visa?",
          subtitle: "Contacta a nuestro equipo experto hoy para orientación personalizada y apoyo durante todo tu proceso de solicitud de visa.",
          buttonText: "Contáctanos Ahora"
        },
        trustedPartner: {
          title: "Tu Socio de Confianza en Visas",
          description1: "El proceso de solicitud de visa de EE.UU. involucra varios pasos, desde determinar el tipo de visa correcto para tu propósito hasta preparar documentación y asistir a la entrevista de visa. En SSJS, proporcionamos orientación experta en cada etapa.",
          description2: "Nuestro equipo de profesionales experimentados te ayudará a entender los requisitos, preparar tu solicitud y maximizar tus posibilidades de aprobación. Nos mantenemos actualizados con las últimas políticas y procedimientos de inmigración para brindarte consejos precisos.",
          description3: "Ya sea que planees visitar Estados Unidos por turismo, negocios, educación o trabajo, ofrecemos servicios especializados adaptados a tus necesidades específicas.",
          learnMore: "Conoce Más Sobre Nosotros"
        },
        connecting: {
          title: "Conectando Naciones, Construyendo Futuros",
          description: "SSJS Servicios de Visa se especializa en fortalecer la conexión entre India y Estados Unidos a través de servicios profesionales de consultoría de visas, programas de intercambio cultural y oportunidades educativas."
        },
        stats: {
          successfulVisas: "Visas Exitosas",
          yearsExperience: "Años de Experiencia",
          successRate: "Tasa de Éxito"
        }
      },

      // Contact Page
      contact: {
        title: "Contáctanos",
        subtitle: "Ponte en contacto con nuestros expertos en visa para asistencia personalizada",
        quickContact: "Contacto Rápido",
        getStartedToday: "Comienza Hoy",
        sendUsRequirement: "Envíanos Tus Requisitos o Comentarios",
        fillOutForm: "Completa el formulario a continuación y te contactaremos pronto",
        contactInfo: "Información de Contacto",
        personalInfo: "Información Personal",
        visaServiceType: "Tipo de Servicio de Visa",
        tellUs: "Cuéntanos Sobre Tus Requisitos o Comentarios",
        form: {
          firstName: "Nombre",
          lastName: "Apellido",
          email: "Dirección de Correo",
          phone: "Número de Teléfono",
          visaType: "Tipo de Visa",
          message: "Tu Mensaje",
          messagePlaceholder: "Por favor comparte tus comentarios sobre nuestros servicios, sugerencias para mejorar, preguntas sobre nuestro proceso de asistencia de visa, o cualquier otro comentario que te gustaría que sepamos. Tus comentarios nos ayudan a servirte mejor.",
          firstNamePlaceholder: "Ingresa tu nombre",
          lastNamePlaceholder: "Ingresa tu apellido",
          emailPlaceholder: "Ingresa tu dirección de correo",
          submit: "Enviar Mensaje",
          sending: "Enviando...",
          selectVisa: "Seleccionar Tipo de Visa",
          required: "Este campo es obligatorio",
          invalidEmail: "Dirección de correo inválida",
          invalidPhone: "Número de teléfono inválido",
          visaTypes: {
            tourist: "Visa de Turista (B-2)",
            business: "Visa de Negocios (B-1)",
            student: "Visa de Estudiante (F-1)",
            work: "Visa de Trabajo (H-1B)",
            family: "Visa Familiar",
            investment: "Visa de Inversión",
            other: "Otro"
          }
        },
        success: "¡Gracias! Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.",
        error: "Lo sentimos, hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente.",
        info: {
          phone: "Teléfono",
          email: "Correo",
          hours: "Horario de Atención",
          hoursValue: "Lunes - Viernes: 9:00 AM - 6:00 PM"
        },
        faq: {
          title: "Preguntas Frecuentes",
          subtitle: "Preguntas comunes sobre contactarnos",
          items: [
            {
              question: "¿Qué información debo preparar antes de la consulta?",
              answer: "Antes de tu consulta, es útil tener detalles sobre tus planes de viaje, propósito de la visita, información personal, historial laboral y cualquier solicitud de visa estadounidense anterior o denegación."
            },
            {
              question: "¿Cuánto tiempo toma obtener una respuesta después de enviar el formulario de contacto?",
              answer: "Típicamente respondemos a todas las consultas dentro de 24-48 horas hábiles. Para asuntos urgentes, recomendamos llamarnos directamente."
            },
            {
              question: "¿Ofrecen consultas remotas?",
              answer: "Sí, ofrecemos consultas por teléfono, videollamada o correo electrónico para clientes que no pueden visitar nuestra oficina en persona."
            },
            {
              question: "¿Hay una tarifa por las consultas iniciales?",
              answer: "Ofrecemos una evaluación inicial gratuita de 15 minutos. Para consultas más detalladas, hay una tarifa nominal que puede aplicarse a servicios futuros si decides continuar con nosotros."
            },
            {
              question: "¿Qué idiomas hablan sus consultores?",
              answer: "Nuestros consultores son fluentes en inglés, español, mandarín, hindi y árabe para servir mejor a nuestra clientela diversa."
            },
            {
              question: "¿Pueden ayudar con solicitudes de visa urgentes?",
              answer: "Sí, ofrecemos servicios expeditos para casos urgentes, aunque pueden aplicar tarifas adicionales. Por favor contáctanos directamente para discutir tu cronograma específico y necesidades."
            }
          ]
        }
      },

      // Services Page
      services: {
        title: "Nuestros Servicios de Visa",
        subtitle: "Asistencia integral en solicitudes de visa para todas tus necesidades",
        learnMore: "Saber Más",
        intro: {
          title: "Nuestros Servicios de Visa",
          subtitle: "Orientación Experta para Cada Categoría de Visa",
          description: "En SSJS, ofrecemos servicios de consultoría especializados para todas las categorías de visa de EE.UU. Nuestro equipo de profesionales experimentados te guiará a través de todo el proceso de solicitud, desde la evaluación inicial hasta la presentación final y preparación para la entrevista."
        },
        tabs: {
          b1b2: "VISA B1/B2",
          f1: "VISA F1", 
          h1b: "VISA H1B",
          l1: "VISA L1",
          other: "OTRAS VISAS"
        },
        visaTypes: {
          b1b2: {
            title: "Visa B1/B2 de Negocios y Turismo",
            description: "La visa B1/B2 es una visa de no inmigrante para personas que desean ingresar a Estados Unidos temporalmente por negocios (B1), turismo, placer o visitas (B2). La visa B1 es específicamente para viajeros de negocios, mientras que la visa B2 es para turistas.",
            details: "Estas visas generalmente se emiten por hasta 10 años y permiten múltiples entradas, con cada estadía generalmente limitada a seis meses. Las visas B1/B2 son ideales para turistas, visitas familiares, reuniones de negocios, conferencias o buscar tratamiento médico en EE.UU.",
            processing: "Tiempo de procesamiento: 2-4 semanas",
            duration: "Duración: Hasta 6 meses por visita",
            eligibility: {
              title: "Requisitos de Elegibilidad",
              items: [
                "El propósito del viaje es temporal",
                "Fondos suficientes para cubrir gastos",
                "Vínculos fuertes con el país de origen",
                "Intención de regresar después de la visita"
              ]
            },
            documents: {
              title: "Documentos Requeridos",
              items: [
                "Pasaporte válido",
                "Formulario DS-160",
                "Fotos estilo pasaporte",
                "Carta de cita para entrevista",
                "Documentos financieros"
              ]
            }
          },
          f1: {
            title: "Visa F1 de Estudiante",
            description: "La visa F1 es para estudiantes internacionales que desean cursar educación académica en universidades, colegios, escuelas secundarias o programas de entrenamiento de idiomas acreditados en EE.UU.",
            details: "Las visas F1 permiten a los estudiantes permanecer en EE.UU. durante la duración de su programa académico, más tiempo adicional para entrenamiento práctico. Los estudiantes pueden trabajar en el campus y pueden ser elegibles para empleo fuera del campus bajo ciertas condiciones.",
            processing: "Tiempo de procesamiento: 3-5 semanas",
            duration: "Duración: Duración del programa académico + período de gracia",
            eligibility: {
              title: "Requisitos de Elegibilidad",
              items: [
                "Aceptación en escuela aprobada por SEVP",
                "Inscripción de tiempo completo",
                "Recursos financieros suficientes",
                "Competencia en inglés",
                "Intención de regresar a casa después de los estudios"
              ]
            },
            documents: {
              title: "Documentos Requeridos",
              items: [
                "Formulario I-20 de la escuela",
                "Recibo de tarifa SEVIS",
                "Transcripciones académicas",
                "Puntajes de exámenes estandarizados",
                "Prueba financiera"
              ]
            }
          },
          h1b: {
            title: "Visa H1B de Trabajo",
            description: "La visa H1B es para ocupaciones especializadas que requieren conocimiento especializado y una licenciatura o superior en un campo específico.",
            details: "Las visas H1B se otorgan inicialmente por hasta 3 años y pueden extenderse por 3 años adicionales. Esta visa requiere patrocinio del empleador y está sujeta a límites anuales, haciendo crucial la solicitud temprana.",
            processing: "Tiempo de procesamiento: 3-6 meses",
            duration: "Duración: Hasta 6 años en total",
            eligibility: {
              title: "Requisitos de Elegibilidad",
              items: [
                "Licenciatura o equivalente",
                "Oferta de trabajo de empleador estadounidense",
                "Ocupación especializada",
                "Aprobación de petición del empleador"
              ]
            },
            documents: {
              title: "Documentos Requeridos",
              items: [
                "Petición I-129 (presentada por el empleador)",
                "Credenciales educativas",
                "Carta de oferta de trabajo",
                "Solicitud de Condición Laboral",
                "Currículum y portafolio"
              ]
            }
          },
          l1: {
            title: "Visa L1",
            description: "La visa L1 permite a empresas multinacionales transferir ejecutivos, gerentes o empleados con conocimiento especializado desde sus oficinas extranjeras a ubicaciones en EE.UU.",
            details: "Las visas L1A son para ejecutivos y gerentes (hasta 7 años), mientras que las visas L1B son para empleados con conocimiento especializado (hasta 5 años). Esta visa puede llevar a residencia permanente.",
            processing: "Tiempo de procesamiento: 2-4 meses",
            duration: "Duración: L1A hasta 7 años, L1B hasta 5 años",
            eligibility: {
              title: "Requisitos de Elegibilidad",
              items: [
                "Empleo con organización calificada",
                "1 año de empleo continuo en el extranjero",
                "Rol ejecutivo, gerencial o de conocimiento especializado",
                "Entidad relacionada en EE.UU."
              ]
            },
            documents: {
              title: "Documentos Requeridos",
              items: [
                "Petición I-129",
                "Documentos corporativos",
                "Verificación de empleo",
                "Organigramas",
                "Descripción del trabajo"
              ]
            }
          },
          other: {
            title: "Otras Categorías de Visa",
            description: "Además de las principales categorías de visa, SSJS proporciona servicios de consultoría integral para varios otros tipos de visa de EE.UU. diseñados para propósitos y situaciones específicas. Cada categoría de visa tiene sus propios requisitos específicos y procedimientos de solicitud.",
            secondDescription: "Nuestros expertos están bien versados en los matices de todas las categorías de visa de EE.UU. y pueden ayudarte a determinar la visa más apropiada para tus circunstancias específicas. Proporcionamos orientación personalizada para cada tipo de visa, asegurando que tu solicitud cumpla con todos los requisitos necesarios.",
            buttonText: "Contáctanos para Otros Tipos de Visa",
            additionalTitle: "Categorías Adicionales de Visa que Manejamos",
            categories: [
              {
                name: "J-1 Visitante de Intercambio",
                description: "Para programas de intercambio educativo y cultural, incluyendo estudiantes, académicos, maestros, profesores, asistentes de investigación y aprendices."
              },
              {
                name: "O-1 Habilidad Extraordinaria",
                description: "Para individuos con habilidad o logro extraordinario en ciencias, artes, educación, negocios, atletismo, industria cinematográfica o televisiva."
              },
              {
                name: "E-1/E-2 Comerciante/Inversionista de Tratado",
                description: "Para individuos de países con tratados de comercio y navegación con EE.UU. que participan en comercio sustancial o invierten significativamente en un negocio estadounidense."
              },
              {
                name: "K-1 Prometido(a)",
                description: "Para prometidos(as) de ciudadanos estadounidenses, permitiéndoles viajar a EE.UU. para casarse con su peticionario ciudadano estadounidense dentro de 90 días de llegada."
              },
              {
                name: "R-1 Trabajador Religioso",
                description: "Para ministros y trabajadores religiosos que vienen temporalmente a EE.UU. para trabajar en capacidad religiosa."
              },
              {
                name: "EB-5 Inversionista Inmigrante",
                description: "Para inversionistas que hacen una inversión sustancial en una nueva empresa comercial en EE.UU. que crea empleos para trabajadores estadounidenses."
              }
            ],
            servicesTitle: "Nuestros Servicios para Todos los Tipos de Visa",
            servicesItems: [
              "Evaluación de elegibilidad de visa",
              "Preparación y revisión de documentación",
              "Asistencia en llenado de formularios",
              "Preparación para entrevista",
              "Seguimiento del estado de la solicitud",
              "Orientación posterior a la aprobación"
            ]
          }
        },
        processSteps: {
          title: "Proceso General de Solicitud",
          subtitle: "Nuestro Enfoque Optimizado para Solicitudes de Visa de EE.UU.",
          step1: {
            title: "Consulta Inicial",
            description: "Comenzamos con una evaluación integral de tu situación para determinar la categoría de visa más apropiada y el enfoque."
          },
          step2: {
            title: "Documentación",
            description: "Te ayudamos a reunir y preparar todos los documentos necesarios según los requisitos específicos de tu tipo de visa."
          },
          step3: {
            title: "Presentación de Solicitud",
            description: "Asistimos con el llenado preciso de formularios y la presentación adecuada de tu solicitud para maximizar las posibilidades de aprobación."
          },
          step4: {
            title: "Preparación para Entrevista",
            description: "Te preparamos completamente para la entrevista de visa con sesiones de práctica y orientación estratégica."
          }
        },
        whyChoose: {
          title: "¿Por Qué Elegir SSJS?",
          subtitle: "Tu Éxito es Nuestra Prioridad",
          stats: {
            success: {
              value: "98%",
              label: "Tasa de Éxito"
            },
            experience: {
              value: "2+",
              label: "Años de Experiencia"
            },
            clients: {
              value: "2000+",
              label: "Clientes Satisfechos"
            },
            visas: {
              value: "15+",
              label: "Tipos de Visa"
            }
          }
        },
        indiaUsPartnership: {
          title: "Asociación de Visa India-EE.UU.",
          subtitle: "Construyendo Puentes Entre Dos Grandes Naciones",
          description: "SSJS Servicios de Visa se enorgullece de facilitar intercambios culturales y profesionales entre India y Estados Unidos. Nuestra experiencia ayuda a construir conexiones más fuertes entre estas dos naciones dinámicas.",
          buttonText: "Comienza Tu Viaje Hoy",
          stats: {
            students: {
              value: "150,000+",
              label: "Estudiantes indios en EE.UU. anualmente"
            },
            trade: {
              value: "$160 Mil Millones",
              label: "En comercio bilateral"
            },
            diaspora: {
              value: "4.8 Millones",
              label: "Indio-estadounidenses en EE.UU."
            },
            h1bVisas: {
              value: "85,000+",
              label: "Visas H1B emitidas anualmente"
            }
          }
        }
      },

      // About Page
      about: {
        title: "Acerca de SSJS Servicios de Visa",
        subtitle: "Tu socio de confianza para solicitudes de visa de EE.UU.",
        whoWeAre: {
          title: "Quiénes Somos",
          mainTitle: "SSJS - Tu Puente a América",
          description: "SSJS Servicios de Visa es una firma consultora líder especializada en solicitudes de visa de EE.UU. y servicios de inmigración. Fundada con la misión de simplificar el complejo proceso de solicitud de visas, hemos estado ayudando a individuos, familias y empresas a lograr sus sueños americanos por más de una década.",
          secondParagraph: "Nuestro equipo de consultores de inmigración experimentados y asesores legales aporta un profundo conocimiento de la ley de inmigración de EE.UU. y sus procedimientos. Entendemos que la situación de cada cliente es única, por eso proporcionamos orientación personalizada adaptada a tus necesidades y circunstancias específicas.",
          thirdParagraph: "Ya sea que planees visitar Estados Unidos por turismo, negocios, educación, o para reunirte con familia, estamos aquí para guiarte a través de cada paso del proceso de solicitud de visa con experiencia, dedicación y cuidado."
        },
        mission: {
          title: "Nuestra Misión",
          mainTitle: "Ayudándote a Lograr tu Sueño Americano",
          description: "En SSJS Servicios de Visa, nuestra misión es hacer que el proceso de solicitud de visa de EE.UU. sea lo más suave y libre de estrés posible para nuestros clientes. Creemos que todos merecen la oportunidad de perseguir sus sueños en América, y estamos comprometidos a proporcionar la orientación experta y el apoyo necesario para hacer que eso suceda.",
          secondParagraph: "Nos esforzamos por desmitificar el complejo mundo de la ley de inmigración de EE.UU. al dividir procedimientos complicados en pasos manejables. Nuestro objetivo no es solo ayudarte a completar tu solicitud, sino asegurar que entiendas el proceso y te sientas confiado en cada paso del camino.",
          services: {
            title: "Lo Que Nos Distingue:",
            expertGuidance: {
              title: "Orientación Experta",
              description: "Proporcionamos asesoramiento profesional basado en las últimas políticas y procedimientos de inmigración."
            },
            personalizedService: {
              title: "Servicio Personalizado",
              description: "Adaptamos nuestro enfoque a la situación única y los requisitos de cada cliente."
            },
            simplifiedProcess: {
              title: "Proceso Simplificado",
              description: "Dividimos procedimientos complejos en pasos manejables para nuestros clientes."
            },
            comprehensiveSupport: {
              title: "Apoyo Integral",
              description: "Asistimos con cada aspecto del proceso de solicitud de principio a fin."
            },
            transparency: {
              title: "Transparencia",
              description: "Mantenemos comunicación clara y establecemos expectativas realistas sobre el proceso."
            },
            clientSuccess: {
              title: "Éxito del Cliente",
              description: "Medimos nuestro éxito por los resultados exitosos de nuestros clientes."
            }
          }
        },
        whyChoose: {
          title: "Por Qué Elegir SSJS",
          subtitle: "Experiencia en la Industria y Aspectos Destacados de Confianza",
          stats: {
            experience: {
              value: "2+ Años",
              description: "Más de una década de experiencia especializada en consultoría de visas de EE.UU."
            },
            applications: {
              value: "2,000+",
              description: "Solicitudes de visa exitosas en todas las categorías"
            },
            support: {
              value: "24/7",
              description: "Apoyo al cliente las 24 horas durante todo el proceso de solicitud"
            },
            security: {
              value: "100%",
              description: "Confidencialidad y seguridad para toda la información del cliente"
            }
          }
        },
        testimonials: {
          title: "Testimonios de Clientes",
          subtitle: "Lo Que Nuestros Clientes Dicen Sobre Nosotros",
          clients: {
            johnDoe: {
              quote: "SSJS Servicios de Visa hizo que todo el proceso fuera fluido y sin estrés. Su experiencia y atención al detalle fueron invaluables para obtener mi visa de negocios. ¡Recomiendo altamente sus servicios!",
              name: "John Doe",
              title: "Solicitante de Visa de Negocios"
            },
            janeSmith: {
              quote: "Como estudiante internacional, me sentí abrumada por el proceso de solicitud de visa. SSJS me guió a través de cada paso, respondiendo todas mis preguntas rápidamente. ¡Gracias a ellos, ahora estoy estudiando en la universidad de mis sueños!",
              name: "Jane Smith",
              title: "Portadora de Visa de Estudiante F1"
            },
            robertMiller: {
              quote: "Nuestra empresa transfiere regularmente empleados a nuestra oficina de EE.UU., y SSJS ha sido nuestro socio de confianza durante años. Su conocimiento de los requisitos de visa L1 es excepcional, y su servicio siempre es profesional y eficiente.",
              name: "Robert Miller",
              title: "Director de RRHH, Global Tech Inc."
            }
          }
        }
      },

      // Footer
      footer: {
        companyName: "SSJS Servicios de Visa",
        description: "Servicios profesionales de solicitud de visa para ayudarte a lograr tu sueño americano.",
        quickLinks: "Enlaces Rápidos",
        visaTypes: "Tipos de Visa",
        contactInfo: "Información de Contacto",
        services: "Servicios",
        contact: "Contacto",
        followUs: "Síguenos",
        copyright: "SSJS Servicios de Visa. Todos los derechos reservados.",
        tagline: "Expertos en Visas India-EE.UU.",
        phone: "Teléfono:",
        email: "Correo:",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio",
        visaLinks: {
          b1b2: "B1/B2 Turista y Negocios",
          f1: "F1 Estudiante",
          h1b: "H1B Trabajo",
          l1: "L1 Transferencia Intraempresarial"
        }
      },

      // Visitor Counter
      visitor: {
        visitors: "Visitantes",
        latestAppointments: "Últimas Citas",
        facebookPrompt: "¿Quieres ver más evidencia? Visita nuestra página de Facebook",
        visitFacebook: "Visitar Página de Facebook"
      },

      // Common
      common: {
        loading: "Cargando...",
        error: "Ocurrió un error",
        tryAgain: "Intentar de Nuevo",
        close: "Cerrar",
        back: "Atrás",
        next: "Siguiente",
        submit: "Enviar",
        cancel: "Cancelar",
        save: "Guardar"
      }
    }
  },

  // Telugu Language (te)
  te: {
    translation: {
      // Navigation
      nav: {
        home: "హోమ్",
        services: "వీసా సేవలు",
        about: "మా గురించి",
        contact: "సంప్రదించండి",
        analytics: "విశ్లేషణలు"
      },

      // Homepage
      home: {
        hero: {
          title: "अमेरिका की आपकी यात्रा यहीं से शुरू होती है",
          subtitle: "आपके अमेरिकी सपने को साकार करने के लिए पेशेवर वीज़ा आवेदन सेवाएं",
          buttonText: "वीज़ा सेवाएं देखें"
        },
        welcome: {
          title: "SSJS वीज़ा सेवाओं में आपका स्वागत है! 👋",
          subtitle: "हम आपको यहाँ पाकर बहुत खुश हैं! हमारी विशेषज्ञ टीम पेशेवर वीज़ा आवेदन सेवाओं के साथ आपके अमेरिकी सपने को साकार करने के लिए समर्पित है।",
          whyChoose: "SSJS क्यों चुनें?",
          benefits: [
            "✈️ सभी प्रकार के वीज़ा के लिए विशेषज्ञ मार्गदर्शन",
            "📄 पूर्ण आवेदन सहायता",
            "⚡तेज़ प्रसंस्करण समय",
            "🎯उच्च सफलता दर",
            "💬24/7 ग्राहक सहायता"
          ],
          exploreServices: "वीज़ा सेवाएं देखें",
          freeConsultation: "मुफ्त परामर्श प्राप्त करें",
          disclaimer: "यह स्वागत संदेश केवल आपकी पहली यात्रा पर दिखाई देता है"
        },
        introduction: {
          title: "अमेरिकी वीज़ा आवेदन प्रक्रिया",
          subtitle: "अमेरिकी वीज़ा आवेदन प्रक्रिया जटिल हो सकती है। हम आपको हर कदम पर मार्गदर्शन देने के लिए यहाँ हैं।"
        },
        services: {
          title: "हमारी वीज़ा सेवाएं",
          subtitle: "हम सभी प्रकार के अमेरिकी वीज़ा के लिए व्यापक सहायता प्रदान करते हैं",
          tourist: {
            title: "पर्यटक वीज़ा (B-2)",
            description: "अवकाश यात्रा, परिवार से मिलने या संयुक्त राज्य अमेरिका में चिकित्सा उपचार के लिए एकदम सही।"
          },
          business: {
            title: "व्यापारिक वीज़ा (B-1)",
            description: "अमेरिका में व्यापारिक बैठकों, सम्मेलनों और पेशेवर परामर्श के लिए।"
          },
          student: {
            title: "छात्र वीज़ा (F-1)",
            description: "अमेरिकी विश्वविद्यालयों, कॉलेजों और शैक्षणिक संस्थानों में अकादमिक अध्ययन के लिए।"
          },
          work: {
            title: "कार्य वीज़ा (H-1B)",
            description: "संयुक्त राज्य अमेरिका में रोजगार के अवसर चाहने वाले कुशल पेशेवरों के लिए।"
          },
          family: {
            title: "पारिवारिक वीज़ा",
            description: "पारिवारिक पुनर्मिलन और अमेरिका में प्रियजनों से जुड़ने के लिए पति/पत्नी/मंगेतर वीज़ा के लिए।"
          },
          investment: {
            title: "निवेश वीज़ा",
            description: "अमेरिका में व्यापारिक उद्यम स्थापित करने के इच्छुक उद्यमियों और निवेशकों के लिए।"
          },
          viewAll: "सभी वीज़ा सेवाएं देखें"
        },
        cta: {
          title: "अपना वीज़ा आवेदन शुरू करने के लिए तैयार हैं?",
          subtitle: "अपनी वीज़ा आवेदन प्रक्रिया के दौरान व्यक्तिगत मार्गदर्शन और सहायता के लिए आज ही हमारी विशेषज्ञ टीम से संपर्क करें।",
          buttonText: "अभी संपर्क करें"
        },
        trustedPartner: {
          title: "आपका विश्वसनीय वीज़ा साझेदार",
          description1: "अमेरिकी वीज़ा आवेदन प्रक्रिया में कई चरण शामिल हैं, आपके उद्देश्य के लिए सही वीज़ा प्रकार निर्धारित करने से लेकर दस्तावेज़ तैयार करने और वीज़ा साक्षात्कार में भाग लेने तक। SSJS में, हम हर चरण में विशेषज्ञ मार्गदर्शन प्रदान करते हैं।",
          description2: "हमारे अनुभवी पेशेवरों की टीम आपको आवश्यकताओं को समझने, आपका आवेदन तैयार करने और अनुमोदन की संभावनाओं को अधिकतम करने में मदद करेगी। हम आपको सटीक सलाह देने के लिए नवीनतम आप्रवासन नीतियों और प्रक्रियाओं के साथ अपडेट रहते हैं।",
          description3: "चाहे आप पर्यटन, व्यापार, शिक्षा या काम के लिए संयुक्त राज्य अमेरिका की यात्रा की योजना बना रहे हों, हम आपकी विशिष्ट आवश्यकताओं के अनुकूल विशेषज्ञ सेवाएं प्रदान करते हैं।",
          learnMore: "हमारे बारे में और जानें"
        },
        connecting: {
          title: "राष्ट्रों को जोड़ना, भविष्य का निर्माण",
          description: "SSJS वीज़ा सेवाएं पेशेवर वीज़ा परामर्श सेवाओं, सांस्कृतिक आदान-प्रदान कार्यक्रमों और शैक्षिक अवसरों के माध्यम से भारत और संयुक्त राज्य अमेरिका के बीच संबंध को मजबूत बनाने में विशेषज्ञता रखती है।"
        },
        stats: {
          successfulVisas: "सफल वीज़ा",
          yearsExperience: "वर्षों का अनुभव",
          successRate: "सफलता दर"
        }
      },

      // Contact Page
      contact: {
        title: "संपर्क करें",
        subtitle: "व्यक्तिगत सहायता के लिए हमारे वीज़ा विशेषज्ञों से संपर्क करें",
        quickContact: "त्वरित संपर्क",
        getStartedToday: "आज ही शुरुआत करें",
        sendUsRequirement: "हमें अपनी आवश्यकताएं या फीडबैक भेजें",
        fillOutForm: "नीचे दिया गया फॉर्म भरें, और हम जल्द ही आपसे संपर्क करेंगे",
        contactInfo: "संपर्क जानकारी",
        personalInfo: "व्यक्तिगत जानकारी",
        visaServiceType: "वीज़ा सेवा प्रकार",
        tellUs: "हमें अपनी आवश्यकताओं या फीडबैक के बारे में बताएं",
        form: {
          firstName: "पहला नाम",
          lastName: "अंतिम नाम",
          email: "ईमेल पता",
          phone: "फ़ोन नंबर",
          visaType: "वीज़ा प्रकार",
          message: "आपका संदेश",
          messagePlaceholder: "कृपया हमारी सेवाओं के बारे में अपनी प्रतिक्रिया, सुधार के सुझाव, हमारी वीज़ा सहायता प्रक्रिया के बारे में प्रश्न, या कोई अन्य टिप्पणी साझा करें जो आप हमें बताना चाहते हैं। आपकी प्रतिक्रिया हमें आपकी बेहतर सेवा करने में मदद करती है।",
          firstNamePlaceholder: "अपना पहला नाम दर्ज करें",
          lastNamePlaceholder: "अपना अंतिम नाम दर्ज करें",
          emailPlaceholder: "अपना ईमेल पता दर्ज करें",
          submit: "संदेश भेजें",
          sending: "भेजा जा रहा है...",
          selectVisa: "वीज़ा प्रकार चुनें",
          required: "यह फील्ड आवश्यक है",
          invalidEmail: "अमान्य ईमेल पता",
          invalidPhone: "अमान्य फ़ोन नंबर",
          visaTypes: {
            tourist: "पर्यटक वीज़ा (B-2)",
            business: "व्यापारिक वीज़ा (B-1)",
            student: "छात्र वीज़ा (F-1)",
            work: "कार्य वीज़ा (H-1B)",
            family: "पारिवारिक वीज़ा",
            investment: "निवेश वीज़ा",
            other: "अन्य"
          }
        },
        success: "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे वापस संपर्क करेंगे।",
        error: "क्षमा करें, आपका संदेश भेजने में त्रुटि हुई है। कृपया पुनः प्रयास करें या सीधे हमसे संपर्क करें।",
        info: {
          phone: "फ़ोन",
          email: "ईमेल",
          hours: "व्यापारिक समय",
          hoursValue: "सोमवार - शुक्रवार: सुबह 9:00 - शाम 6:00"
        },
        faq: {
          title: "अक्सर पूछे जाने वाले प्रश्न",
          subtitle: "हमसे संपर्क करने के बारे में सामान्य प्रश्न",
          items: [
            {
              question: "परामर्श से पहले मुझे कौन सी जानकारी तैयार रखनी चाहिए?",
              answer: "आपके परामर्श से पहले, आपकी यात्रा योजनाओं, यात्रा के उद्देश्य, व्यक्तिगत जानकारी, रोजगार इतिहास, और कोई भी पिछली अमेरिकी वीज़ा आवेदन या अस्वीकृति का विवरण होना सहायक है।"
            },
            {
              question: "संपर्क फॉर्म जमा करने के बाद जवाब पाने में कितना समय लगता है?",
              answer: "हम आमतौर पर 24-48 व्यावसायिक घंटों के भीतर सभी पूछताछ का जवाब देते हैं। तत्काल मामलों के लिए, हम सीधे हमें कॉल करने की सलाह देते हैं।"
            },
            {
              question: "क्या आप दूरस्थ परामर्श की पेशकश करते हैं?",
              answer: "हां, हम उन ग्राहकों के लिए फोन, वीडियो कॉल, या ईमेल के माध्यम से परामर्श की पेशकश करते हैं जो व्यक्तिगत रूप से हमारे कार्यालय का दौरा नहीं कर सकते।"
            },
            {
              question: "क्या प्रारंभिक परामर्श के लिए कोई शुल्क है?",
              answer: "हम निःशुल्क 15-मिनट की प्रारंभिक मूल्यांकन की पेशकश करते हैं। अधिक विस्तृत परामर्श के लिए, एक नाममात्र शुल्क है जो भविष्य की सेवाओं पर लागू किया जा सकता है यदि आप हमारे साथ आगे बढ़ने का निर्णय लेते हैं।"
            },
            {
              question: "आपके सलाहकार कौन सी भाषाएं बोलते हैं?",
              answer: "हमारे सलाहकार हमारे विविध ग्राहकों की बेहतर सेवा के लिए अंग्रेजी, स्पेनिश, मंदारिन, हिंदी और अरबी में धाराप्रवाह हैं।"
            },
            {
              question: "क्या आप तत्काल वीज़ा आवेदनों में मदद कर सकते हैं?",
              answer: "हां, हम तत्काल मामलों के लिए तत्वरित सेवाएं प्रदान करते हैं, हालांकि अतिरिक्त शुल्क लग सकते हैं। कृपया अपनी विशिष्ट समयसीमा और आवश्यकताओं पर चर्चा करने के लिए सीधे हमसे संपर्क करें।"
            }
          ]
        }
      },

      // Services Page
      services: {
        title: "हमारी वीज़ा सेवाएं",
        subtitle: "आपकी सभी आवश्यकताओं के लिए व्यापक वीज़ा आवेदन सहायता",
        learnMore: "और जानें",
        intro: {
          title: "हमारी वीज़ा सेवाएं",
          subtitle: "हर वीज़ा श्रेणी के लिए विशेषज्ञ मार्गदर्शन",
          description: "SSJS में, हम सभी अमेरिकी वीज़ा श्रेणियों के लिए विशेषज्ञ परामर्श सेवाएं प्रदान करते हैं। हमारी अनुभवी पेशेवरों की टीम प्रारंभिक मूल्यांकन से अंतिम प्रस्तुति और साक्षात्कार की तैयारी तक, पूरी आवेदन प्रक्रिया में आपका मार्गदर्शन करेगी।"
        },
        tabs: {
          b1b2: "B1/B2 वीज़ा",
          f1: "F1 वीज़ा", 
          h1b: "H1B वीज़ा",
          l1: "L1 वीज़ा",
          other: "अन्य वीज़ा"
        },
        visaTypes: {
          b1b2: {
            title: "B1/B2 व्यापारिक और पर्यटक वीज़ा",
            description: "B1/B2 वीज़ा उन लोगों के लिए एक गैर-आप्रवासी वीज़ा है जो व्यापार (B1), पर्यटन, मनोरंजन या मुलाकात (B2) के लिए अस्थायी रूप से संयुक्त राज्य अमेरिका में प्रवेश करना चाहते हैं। B1 वीज़ा विशेष रूप से व्यापारिक यात्रियों के लिए है, जबकि B2 वीज़ा पर्यटकों के लिए है।",
            details: "ये वीज़ा आमतौर पर 10 साल तक के लिए जारी किए जाते हैं और कई प्रविष्टियों की अनुमति देते हैं, प्रत्येक प्रवास आमतौर पर छह महीने तक सीमित होता है। B1/B2 वीज़ा पर्यटकों, पारिवारिक यात्राओं, व्यापारिक बैठकों, सम्मेलनों या अमेरिका में चिकित्सा उपचार के लिए आदर्श हैं।",
            processing: "प्रसंस्करण समय: 2-4 सप्ताह",
            duration: "अवधि: प्रति यात्रा 6 महीने तक",
            eligibility: {
              title: "पात्रता आवश्यकताएं",
              items: [
                "यात्रा का उद्देश्य अस्थायी है",
                "खर्चों को पूरा करने के लिए पर्याप्त धन",
                "गृह देश के साथ मजबूत संबंध",
                "यात्रा के बाद वापस लौटने का इरादा"
              ]
            },
            documents: {
              title: "आवश्यक दस्तावेज़",
              items: [
                "वैध पासपोर्ट",
                "DS-160 फॉर्म",
                "पासपोर्ट आकार की तस्वीरें",
                "साक्षात्कार नियुक्ति पत्र",
                "वित्तीय दस्तावेज़"
              ]
            }
          },
          f1: {
            title: "F1 छात्र वीज़ा",
            description: "F1 वीज़ा उन अंतर्राष्ट्रीय छात्रों के लिए है जो मान्यता प्राप्त अमेरिकी विश्वविद्यालयों, कॉलेजों, हाई स्कूलों या भाषा प्रशिक्षण कार्यक्रमों में शैक्षणिक शिक्षा प्राप्त करना चाहते हैं।",
            details: "F1 वीज़ा छात्रों को अपने शैक्षणिक कार्यक्रम की अवधि के लिए अमेरिका में रहने की अनुमति देता है, साथ ही व्यावहारिक प्रशिक्षण के लिए अतिरिक्त समय भी। छात्र कैंपस में काम कर सकते हैं और कुछ शर्तों के तहत कैंपस के बाहर रोजगार के लिए पात्र हो सकते हैं।",
            processing: "प्रसंस्करण समय: 3-5 सप्ताह",
            duration: "अवधि: शैक्षणिक कार्यक्रम की लंबाई + अनुग्रह अवधि",
            eligibility: {
              title: "पात्रता आवश्यकताएं",
              items: [
                "SEVP-अनुमोदित स्कूल में स्वीकृति",
                "पूर्णकालिक नामांकन",
                "पर्याप्त वित्तीय संसाधन",
                "अंग्रेजी दक्षता",
                "अध्ययन के बाद घर लौटने का इरादा"
              ]
            },
            documents: {
              title: "आवश्यक दस्तावेज़",
              items: [
                "स्कूल से I-20 फॉर्म",
                "SEVIS शुल्क रसीद",
                "शैक्षणिक प्रतिलेख",
                "मानकीकृत परीक्षा स्कोर",
                "वित्तीय प्रमाण"
              ]
            }
          },
          h1b: {
            title: "H1B कार्य वीज़ा",
            description: "H1B वीज़ा विशेष व्यवसायों के लिए है जिनमें विशेष ज्ञान और किसी विशिष्ट क्षेत्र में स्नातक की डिग्री या उच्चतर की आवश्यकता होती है।",
            details: "H1B वीज़ा प्रारंभ में 3 साल तक के लिए दिए जाते हैं और अतिरिक्त 3 साल के लिए बढ़ाए जा सकते हैं। इस वीज़ा के लिए नियोक्ता प्रायोजन की आवश्यकता होती है और यह वार्षिक सीमा के अधीन है, जिससे प्रारंभिक आवेदन महत्वपूर्ण हो जाता है।",
            processing: "प्रसंस्करण समय: 3-6 महीने",
            duration: "अवधि: कुल 6 साल तक",
            eligibility: {
              title: "पात्रता आवश्यकताएं",
              items: [
                "स्नातक की डिग्री या समकक्ष",
                "अमेरिकी नियोक्ता से नौकरी का प्रस्ताव",
                "विशेष व्यवसाय",
                "नियोक्ता याचिका अनुमोदन"
              ]
            },
            documents: {
              title: "आवश्यक दस्तावेज़",
              items: [
                "I-129 याचिका (नियोक्ता द्वारा दाखिल)",
                "शैक्षणिक प्रमाण पत्र",
                "नौकरी प्रस्ताव पत्र",
                "श्रम स्थिति आवेदन",
                "रिज्यूमे और पोर्टफोलियो"
              ]
            }
          },
          l1: {
            title: "L1 वीज़ा",
            description: "L1 वीज़ा बहुराष्ट्रीय कंपनियों को अपने विदेशी कार्यालयों से अमेरिकी स्थानों पर कार्यकारियों, प्रबंधकों या विशेष ज्ञान वाले कर्मचारियों को स्थानांतरित करने की अनुमति देता है।",
            details: "L1A वीज़ा कार्यकारियों और प्रबंधकों के लिए हैं (7 साल तक), जबकि L1B वीज़ा विशेष ज्ञान वाले कर्मचारियों के लिए हैं (5 साल तक)। यह वीज़ा स्थायी निवास की ओर ले जा सकता है।",
            processing: "प्रसंस्करण समय: 2-4 महीने",
            duration: "अवधि: L1A 7 साल तक, L1B 5 साल तक",
            eligibility: {
              title: "पात्रता आवश्यकताएं",
              items: [
                "योग्य संगठन के साथ रोजगार",
                "विदेश में 1 साल का निरंतर रोजगार",
                "कार्यकारी, प्रबंधकीय या विशेष ज्ञान की भूमिका",
                "अमेरिका में संबंधित इकाई"
              ]
            },
            documents: {
              title: "आवश्यक दस्तावेज़",
              items: [
                "I-129 याचिका",
                "कॉर्पोरेट दस्तावेज़",
                "रोजगार सत्यापन",
                "संगठनात्मक चार्ट",
                "नौकरी विवरण"
              ]
            }
          },
          other: {
            title: "अन्य वीज़ा श्रेणियां",
            description: "मुख्य वीज़ा श्रेणियों के अतिरिक्त, SSJS विशिष्ट उद्देश्यों और स्थितियों के लिए डिज़ाइन किए गए विभिन्न अन्य अमेरिकी वीज़ा प्रकारों के लिए व्यापक परामर्श सेवाएं प्रदान करता है। प्रत्येक वीज़ा श्रेणी की अपनी विशिष्ट आवश्यकताएं और आवेदन प्रक्रियाएं हैं।",
            secondDescription: "हमारे विशेषज्ञ सभी अमेरिकी वीज़ा श्रेणियों की बारीकियों में अच्छी तरह से वाकिफ हैं और आपकी विशिष्ट परिस्थितियों के लिए सबसे उपयुक्त वीज़ा निर्धारित करने में आपकी मदद कर सकते हैं। हम प्रत्येक वीज़ा प्रकार के लिए अनुकूलित मार्गदर्शन प्रदान करते हैं, यह सुनिश्चित करते हुए कि आपका आवेदन सभी आवश्यक आवश्यकताओं को पूरा करता है।",
            buttonText: "अन्य वीज़ा प्रकारों के लिए हमसे संपर्क करें",
            additionalTitle: "अतिरिक्त वीज़ा श्रेणियां जिन्हें हम संभालते हैं",
            categories: [
              {
                name: "J-1 एक्सचेंज विज़िटर",
                description: "शैक्षणिक और सांस्कृतिक एक्सचेंज कार्यक्रमों के लिए, जिसमें छात्र, विद्वान, शिक्षक, प्रोफेसर, अनुसंधान सहायक और प्रशिक्षु शामिल हैं।"
              },
              {
                name: "O-1 असाधारण क्षमता",
                description: "विज्ञान, कला, शिक्षा, व्यापार, एथलेटिक्स, मोशन पिक्चर या टेलीविजन उद्योग में असाधारण क्षमता या उपलब्धि वाले व्यक्तियों के लिए।"
              },
              {
                name: "E-1/E-2 संधि व्यापारी/निवेशक",
                description: "उन देशों के व्यक्तियों के लिए जिनकी अमेरिका के साथ वाणिज्य और नेविगेशन संधियां हैं जो पर्याप्त व्यापार में लगे हुए हैं या अमेरिकी व्यापार में महत्वपूर्ण निवेश कर रहे हैं।"
              },
              {
                name: "K-1 मंगेतर/मंगेतरी",
                description: "अमेरिकी नागरिकों के मंगेतर/मंगेतरी के लिए, जो उन्हें अपने अमेरिकी नागरिक याचिकाकर्ता से आगमन के 90 दिनों के भीतर शादी करने के लिए अमेरिका यात्रा करने की अनुमति देता है।"
              },
              {
                name: "R-1 धार्मिक कार्यकर्ता",
                description: "मंत्रियों और धार्मिक कार्यकर्ताओं के लिए जो धार्मिक क्षमता में काम करने के लिए अस्थायी रूप से अमेरिका आ रहे हैं।"
              },
              {
                name: "EB-5 आप्रवासी निवेशक",
                description: "निवेशकों के लिए जो अमेरिका में एक नए वाणिज्यिक उद्यम में पर्याप्त निवेश करते हैं जो अमेरिकी श्रमिकों के लिए नौकरियां बनाता है।"
              }
            ],
            servicesTitle: "सभी वीज़ा प्रकारों के लिए हमारी सेवाएं",
            servicesItems: [
              "वीज़ा पात्रता मूल्यांकन",
              "दस्तावेज़ तैयारी और समीक्षा",
              "फॉर्म भरने में सहायता",
              "साक्षात्कार की तैयारी",
              "आवेदन स्थिति ट्रैकिंग",
              "अनुमोदन के बाद मार्गदर्शन"
            ]
          }
        },
        processSteps: {
          title: "सामान्य आवेदन प्रक्रिया",
          subtitle: "अमेरिकी वीज़ा आवेदनों के लिए हमारा सुव्यवस्थित दृष्टिकोण",
          step1: {
            title: "प्रारंभिक परामर्श",
            description: "हम सबसे उपयुक्त वीज़ा श्रेणी और दृष्टिकोण निर्धारित करने के लिए आपकी स्थिति का व्यापक मूल्यांकन के साथ शुरुआत करते हैं।"
          },
          step2: {
            title: "दस्तावेज़ीकरण",
            description: "हम आपकी वीज़ा प्रकार की विशिष्ट आवश्यकताओं के अनुसार सभी आवश्यक दस्तावेज़ एकत्र करने और तैयार करने में आपकी मदद करते हैं।"
          },
          step3: {
            title: "आवेदन दाखिल करना",
            description: "हम अनुमोदन की संभावनाओं को अधिकतम करने के लिए फॉर्म को सटीक रूप से पूरा करने और आपके आवेदन को उचित रूप से प्रस्तुत करने में सहायता करते हैं।"
          },
          step4: {
            title: "साक्षात्कार तैयारी",
            description: "हम अभ्यास सत्रों और रणनीतिक मार्गदर्शन के साथ वीज़ा साक्षात्कार के लिए आपको पूरी तरह से तैयार करते हैं।"
          }
        },
        whyChoose: {
          title: "SSJS क्यों चुनें?",
          subtitle: "आपकी सफलता हमारी प्राथमिकता है",
          stats: {
            success: {
              value: "98%",
              label: "सफलता दर"
            },
            experience: {
              value: "2+",
              label: "वर्षों का अनुभव"
            },
            clients: {
              value: "2000+",
              label: "खुश ग्राहक"
            },
            visas: {
              value: "15+",
              label: "वीज़ा प्रकार"
            }
          }
        },
        indiaUsPartnership: {
          title: "भारत-अमेरिका वीज़ा साझेदारी",
          subtitle: "दो महान राष्ट्रों के बीच पुल का निर्माण",
          description: "SSJS वीज़ा सेवाएं भारत और संयुक्त राज्य अमेरिका के बीच सांस्कृतिक और व्यावसायिक आदान-प्रदान को सुविधाजनक बनाने पर गर्वित है। हमारी विशेषज्ञता इन दो गतिशील राष्ट्रों के बीच मजबूत संबंध बनाने में मदद करती है।",
          buttonText: "आज ही अपनी यात्रा शुरू करें",
          stats: {
            students: {
              value: "150,000+",
              label: "भारतीय छात्र अमेरिका में वार्षिक"
            },
            trade: {
              value: "$160 बिलियन",
              label: "द्विपक्षीय व्यापार में"
            },
            diaspora: {
              value: "4.8 मिलियन",
              label: "अमेरिका में भारतीय अमेरिकी"
            },
            h1bVisas: {
              value: "85,000+",
              label: "H1B वीज़ा वार्षिक जारी"
            }
          }
        }
      },

      // About Page
      about: {
        title: "SSJS वीज़ा सेवाओं के बारे में",
        subtitle: "अमेरिकी वीज़ा आवेदनों के लिए आपका विश्वसनीय साझेदार",
        whoWeAre: {
          title: "हम कौन हैं",
          mainTitle: "SSJS - अमेरिका के लिए आपका पुल",
          description: "SSJS वीज़ा सेवाएं अमेरिकी वीज़ा आवेदन और आप्रवासन सेवाओं में विशेषज्ञता रखने वाली एक प्रमुख परामर्श फर्म है। जटिल वीज़ा आवेदन प्रक्रिया को सरल बनाने के मिशन के साथ स्थापित, हम एक दशक से अधिक समय से व्यक्तियों, परिवारों और व्यवसायों के अमेरिकी सपनों को पूरा करने में मदद कर रहे हैं।",
          secondParagraph: "हमारी अनुभवी आप्रवासन सलाहकारों और कानूनी सलाहकारों की टीम अमेरिकी आप्रवासन कानून और प्रक्रियाओं का गहरा ज्ञान लाती है। हम समझते हैं कि प्रत्येक ग्राहक की स्थिति अनूठी है, इसीलिए हम आपकी विशिष्ट आवश्यकताओं और परिस्थितियों के अनुसार व्यक्तिगत मार्गदर्शन प्रदान करते हैं।",
          thirdParagraph: "चाहे आप पर्यटन, व्यापार, शिक्षा, या परिवार से मिलने के लिए संयुक्त राज्य अमेरिका जाने की योजना बना रहे हों, हम विशेषज्ञता, समर्पण और देखभाल के साथ वीज़ा आवेदन प्रक्रिया के हर कदम में आपका मार्गदर्शन करने के लिए यहाँ हैं।"
        },
        mission: {
          title: "हमारा मिशन",
          mainTitle: "आपके अमेरिकी सपने को पूरा करने में मदद करना",
          description: "SSJS वीज़ा सेवाओं में, हमारा मिशन अपने ग्राहकों के लिए अमेरिकी वीज़ा आवेदन प्रक्रिया को यथासंभव सुचारू और तनाव-मुक्त बनाना है। हम मानते हैं कि हर किसी को अमेरिका में अपने सपनों को पूरा करने का अवसर मिलना चाहिए, और हम इसे संभव बनाने के लिए आवश्यक विशेषज्ञ मार्गदर्शन और सहायता प्रदान करने के लिए प्रतिबद्ध हैं।",
          secondParagraph: "हम जटिल प्रक्रियाओं को प्रबंधनीय चरणों में विभाजित करके अमेरिकी आप्रवासन कानून की जटिल दुनिया को सरल बनाने का प्रयास करते हैं। हमारा लक्ष्य केवल आपके आवेदन को पूरा करने में मदद करना नहीं है, बल्कि यह सुनिश्चित करना है कि आप प्रक्रिया को समझें और हर कदम पर आत्मविश्वास महसूस करें।",
          services: {
            title: "हमें क्या अलग बनाता है:",
            expertGuidance: {
              title: "विशेषज्ञ मार्गदर्शन",
              description: "हम नवीनतम आप्रवासन नीतियों और प्रक्रियाओं के आधार पर पेशेवर सलाह प्रदान करते हैं।"
            },
            personalizedService: {
              title: "व्यक्तिगत सेवा",
              description: "हम प्रत्येक ग्राहक की अनूठी स्थिति और आवश्यकताओं के अनुसार अपना दृष्टिकोण तैयार करते हैं।"
            },
            simplifiedProcess: {
              title: "सरलीकृत प्रक्रिया",
              description: "हम अपने ग्राहकों के लिए जटिल प्रक्रियाओं को प्रबंधनीय चरणों में विभाजित करते हैं।"
            },
            comprehensiveSupport: {
              title: "व्यापक सहायता",
              description: "हम आवेदन प्रक्रिया के हर पहलू में शुरू से अंत तक सहायता करते हैं।"
            },
            transparency: {
              title: "पारदर्शिता",
              description: "हम स्पष्ट संचार बनाए रखते हैं और प्रक्रिया के बारे में यथार्थवादी अपेक्षाएं स्थापित करते हैं।"
            },
            clientSuccess: {
              title: "ग्राहक सफलता",
              description: "हम अपनी सफलता को अपने ग्राहकों के सफल परिणामों से मापते हैं।"
            }
          }
        },
        whyChoose: {
          title: "SSJS क्यों चुनें",
          subtitle: "उद्योग अनुभव और विश्वास की मुख्य बातें",
          stats: {
            experience: {
              value: "2+ वर्ष",
              description: "अमेरिकी वीज़ा परामर्श में एक दशक से अधिक विशेष अनुभव"
            },
            applications: {
              value: "2,000+",
              description: "सभी श्रेणियों में सफल वीज़ा आवेदन"
            },
            support: {
              value: "24/7",
              description: "पूरी आवेदन प्रक्रिया के दौरान चौबीसों घंटे ग्राहक सहायता"
            },
            security: {
              value: "100%",
              description: "सभी ग्राहक जानकारी के लिए गोपनीयता और सुरक्षा"
            }
          }
        },
        testimonials: {
          title: "ग्राहक प्रशंसापत्र",
          subtitle: "हमारे ग्राहक हमारे बारे में क्या कहते हैं",
          clients: {
            johnDoe: {
              quote: "SSJS वीज़ा सेवाओं ने पूरी प्रक्रिया को निर्बाध और तनाव-मुक्त बना दिया। मेरे व्यापारिक वीज़ा को सुरक्षित करने में उनकी विशेषज्ञता और विस्तार पर ध्यान अमूल्य था। मैं उनकी सेवाओं की अत्यधिक अनुशंसा करता हूँ!",
              name: "जॉन डो",
              title: "व्यापारिक वीज़ा आवेदक"
            },
            janeSmith: {
              quote: "एक अंतर्राष्ट्रीय छात्र के रूप में, मैं वीज़ा आवेदन प्रक्रिया से अभिभूत था। SSJS ने मुझे हर कदम पर मार्गदर्शन दिया, मेरे सभी प्रश्नों का तुरंत उत्तर दिया। उनकी बदौलत, अब मैं अपने सपनों की विश्वविद्यालय में पढ़ रहा हूँ!",
              name: "जेन स्मिथ",
              title: "F1 छात्र वीज़ा धारक"
            },
            robertMiller: {
              quote: "हमारी कंपनी नियमित रूप से कर्मचारियों को अपने अमेरिकी कार्यालय में स्थानांतरित करती है, और SSJS वर्षों से हमारा विश्वसनीय साझेदार रहा है। L1 वीज़ा आवश्यकताओं का उनका ज्ञान असाधारण है, और उनकी सेवा हमेशा पेशेवर और कुशल होती है।",
              name: "रॉबर्ट मिलर",
              title: "HR निदेशक, ग्लोबल टेक इंक।"
            }
          }
        }
      },

      // Footer
      footer: {
        companyName: "SSJS वीज़ा सेवाएं",
        description: "आपके अमेरिकी सपने को पूरा करने में मदद के लिए पेशेवर वीज़ा आवेदन सेवाएं।",
        quickLinks: "त्वरित लिंक",
        visaTypes: "वीज़ा प्रकार",
        contactInfo: "संपर्क जानकारी",
        services: "सेवाएं",
        contact: "संपर्क",
        followUs: "हमें फॉलो करें",
        copyright: "SSJS वीज़ा सेवाएं। सभी अधिकार सुरक्षित।",
        tagline: "भारत-अमेरिका वीज़ा विशेषज्ञ",
        phone: "फ़ोन:",
        email: "ईमेल:",
        privacyPolicy: "गोपनीयता नीति",
        termsOfService: "सेवा की शर्तें",
        visaLinks: {
          b1b2: "B1/B2 पर्यटक और व्यापार",
          f1: "F1 छात्र",
          h1b: "H1B कार्य",
          l1: "L1 इंट्रा-कंपनी ट्रांसफर"
        }
      },

      // Visitor Counter
      visitor: {
        visitors: "आगंतुक",
        latestAppointments: "नवीनतम अपॉइंटमेंट",
        facebookPrompt: "और सबूत देखना चाहते हैं? हमारे फेसबुक पेज पर जाएं",
        visitFacebook: "फेसबुक पेज पर जाएं"
      },

      // Common
      common: {
        home: "హోమ్",
        services: "వీసా సేవలు",
        about: "మా గురించి",
        contact: "సంప్రదించండి",
        analytics: "విశ్లేషణలు"
      },
      
      // Homepage
      home: {
        hero: {
          title: "అమెరికాకు మీ యాత్ర ఇక్కడ మొదలవుతుంది",
          subtitle: "మీ అమెరికన్ కలను నిజం చేయడానికి వృత్తిపరమైన వీసా దరఖాస్తు సేవలు",
          buttonText: "వీసా సేవలను అన్వేషించండి"
        },
        welcome: {
          title: "SSJS వీసా సేవలకు స్వాగతం! 👋",
          subtitle: "మీరు ఇక్కడ ఉండటంలో మేము చాలా ఆనందిస్తున్నాము! మా నిపుణుల బృందం వృత్తిపరమైన వీసా దరఖాస్తు సేవలతో మీ అమెరికన్ కలను నిజం చేయడానికి అంకితం చేయబడింది.",
          whyChoose: "SSJS ఎందుకు ఎంచుకోవాలి?",
          benefits: [
            "✈️ అన్ని వీసా రకాలకు నిపుణుల మార్గదర్శకత్వం",
            "📄 పూర్తి దరఖాస్తు సహాయం",
            "⚡వేగవంతమైన ప్రాసెసింగ్ సమయం",
            "🎯అధిక విజయ రేటు",
            "💬24/7 కస్టమర్ సపోర్ట్"
          ],
          exploreServices: "వీసా సేవలను అన్వేషించండి",
          freeConsultation: "ఉచిత సలహా పొందండి",
          disclaimer: "ఈ స్వాగత సందేశం మీ మొదటి సందర్శనలో మాత్రమే కనిపిస్తుంది"
        },
        introduction: {
          title: "US వీసా దరఖాస్తు ప్రక్రియ",
          subtitle: "US వీసా దరఖాస్తు ప్రక్రియ సంక్లిష్టంగా ఉంటుంది. ప్రతి దశలో మీకు మార్గదర్శకత్వం అందించడానికి మేము ఇక్కడ ఉన్నాము."
        },
        services: {
          title: "మా వీసా సేవలు",
          subtitle: "మేము అన్ని రకాల US వీసాలకు సమగ్ర సహాయాన్ని అందిస్తాము",
          tourist: {
            title: "పర్యాటక వీసా (B-2)",
            description: "విశ్రాంతి ప్రయాణం, కుటుంబాన్ని కలవడం లేదా యునైటెడ్ స్టేట్స్‌లో వైద్య చికిత్స కోసం ఖచ్చితమైనది."
          },
          business: {
            title: "వ్యాపార వీసా (B-1)",
            description: "USలో వ్యాపార సమావేశాలు, సమావేశాలు మరియు వృత్తిపరమైన సంప్రదింపుల కోసం."
          },
          student: {
            title: "విద్యార్థి వీసా (F-1)",
            description: "US విశ్వవిద్యాలయాలు, కళాశాలలు మరియు విద్యా సంస్థలలో అకడమిక్ అధ్యయనం కోసం."
          },
          work: {
            title: "వర్క్ వీసా (H-1B)",
            description: "యునైటెడ్ స్టేట్స్‌లో ఉపాధి అవకాశాలను కోరుకునే నైపుణ్యం కలిగిన నిపుణుల కోసం."
          },
          family: {
            title: "కుటుంబ వీసా",
            description: "కుటుంబ పునర్మిలనం మరియు USలో ప్రియమైనవారితో చేరడానికి స్పౌస్/ఫియాన్సే వీసాల కోసం."
          },
          investment: {
            title: "పెట్టుబడి వీసా",
            description: "USలో వ్యాపార వ్యాపారాలను స్థాపించాలని కోరుకునే వ్యవస్థాపకులు మరియు పెట్టుబడిదారుల కోసం."
          },
          viewAll: "అన్ని వీసా సేవలను చూడండి"
        },
        cta: {
          title: "మీ వీసా దరఖాస్తును ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?",
          subtitle: "మీ వీసా దరఖాస్తు ప్రక్రియ అంతటా వ్యక్తిగత మార్గదర్శకత్వం మరియు మద్దతు కోసం ఈరోజే మా నిపుణుల బృందాన్ని సంప్రదించండి.",
          buttonText: "ఇప్పుడే సంప్రదించండి"
        },
        trustedPartner: {
          title: "మీ విశ్వసనీయ వీసా భాగస్వామి",
          description1: "US వీసా దరఖాస్తు ప్రక్రియలో అనేక దశలు ఉంటాయి, మీ ప్రయోజనం కోసం సరైన వీసా రకాన్ని నిర్ణయించడం నుండి పత్రాలను సిద్ధం చేయడం మరియు వీసా ఇంటర్వ్యూకు హాజరయ్యే వరకు. SSJSలో, మేము ప్రతి దశలో నిపుణుల మార్గదర్శకత్వాన్ని అందిస్తాము.",
          description2: "మా అనుభవజ్ఞుల బృందం అవసరాలను అర్థం చేసుకోవడంలో, మీ దరఖాస్తును సిద్ధం చేయడంలో మరియు ఆమోదం అవకాశాలను గరిష్టీకరించడంలో మీకు సహాయం చేస్తుంది. మేము మీకు ఖచ్చితమైన సలహా ఇవ్వడానికి తాజా వలస విధానాలు మరియు విధానాలతో అప్‌డేట్‌గా ఉంటాము.",
          description3: "మీరు పర్యాటనం, వ్యాపారం, విద్య లేదా పని కోసం యునైటెడ్ స్టేట్స్‌ను సందర్శించాలని ప్లాన్ చేస్తున్నారా, మేము మీ నిర్దిష్ట అవసరాలకు అనుకూలమైన ప్రత్యేక సేవలను అందిస్తాము.",
          learnMore: "మా గురించి మరింత తెలుసుకోండి"
        },
        connecting: {
          title: "దేశాలను కలుపుట, భవిష్యత్తును నిర్మించడం",
          description: "SSJS వీసా సేవలు వృత్తిపరమైన వీసా కన్సల్టింగ్ సేవలు, సాంస్కృతిక మార్పిడి కార్యక్రమాలు మరియు విద్యా అవకాశాల ద్వారా భారతదేశం మరియు యునైటెడ్ స్టేట్స్ మధ్య కనెక్షన్‌ను బలోపేతం చేయడంలో ప్రత్యేకత కలిగి ఉంది."
        },
        stats: {
          successfulVisas: "విజయవంతమైన వీసాలు",
          yearsExperience: "సంవత్సరాల అనుభవం",
          successRate: "విజయ రేటు"
        }
      },

      // Contact Page
      contact: {
        title: "సంప్రదించండి",
        subtitle: "వ్యక్తిగత సహాయం కోసం మా వీసా నిపుణులను సంప్రదించండి",
        quickContact: "త్వరిత సంప్రదింపు",
        getStartedToday: "ఈరోజే ప్రారంభించండి",
        contactInfo: "సంప్రదింపు సమాచారం",
        personalInfo: "వ్యక్తిగత సమాచారం",
        visaServiceType: "వీసా సేవ రకం",
        tellUs: "మీ అవసరాలు లేదా ఫీడ్‌బ్యాక్ గురించి మాకు చెప్పండి",
        form: {
          firstName: "మొదటి పేరు",
          lastName: "చివరి పేరు",
          email: "ఇమెయిల్ చిరునామా",
          phone: "ఫోన్ నంబర్",
          visaType: "వీసా రకం",
          message: "మీ సందేశం",
          messagePlaceholder: "దయచేసి మా సేవల గురించి మీ అభిప్రాయం, మెరుగుపరచడానికి సూచనలు, మా వీసా సహాయ ప్రక్రియ గురించి ప్రశ్నలు లేదా మీరు మాకు తెలుసుకోవాలని అనుకునే ఏవైనా ఇతర వ్యాఖ్యలను పంచుకోండి. మీ అభిప్రాయం మీకు మెరుగైన సేవలు అందించడానికి మాకు సహాయపడుతుంది.",
          submit: "సందేశం పంపండి",
          sending: "పంపుతోంది...",
          selectVisa: "వీసా రకాన్ని ఎంచుకోండి",
          required: "ఈ ఫీల్డ్ అవసరం",
          invalidEmail: "చెల్లని ఇమెయిల్ చిరునామా",
          invalidPhone: "చెల్లని ఫోన్ నంబర్",
          visaTypes: {
            tourist: "పర్యాటక వీసా (B-2)",
            business: "వ్యాపార వీసా (B-1)",
            student: "విద్యార్థి వీసా (F-1)",
            work: "వర్క్ వీసా (H-1B)",
            family: "కుటుంబ వీసా",
            investment: "పెట్టుబడి వీసా",
            other: "ఇతర"
          }
        },
        success: "ధన్యవాదాలు! మీ సందేశం విజయవంతంగా పంపబడింది. మేము త్వరలో మీను తిరిగి సంప్రదిస్తాము.",
        error: "క్షమించండి, మీ సందేశాన్ని పంపడంలో లోపం ఉంది. దయచేసి మళ్లీ ప్రయత్నించండి లేదా నేరుగా మమ్మల్ని సంప్రదించండి.",
        info: {
          phone: "ఫోన్",
          email: "ఇమెయిల్",
          hours: "వ్యాపార సమయం",
          hoursValue: "సోమవారం - శుక్రవారం: ఉదయం 9:00 - సాయంత్రం 6:00"
        },
        faq: {
          title: "తరచుగా అడిగే ప్రశ్నలు",
          subtitle: "మమ్మల్ని సంప్రదించడం గురించి సాధారణ ప్రశ్నలు",
          items: [
            {
              question: "కన్సల్టేషన్‌కు ముందు నేను ఏ సమాచారాన్ని సిద్ధం చేసుకోవాలి?",
              answer: "మీ కన్సల్టేషన్‌కు ముందు, మీ ప్రయాణ ప్రణాళికలు, సందర్శన ప్రయోజనం, వ్యక్తిగత సమాచారం, ఉపాధి చరిత్ర మరియు ఏవైనా మునుపటి US వీసా దరఖాస్తులు లేదా తిరస్కరణల వివరాలు ఉంటే సహాయకరంగా ఉంటుంది."
            },
            {
              question: "సంప్రదింపు ఫారమ్‌ను సమర్పించిన తర్వాత ప్రతిస్పందన పొందడానికి ఎంత సమయం పడుతుంది?",
              answer: "మేము సాధారణంగా 24-48 వ్యాపార గంటలలోపు అన్ని విచారణలకు ప్రతిస్పందిస్తాము. అత్యవసర విషయాల కోసం, మేము నేరుగా మాకు కాల్ చేయమని సిఫార్సు చేస్తాము."
            },
            {
              question: "మీరు రిమోట్ కన్సల్టేషన్లను అందిస్తారా?",
              answer: "అవును, వ్యక్తిగతంగా మా కార్యాలయాన్ని సందర్శించలేని క్లయింట్‌ల కోసం మేము ఫోన్, వీడియో కాల్ లేదా ఇమెయిల్ ద్వారా కన్సల్టేషన్లను అందిస్తాము."
            },
            {
              question: "ప్రారంభ కన్సల్టేషన్‌లకు ఏవైనా రుసుము ఉందా?",
              answer: "మేము ఉచిత 15-నిమిషాల ప్రారంభ అంచనాను అందిస్తాము. మరింత వివరణాత్మక కన్సల్టేషన్‌ల కోసం, మీరు మాతో కొనసాగాలని నిర్ణయించుకుంటే భవిష్యత్ సేవలకు వర్తించే నామమాత్రపు రుసుము ఉంటుంది."
            },
            {
              question: "మీ కన్సల్టెంట్లు ఏ భాషలు మాట్లాడతారు?",
              answer: "మా వైవిధ్యమైన క్లయింట్‌లకు మెరుగైన సేవలందించడానికి మా కన్సల్టెంట్లు ఇంగ్లీష్, స్పానిష్, మాండరిన్, హిందీ మరియు అరబిక్‌లలో ప్రవాహంగా మాట్లాడతారు."
            },
            {
              question: "మీరు అత్యవసర వీసా దరఖాస్తులతో సహాయం చేయగలరా?",
              answer: "అవును, అత్యవసర కేసుల కోసం మేము వేగవంతమైన సేవలను అందిస్తాము, అయితే అదనపు రుసుము వర్తించవచ్చు. దయచేసి మీ నిర్దిష్ట సమయపరిధి మరియు అవసరాలను చర్చించడానికి నేరుగా మమ్మల్ని సంప్రదించండి."
            }
          ]
        }
      },

      // Footer
      footer: {
        companyName: "SSJS వీసా సేవలు",
        description: "మీ అమెరికన్ కలను సాధించడంలో సహాయపడటానికి వృత్తిపరమైన వీసా దరఖాస్తు సేవలు.",
        quickLinks: "త్వరిత లింకులు",
        visaTypes: "వీసా రకాలు",
        contactInfo: "సంప్రదింపు సమాచారం",
        services: "సేవలు",
        contact: "సంప్రదింపు",
        followUs: "మమ్మల్ని అనుసరించండి",
        copyright: "SSJS వీసా సేవలు. అన్ని హక్కులు రక్షించబడ్డాయి.",
        tagline: "భారత-అమెరికా వీసా నిపుణులు",
        phone: "ఫోన్:",
        email: "ఇమెయిల్:",
        privacyPolicy: "గోప్యతా విధానం",
        termsOfService: "సేవా నిబంధనలు",
        visaLinks: {
          b1b2: "B1/B2 పర్యాటకం మరియు వ్యాపారం",
          f1: "F1 విద్యార్థి",
          h1b: "H1B వర్క్",
          l1: "L1 ఇంట్రా-కంపెనీ బదిలీ"
        }
      }
    }
  },

  // Tamil Language (ta)
  ta: {
    translation: {
      // Navigation
      nav: {
        home: "முகப்பு",
        services: "விசா சேவைகள்",
        about: "எங்களைப் பற்றி",
        contact: "தொடர்பு கொள்ள",
        analytics: "பகுப்பாய்வு"
      },
      
      // Homepage
      home: {
        hero: {
          title: "அமெரிக்காவுக்கான உங்கள் பயணம் இங்கே தொடங்குகிறது",
          subtitle: "உங்கள் அமெரிக்க கனவை நிஜமாக்க தொழில்முறை விசா விண்ணப்ப சேவைகள்",
          buttonText: "விசா சேவைகளை ஆராயுங்கள்"
        },
        welcome: {
          title: "SSJS விசா சேவைகளுக்கு வரவேற்கிறோம்! 👋",
          subtitle: "நீங்கள் இங்கே இருப்பதில் நாங்கள் மிகவும் மகிழ்ச்சியடைகிறோம்! எங்கள் நிபுணர் குழு தொழில்முறை விசா விண்ணப்ப சேవைகளுடன் உங்கள் அமெரிக்க கனவை நிஜமாக்க அர்ப்பணிக்கப்பட்டுள்ளது.",
          whyChoose: "SSJS ஏன் தேர்வு செய்ய வேண்டும்?",
          benefits: [
            "✈️ அனைத்து விசா வகைகளுக்கும் நிபுணர் வழிகாட்டுதல்",
            "📄 முழுமையான விண்ணப்ப உதவி",
            "⚡விரைவான செயலாக்க நேரம்",
            "🎯அதிக வெற்றி விகிதம்",
            "💬24/7 வாடிக்கையாளர் ஆதரவு"
          ],
          exploreServices: "விசா சேவைகளை ஆராயுங்கள்",
          freeConsultation: "இலவச ஆலோசனை பெறுங்கள்",
          disclaimer: "இந்த வரவேற்பு செய்தி உங்கள் முதல் வருகையில் மட்டுமே தோன்றும்"
        },
        introduction: {
          title: "அமெரிக்க விசா விண்ணப்ப செயல்முறை",
          subtitle: "அமெரிக்க விசா விண்ணப்ப செயல்முறை சிக்கலானதாக இருக்கும். ஒவ்வொரு படியிலும் உங்களுக்கு வழிகாட்ட நாங்கள் இங்கே இருக்கிறோம்."
        },
        services: {
          title: "எங்கள் விசா சேவைகள்",
          subtitle: "அனைத்து வகையான அமெரிக்க விசாக்களுக்கும் நாங்கள் விரிவான உதவியை வழங்குகிறோம்",
          tourist: {
            title: "சுற்றுலா விசா (B-2)",
            description: "ஓய்வு பயணம், குடும்பத்தினரைச் சந்திப்பதற்கு அல்லது அமெரிக்காவில் மருத்துவ சிகிச்சைக்காக சரியானது."
          },
          business: {
            title: "வணிக விசா (B-1)",
            description: "அமெரிக்காவில் வணிக கூட்டங்கள், மாநாடுகள் மற்றும் தொழில்முறை ஆலோசனைகளுக்காக."
          },
          student: {
            title: "மாணவர் விசா (F-1)",
            description: "அமெரிக்க பல்கலைக்கழகங்கள், கல்லூரிகள் மற்றும் கல்வி நிறுவனங்களில் கல்வி படிப்புக்காக."
          },
          work: {
            title: "வேலை விசா (H-1B)",
            description: "அமெரிக்காவில் வேலை வாய்ப்புகளை தேடும் திறமையான தொழில் வல்லுநர்களுக்காக."
          },
          family: {
            title: "குடும்ப விசா",
            description: "குடும்ப மீளமைப்பு மற்றும் அமெரிக்காவில் அன்புக்குரியவர்களுடன் சேர மணமக்கள்/நிச்சயதார்த்தம் விசாக்களுக்காக."
          },
          investment: {
            title: "முதலீட்டு விசா",
            description: "அமெரிக்காவில் வணிக முயற்சிகளை நிறுவ விரும்பும் தொழில்முனைவோர் மற்றும் முதலீட்டாளர்களுக்காக."
          },
          viewAll: "அனைத்து விசா சேவைகளையும் பார்க்க"
        },
        cta: {
          title: "உங்கள் விசா விண்ணப்பத்தைத் தொடங்க தயாரா?",
          subtitle: "உங்கள் விசா விண்ணப்ப செயல்முறை முழுவதும் தனிப்பட்ட வழிகாட்டுதல் மற்றும் ஆதரவுக்காக இன்றே எங்கள் நிபுணர் குழுவைத் தொடர்பு கொள்ளுங்கள்.",
          buttonText: "இப்போது தொடர்பு கொள்ளுங்கள்"
        },
        trustedPartner: {
          title: "உங்கள் நம்பகமான விசா பங்குதாரர்",
          description1: "அமெரிக்க விசா விண்ணப்ப செயல்முறையில் பல படிகள் உள்ளன, உங்கள் நோக்கத்திற்கான சரியான விசா வகையை தீர்மானிப்பதில் இருந்து ஆவணங்களை தயாரித்து விசா நேர்காணலில் கலந்து கொள்வது வரை. SSJSல், ஒவ்வொரு கட்டத்திலும் நாங்கள் நிபுணத்துவ வழிகாட்டுதலை வழங்குகிறோம்.",
          description2: "எங்கள் அனுபவமிக்க தொழில்வல்லுநர்கள் குழு தேவைகளைப் புரிந்துகொள்வதில், உங்கள் விண்ணப்பத்தைத் தயாரிப்பதில் மற்றும் ஒப்புதல் வாய்ப்புகளை அதிகரிப்பதில் உங்களுக்கு உதவும். உங்களுக்கு துல்லியமான ஆலோசனை வழங்க சமீபத்திய குடியேற்ற கொள்கைகள் மற்றும் நடைமுறைகளுடன் நாங்கள் புதுப்பித்துக்கொண்டே இருக்கிறோம்.",
          description3: "நீங்கள் சுற்றுலா, வணிகம், கல்வி அல்லது வேலைக்காக அமெரிக்காவைப் பார்வையிட திட்டமிட்டுள்ளீர்களா, உங்கள் குறிப்பிட்ட தேவைகளுக்கு ஏற்ப நாங்கள் சிறப்பு சேவைகளை வழங்குகிறோம்.",
          learnMore: "எங்களைப் பற்றி மேலும் அறிய"
        },
        connecting: {
          title: "நாடுகளை இணைத்தல், எதிர்காலத்தை கட்டமைத்தல்",
          description: "SSJS விசா சேவைகள் தொழில்முறை விசா ஆலோசனை சேவைகள், கலாச்சார பரிமாற்ற நிகழ்ச்சிகள் மற்றும் கல்வி வாய்ப்புகள் மூலம் இந்தியாவிற்கும் அமெரிக்காவிற்கும் இடையேயான தொடர்பை வலுப்படுத்துவதில் நிபுணத்துவம் பெற்றுள்ளது."
        },
        stats: {
          successfulVisas: "வெற்றிகரமான விசாக்கள்",
          yearsExperience: "ஆண்டுகள் அனுபவம்",
          successRate: "வெற்றி விகிதம்"
        }
      },

      // Contact Page
      contact: {
        title: "தொடர்பு கொள்ளுங்கள்",
        subtitle: "தனிப்பட்ட உதவிக்காக எங்கள் விசா நிபுணர்களைத் தொடர்பு கொள்ளுங்கள்",
        quickContact: "விரைவான தொடர்பு",
        getStartedToday: "இன்றே தொடங்குங்கள்",
        contactInfo: "தொடர்பு தகவல்",
        personalInfo: "தனிப்பட்ட தகவல்",
        visaServiceType: "விசா சேவை வகை",
        tellUs: "உங்கள் தேவைகள் அல்லது கருத்துக்களைப் பற்றி எங்களிடம் கூறுங்கள்",
        form: {
          firstName: "முதல் பெயர்",
          lastName: "கடைசி பெயர்",
          email: "மின்னஞ்சல் முகவரி",
          phone: "தொலைபேசி எண்",
          visaType: "விசா வகை",
          message: "உங்கள் செய்தி",
          messagePlaceholder: "தயவுசெய்து எங்கள் சேவைகள் பற்றிய உங்கள் கருத்துக்கள், மேம்பாட்டுக்கான பரிந்துரைகள், எங்கள் விசா உதவி செயல்முறை பற்றிய கேள்விகள் அல்லது நீங்கள் எங்களுக்குத் தெரிவிக்க விரும்பும் ஏதேனும் பிற கருத்துகளைப் பகிர்ந்து கொள்ளுங்கள். உங்கள் கருத்துக்கள் உங்களுக்கு சிறந்த சேவை செய்ய எங்களுக்கு உதவுகின்றன.",
          submit: "செய்தி அனுப்பு",
          sending: "அனுப்பப்படுகிறது...",
          selectVisa: "விசா வகையைத் தேர்ந்தெடுக்கவும்",
          required: "இந்த புலம் அவசியம்",
          invalidEmail: "தவறான மின்னஞ்சல் முகவரி",
          invalidPhone: "தவறான தொலைபேசி எண்",
          visaTypes: {
            tourist: "சுற்றுலா விசா (B-2)",
            business: "வணிக விசா (B-1)",
            student: "மாணவர் விசா (F-1)",
            work: "வேலை விசா (H-1B)",
            family: "குடும்ப விசா",
            investment: "முதலீட்டு விசா",
            other: "மற்றவை"
          }
        },
        success: "நன்றி! உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது. நாங்கள் விரைவில் உங்களைத் தொடர்பு கொள்வோம்.",
        error: "மன்னிக்கவும், உங்கள் செய்தியை அனுப்புவதில் பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும் அல்லது நேரடியாக எங்களைத் தொடர்பு கொள்ளுங்கள்.",
        info: {
          phone: "தொலைபேசி",
          email: "மின்னஞ்சல்",
          hours: "வணிக நேரம்",
          hoursValue: "திங்கள் - வெள்ளி: காலை 9:00 - மாலை 6:00"
        },
        faq: {
          title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
          subtitle: "எங்களைத் தொடர்பு கொள்வது பற்றிய பொதுவான கேள்விகள்",
          items: [
            {
              question: "ஆலோசனைக்கு முன் நான் எந்த தகவலைத் தயார் செய்ய வேண்டும்?",
              answer: "உங்கள் ஆலோசனைக்கு முன், உங்கள் பயணத் திட்டங்கள், வருகையின் நோக்கம், தனிப்பட்ட தகவல், வேலை வரலாறு மற்றும் ஏதேனும் முந்தைய அமெரிக்க விசா விண்ணப்பங்கள் அல்லது நிராகரிப்புகள் பற்றிய விவரங்களைக் கொண்டிருப்பது உதவிகரமாக இருக்கும்."
            },
            {
              question: "தொடர்பு படிவத்தைச் சமர்ப்பித்த பின் பதில் பெற எவ்வளவு நேரம் ஆகும்?",
              answer: "நாங்கள் பொதுவாக 24-48 வணிக நேரங்களுக்குள் அனைத்து விசாரணைகளுக்கும் பதிலளிக்கிறோம். அவசர விஷயங்களுக்கு, நாங்கள் நேரடியாக எங்களை அழைக்க பரிந்துரைக்கிறோம்."
            },
            {
              question: "நீங்கள் தொலைநிலை ஆலோசனைகளை வழங்குகிறீர்களா?",
              answer: "ஆம், எங்கள் அலுவலகத்திற்கு நேரில் வர முடியாத வாடிக்கையாளர்களுக்கு தொலைபேசி, வீடியோ அழைப்பு அல்லது மின்னஞ்சல் மூலம் ஆலோசனைகளை வழங்குகிறோம்."
            },
            {
              question: "ஆரம்ப ஆலோசனைகளுக்கு ஏதேனும் கட்டணம் உண்டா?",
              answer: "நாங்கள் இலவச 15-நிமிட ஆரம்ப மதிப்பீட்டை வழங்குகிறோம். மேலும் விரிவான ஆலோசனைகளுக்கு, நீங்கள் எங்களுடன் தொடர முடிவு செய்தால் எதிர்கால சேவைகளுக்குப் பயன்படுத்தக்கூடிய குறைந்த கட்டணம் உள்ளது."
            },
            {
              question: "உங்கள் ஆலோசகர்கள் எந்த மொழிகளைப் பேசுகிறார்கள்?",
              answer: "எங்கள் வேறுபட்ட வாடிக்கையாளர்களுக்கு சிறந்த சேவை செய்ய எங்கள் ஆலோசகர்கள் ஆங்கிலம், ஸ்பானிஷ், மாண்டரின், இந்தி மற்றும் அரபிக் மொழிகளில் சரளமாகப் பேசுகிறார்கள்."
            },
            {
              question: "நீங்கள் அவசர விசா விண்ணப்பங்களுக்கு உதவ முடியுமா?",
              answer: "ஆம், அவசர வழக்குகளுக்கு நாங்கள் விரைவான சேவைகளை வழங்குகிறோம், இருப்பினும் கூடுதல் கட்டணங்கள் பொருந்தும். உங்கள் குறிப்பிட்ட கால அளவு மற்றும் தேவைகளைப் பற்றி விவாதிக்க தயவுசெய்து நேரடியாக எங்களைத் தொடர்பு கொள்ளுங்கள்."
            }
          ]
        }
      },

      // Footer
      footer: {
        companyName: "SSJS விசா சேவைகள்",
        description: "உங்கள் அமெரிக்க கனவை அடைய உதவும் தொழில்முறை விசா விண்ணப்ப சேவைகள்.",
        quickLinks: "விரைவான இணைப்புகள்",
        visaTypes: "விசா வகைகள்",
        contactInfo: "தொடர்பு தகவல்",
        services: "சேவைகள்",
        contact: "தொடர்பு",
        followUs: "எங்களைப் பின்தொடருங்கள்",
        copyright: "SSJS விசா சேவைகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.",
        tagline: "இந்தியா-அமெரிக்கா விசா நிபுணர்கள்",
        phone: "தொலைபேசி:",
        email: "மின்னஞ்சல்:",
        privacyPolicy: "தனியுரிமைக் கொள்கை",
        termsOfService: "சேவை விதிமுறைகள்",
        visaLinks: {
          b1b2: "B1/B2 சுற்றுலா மற்றும் வணிகம்",
          f1: "F1 மாணவர்",
          h1b: "H1B வேலை",
          l1: "L1 நிறுவன-உள் மாற்றம்"
        }
      }
    }
  },

  // Gujarati Language (gu)
  gu: {
    translation: {
      // Navigation
      nav: {
        home: "હોમ",
        services: "વિઝા સેવાઓ",
        about: "અમારા વિશે",
        contact: "સંપર્ક કરો",
        analytics: "વિશ્લેષણ"
      },
      
      // Homepage
      home: {
        hero: {
          title: "અમેરિકાની તમારી યાત્રા અહીં શરૂ થાય છે",
          subtitle: "તમારા અમેરિકન સ્વપ્નને સાકાર કરવા માટે વ્યાવસાયિક વિઝા અરજી સેવાઓ",
          buttonText: "વિઝા સેવાઓનું અન્વેષણ કરો"
        },
        welcome: {
          title: "SSJS વિઝા સેવાઓમાં આપનું સ્વાગત છે! 👋",
          subtitle: "તમે અહીં છો તેનાથી અમે ખૂબ રોમાંચિત છીએ! અમારી નિષ્ણાત ટીમ વ્યાવસાયિક વિઝા અરજી સેવાઓ સાથે તમારા અમેરિકન સ્વપ્નને સાકાર કરવા માટે સમર્પિત છે.",
          whyChoose: "શા માટે SSJS પસંદ કરવું?",
          benefits: [
            "✈️ બધા વિઝા પ્રકારો માટે નિષ્ણાત માર્ગદર્શન",
            "📄 સંપૂર્ણ અરજી સહાય",
            "⚡ઝડપી પ્રોસેસિંગ સમય",
            "🎯ઉચ્ચ સફળતા દર",
            "💬24/7 ગ્રાહક સહાય"
          ],
          exploreServices: "વિઝા સેવાઓનું અન્વેષણ કરો",
          freeConsultation: "મફત સલાહ મેળવો",
          disclaimer: "આ સ્વાગત સંદેશ ફક્ત તમારી પ્રથમ મુલાકાતે દેખાય છે"
        },
        introduction: {
          title: "યુએસ વિઝા અરજી પ્રક્રિયા",
          subtitle: "યુએસ વિઝા અરજી પ્રક્રિયા જટિલ હોઈ શકે છે. દરેક પગલે તમને માર્ગદર્શન આપવા માટે અમે અહીં છીએ."
        },
        services: {
          title: "અમારી વિઝા સેવાઓ",
          subtitle: "અમે બધા પ્રકારના યુએસ વિઝા માટે વ્યાપક સહાય પ્રદાન કરીએ છીએ",
          tourist: {
            title: "પ્રવાસી વિઝા (B-2)",
            description: "આરામની મુસાફરી, કુટુંબને મળવા અથવા યુનાઇટેડ સ્ટેટ્સમાં તબીબી સારવાર માટે સંપૂર્ણ."
          },
          business: {
            title: "બિઝનેસ વિઝા (B-1)",
            description: "યુએસમાં બિઝનેસ મીટિંગ્સ, કોન્ફરન્સ અને વ્યાવસાયિક સલાહ માટે."
          },
          student: {
            title: "વિદ્યાર્થી વિઝા (F-1)",
            description: "યુએસ યુનિવર્સિટીઓ, કોલેજો અને શૈક્ષણિક સંસ્થાઓમાં શૈક્ષણિક અભ્યાસ માટે."
          },
          work: {
            title: "કાર્ય વિઝા (H-1B)",
            description: "યુનાઇટેડ સ્ટેટ્સમાં રોજગારની તકો શોધતા કુશળ પ્રોફેશનલ્સ માટે."
          },
          family: {
            title: "કુટુંબ વિઝા",
            description: "કુટુંબનું પુનર્મિલન અને યુએસમાં પ્રિયજનો સાથે જોડાવા માટે જીવનસાથી/મંગેતર વિઝા માટે."
          },
          investment: {
            title: "રોકાણ વિઝા",
            description: "યુએસમાં વ્યાપારી સાહસો સ્થાપવા માંગતા ઉદ્યોગસાહસિકો અને રોકાણકારો માટે."
          },
          viewAll: "બધી વિઝા સેવાઓ જુઓ"
        },
        cta: {
          title: "તમારી વિઝા અરજી શરૂ કરવા તૈયાર છો?",
          subtitle: "તમારી વિઝા અરજી પ્રક્રિયા દરમિયાન વ્યક્તિગત માર્ગદર્શન અને સહાય માટે આજે જ અમારી નિષ્ણાત ટીમનો સંપર્ક કરો.",
          buttonText: "હવે સંપર્ક કરો"
        },
        trustedPartner: {
          title: "તમારા વિશ્વસનીય વિઝા ભાગીદાર",
          description1: "યુએસ વિઝા અરજી પ્રક્રિયામાં અનેક પગલાં સામેલ છે, તમારા હેતુ માટે યોગ્ય વિઝા પ્રકાર નક્કી કરવાથી લઈને દસ્તાવેજો તૈયાર કરવા અને વિઝા ઇન્ટરવ્યુમાં હાજરી આપવા સુધી. SSJSમાં, અમે દરેક તબક્કે નિષ્ણાત માર્ગદર્શન પ્રદાન કરીએ છીએ.",
          description2: "અમારી અનુભવી પ્રોફેશનલ્સની ટીમ તમને જરૂરિયાતો સમજવામાં, તમારી અરજી તૈયાર કરવામાં અને મંજૂરીની શક્યતાઓને મહત્તમ બનાવવામાં મદદ કરશે. અમે તમને સચોટ સલાહ આપવા માટે નવીનતમ ઇમિગ્રેશન નીતિઓ અને પ્રક્રિયાઓ સાથે અપડેટ રહીએ છીએ.",
          description3: "તમે પ્રવાસ, વ્યાપાર, શિક્ષણ અથવા કામ માટે યુનાઇટેડ સ્ટેટ્સની મુલાકાત લેવાનું આયોજન કરી રહ્યા છો, અમે તમારી વિશિષ્ટ જરૂરિયાતોને અનુરૂપ વિશેષજ્ઞ સેવાઓ પ્રદાન કરીએ છીએ.",
          learnMore: "અમારા વિશે વધુ જાણો"
        },
        connecting: {
          title: "રાષ્ટ્રોને જોડવું, ભવિષ્યનું નિર્માણ કરવું",
          description: "SSJS વિઝા સેવાઓ વ્યાવસાયિક વિઝા કન્સલ્ટિંગ સેવાઓ, સાંસ્કૃતિક વિનિમય કાર્યક્રમો અને શૈક્ષણિક તકો દ્વારા ભારત અને યુનાઇટેડ સ્ટેટ્સ વચ્ચેના જોડાણને મજબૂત બનાવવામાં વિશેષતા ધરાવે છે."
        },
        stats: {
          successfulVisas: "સફળ વિઝા",
          yearsExperience: "વર્ષોનો અનુભવ",
          successRate: "સફળતા દર"
        }
      },

      // Contact Page
      contact: {
        title: "સંપર્ક કરો",
        subtitle: "વ્યક્તિગત સહાય માટે અમારા વિઝા નિષ્ણાતોનો સંપર્ક કરો",
        quickContact: "ઝડપી સંપર્ક",
        getStartedToday: "આજે જ શરૂ કરો",
        contactInfo: "સંપર્ક માહિતી",
        personalInfo: "વ્યક્તિગત માહિતી",
        visaServiceType: "વિઝા સેવા પ્રકાર",
        tellUs: "તમારી જરૂરિયાતો અથવા પ્રતિસાદ વિશે અમને કહો",
        form: {
          firstName: "પ્રથમ નામ",
          lastName: "છેલ્લું નામ",
          email: "ઇમેઇલ સરનામું",
          phone: "ફોન નંબર",
          visaType: "વિઝા પ્રકાર",
          message: "તમારો સંદેશ",
          messagePlaceholder: "કૃપા કરીને અમારી સેવાઓ વિશે તમારા પ્રતિસાદ, સુધારણા માટેના સૂચનો, અમારી વિઝા સહાય પ્રક્રિયા વિશે પ્રશ્નો અથવા અન્ય કોઈ ટિપ્પણીઓ શેર કરો જે તમે અમને જણાવવા માંગો છો. તમારો પ્રતિસાદ અમને તમને વધુ સારી સેવા આપવામાં મદદ કરે છે.",
          submit: "સંદેશ મોકલો",
          sending: "મોકલી રહ્યા છે...",
          selectVisa: "વિઝા પ્રકાર પસંદ કરો",
          required: "આ ફીલ્ડ આવશ્યક છે",
          invalidEmail: "અમાન્ય ઇમેઇલ સરનામું",
          invalidPhone: "અમાન્ય ફોન નંબર",
          visaTypes: {
            tourist: "પ્રવાસી વિઝા (B-2)",
            business: "બિઝનેસ વિઝા (B-1)",
            student: "વિદ્યાર્થી વિઝા (F-1)",
            work: "કાર્ય વિઝા (H-1B)",
            family: "કુટુંબ વિઝા",
            investment: "રોકાણ વિઝા",
            other: "અન્ય"
          }
        },
        success: "આભાર! તમારો સંદેશ સફળતાપૂર્વક મોકલાયો છે. અમે જલ્દીથી તમારો સંપર્ક કરીશું.",
        error: "માફ કરશો, તમારો સંદેશ મોકલવામાં ભૂલ આવી છે. કૃપા કરીને ફરી પ્રયાસ કરો અથવા સીધો અમારો સંપર્ક કરો.",
        info: {
          phone: "ફોન",
          email: "ઇમેઇલ",
          hours: "વ્યવસાયિક સમય",
          hoursValue: "સોમવાર - શુક્રવાર: સવારે 9:00 થી સાંજે 6:00"
        },
        faq: {
          title: "વારંવાર પૂછાતા પ્રશ્નો",
          subtitle: "અમારો સંપર્ક કરવા વિશે સામાન્ય પ્રશ્નો",
          items: [
            {
              question: "સલાહ લેતા પહેલાં મારે કઈ માહિતી તૈયાર કરવી જોઈએ?",
              answer: "તમારી સલાહ પહેલાં, તમારી મુસાફરીની યોજનાઓ, મુલાકાતનો હેતુ, વ્યક્તિગત માહિતી, રોજગારનો ઇતિહાસ અને કોઈપણ અગાઉની યુએસ વિઝા અરજીઓ અથવા નકારણાની વિગતો હોવી ઉપયોગી છે."
            },
            {
              question: "સંપર્ક ફોર્મ સબમિટ કર્યા બાદ જવાબ મળવામાં કેટલો સમય લાગે છે?",
              answer: "અમે સામાન્ય રીતે 24-48 વ્યવસાયિક કલાકોમાં બધી પૂછપરછનો જવાબ આપીએ છીએ. તાત્કાલિક બાબતો માટે, અમે સીધો અમને કૉલ કરવાની ભલામણ કરીએ છીએ."
            },
            {
              question: "શું તમે રિમોટ સલાહ આપો છો?",
              answer: "હા, અમે એવા ક્લાયન્ટ્સ માટે ફોન, વીડિયો કૉલ અથવા ઇમેઇલ દ્વારા સલાહ આપીએ છીએ જે વ્યક્તિગત રૂપે અમારી ઓફિસમાં આવી શકતા નથી."
            },
            {
              question: "શું પ્રારંભિક સલાહ માટે કોઈ ફી છે?",
              answer: "અમે મફત 15-મિનિટનું પ્રારંભિક મૂલ્યાંકન આપીએ છીએ. વધુ વિગતવાર સલાહ માટે, નજીવી ફી છે જે ભવિષ્યની સેવાઓ માટે લાગુ કરી શકાય છે જો તમે અમારી સાથે આગળ વધવાનું નક્કી કરો."
            },
            {
              question: "તમારા સલાહકારો કઈ ભાષાઓ બોલે છે?",
              answer: "અમારા વિવિધ ક્લાયન્ટ્સની વધુ સારી સેવા કરવા માટે અમારા સલાહકારો અંગ્રેજી, સ્પેનિશ, મેન્ડરિન, હિંદી અને અરબીમાં અસ્ખલિત બોલે છે."
            },
            {
              question: "શું તમે તાત્કાલિક વિઝા અરજીઓમાં મદદ કરી શકો છો?",
              answer: "હા, અમે તાત્કાલિક કેસો માટે ઝડપી સેવાઓ આપીએ છીએ, જોકે વધારાની ફી લાગુ થઈ શકે છે. કૃપા કરીને તમારી વિશિષ્ટ સમયમર્યાદા અને જરૂરિયાતો વિકે ચર્ચા કરવા માટે સીધો અમારો સંપર્ક કરો."
            }
          ]
        }
      },

      // Footer
      footer: {
        companyName: "SSJS વિઝા સેવાઓ",
        description: "તમારા અમેરિકન સ્વપ્નને હાંસલ કરવામાં મદદ કરવા માટે વ્યાવસાયિક વિઝા અરજી સેવાઓ.",
        quickLinks: "ઝડપી લિંક્સ",
        visaTypes: "વિઝા પ્રકારો",
        contactInfo: "સંપર્ક માહિતી",
        services: "સેવાઓ",
        contact: "સંપર્ક",
        followUs: "અમને ફોલો કરો",
        copyright: "SSJS વિઝા સેવાઓ. બધા અધિકારો સુરક્ષિત છે.",
        tagline: "ભારત-અમેરિકા વિઝા નિષ્ણાતો",
        phone: "ફોન:",
        email: "ઇમેઇલ:",
        privacyPolicy: "ગોપનીયતા નીતિ",
        termsOfService: "સેવાની શરતો",
        visaLinks: {
          b1b2: "B1/B2 પ્રવાસ અને વ્યાપાર",
          f1: "F1 વિદ્યાર્થી",
          h1b: "H1B કાર્ય",
          l1: "L1 ઇન્ટ્રા-કંપની ટ્રાન્સફર"
        }
      }
    }
  },

  // Punjabi Language (pa)
  pa: {
    translation: {
      // Navigation
      nav: {
        home: "ਘਰ",
        services: "ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ",
        about: "ਸਾਡੇ ਬਾਰੇ",
        contact: "ਸੰਪਰਕ ਕਰੋ",
        analytics: "ਵਿਸ਼ਲੇਸ਼ਣ"
      },
      
      // Homepage
      home: {
        hero: {
          title: "ਅਮਰੀਕਾ ਲਈ ਤੁਹਾਡਾ ਸਫਰ ਇੱਥੇ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ",
          subtitle: "ਤੁਹਾਡੇ ਅਮਰੀਕੀ ਸੁਪਨੇ ਨੂੰ ਸਾਕਾਰ ਕਰਨ ਲਈ ਪੇਸ਼ੇਵਰ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਸੇਵਾਵਾਂ",
          buttonText: "ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ ਦੀ ਖੋਜ ਕਰੋ"
        },
        welcome: {
          title: "SSJS ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ! 👋",
          subtitle: "ਅਸੀਂ ਤੁਹਾਨੂੰ ਇੱਥੇ ਦੇਖ ਕੇ ਬਹੁਤ ਖੁਸ਼ ਹਾਂ! ਸਾਡੀ ਮਾਹਰ ਟੀਮ ਪੇਸ਼ੇਵਰ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਸੇਵਾਵਾਂ ਨਾਲ ਤੁਹਾਡੇ ਅਮਰੀਕੀ ਸੁਪਨੇ ਨੂੰ ਸਾਕਾਰ ਕਰਨ ਲਈ ਸਮਰਪਿਤ ਹੈ।",
          whyChoose: "SSJS ਕਿਉਂ ਚੁਣੋ?",
          benefits: [
            "✈️ ਸਾਰੇ ਵੀਜ਼ਾ ਕਿਸਮਾਂ ਲਈ ਮਾਹਰ ਮਾਰਗਦਰਸ਼ਨ",
            "📄ਸੰਪੂਰਨ ਅਰਜ਼ੀ ਸਹਾਇਤਾ",
            "⚡ਤੇਜ਼ ਪ੍ਰੋਸੈਸਿੰਗ ਸਮਾਂ",
            "🎯ਉੱਚ ਸਫਲਤਾ ਦਰ",
            "💬24/7 ਗਾਹਕ ਸਹਾਇਤਾ"
          ],
          exploreServices: "ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ ਦੀ ਖੋਜ ਕਰੋ",
          freeConsultation: "ਮੁਫਤ ਸਲਾਹ ਲਓ",
          disclaimer: "ਇਹ ਸੁਆਗਤ ਸੰਦੇਸ਼ ਕੇਵਲ ਤੁਹਾਡੀ ਪਹਿਲੀ ਮੁਲਾਕਾਤ 'ਤੇ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ"
        },
        introduction: {
          title: "ਅਮਰੀਕੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ",
          subtitle: "ਅਮਰੀਕੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਗੁੰਝਲਦਾਰ ਹੋ ਸਕਦੀ ਹੈ। ਹਰ ਕਦਮ 'ਤੇ ਤੁਹਾਨੂੰ ਮਾਰਗਦਰਸ਼ਨ ਦੇਣ ਲਈ ਅਸੀਂ ਇੱਥੇ ਹਾਂ।"
        },
        services: {
          title: "ਸਾਡੀਆਂ ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ",
          subtitle: "ਅਸੀਂ ਸਾਰੇ ਕਿਸਮ ਦੇ ਅਮਰੀਕੀ ਵੀਜ਼ਿਆਂ ਲਈ ਵਿਆਪਕ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ",
          tourist: {
            title: "ਸੈਰ-ਸਪਾਟਾ ਵੀਜ਼ਾ (B-2)",
            description: "ਆਰਾਮ ਦੀ ਯਾਤਰਾ, ਪਰਿਵਾਰ ਨੂੰ ਮਿਲਣ ਜਾਂ ਸੰਯੁਕਤ ਰਾਜ ਅਮਰੀਕਾ ਵਿੱਚ ਡਾਕਟਰੀ ਇਲਾਜ ਲਈ ਸੰਪੂਰਨ।"
          },
          business: {
            title: "ਕਾਰੋਬਾਰੀ ਵੀਜ਼ਾ (B-1)",
            description: "ਅਮਰੀਕਾ ਵਿੱਚ ਕਾਰੋਬਾਰੀ ਮੀਟਿੰਗਾਂ, ਕਾਨਫਰੰਸਾਂ ਅਤੇ ਪੇਸ਼ੇਵਰ ਸਲਾਹ ਲਈ।"
          },
          student: {
            title: "ਵਿਦਿਆਰਥੀ ਵੀਜ਼ਾ (F-1)",
            description: "ਅਮਰੀਕੀ ਯੂਨੀਵਰਸਿਟੀਆਂ, ਕਾਲਜਾਂ ਅਤੇ ਸਿੱਖਿਆ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਅਕਾਦਮਿਕ ਅਧਿਐਨ ਲਈ।"
          },
          work: {
            title: "ਕੰਮ ਵੀਜ਼ਾ (H-1B)",
            description: "ਸੰਯੁਕਤ ਰਾਜ ਅਮਰੀਕਾ ਵਿੱਚ ਰੁਜ਼ਗਾਰ ਦੇ ਮੌਕੇ ਲੱਭਣ ਵਾਲੇ ਹੁਨਰਮੰਦ ਪੇਸ਼ੇਵਰਾਂ ਲਈ।"
          },
          family: {
            title: "ਪਰਿਵਾਰਕ ਵੀਜ਼ਾ",
            description: "ਪਰਿਵਾਰਕ ਪੁਨਰ-ਮਿਲਨ ਅਤੇ ਅਮਰੀਕਾ ਵਿੱਚ ਪਿਆਰਿਆਂ ਨਾਲ ਜੁੜਨ ਲਈ ਜੀਵਨਸਾਥੀ/ਮੰਗੇਤਰ ਵੀਜ਼ਿਆਂ ਲਈ।"
          },
          investment: {
            title: "ਨਿਵੇਸ਼ ਵੀਜ਼ਾ",
            description: "ਅਮਰੀਕਾ ਵਿੱਚ ਕਾਰੋਬਾਰੀ ਉੱਦਮ ਸਥਾਪਨਾ ਕਰਨਾ ਚਾਹੁਣ ਵਾਲੇ ਉਦਮੀਆਂ ਅਤੇ ਨਿਵੇਸ਼ਕਾਂ ਲਈ।"
          },
          viewAll: "ਸਾਰੀਆਂ ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ ਵੇਖੋ"
        },
        cta: {
          title: "ਆਪਣੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?",
          subtitle: "ਆਪਣੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਦੌਰਾਨ ਨਿੱਜੀ ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਸਹਾਇਤਾ ਲਈ ਅੱਜ ਹੀ ਸਾਡੀ ਮਾਹਰ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
          buttonText: "ਹੁਣ ਸੰਪਰਕ ਕਰੋ"
        },
        trustedPartner: {
          title: "ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਵੀਜ਼ਾ ਪਾਰਟਨਰ",
          description1: "ਅਮਰੀਕੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਕਈ ਕਦਮ ਸ਼ਾਮਲ ਹਨ, ਤੁਹਾਡੇ ਮਕਸਦ ਲਈ ਸਹੀ ਵੀਜ਼ਾ ਕਿਸਮ ਨਿਰਧਾਰਤ ਕਰਨ ਤੋਂ ਲੈ ਕੇ ਦਸਤਾਵੇਜ਼ ਤਿਆਰ ਕਰਨ ਅਤੇ ਵੀਜ਼ਾ ਇੰਟਰਵਿਊ ਵਿੱਚ ਹਾਜ਼ਰ ਹੋਣ ਤੱਕ। SSJS ਵਿੱਚ, ਅਸੀਂ ਹਰ ਪੜਾਅ ਵਿੱਚ ਮਾਹਰ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।",
          description2: "ਸਾਡੇ ਤਜ਼ਰਬੇਕਾਰ ਪੇਸ਼ੇਵਰਾਂ ਦੀ ਟੀਮ ਤੁਹਾਨੂੰ ਲੋੜਾਂ ਨੂੰ ਸਮਝਣ, ਤੁਹਾਡੀ ਅਰਜ਼ੀ ਤਿਆਰ ਕਰਨ ਅਤੇ ਮਨਜ਼ੂਰੀ ਦੀਆਂ ਸੰਭਾਵਨਾਵਾਂ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰੇਗੀ। ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਹੀ ਸਲਾਹ ਦੇਣ ਲਈ ਨਵੀਨਤਮ ਇਮੀਗ੍ਰੇਸ਼ਨ ਨੀਤੀਆਂ ਅਤੇ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨਾਲ ਅੱਪਡੇਟ ਰਹਿੰਦੇ ਹਾਂ।",
          description3: "ਕੀ ਤੁਸੀਂ ਸੈਰ-ਸਪਾਟਾ, ਕਾਰੋਬਾਰ, ਸਿੱਖਿਆ ਜਾਂ ਕੰਮ ਲਈ ਸੰਯੁਕਤ ਰਾਜ ਅਮਰੀਕਾ ਜਾਣ ਦੀ ਯੋਜਨਾ ਬਣਾ ਰਹੇ ਹੋ, ਅਸੀਂ ਤੁਹਾਡੀਆਂ ਖਾਸ ਲੋੜਾਂ ਅਨੁਸਾਰ ਵਿਸ਼ੇਸ਼ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।",
          learnMore: "ਸਾਡੇ ਬਾਰੇ ਹੋਰ ਜਾਣੋ"
        },
        connecting: {
          title: "ਰਾਸ਼ਟਰਾਂ ਨੂੰ ਜੋੜਨਾ, ਭਵਿੱਖ ਦਾ ਨਿਰਮਾਣ",
          description: "SSJS ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ ਪੇਸ਼ੇਵਰ ਵੀਜ਼ਾ ਸਲਾਹਕਾਰ ਸੇਵਾਵਾਂ, ਸੱਭਿਆਚਾਰਕ ਵਟਾਂਦਰਾ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਸਿੱਖਿਆ ਮੌਕਿਆਂ ਦੁਆਰਾ ਭਾਰਤ ਅਤੇ ਸੰਯੁਕਤ ਰਾਜ ਅਮਰੀਕਾ ਵਿਚਕਾਰ ਕਨੈਕਸ਼ਨ ਨੂੰ ਮਜ਼ਬੂਤ ਬਣਾਉਣ ਵਿੱਚ ਮਾਹਰ ਹੈ।"
        },
        stats: {
          successfulVisas: "ਸਫਲ ਵੀਜ਼ੇ",
          yearsExperience: "ਸਾਲਾਂ ਦਾ ਤਜ਼ਰਬਾ",
          successRate: "ਸਫਲਤਾ ਦਰ"
        }
      },

      // Contact Page
      contact: {
        title: "ਸੰਪਰਕ ਕਰੋ",
        subtitle: "ਨਿੱਜੀ ਸਹਾਇਤਾ ਲਈ ਸਾਡੇ ਵੀਜ਼ਾ ਮਾਹਰਾਂ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
        quickContact: "ਤੁਰੰਤ ਸੰਪਰਕ",
        getStartedToday: "ਅੱਜ ਹੀ ਸ਼ੁਰੂਆਤ ਕਰੋ",
        contactInfo: "ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
        personalInfo: "ਨਿੱਜੀ ਜਾਣਕਾਰੀ",
        visaServiceType: "ਵੀਜ਼ਾ ਸੇਵਾ ਕਿਸਮ",
        tellUs: "ਆਪਣੀਆਂ ਲੋੜਾਂ ਜਾਂ ਫੀਡਬੈਕ ਬਾਰੇ ਸਾਨੂੰ ਦੱਸੋ",
        form: {
          firstName: "ਪਹਿਲਾ ਨਾਮ",
          lastName: "ਆਖਰੀ ਨਾਮ",
          email: "ਈਮੇਲ ਪਤਾ",
          phone: "ਫੋਨ ਨੰਬਰ",
          visaType: "ਵੀਜ਼ਾ ਕਿਸਮ",
          message: "ਤੁਹਾਡਾ ਸੰਦੇਸ਼",
          messagePlaceholder: "ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ ਬਾਰੇ ਆਪਣੇ ਫੀਡਬੈਕ, ਸੁਧਾਰ ਲਈ ਸੁਝਾਅ, ਸਾਡੀ ਵੀਜ਼ਾ ਸਹਾਇਤਾ ਪ੍ਰਕਿਰਿਆ ਬਾਰੇ ਸਵਾਲ, ਜਾਂ ਕੋਈ ਹੋਰ ਟਿੱਪਣੀਆਂ ਸਾਂਝੀਆਂ ਕਰੋ ਜੋ ਤੁਸੀਂ ਸਾਨੂੰ ਦੱਸਣਾ ਚਾਹੁੰਦੇ ਹੋ। ਤੁਹਾਡਾ ਫੀਡਬੈਕ ਸਾਨੂੰ ਤੁਹਾਡੀ ਬਿਹਤਰ ਸੇਵਾ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
          submit: "ਸੰਦੇਸ਼ ਭੇਜੋ",
          sending: "ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
          selectVisa: "ਵੀਜ਼ਾ ਕਿਸਮ ਚੁਣੋ",
          required: "ਇਹ ਫੀਲਡ ਲਾਜ਼ਮੀ ਹੈ",
          invalidEmail: "ਗਲਤ ਈਮੇਲ ਪਤਾ",
          invalidPhone: "ਗਲਤ ਫੋਨ ਨੰਬਰ",
          visaTypes: {
            tourist: "ਸੈਰ-ਸਪਾਟਾ ਵੀਜ਼ਾ (B-2)",
            business: "ਕਾਰੋਬਾਰੀ ਵੀਜ਼ਾ (B-1)",
            student: "ਵਿਦਿਆਰਥੀ ਵੀਜ਼ਾ (F-1)",
            work: "ਕੰਮ ਵੀਜ਼ਾ (H-1B)",
            family: "ਪਰਿਵਾਰਕ ਵੀਜ਼ਾ",
            investment: "ਨਿਵੇਸ਼ ਵੀਜ਼ਾ",
            other: "ਹੋਰ"
          }
        },
        success: "ਧੰਨਵਾਦ! ਤੁਹਾਡਾ ਸੰਦੇਸ਼ ਸਫਲਤਾਪੂਰਵਕ ਭੇਜਿਆ ਗਿਆ ਹੈ। ਅਸੀਂ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
        error: "ਮਾਫ ਕਰਨਾ, ਤੁਹਾਡਾ ਸੰਦੇਸ਼ ਭੇਜਣ ਵਿੱਚ ਗਲਤੀ ਹੋਈ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ਸਿੱਧੇ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
        info: {
          phone: "ਫੋਨ",
          email: "ਈਮੇਲ",
          hours: "ਕਾਰੋਬਾਰੀ ਸਮਾਂ",
          hoursValue: "ਸੋਮਵਾਰ - ਸ਼ੁੱਕਰਵਾਰ: ਸਵੇਰੇ 9:00 - ਸ਼ਾਮ 6:00"
        },
        faq: {
          title: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
          subtitle: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਬਾਰੇ ਆਮ ਸਵਾਲ",
          items: [
            {
              question: "ਸਲਾਹ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਮੈਨੂੰ ਕਿਹੜੀ ਜਾਣਕਾਰੀ ਤਿਆਰ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ?",
              answer: "ਤੁਹਾਡੀ ਸਲਾਹ ਤੋਂ ਪਹਿਲਾਂ, ਤੁਹਾਡੀਆਂ ਯਾਤਰਾ ਯੋਜਨਾਵਾਂ, ਫੇਰੀ ਦਾ ਮਕਸਦ, ਨਿੱਜੀ ਜਾਣਕਾਰੀ, ਰੁਜ਼ਗਾਰ ਦਾ ਇਤਿਹਾਸ ਅਤੇ ਕੋਈ ਵੀ ਪਿਛਲੀ ਅਮਰੀਕੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀਆਂ ਜਾਂ ਇਨਕਾਰ ਦੀ ਵਿਸਥਾਰ ਹੋਣਾ ਮਦਦਗਾਰ ਹੈ।"
            },
            {
              question: "ਸੰਪਰਕ ਫਾਰਮ ਜਮਾਂ ਕਰਨ ਤੋਂ ਬਾਅਦ ਜਵਾਬ ਮਿਲਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ?",
              answer: "ਅਸੀਂ ਆਮ ਤੌਰ 'ਤੇ 24-48 ਕਾਰੋਬਾਰੀ ਘੰਟਿਆਂ ਵਿੱਚ ਸਾਰੀਆਂ ਪੁੱਛਗਿੱਛਾਂ ਦਾ ਜਵਾਬ ਦਿੰਦੇ ਹਾਂ। ਜ਼ਰੂਰੀ ਮਾਮਲਿਆਂ ਲਈ, ਅਸੀਂ ਸਿੱਧੇ ਸਾਨੂੰ ਕਾਲ ਕਰਨ ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦੇ ਹਾਂ।"
            },
            {
              question: "ਕੀ ਤੁਸੀਂ ਰਿਮੋਟ ਸਲਾਹ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹੋ?",
              answer: "ਹਾਂ, ਅਸੀਂ ਉਨ੍ਹਾਂ ਗਾਹਕਾਂ ਲਈ ਫੋਨ, ਵੀਡੀਓ ਕਾਲ, ਜਾਂ ਈਮੇਲ ਰਾਹੀਂ ਸਲਾਹ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ ਜੋ ਵਿਅਕਤੀਗਤ ਤੌਰ 'ਤੇ ਸਾਡੇ ਦਫਤਰ ਨਹੀਂ ਆ ਸਕਦੇ।"
            },
            {
              question: "ਕੀ ਸ਼ੁਰੂਆਤੀ ਸਲਾਹ ਲਈ ਕੋਈ ਫੀਸ ਹੈ?",
              answer: "ਅਸੀਂ ਮੁਫਤ 15-ਮਿੰਟ ਦਾ ਸ਼ੁਰੂਆਤੀ ਮੁਲਾਂਕਣ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ। ਵਧੇਰੇ ਵਿਸਤ੍ਰਿਤ ਸਲਾਹ ਲਈ, ਇੱਕ ਮਾਮੂਲੀ ਫੀਸ ਹੈ ਜੋ ਭਵਿੱਖ ਦੀਆਂ ਸੇਵਾਵਾਂ 'ਤੇ ਲਾਗੂ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ ਜੇ ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਅੱਗੇ ਵਧਣ ਦਾ ਫੈਸਲਾ ਕਰਦੇ ਹੋ।"
            },
            {
              question: "ਤੁਹਾਡੇ ਸਲਾਹਕਾਰ ਕਿਹੜੀਆਂ ਭਾਸ਼ਾਵਾਂ ਬੋਲਦੇ ਹਨ?",
              answer: "ਸਾਡੇ ਵਿਭਿੰਨ ਗਾਹਕਾਂ ਦੀ ਬਿਹਤਰ ਸੇਵਾ ਕਰਨ ਲਈ ਸਾਡੇ ਸਲਾਹਕਾਰ ਅੰਗਰੇਜ਼ੀ, ਸਪੈਨਿਸ਼, ਮੈਂਡਰਿਨ, ਹਿੰਦੀ ਅਤੇ ਅਰਬੀ ਵਿੱਚ ਰਵਾਨ ਹਨ।"
            },
            {
              question: "ਕੀ ਤੁਸੀਂ ਜ਼ਰੂਰੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀਆਂ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ?",
              answer: "ਹਾਂ, ਅਸੀਂ ਜ਼ਰੂਰੀ ਕੇਸਾਂ ਲਈ ਤੇਜ਼ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ, ਹਾਲਾਂਕਿ ਵਾਧੂ ਫੀਸ ਲਾਗੂ ਹੋ ਸਕਦੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਖਾਸ ਸਮਾਂ-ਸੀਮਾ ਅਤੇ ਲੋੜਾਂ ਬਾਰੇ ਚਰਚਾ ਕਰਨ ਲਈ ਸਿੱਧੇ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
            }
          ]
        }
      },

      // Footer
      footer: {
        companyName: "SSJS ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ",
        description: "ਤੁਹਾਡੇ ਅਮਰੀਕੀ ਸੁਪਨੇ ਨੂੰ ਹਾਸਲ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਪੇਸ਼ੇਵਰ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਸੇਵਾਵਾਂ।",
        quickLinks: "ਤੁਰੰਤ ਲਿੰਕ",
        visaTypes: "ਵੀਜ਼ਾ ਕਿਸਮਾਂ",
        contactInfo: "ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
        services: "ਸੇਵਾਵਾਂ",
        contact: "ਸੰਪਰਕ",
        followUs: "ਸਾਡੀ ਪਾਰਸ ਕਰੋ",
        copyright: "SSJS ਵੀਜ਼ਾ ਸੇਵਾਵਾਂ। ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
        tagline: "ਭਾਰਤ-ਅਮਰੀਕਾ ਵੀਜ਼ਾ ਮਾਹਰ",
        phone: "ਫੋਨ:",
        email: "ਈਮੇਲ:",
        privacyPolicy: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
        termsOfService: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
        visaLinks: {
          b1b2: "B1/B2 ਸੈਰ-ਸਪਾਟਾ ਅਤੇ ਕਾਰੋਬਾਰ",
          f1: "F1 ਵਿਦਿਆਰਥੀ",
          h1b: "H1B ਕੰਮ",
          l1: "L1 ਇੰਟਰਾ-ਕੰਪਨੀ ਤਬਾਦਲਾ"
        }
      }
    }
  },

  // Malayalam Language (ml)
  ml: {
    translation: {
      // Navigation
      nav: {
        home: "ഹോം",
        services: "വിസ സേവനങ്ങൾ",
        about: "ഞങ്ങളെക്കുറിച്ച്",
        contact: "ബന്ധപ്പെടുക",
        analytics: "അനാലിറ്റിക്സ്"
      },

      // Homepage
      home: {
        hero: {
          title: "അമേരിക്കയിലേക്കുള്ള നിങ്ങളുടെ യാത്ര ഇവിടെ ആരംഭിക്കുന്നു",
          subtitle: "നിങ്ങളുടെ അമേരിക്കൻ സ്വപ്നം യാഥാർത്ഥ്യമാക്കാൻ പ്രൊഫഷണൽ വിസ അപ്ലിക്കേഷൻ സേവനങ്ങൾ",
          buttonText: "വിസ സേവനങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക"
        },
        welcome: {
          title: "SSJS വിസ സേവനങ്ങളിലേക്ക് സ്വാഗതം! 👋",
          subtitle: "നിങ്ങൾ ഇവിടെയുണ്ടെന്നതിൽ ഞങ്ങൾ വളരെ ആവേശത്തിലാണ്! ഞങ്ങളുടെ വിദഗ്ധ ടീം പ്രൊഫഷണൽ വിസ അപ്ലിക്കേഷൻ സേവനങ്ങളിലൂടെ നിങ്ങളുടെ അമേരിക്കൻ സ്വപ്നം യാഥാർത്ഥ്യമാക്കാൻ സമർപ്പിച്ചിരിക്കുന്നു.",
          whyChoose: "എന്തുകൊണ്ട് SSJS തിരഞ്ഞെടുക്കണം?",
          benefits: [
            "✈️ എല്ലാ വിസ തരങ്ങൾക്കും വിദഗ്ധ മാർഗദർശനം",
            "📄 സമ്പൂർണ്ണ അപ്ലിക്കേഷൻ സഹായം",
            "⚡വേഗത്തിലുള്ള പ്രോസസിംഗ് സമയം",
            "🎯ഉയർന്ന വിജയ നിരക്ക്",
            "💬24/7 ഉപഭോക്തൃ പിന്തുണ"
          ],
          exploreServices: "വിസ സേവനങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക",
          freeConsultation: "സൗജന്യ കൺസൾട്ടേഷൻ നേടുക",
          disclaimer: "ഈ സ്വാഗത സന്ദേശം നിങ്ങളുടെ ആദ്യ സന്ദർശനത്തിൽ മാത്രമേ പ്രത്യക്ഷപ്പെടൂ"
        },
        introduction: {
          title: "യുഎസ് വിസ അപ്ലിക്കേഷൻ പ്രക്രിയ",
          subtitle: "യുഎസ് വിസ അപ്ലിക്കേഷൻ പ്രക്രിയ സങ്കീർണ്ണമായിരിക്കാം. ഓരോ ഘട്ടത്തിലും നിങ്ങളെ നയിക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്."
        },
        services: {
          title: "ഞങ്ങളുടെ വിസ സേവനങ്ങൽ",
          subtitle: "എല്ലാ തരത്തിലുള്ള യുഎസ് വിസകൾക്കും ഞങ്ങൾ സമഗ്ര സഹായം നൽകുന്നു",
          tourist: {
            title: "ടൂറിസ്റ്റ് വിസ (B-2)",
            description: "വിനോദ യാത്ര, കുടുംബത്തെ കാണാൻ അല്ലെങ്കിൽ അമേരിക്കയിൽ വൈദ്യ ചികിത്സയ്ക്കായി മികച്ചത്."
          },
          business: {
            title: "ബിസിനസ് വിസ (B-1)",
            description: "യുഎസിലെ ബിസിനസ് മീറ്റിംഗുകൾ, കോൺഫറൻസുകൾ, പ്രൊഫഷണൽ കൺസൾട്ടേഷനുകൾക്കായി."
          },
          student: {
            title: "സ്റ്റുഡന്റ് വിസ (F-1)",
            description: "യുഎസ് സർവകലാശാലകൾ, കോളേജുകൾ, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ അക്കാദമിക് പഠനത്തിനായി."
          },
          work: {
            title: "വർക്ക് വിസ (H-1B)",
            description: "അമേരിക്കയിൽ തൊഴിൽ അവസരങ്ങൾ തേടുന്ന വൈദഗ്ധ്യമുള്ള പ്രൊഫഷണലുകൾക്കായി."
          },
          family: {
            title: "കുടുംബ വിസ",
            description: "കുടുംബ പുനഃസമാഗമത്തിനും യുഎസിലെ പ്രിയപ്പെട്ടവരുമായി ചേരാൻ സ്പൗസ്/ഫയൻസെ വിസകൾക്കായി."
          },
          investment: {
            title: "നിക്ഷേപ വിസ",
            description: "യുഎസിൽ ബിസിനസ് സംരംഭങ്ങൾ സ്ഥാപിക്കാൻ ആഗ്രഹിക്കുന്ന സംരംഭകരും നിക്ഷേപകരുമായി."
          },
          viewAll: "എല്ലാ വിസ സേവനങ്ങളും കാണുക"
        },
        cta: {
          title: "നിങ്ങളുടെ വിസ അപ്ലിക്കേഷൻ ആരംഭിക്കാൻ തയ്യാറാണോ?",
          subtitle: "നിങ്ങളുടെ വിസ അപ്ലിക്കേഷൻ പ്രക്രിയയിലുടനീളം വ്യക്തിഗത മാർഗദർശനത്തിനും പിന്തുണയ്ക്കുമായി ഇന്നുതന്നെ ഞങ്ങളുടെ വിദഗ്ധ ടീമുമായി ബന്ധപ്പെടുക.",
          buttonText: "ഇപ്പോൾ ബന്ധപ്പെടുക"
        },
        trustedPartner: {
          title: "നിങ്ങളുടെ വിശ്വസ്ത വിസ പങ്കാളി",
          description1: "യുഎസ് വിസ അപ്ലിക്കേഷൻ പ്രക്രിയയിൽ നിരവധി ഘട്ടങ്ങൾ ഉൾപ്പെടുന്നു, നിങ്ങളുടെ ഉദ്ദേശ്യത്തിന് ശരിയായ വിസ തരം നിർണ്ണയിക്കുന്നതിൽ നിന്ന് ഡോക്യുമെന്റേഷൻ തയ്യാറാക്കുന്നതും വിസ അഭിമുഖത്തിൽ പങ്കെടുക്കുന്നതും വരെ. SSJS-ൽ, ഞങ്ങൾ ഓരോ ഘട്ടത്തിലും വിദഗ്ധ മാർഗദർശനം നൽകുന്നു.",
          description2: "ഞങ്ങളുടെ പരിചയസമ്പന്നരായ പ്രൊഫഷണലുകളുടെ ടീം ആവശ്യകതകൾ മനസ്സിലാക്കാനും നിങ്ങളുടെ അപ്ലിക്കേഷൻ തയ്യാറാക്കാനും അംഗീകാര സാധ്യതകൾ പരമാവധിയാക്കാനും നിങ്ങളെ സഹായിക്കും. നിങ്ങൾക്ക് കൃത്യമായ ഉപദേശം നൽകാൻ ഞങ്ങൾ ഏറ്റവും പുതിയ ഇമിഗ്രേഷൻ നയങ്ങളും നടപടിക്രമങ്ങളും കൊണ്ട് അപ്ഡേറ്റ് ചെയ്യുന്നു.",
          description3: "നിങ്ങൾ ടൂറിസം, ബിസിനസ്, വിദ്യാഭ്യാസം അല്ലെങ്കിൽ ജോലിക്കായി അമേരിക്ക സന്ദർശിക്കാൻ ആസൂത്രണം ചെയ്യുന്നുണ്ടോ, നിങ്ങളുടെ പ്രത്യേക ആവശ്യങ്ങൾക്ക് അനുസൃതമായി ഞങ്ങൾ സ്പെഷ്യലിസ്റ്റ് സേവനങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.",
          learnMore: "ഞങ്ങളെക്കുറിച്ച് കൂടുതലറിയുക"
        },
        connecting: {
          title: "രാജ്യങ്ങളെ ബന്ധിപ്പിക്കുന്നു, ഭാവി നിർമ്മിക്കുന്നു",
          description: "SSJS വിസ സേവനങ്ങൾ പ്രൊഫഷണൽ വിസ കൺസൾട്ടിംഗ് സേവനങ്ങൾ, സാംസ്കാരിക കൈമാറ്റ പരിപാടികൾ, വിദ്യാഭ്യാസ അവസരങ്ങൾ എന്നിവയിലൂടെ ഇന്ത്യയും അമേരിക്കയും തമ്മിലുള്ള ബന്ധം ശക്തിപ്പെടുത്തുന്നതിൽ വൈദഗ്ധ്യം നേടുന്നു."
        },
        stats: {
          successfulVisas: "വിജയകരമായ വിസകൾ",
          yearsExperience: "വർഷങ്ങളുടെ അനുഭവം",
          successRate: "വിജയ നിരക്ക്"
        }
      },

      // Contact Page
      contact: {
        title: "ബന്ധപ്പെടുക",
        subtitle: "വ്യക്തിഗത സഹായത്തിനായി ഞങ്ങളുടെ വിസ വിദഗ്ധരുമായി ബന്ധപ്പെടുക",
        quickContact: "പെട്ടെന്നുള്ള ബന്ധം",
        getStartedToday: "ഇന്നു തന്നെ ആരംഭിക്കുക",
        contactInfo: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
        personalInfo: "വ്യക്തിഗത വിവരങ്ങൾ",
        visaServiceType: "വിസ സേവന തരം",
        tellUs: "നിങ്ങളുടെ ആവശ്യകതകളെക്കുറിച്ചോ ഫീഡ്ബാക്കെക്കുറിച്ചോ ഞങ്ങളോട് പറയുക",
        form: {
          firstName: "ആദ്യ പേര്",
          lastName: "കുടുംബനാമം",
          email: "ഇമെയിൽ വിലാസം",
          phone: "ഫോൺ നമ്പർ",
          visaType: "വിസ തരം",
          message: "നിങ്ങളുടെ സന്ദേശം",
          messagePlaceholder: "ഞങ്ങളുടെ സേവനങ്ങളെക്കുറിച്ചുള്ള നിങ്ങളുടെ അഭിപ്രായം, പുരോഗതിയ്ക്കുള്ള നിർദ്ദേശങ്ങൾ, ഞങ്ങളുടെ വിസ സഹായ പ്രക്രിയയെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾ അല്ലെങ്കിൽ നിങ്ങൾ ഞങ്ങളെ അറിയിക്കാൻ ആഗ്രഹിക്കുന്ന മറ്റേതെങ്കിലും അഭിപ്രായങ്ങൾ ദയവായി പങ്കിടുക. നിങ്ങളുടെ ഫീഡ്ബാക്ക് നിങ്ങൾക്ക് മികച്ച സേവനം നൽകാൻ ഞങ്ങളെ സഹായിക്കുന്നു.",
          submit: "സന്ദേശം അയയ്ക്കുക",
          sending: "അയക്കുന്നു...",
          selectVisa: "വിസ തരം തിരഞ്ഞെടുക്കുക",
          required: "ഈ ഫീൽഡ് ആവശ്യമാണ്",
          invalidEmail: "അസാധുവായ ഇമെയിൽ വിലാസം",
          invalidPhone: "അസാധുവായ ഫോൺ നമ്പർ",
          visaTypes: {
            tourist: "ടൂറിസ്റ്റ് വിസ (B-2)",
            business: "ബിസിനസ് വിസ (B-1)",
            student: "സ്റ്റുഡന്റ് വിസ (F-1)",
            work: "വർക്ക് വിസ (H-1B)",
            family: "കുടുംബ വിസ",
            investment: "നിക്ഷേപ വിസ",
            other: "മറ്റുള്ളവ"
          }
        },
        success: "നന്ദി! നിങ്ങളുടെ സന്ദേശം വിജയകരമായി അയച്ചു. ഞങ്ങൾ വേഗത്തിൽ നിങ്ങളെ തിരികെ ബന്ധപ്പെടും.",
        error: "ക്ഷമിക്കണം, നിങ്ങളുടെ സന്ദേശം അയയ്ക്കുന്നതിൽ പിശക് സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക അല്ലെങ്കിൽ നേരിട്ട് ഞങ്ങളെ ബന്ധപ്പെടുക.",
        info: {
          phone: "ഫോൺ",
          email: "ഇമെയിൽ",
          hours: "ബിസിനസ് സമയം",
          hoursValue: "തിങ്കൾ - വെള്ളി: രാവിലെ 9:00 - വൈകീട്ട് 6:00"
        }
      },

      // Footer
      footer: {
        companyName: "SSJS വിസ സേവനങ്ങൾ",
        description: "നിങ്ങളുടെ അമേരിക്കൻ സ്വപ്നം നേടാൻ സഹായിക്കുന്നതിന് പ്രൊഫഷണൽ വിസ അപ്ലിക്കേഷൻ സേവനങ്ങൾ.",
        quickLinks: "ദ്രുത ലിങ്കുകൾ",
        visaTypes: "വിസ തരങ്ങൾ",
        contactInfo: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
        services: "സേവനങ്ങൾ",
        contact: "ബന്ധപ്പെടുക",
        followUs: "ഞങ്ങളെ പിന്തുടരുക",
        copyright: "SSJS വിസ സേവനങ്ങൾ. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",
        tagline: "ഇന്ത്യ-അമേരിക്ക വിസ വിദഗ്ധർ",
        phone: "ഫോൺ:",
        email: "ഇമെയിൽ:",
        privacyPolicy: "സ്വകാര്യതാ നയം",
        termsOfService: "സേവന നിബന്ധനകൾ",
        visaLinks: {
          b1b2: "B1/B2 ടൂറിസ്റ്റ് & ബിസിനസ്",
          f1: "F1 സ്റ്റുഡന്റ്",
          h1b: "H1B വർക്ക്",
          l1: "L1 ഇൻട്രാ-കമ്പനി ട്രാൻസ്ഫർ"
        }
      },

      // Visitor Counter
      visitor: {
        visitors: "സന്ദർശകർ",
        latestAppointments: "ഏറ്റവും പുതിയ അപ്പോയിന്റ്മെന്റുകൾ",
        facebookPrompt: "കൂടുതൽ തെളിവുകൾ കാണാൻ ആഗ്രഹിക്കുന്നുണ്ടോ? ഞങ്ങളുടെ ഫേസ്ബുക്ക് പേജ് സന്ദർശിക്കുക",
        visitFacebook: "ഫേസ്ബുക്ക് പേജ് സന്ദർശിക്കുക"
      },

      // Common
      common: {
        loading: "ലോഡ് ചെയ്യുന്നു...",
        error: "ഒരു പിശക് സംഭവിച്ചു",
        tryAgain: "വീണ്ടും ശ്രമിക്കുക",
        close: "അടയ്ക്കുക",
        back: "പിന്നോട്ട്",
        next: "അടുത്തത്",
        submit: "സമർപ്പിക്കുക",
        cancel: "റദ്ദാക്കുക",
        save: "സേവ് ചെയ്യുക"
      }
    }
  }
};

// Custom language detector that includes location-based detection
const customLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    // Check if user has manually selected a language
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage !== 'en') {
      callback(savedLanguage);
      return;
    }

    // Check if we have a location-detected language
    const locationLanguage = localStorage.getItem('locationDetectedLanguage');
    if (locationLanguage) {
      callback(locationLanguage);
      return;
    }

    // Check if geolocation permissions are already granted
    const checkLocationPermission = async () => {
      try {
        // Check if Permissions API is supported
        if ('permissions' in navigator) {
          const permission = await navigator.permissions.query({ name: 'geolocation' });
          
          // Only use geolocation if permission is already granted
          if (permission.state === 'granted' && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                
                // Delhi and NCR region (50km radius) - Hindi
                const delhiDistance = calculateDistance(latitude, longitude, 28.6139, 77.2090);
                if (delhiDistance <= 50) {
                  localStorage.setItem('locationDetectedLanguage', 'hi');
                  callback('hi');
                  return;
                }

                // Extended Delhi region (100km radius) - Hindi
                if (delhiDistance <= 100) {
                  localStorage.setItem('locationDetectedLanguage', 'hi');
                  callback('hi');
                  return;
                }

                // Mumbai and MMR region (120km radius) - Hindi
                const mumbaiDistance = calculateDistance(latitude, longitude, 19.0760, 72.8777);
                if (mumbaiDistance <= 120) {
                  localStorage.setItem('locationDetectedLanguage', 'hi');
                  callback('hi');
                  return;
                }

                // Punjab region - Punjabi
                const punjabDistance = calculateDistance(latitude, longitude, 31.1471, 75.3412);
                if (punjabDistance <= 150) {
                  localStorage.setItem('locationDetectedLanguage', 'pa');
                  callback('pa');
                  return;
                }

                // Gujarat region - Gujarati
                const gujaratDistance = calculateDistance(latitude, longitude, 23.0225, 72.5714);
                if (gujaratDistance <= 200) {
                  localStorage.setItem('locationDetectedLanguage', 'gu');
                  callback('gu');
                  return;
                }

                // Tamil Nadu region - Tamil
                const tamilNaduDistance = calculateDistance(latitude, longitude, 11.1271, 78.6569);
                if (tamilNaduDistance <= 200) {
                  localStorage.setItem('locationDetectedLanguage', 'ta');
                  callback('ta');
                  return;
                }

                // Telugu region (AP & Telangana) - Telugu
                const teluguDistance = calculateDistance(latitude, longitude, 15.9129, 79.7400);
                if (teluguDistance <= 200) {
                  localStorage.setItem('locationDetectedLanguage', 'te');
                  callback('te');
                  return;
                }

                // Kerala region - Malayalam
                const keralaDistance = calculateDistance(latitude, longitude, 10.8505, 76.2711);
                if (keralaDistance <= 150) {
                  localStorage.setItem('locationDetectedLanguage', 'ml');
                  callback('ml');
                  return;
                }

                // Default to English for other locations
                callback('en');
              },
              (error) => {
                // Geolocation failed even though permission was granted
                callback('en');
              },
              { timeout: 10000, maximumAge: 300000 }
            );
            return;
          }
        }
      } catch (error) {
        // Permissions API not supported or failed, fall back to English
        callback('en');
        return;
      }
      
      // No geolocation permission or not supported, default to English
      callback('en');
    };

    // Call the async function
    checkLocationPermission();
  },
  init: () => {},
  cacheUserLanguage: (lng) => {
    localStorage.setItem('i18nextLng', lng);
  }
};

// Helper function to calculate distance
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

i18n
  .use(customLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;