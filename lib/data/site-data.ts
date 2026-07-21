import type { FAQItem, Testimonial, Concern, Feature, TimelineStep, TherapyService } from "@/types";

export const doctor = {
  name: "Anuja Dange",
  title: "Mental Health Counsellor",
  image: "/counselling-session.png",
  shortBio:
    "With over 7 years of experience across educational institutions and companies, I integrate my passion for psychology into both therapeutic practice and academic teaching — helping children, adolescents, and adults navigate stress, anxiety, trauma, and relationship concerns.",
  fullBio: `With over 7 years of experience across educational institutions, and companies, I integrate my passion for psychology into both therapeutic practice and academic teaching.

As a Mental Health Counsellor, I work with children, adolescents, and adults, helping them manage stress, anxiety, trauma, behavioral challenges, and relationship concerns through evidence-based, inclusive, and client-centered approaches. I conduct therapy sessions and mental health workshops tailored to individual needs.

I believe in bridging the gap between theory and practice, in a counseling room, and creating safe spaces that foster growth, resilience, and self-awareness.

Let's connect to collaborate on achieving mental wellness.`,
  qualifications: [
    "7+ years of experience across educational institutions and corporate settings",
    "Evidence-based, inclusive, and client-centered therapeutic approach",
    "Works with children, adolescents, and adults",
    "Regular mental health workshops and academic teaching",
  ],
  experience: "7+ Years",
  philosophy:
    "I believe in bridging the gap between theory and practice, creating safe spaces in the counseling room that foster growth, resilience, and self-awareness. Therapy is a collaborative journey — let's connect and work towards mental wellness together.",
};

export const concerns: Concern[] = [
  {
    title: "Relationships",
    description: "Navigate conflicts, improve communication, and build deeper connections.",
    icon: "Heart",
    color: "#006837",
  },
  {
    title: "Anxiety & Panic",
    description: "Learn to manage worry, panic attacks, and overwhelming thoughts.",
    icon: "CloudRain",
    color: "#4CAF50",
  },
  {
    title: "Depression",
    description: "Find hope and healing when sadness feels too heavy to carry alone.",
    icon: "Cloud",
    color: "#006837",
  },
  {
    title: "Stress & Burnout",
    description: "Recover balance when work and life demands leave you exhausted.",
    icon: "Flame",
    color: "#8BC34A",
  },
  {
    title: "Overthinking",
    description: "Break free from racing thoughts and mental loops that drain your energy.",
    icon: "Brain",
    color: "#4CAF50",
  },
  {
    title: "Life Direction",
    description: "Gain clarity on purpose, career changes, and major life decisions.",
    icon: "Compass",
    color: "#006837",
  },
  {
    title: "Parenting",
    description: "Support for parents navigating challenges with children of all ages.",
    icon: "Baby",
    color: "#4CAF50",
  },
  {
    title: "Self-Esteem",
    description: "Build confidence and develop a healthier relationship with yourself.",
    icon: "Sparkles",
    color: "#8BC34A",
  },
  {
    title: "Adolescence",
    description: "Guidance for teens facing identity, peer pressure, and emotional turmoil.",
    icon: "Users",
    color: "#006837",
  },
];

export const therapyServices: TherapyService[] = [
  {
    slug: "individual-therapy",
    title: "Individual Therapy",
    description:
      "A structured, collaborative process where therapist and client work together toward clearly defined therapeutic goals — using scientifically validated techniques to produce measurable, lasting change in thinking patterns, emotional regulation, behaviours, and overall wellbeing.",
    icon: "User",
    features: [
      "Structured, goal-oriented sessions",
      "Evidence-based, validated techniques",
      "Lasting change in thoughts & behaviours",
    ],
  },
  {
    slug: "couples-therapy",
    title: "Couple Therapy",
    description:
      "Professional guidance that helps couples communicate more openly, rebuild trust and intimacy, manage conflict in healthier ways, and balance work-life pressures with personal connection.",
    icon: "HeartHandshake",
    features: [
      "Open, effective communication",
      "Rebuilding trust & intimacy",
      "Healthier conflict management",
    ],
  },
  {
    slug: "teen-therapy",
    title: "Teen Therapy",
    description:
      "Online counselling for children and families, offering expert care for anxiety, anger outbursts, behavioural problems, emotional dysregulation, school refusal, academic stress, low self-esteem, social withdrawal, sibling rivalry, and parent-child conflicts.",
    icon: "GraduationCap",
    features: [
      "Anxiety & emotional dysregulation",
      "Academic stress & school refusal",
      "Family & sibling conflict support",
    ],
  },
  {
    slug: "corporate-workshops",
    title: "Corporate Workshops",
    description:
      "Wellness support that fits around real work — quick, confidential counselling sessions, wellness coaching for personal and professional growth, and group workshops that feel like honest conversations, not lectures.",
    icon: "Building2",
    features: [
      "Quick, confidential counselling",
      "Wellness coaching for growth",
      "Honest, conversation-style workshops",
    ],
  },
];

