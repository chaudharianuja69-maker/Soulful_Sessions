import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "anxiety",
    title: "Anxiety",
    shortDescription: "Manage worry, panic, and overwhelming thoughts with evidence-based therapy.",
    description:
      "Anxiety can feel like a constant companion — racing heart, restless thoughts, and an unshakeable sense of dread. At Soulful Sessions, we help you understand your anxiety triggers and develop practical coping strategies.",
    icon: "CloudRain",
    symptoms: [
      "Persistent worry or fear",
      "Racing heartbeat or sweating",
      "Difficulty concentrating",
      "Sleep disturbances",
      "Avoidance of certain situations",
      "Physical tension and restlessness",
    ],
    causes: [
      "Genetic predisposition",
      "Chronic stress or trauma",
      "Major life transitions",
      "Perfectionism and high expectations",
      "Substance use",
      "Underlying health conditions",
    ],
    howTherapyHelps: [
      "Identify and challenge anxious thought patterns",
      "Learn grounding and breathing techniques",
      "Gradually face feared situations (exposure therapy)",
      "Develop a personalized anxiety management toolkit",
      "Address root causes rather than just symptoms",
    ],
    benefits: [
      "Reduced frequency and intensity of anxiety",
      "Improved sleep and concentration",
      "Greater confidence in daily situations",
      "Healthier coping mechanisms",
      "Enhanced overall quality of life",
    ],
    faq: [
      {
        question: "How long does anxiety therapy take?",
        answer: "Most clients notice improvement within 6-12 sessions, though duration varies based on individual needs.",
      },
      {
        question: "Can therapy cure my anxiety?",
        answer: "Therapy helps you manage anxiety effectively. Many clients experience significant reduction in symptoms and learn lifelong coping skills.",
      },
    ],
  },
  {
    slug: "depression",
    title: "Depression",
    shortDescription: "Find hope and healing when sadness feels too heavy to carry alone.",
    description:
      "Depression is more than sadness — it's a persistent heaviness that affects how you think, feel, and function. Our compassionate approach helps you rediscover joy and purpose.",
    icon: "Cloud",
    symptoms: [
      "Persistent sadness or emptiness",
      "Loss of interest in activities",
      "Fatigue and low energy",
      "Changes in appetite or sleep",
      "Feelings of worthlessness",
      "Difficulty making decisions",
    ],
    causes: [
      "Biochemical imbalances",
      "Traumatic life events",
      "Chronic illness",
      "Relationship difficulties",
      "Grief and loss",
      "Seasonal changes",
    ],
    howTherapyHelps: [
      "Explore underlying emotional patterns",
      "Develop behavioral activation strategies",
      "Challenge negative self-beliefs",
      "Build a support network",
      "Create sustainable self-care routines",
    ],
    benefits: [
      "Renewed sense of hope and purpose",
      "Improved mood and energy levels",
      "Better relationships with loved ones",
      "Enhanced self-worth",
      "Tools for preventing relapse",
    ],
    faq: [
      {
        question: "Is depression treatable?",
        answer: "Yes, depression is highly treatable. Therapy, sometimes combined with medication, helps most people recover significantly.",
      },
      {
        question: "Do I need medication?",
        answer: "Not always. Anuja Dange will assess your needs and may refer you to a psychiatrist if medication could be beneficial alongside therapy.",
      },
    ],
  },
  {
    slug: "ocd",
    title: "OCD",
    shortDescription: "Break free from obsessive thoughts and compulsive behaviors.",
    description:
      "Obsessive-Compulsive Disorder can feel like being trapped in a cycle of intrusive thoughts and rituals. We use proven techniques to help you regain control.",
    icon: "RefreshCw",
    symptoms: [
      "Intrusive, unwanted thoughts",
      "Repetitive behaviors or rituals",
      "Excessive checking or cleaning",
      "Need for symmetry or order",
      "Distress when rituals are prevented",
      "Significant time spent on compulsions",
    ],
    causes: [
      "Genetic factors",
      "Brain chemistry differences",
      "Learned behaviors",
      "Stressful life events",
      "Family history of OCD",
      "Personality traits",
    ],
    howTherapyHelps: [
      "Exposure and Response Prevention (ERP)",
      "Cognitive restructuring for obsessive thoughts",
      "Gradual reduction of compulsive behaviors",
      "Mindfulness techniques for thought acceptance",
      "Family education and support",
    ],
    benefits: [
      "Reduced obsessive thoughts",
      "Decreased compulsive behaviors",
      "Less time lost to rituals",
      "Improved daily functioning",
      "Greater sense of freedom",
    ],
    faq: [
      {
        question: "What is ERP therapy?",
        answer: "Exposure and Response Prevention is the gold standard for OCD treatment, gradually exposing you to triggers while preventing compulsive responses.",
      },
      {
        question: "How effective is therapy for OCD?",
        answer: "ERP has a 60-80% success rate for OCD when practiced consistently with a trained therapist.",
      },
    ],
  },
  {
    slug: "relationship-issues",
    title: "Relationship Issues",
    shortDescription: "Strengthen bonds and resolve conflicts in your relationships.",
    description:
      "Whether you're facing communication breakdowns, trust issues, or growing apart, therapy provides a neutral space to heal and reconnect.",
    icon: "Heart",
    symptoms: [
      "Frequent arguments or conflicts",
      "Emotional distance or disconnection",
      "Trust issues or infidelity",
      "Difficulty expressing needs",
      "Feeling unheard or misunderstood",
      "Considering separation",
    ],
    causes: [
      "Poor communication patterns",
      "Unresolved past conflicts",
      "Different values or life goals",
      "External stressors",
      "Attachment style differences",
      "Life transitions",
    ],
    howTherapyHelps: [
      "Improve communication skills",
      "Identify destructive patterns",
      "Rebuild trust and intimacy",
      "Navigate major decisions together",
      "Develop conflict resolution strategies",
    ],
    benefits: [
      "Deeper emotional connection",
      "Healthier conflict resolution",
      "Renewed trust and intimacy",
      "Shared understanding of needs",
      "Stronger partnership foundation",
    ],
    faq: [
      {
        question: "Should we come together or individually?",
        answer: "Couples therapy typically involves both partners. Individual sessions may supplement when needed.",
      },
      {
        question: "Can therapy save our relationship?",
        answer: "Therapy provides tools and insights. Whether you stay together or part amicably, you'll gain clarity and healthier patterns.",
      },
    ],
  },
  {
    slug: "emotional-disturbances",
    title: "Emotional Disturbances",
    shortDescription: "Navigate intense emotions and find emotional balance.",
    description:
      "When emotions feel overwhelming or unpredictable, therapy helps you understand and regulate your emotional responses healthily.",
    icon: "Waves",
    symptoms: [
      "Intense mood swings",
      "Difficulty managing anger",
      "Emotional numbness",
      "Overwhelming sadness or fear",
      "Impulsive reactions",
      "Feeling emotionally out of control",
    ],
    causes: [
      "Trauma or adverse experiences",
      "Personality factors",
      "Chronic stress",
      "Relationship difficulties",
      "Unresolved grief",
      "Neurological factors",
    ],
    howTherapyHelps: [
      "Emotion regulation techniques",
      "Identify emotional triggers",
      "Develop healthy expression methods",
      "Process unresolved emotions",
      "Build emotional resilience",
    ],
    benefits: [
      "Greater emotional stability",
      "Healthier expression of feelings",
      "Improved relationships",
      "Reduced impulsive behaviors",
      "Enhanced self-awareness",
    ],
    faq: [
      {
        question: "Is emotional dysregulation treatable?",
        answer: "Yes, with consistent therapy and practice, most people develop significantly better emotional regulation skills.",
      },
      {
        question: "How is this different from mood disorders?",
        answer: "Emotional disturbances focus on regulation difficulties. Anuja Dange will assess if an underlying mood disorder is present.",
      },
    ],
  },
  {
    slug: "adjustment-issues",
    title: "Adjustment Issues",
    shortDescription: "Navigate life transitions with confidence and support.",
    description:
      "Major life changes — new job, relocation, divorce, or loss — can disrupt your sense of stability. Therapy helps you adapt and thrive.",
    icon: "Shuffle",
    symptoms: [
      "Difficulty coping with change",
      "Anxiety about the future",
      "Feeling overwhelmed",
      "Withdrawal from others",
      "Sleep or appetite changes",
      "Reduced performance at work",
    ],
    causes: [
      "Job loss or career change",
      "Relocation or immigration",
      "Divorce or separation",
      "Death of a loved one",
      "New parenthood",
      "Retirement",
    ],
    howTherapyHelps: [
      "Process grief and loss",
      "Develop coping strategies",
      "Build new routines and identity",
      "Strengthen support systems",
      "Reframe perspectives on change",
    ],
    benefits: [
      "Smoother transition experience",
      "Renewed sense of purpose",
      "Improved adaptability",
      "Reduced stress and anxiety",
      "Positive outlook on change",
    ],
    faq: [
      {
        question: "How long does adjustment take?",
        answer: "Adjustment periods vary, but therapy typically helps within 8-16 sessions depending on the life change.",
      },
      {
        question: "Is my reaction normal?",
        answer: "Difficulty adjusting to major changes is completely normal. Therapy helps you navigate this period healthily.",
      },
    ],
  },
  {
    slug: "career-counselling",
    title: "Career Counselling",
    shortDescription: "Find clarity and direction in your professional journey.",
    description:
      "Whether you're starting out, changing careers, or feeling stuck, career counselling helps align your work with your values and strengths.",
    icon: "Briefcase",
    symptoms: [
      "Career confusion or indecision",
      "Job dissatisfaction",
      "Burnout and exhaustion",
      "Fear of career change",
      "Work-life imbalance",
      "Imposter syndrome",
    ],
    causes: [
      "Mismatch between values and work",
      "Toxic work environment",
      "Lack of growth opportunities",
      "External pressure from family",
      "Economic uncertainty",
      "Changing industry landscape",
    ],
    howTherapyHelps: [
      "Identify strengths and values",
      "Explore career options",
      "Develop decision-making frameworks",
      "Address fear of change",
      "Create actionable career plans",
    ],
    benefits: [
      "Clear career direction",
      "Increased job satisfaction",
      "Better work-life balance",
      "Confidence in career decisions",
      "Reduced career-related stress",
    ],
    faq: [
      {
        question: "Is career counselling only for job seekers?",
        answer: "No, it's valuable for anyone feeling stuck, burnt out, or uncertain about their professional path.",
      },
      {
        question: "Will you tell me what career to choose?",
        answer: "Anuja Dange guides you to discover your own answers through self-exploration, not by prescribing a specific career.",
      },
    ],
  },
  {
    slug: "self-growth",
    title: "Self Growth",
    shortDescription: "Unlock your potential and become the best version of yourself.",
    description:
      "Personal growth therapy isn't just for crises — it's for anyone committed to self-discovery, fulfillment, and living authentically.",
    icon: "TrendingUp",
    symptoms: [
      "Feeling stuck or unfulfilled",
      "Lack of direction or purpose",
      "Difficulty setting boundaries",
      "Procrastination habits",
      "Fear of failure",
      "Comparing yourself to others",
    ],
    causes: [
      "Unmet personal goals",
      "Limiting beliefs",
      "Past failures or criticism",
      "Lack of self-awareness",
      "Comfort zone stagnation",
      "External validation dependency",
    ],
    howTherapyHelps: [
      "Clarify personal values and goals",
      "Challenge limiting beliefs",
      "Develop healthy habits",
      "Build resilience and confidence",
      "Create accountability structures",
    ],
    benefits: [
      "Greater self-awareness",
      "Clear life direction",
      "Improved confidence",
      "Healthier habits and routines",
      "More authentic living",
    ],
    faq: [
      {
        question: "Do I need to have problems to seek growth therapy?",
        answer: "Not at all. Self-growth therapy is proactive — for anyone wanting to thrive, not just survive.",
      },
      {
        question: "How is this different from life coaching?",
        answer: "Therapy addresses deeper emotional patterns and psychological barriers, while coaching focuses on goal achievement.",
      },
    ],
  },
  {
    slug: "self-awareness",
    title: "Self Awareness",
    shortDescription: "Deepen your understanding of yourself and your patterns.",
    description:
      "Self-awareness is the foundation of emotional intelligence. Therapy helps you understand your thoughts, feelings, and behaviors more deeply.",
    icon: "Eye",
    symptoms: [
      "Repeating unhealthy patterns",
      "Difficulty understanding emotions",
      "Reacting instead of responding",
      "Blind spots in relationships",
      "Lack of emotional vocabulary",
      "Feeling disconnected from self",
    ],
    causes: [
      "Upbringing and conditioning",
      "Trauma or adverse experiences",
      "Cultural or societal influences",
      "Lack of introspection",
      "Avoidance of difficult emotions",
      "Fast-paced lifestyle",
    ],
    howTherapyHelps: [
      "Mindfulness and reflection practices",
      "Explore childhood influences",
      "Identify behavioral patterns",
      "Develop emotional vocabulary",
      "Integrate shadow aspects of self",
    ],
    benefits: [
      "Deeper self-understanding",
      "Better emotional regulation",
      "Improved relationships",
      "More intentional choices",
      "Greater inner peace",
    ],
    faq: [
      {
        question: "Can self-awareness be learned?",
        answer: "Absolutely. Self-awareness is a skill that develops through guided reflection, feedback, and consistent practice.",
      },
      {
        question: "How long does it take?",
        answer: "Self-awareness is an ongoing journey. Most clients notice significant shifts within 10-15 sessions.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
