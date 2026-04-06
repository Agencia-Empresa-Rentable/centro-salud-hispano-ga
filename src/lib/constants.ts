import type { Service, TeamMember, Testimonial, BlogPost, NavLink, BusinessHours } from '@/types'

// ─── Business Info ────────────────────────────────────────────────────────────
export const BUSINESS = {
  name: 'Centro de Salud Hispano de Georgia',
  nameShort: 'CDS Hispano GA',
  phone: '+14704481172',
  phoneDisplay: '(470) 448-1172',
  whatsapp: 'https://wa.me/14704481172',
  address: '3475 Holcomb Bridge Rd, Peachtree Corners, GA 30092',
  addressLine1: '3475 Holcomb Bridge Rd',
  addressLine2: 'Peachtree Corners, GA 30092',
  city: 'Peachtree Corners',
  state: 'Georgia',
  zip: '30092',
  lat: 33.9536295,
  lng: -84.2439759,
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.1!2d-84.2439759!3d33.9536295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a1c849d5db45%3A0x1e15afa0afec8248!2sCentro%20de%20Salud%20Hispano%20de%20Georgia!5e0!3m2!1ses!2sus!4v1680000000000!5m2!1ses!2sus',
  googleMapsUrl:
    'https://www.google.com/maps/place/Centro+de+Salud+Hispano+de+Georgia/@33.9536295,-84.2439759,17z',
  siteUrl: 'https://centrodesaludhispanoga.com',
  slogan: 'Su Salud, Nuestra Misión',
  sloganEn: 'Your Health, Our Mission',
  tagline: 'Atención médica bilingüe para toda la familia',
  taglineEn: 'Bilingual medical care for the whole family',
  copyright: 'Empresa Rentable LLC',
} as const