export const howItWorksSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Message on WhatsApp",
    description: "Reach out via WhatsApp to share your concerns and preferred timing.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Choose Appointment",
    description: "Select a convenient date and time for your online session.",
    icon: "Calendar",
  },
  {
    step: 3,
    title: "Attend Session",
    description: "Begin your healing journey in a safe, supportive environment.",
    icon: "Heart",
  },
];

export const features: Feature[] = [
  {
    title: "Affordable",
    description: "Quality therapy at accessible rates with flexible payment options.",
    icon: "IndianRupee",
  },
  {
    title: "Confidential",
    description: "Your privacy is sacred. All sessions are completely confidential.",
    icon: "Shield",
  },
  {
    title: "Qualified",
    description: "Mental Health Counsellor.",
    icon: "Award",
  },
  {
    title: "Online Sessions",
    description: "Secure video sessions from the comfort of your home.",
    icon: "Video",
  },
  {
    title: "Flexible Timing",
    description: "Evening and weekend slots available to fit your schedule.",
    icon: "Clock",
  },
  {
    title: "Personalized Therapy",
    description: "Treatment plans customized to your unique needs and goals.",
    icon: "UserCheck",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Marketing Professional",
    content:
      "Anuja Dange helped me navigate a difficult period of anxiety with such compassion. I finally feel like myself again. Her approach is gentle yet effective.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Rahul & Meera",
    role: "Couple",
    content:
      "We were on the verge of separation. Couples therapy with Anuja Dange gave us tools to communicate and reconnect. We're stronger than ever now.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Ananya Desai",
    role: "College Student",
    content:
      "As a teenager, I was scared to talk about my feelings. Anuja Dange made me feel heard and understood. Therapy changed my life.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    name: "Vikram Patel",
    role: "Entrepreneur",
    content:
      "Burnout was destroying my health and business. Anuja Dange helped me set boundaries and rediscover balance. Highly recommend Soulful Sessions.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    name: "Sneha Kulkarni",
    role: "Homemaker",
    content:
      "After years of putting everyone else first, I finally prioritized my mental health. Anuja Dange's warmth and expertise made all the difference.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
];

export const homeFaq: FAQItem[] = [
  {
    question: "Is therapy confidential?",
    answer:
      "Absolutely. All sessions are strictly confidential. Your privacy is protected by professional ethics and legal standards. Information is only shared with your explicit consent or in rare cases required by law.",
  },
  {
    question: "How long is one session?",
    answer:
      "Each therapy session lasts approximately 50 minutes. This allows sufficient time for meaningful conversation while respecting your schedule.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes! You can book appointments through our website, WhatsApp, or by calling directly. All sessions are conducted online only, via video call.",
  },
  {
    question: "Do you offer couples therapy?",
    answer:
      "Yes, we do couple therapy to strengthen relationships, navigate conflict and improve communication.",
  },
  {
    question: "What is the consultation fee?",
    answer:
      "Sessions are ₹700 for 50 minutes. Corporate workshop pricing varies based on requirements. Flexible payment options are available.",
  },
];

export const experienceTimeline = [
  {
    year: "2019",
    role: "Counseling Psychologist",
    organization: "Educational Institutions",
  },
  {
    year: "2021",
    role: "Corporate Wellness Facilitator",
    organization: "Mental Health Workshops for Organizations",
  },
  {
    year: "2023",
    role: "Academic Teaching & Practice",
    organization: "Bridging Theory & Client-Centered Therapy",
  },
  {
    year: "Present",
    role: "Founder",
    organization: "Soulful Sessions",
  },
];
