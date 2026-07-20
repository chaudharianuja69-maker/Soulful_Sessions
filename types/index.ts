export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  symptoms: string[];
  causes: string[];
  howTherapyHelps: string[];
  benefits: string[];
  faq: FAQItem[];
}

export interface TherapyService {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Concern {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
}

export interface Experience {
  year: string;
  role: string;
  organization: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  sessionType: string;
  message?: string;
}

export interface ContactFormData extends AppointmentFormData {}