// ─── Hours ────────────────────────────────────────────────────────────────────
export const HOURS: BusinessHours[] = [
  { dayEs: 'Lunes', dayEn: 'Monday', hours: '9:30 AM – 6:00 PM' },
  { dayEs: 'Martes', dayEn: 'Tuesday', hours: '9:30 AM – 6:00 PM' },
  { dayEs: 'Miércoles', dayEn: 'Wednesday', hours: '9:30 AM – 6:00 PM' },
  { dayEs: 'Jueves', dayEn: 'Thursday', hours: '9:30 AM – 6:00 PM' },
  { dayEs: 'Viernes', dayEn: 'Friday', hours: '9:00 AM – 4:00 PM' },
  { dayEs: 'Sábado', dayEn: 'Saturday', hours: null },
  { dayEs: 'Domingo', dayEn: 'Sunday', hours: '9:00 AM – 4:00 PM' },
]

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { hrefEs: '/', labelEs: 'Inicio', labelEn: 'Home' },
  { hrefEs: '/servicios', labelEs: 'Servicios', labelEn: 'Services' },
  { hrefEs: '/nosotros', labelEs: 'Nosotros', labelEn: 'About Us' },
  { hrefEs: '/blog', labelEs: 'Blog de Salud', labelEn: 'Health Blog' },
  { hrefEs: '/contacto', labelEs: 'Contacto', labelEn: 'Contact' },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { valueEs: '5,000+', valueEn: '5,000+', labelEs: 'Pacientes Atendidos', labelEn: 'Patients Served', suffix: '+' },
  { valueEs: '10+', valueEn: '10+', labelEs: 'Años de Experiencia', labelEn: 'Years of Experience', suffix: '+' },
  { valueEs: '100%', valueEn: '100%', labelEs: 'Bilingüe Español/Inglés', labelEn: 'Bilingual Spanish/English', suffix: '%' },
  { valueEs: '✓', valueEn: '✓', labelEs: 'Sin Importar su Estatus', labelEn: 'Regardless of Status', suffix: '' },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 'medicina-familiar',
    icon: '🏥',
    nameEs: 'Medicina Familiar',
    nameEn: 'Family Medicine',
    descriptionEs: 'Atención médica completa para toda la familia, desde niños hasta adultos mayores.',
    descriptionEn: 'Complete medical care for the whole family, from children to seniors.',
    detailsEs: [
      'Consultas médicas generales',
      'Exámenes físicos anuales',
      'Manejo de enfermedades crónicas',
      'Vacunaciones y prevención',
      'Referencias a especialistas',
    ],
    detailsEn: [
      'General medical consultations',
      'Annual physical exams',
      'Chronic disease management',
      'Vaccinations and prevention',
      'Specialist referrals',
    ],
    faqEs: [
      {
        question: '¿Necesito cita para consulta general?',
        answer: 'Aceptamos pacientes con y sin cita. Sin embargo, tener cita le garantiza menor tiempo de espera.',
      },
      {
        question: '¿Atienden a pacientes sin seguro médico?',
        answer: 'Sí, atendemos a todos los pacientes. Aceptamos efectivo, tarjetas de débito y crédito.',
      },
    ],
    faqEn: [
      {
        question: 'Do I need an appointment for a general consultation?',
        answer: 'We accept walk-in patients, but having an appointment guarantees shorter wait times.',
      },
      {
        question: 'Do you see uninsured patients?',
        answer: 'Yes, we see all patients. We accept cash, debit and credit cards.',
      },
    ],
  },
  {
    id: 'pediatria',
    icon: '👶',
    nameEs: 'Pediatría',
    nameEn: 'Pediatrics',
    descriptionEs: 'Cuidado médico especializado para sus hijos desde recién nacidos hasta adolescentes.',
    descriptionEn: 'Specialized medical care for your children from newborns to teenagers.',
    detailsEs: [
      'Revisiones de bienestar infantil',
      'Vacunas del programa de inmunización',
      'Tratamiento de enfermedades comunes',
      'Evaluación del desarrollo',
      'Revisiones escolares y deportivas',
    ],
    detailsEn: [
      'Child wellness checkups',
      'Immunization program vaccines',
      'Treatment of common illnesses',
      'Developmental assessments',
      'School and sports physicals',
    ],
    faqEs: [
      {
        question: '¿Desde qué edad atienden a los niños?',
        answer: 'Atendemos a niños desde recién nacidos hasta los 18 años de edad.',
      },
      {
        question: '¿Tienen el esquema de vacunación completo?',
        answer: 'Sí, contamos con las vacunas del programa oficial de inmunización del estado de Georgia.',
      },
    ],
    faqEn: [
      {
        question: 'From what age do you see children?',
        answer: 'We see children from newborns through 18 years of age.',
      },
      {
        question: 'Do you have the full vaccination schedule?',
        answer: 'Yes, we carry vaccines from Georgia\'s official immunization program.',
      },
    ],
  },
  {
    id: 'diabetes-hipertension',
    icon: '💊',
    nameEs: 'Diabetes e Hipertensión',
    nameEn: 'Diabetes & Hypertension',
    descriptionEs: 'Manejo integral y seguimiento personalizado para pacientes con diabetes e hipertensión.',
    descriptionEn: 'Comprehensive management and personalized follow-up for diabetes and hypertension patients.',
    detailsEs: [
      'Control de glucosa en sangre',
      'Monitoreo de presión arterial',
      'Ajuste de medicamentos',
      'Educación en manejo de la diabetes',
      'Plan nutricional personalizado',
    ],
    detailsEn: [
      'Blood glucose monitoring',
      'Blood pressure monitoring',
      'Medication adjustments',
      'Diabetes management education',
      'Personalized nutritional plan',
    ],
    faqEs: [
      {
        question: '¿Con qué frecuencia debo venir si tengo diabetes?',
        answer: 'Recomendamos consultas cada 3 meses para un control óptimo, aunque puede variar según su caso.',
      },
      {
        question: '¿Proporcionan medicamentos en la clínica?',
        answer: 'Emitimos recetas médicas. También orientamos sobre programas de medicamentos a bajo costo en farmacias locales.',
      },
    ],
    faqEn: [
      {
        question: 'How often should I come in if I have diabetes?',
        answer: 'We recommend checkups every 3 months for optimal control, though this may vary per your case.',
      },
      {
        question: 'Do you provide medications at the clinic?',
        answer: 'We issue prescriptions. We also guide patients on low-cost medication programs at local pharmacies.',
      },
    ],
  },
  {
    id: 'covid',
    icon: '🦠',
    nameEs: 'Atención COVID-19',
    nameEn: 'COVID-19 Care',
    descriptionEs: 'Diagnóstico, tratamiento y seguimiento para pacientes con síntomas de COVID-19.',
    descriptionEn: 'Diagnosis, treatment and follow-up for patients with COVID-19 symptoms.',
    detailsEs: [
      'Pruebas de COVID-19 rápidas',
      'Evaluación de síntomas respiratorios',
      'Tratamiento de síntomas agudos',
      'Seguimiento para COVID largo',
      'Orientación sobre vacunas',
    ],
    detailsEn: [
      'Rapid COVID-19 tests',
      'Respiratory symptom evaluation',
      'Acute symptom treatment',
      'Long COVID follow-up',
      'Vaccine guidance',
    ],
    faqEs: [
      {
        question: '¿Hacen pruebas de COVID el mismo día?',
        answer: 'Sí, ofrecemos pruebas rápidas de antígeno con resultados en minutos.',
      },
      {
        question: '¿Atienden sin cita si tengo síntomas de COVID?',
        answer: 'Sí. Si presenta síntomas como fiebre, tos o dificultad para respirar, venga de inmediato.',
      },
    ],
    faqEn: [
      {
        question: 'Do you do same-day COVID tests?',
        answer: 'Yes, we offer rapid antigen tests with results in minutes.',
      },
      {
        question: 'Do you see walk-ins with COVID symptoms?',
        answer: 'Yes. If you have symptoms like fever, cough, or difficulty breathing, come in right away.',
      },
    ],
  },
  {
    id: 'sueros-vitaminados',
    icon: '💉',
    nameEs: 'Sueros Vitaminados',
    nameEn: 'Vitamin IV Therapy',
    descriptionEs: 'Terapia de hidratación intravenosa con vitaminas para recuperar energía y bienestar.',
    descriptionEn: 'Intravenous hydration therapy with vitamins to restore energy and wellbeing.',
    detailsEs: [
      'Sueros de hidratación',
      'Vitamina C en altas dosis',
      'Complejo B para energía',
      'Mezclas personalizadas',
      'Indicados para migraña, fatiga y desintoxicación',
    ],
    detailsEn: [
      'Hydration drips',
      'High-dose Vitamin C',
      'B-complex for energy',
      'Custom blends',
      'Indicated for migraines, fatigue and detox',
    ],
    faqEs: [
      {
        question: '¿Cuánto tiempo dura la terapia IV?',
        answer: 'La sesión típica dura entre 45 y 60 minutos, en un ambiente cómodo y supervisado.',
      },
      {
        question: '¿Necesito orden médica para el suero?',
        answer: 'Se realiza una evaluación médica previa para asegurar que sea el tratamiento adecuado para usted.',
      },
    ],
    faqEn: [
      {
        question: 'How long does IV therapy take?',
        answer: 'A typical session lasts 45–60 minutes in a comfortable, supervised setting.',
      },
      {
        question: 'Do I need a doctor\'s order for IV therapy?',
        answer: 'A prior medical evaluation is conducted to ensure this is the right treatment for you.',
      },
    ],
  },
  {
    id: 'suturas-laboratorio',
    icon: '🔬',
    nameEs: 'Suturas, Cirugías Menores y Laboratorios',
    nameEn: 'Sutures, Minor Surgeries & Labs',
    descriptionEs: 'Procedimientos menores, suturas y exámenes de laboratorio sin necesidad de ir al hospital.',
    descriptionEn: 'Minor procedures, sutures, and laboratory tests without needing to go to a hospital.',
    detailsEs: [
      'Suturas y cierre de heridas',
      'Extracción de uñas encarnadas',
      'Drenaje de abscesos',
      'Exámenes de sangre y orina',
      'Paneles metabólicos completos',
    ],
    detailsEn: [
      'Sutures and wound closure',
      'Ingrown nail removal',
      'Abscess drainage',
      'Blood and urine tests',
      'Complete metabolic panels',
    ],
    faqEs: [
      {
        question: '¿Puedo llegar directamente si tengo una herida que necesita sutura?',
        answer: 'Sí, atendemos urgencias menores sin cita. Si la herida es profunda o hay mucho sangrado, venga de inmediato.',
      },
      {
        question: '¿Cuánto tardan los resultados de laboratorio?',
        answer: 'Los exámenes básicos tienen resultados el mismo día o al día siguiente. Exámenes especializados pueden tardar 2-3 días.',
      },
    ],
    faqEn: [
      {
        question: 'Can I walk in if I have a wound that needs suturing?',
        answer: 'Yes, we handle minor emergencies without appointments. If the wound is deep or bleeding heavily, come right away.',
      },
      {
        question: 'How long do lab results take?',
        answer: 'Basic tests return same-day or next-day results. Specialized tests may take 2–3 days.',
      },
    ],
  },
]

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM: TeamMember[] = [
  {
    id: 'dr-1',
    name: 'Dr. Carlos Mendoza',
    titleEs: 'Médico Familiar',
    titleEn: 'Family Physician',
    specialtyEs: 'Medicina Familiar y Preventiva',
    specialtyEn: 'Family & Preventive Medicine',
    bioEs:
      'El Dr. Mendoza cuenta con más de 12 años de experiencia atendiendo a familias hispanas en Georgia. Su enfoque humanista y bilingüe lo ha convertido en un médico de confianza para la comunidad latinoamericana.',
    bioEn:
      'Dr. Mendoza has over 12 years of experience serving Hispanic families in Georgia. His humanistic, bilingual approach has made him a trusted physician in the Latin American community.',
    languages: ['Español', 'English'],
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 'dr-2',
    name: 'Dra. Laura Vargas',
    titleEs: 'Pediatra',
    titleEn: 'Pediatrician',
    specialtyEs: 'Pediatría y Desarrollo Infantil',
    specialtyEn: 'Pediatrics & Child Development',
    bioEs:
      'La Dra. Vargas se especializa en el cuidado integral de niños y adolescentes. Su paciencia y calidez hacen que tanto los pequeños como sus familias se sientan seguros y atendidos.',
    bioEn:
      'Dr. Vargas specializes in comprehensive care for children and adolescents. Her patience and warmth make both children and their families feel safe and cared for.',
    languages: ['Español', 'English'],
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
  },
  {
    id: 'dr-3',
    name: 'Dr. Roberto Castillo',
    titleEs: 'Internista',
    titleEn: 'Internist',
    specialtyEs: 'Medicina Interna y Enfermedades Crónicas',
    specialtyEn: 'Internal Medicine & Chronic Disease',
    bioEs:
      'El Dr. Castillo es experto en el manejo de enfermedades crónicas como diabetes e hipertensión. Combina medicina basada en evidencia con un trato personalizado para cada paciente.',
    bioEn:
      'Dr. Castillo is an expert in managing chronic diseases like diabetes and hypertension. He combines evidence-based medicine with a personalized approach for each patient.',
    languages: ['Español', 'English', 'Português'],
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'María Guadalupe Hernández',
    city: 'Peachtree Corners, GA',
    rating: 5,
    textEs:
      'Excelente clínica. El Dr. Mendoza es muy atento y explica todo con paciencia. Por fin encontré un lugar donde me atienden en español y me tratan como persona, no como número.',
    textEn:
      'Excellent clinic. Dr. Mendoza is very attentive and explains everything patiently. I finally found a place where I\'m seen in Spanish and treated like a person, not a number.',
  },
  {
    id: 't2',
    name: 'José Antonio Ramírez',
    city: 'Norcross, GA',
    rating: 5,
    textEs:
      'Llevo tres años viniendo aquí para el control de mi diabetes. El equipo es profesional, hablan español y siempre tienen disponibilidad. Lo recomiendo a toda la comunidad latina.',
    textEn:
      'I\'ve been coming here for three years for my diabetes management. The team is professional, they speak Spanish, and they always have availability. I recommend it to the whole Latin community.',
  },
  {
    id: 't3',
    name: 'Ana Lucía Moreno',
    city: 'Duluth, GA',
    rating: 5,
    textEs:
      'Traje a mis hijos por primera vez y quedé impresionada. La Dra. Vargas es increíble con los niños. Se los dejo con toda confianza. El lugar está limpio y la atención es rápida.',
    textEn:
      'I brought my children for the first time and was impressed. Dr. Vargas is amazing with kids. I trust them completely. The place is clean and care is prompt.',
  },
]

