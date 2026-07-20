const WHATSAPP_NUMBER = "919326257650";

const WHATSAPP_MESSAGE = `Hi! \u{1F44B}
Thank you for reaching out to Anuja Dange. I'm glad you've taken this first step.
To help me understand your needs and schedule your online therapy session, please share the following details:
* Name:
* Age:
* Contact Number:
* Email (Optional):
* City:
* Reason for Seeking Therapy:
* Preferred Date & Time for the Session:
Once I receive your details, I'll get back to you as soon as possible to confirm your appointment.
Looking forward to connecting with you. \u{1F33F}`;

export const SITE_CONFIG = {
  name: "Soulful Sessions",
  psychologist: "Anuja Dange",
  tagline: "A safe space for your inner world.",
  description:
    "Compassionate psychological support by Anuja Dange. Individual therapy, couples therapy, teen therapy, and corporate workshops.",
  url: "https://soulfulsessions.in",
  phone: "+91 93262 57650",
  whatsapp: WHATSAPP_NUMBER,
  email: "soulfulsessions147@gmail.com",
  address: "Thane, Mumbai, Maharashtra",
  workingHours: {
    weekdays: "Mon - Sat: 10:00 AM - 7:00 PM",
    sunday: "Sunday: By Appointment Only",
  },
  consultationFee: "₹700 per session",
  sessionDuration: "50 minutes",
  social: {
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    instagram: "https://www.instagram.com/anuja.pitre/",
    linkedin: "https://www.linkedin.com/in/anuja-dange-2359b377/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-therapy", label: "Why Therapy" },
  { href: "/faq", label: "FAQ" },
  { href: "/connect", label: "Connect" },
] as const;

export const FOOTER_SERVICES = [
  { href: "/services/anxiety", label: "Anxiety" },
  { href: "/services/depression", label: "Depression" },
  { href: "/services/ocd", label: "OCD" },
  { href: "/services/relationship-issues", label: "Relationship Issues" },
  { href: "/services/career-counselling", label: "Career Counselling" },
  { href: "/services/self-growth", label: "Self Growth" },
] as const;