// ─── Blog posts ───────────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'diabetes-control-hispanos',
    titleEs: 'Cómo Controlar la Diabetes: Guía para Familias Hispanas',
    titleEn: 'How to Control Diabetes: A Guide for Hispanic Families',
    excerptEs: 'Aprenda las mejores estrategias para manejar la diabetes con cambios de estilo de vida y el apoyo médico adecuado.',
    excerptEn: 'Learn the best strategies to manage diabetes with lifestyle changes and proper medical support.',
    categoryEs: 'Prevención',
    categoryEn: 'Prevention',
    date: '2025-03-15',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
  },
  {
    id: 'b2',
    slug: 'vacunas-ninos-georgia',
    titleEs: 'Vacunas Obligatorias para Niños en Georgia: Todo lo que Necesita Saber',
    titleEn: 'Required Vaccines for Children in Georgia: Everything You Need to Know',
    excerptEs: 'Una guía completa sobre el esquema de vacunación requerido para las escuelas de Georgia y cómo mantener a sus hijos protegidos.',
    excerptEn: 'A complete guide to Georgia\'s required school immunization schedule and how to keep your children protected.',
    categoryEs: 'Salud Familiar',
    categoryEn: 'Family Health',
    date: '2025-02-28',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  },
  {
    id: 'b3',
    slug: 'hipertension-alimentacion',
    titleEs: 'Alimentos que Ayudan a Controlar la Presión Arterial Alta',
    titleEn: 'Foods That Help Control High Blood Pressure',
    excerptEs: 'Descubra qué alimentos incluir y cuáles evitar en su dieta para mantener su presión arterial bajo control de forma natural.',
    excerptEn: 'Discover which foods to include and avoid in your diet to naturally keep your blood pressure under control.',
    categoryEs: 'Nutrición',
    categoryEn: 'Nutrition',
    date: '2025-02-10',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
  },
  {
    id: 'b4',
    slug: 'salud-mental-comunidad-hispana',
    titleEs: 'Salud Mental en la Comunidad Hispana: Rompiendo el Estigma',
    titleEn: 'Mental Health in the Hispanic Community: Breaking the Stigma',
    excerptEs: 'Hablamos sobre la importancia de la salud mental y cómo buscar ayuda sin miedo al juicio o la discriminación.',
    excerptEn: 'We discuss the importance of mental health and how to seek help without fear of judgment or discrimination.',
    categoryEs: 'Salud Mental',
    categoryEn: 'Mental Health',
    date: '2025-01-20',
    image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&h=400&fit=crop',
  },
  {
    id: 'b5',
    slug: 'sueros-vitaminados-beneficios',
    titleEs: '¿Para qué Sirven los Sueros Vitaminados? Beneficios y Usos',
    titleEn: 'What Are Vitamin IV Drips Good For? Benefits and Uses',
    excerptEs: 'Los sueros vitaminados son cada vez más populares. Conozca cuándo están indicados y qué beneficios ofrecen.',
    excerptEn: 'Vitamin IV drips are increasingly popular. Learn when they\'re indicated and what benefits they offer.',
    categoryEs: 'Prevención',
    categoryEn: 'Prevention',
    date: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
  },
  {
    id: 'b6',
    slug: 'acceso-salud-sin-seguro',
    titleEs: 'Cómo Acceder a Atención Médica en Georgia Sin Seguro',
    titleEn: 'How to Access Medical Care in Georgia Without Insurance',
    excerptEs: 'Muchas familias hispanas en Georgia no tienen seguro médico. Sepa cuáles son sus opciones y cómo puede recibir atención de calidad.',
    excerptEn: 'Many Hispanic families in Georgia don\'t have health insurance. Learn about your options and how to receive quality care.',
    categoryEs: 'Recursos',
    categoryEn: 'Resources',
    date: '2024-12-18',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop',
  },
]

// ─── Why Us ───────────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    icon: '🗣️',
    titleEs: 'Hablamos su Idioma',
    titleEn: 'We Speak Your Language',
    descEs:
      'Todo nuestro personal es completamente bilingüe. Se comunicará con su médico directamente en español, sin barreras ni malentendidos.',
    descEn:
      'Our entire staff is fully bilingual. You will communicate with your doctor directly in Spanish, without barriers or misunderstandings.',
  },
  {
    icon: '🤝',
    titleEs: 'Sin Barreras de Seguro',
    titleEn: 'No Insurance Barriers',
    descEs:
      'Atendemos a todos los pacientes, con o sin seguro médico. Aceptamos efectivo, débito y crédito. Su salud no puede esperar.',
    descEn:
      'We see all patients, with or without insurance. We accept cash, debit and credit. Your health cannot wait.',
  },
  {
    icon: '📍',
    titleEs: 'Cerca de Usted',
    titleEn: 'Close to You',
    descEs:
      'Ubicados en el corazón de Peachtree Corners, somos accesibles para toda la comunidad hispana del norte de Atlanta.',
    descEn:
      'Located in the heart of Peachtree Corners, we are accessible to the entire Hispanic community of north Atlanta.',
  },
]

// ─── Values ───────────────────────────────────────────────────────────────────
export const VALUES = [
  { icon: '❤️', titleEs: 'Compasión', titleEn: 'Compassion', descEs: 'Tratamos a cada paciente con respeto, empatía y calidez humana.', descEn: 'We treat every patient with respect, empathy, and human warmth.' },
  { icon: '🌟', titleEs: 'Excelencia', titleEn: 'Excellence', descEs: 'Aplicamos los más altos estándares médicos en cada consulta y procedimiento.', descEn: 'We apply the highest medical standards in every consultation and procedure.' },
  { icon: '🌍', titleEs: 'Inclusión', titleEn: 'Inclusion', descEs: 'Atendemos a todos sin importar su estatus migratorio, seguro o idioma.', descEn: 'We serve everyone regardless of immigration status, insurance, or language.' },
  { icon: '🔒', titleEs: 'Confianza', titleEn: 'Trust', descEs: 'Su privacidad y su información médica están siempre protegidas y en buenas manos.', descEn: 'Your privacy and medical information are always protected and in good hands.' },
]
