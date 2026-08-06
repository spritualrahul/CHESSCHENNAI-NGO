import {
  BookOpen,
  Building2,
  CalendarHeart,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  Landmark,
  Leaf,
  LucideIcon,
  Medal,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export type GalleryItem = {
  title: string;
  type: "Images" | "Videos" | "Albums";
  image: string;
};

export const site = {
  name: "CHES",
  fullName: "Community Health Education Society",
  tagline: "Health, education and hope for vulnerable children.",
  url: "https://cheschennai.org",
  email: "ches_cheschennai@yahoo.co.in / pmanorama54@gmail.com",
  phone: "044 - 24726655 / 044 - 24731283 / 9940033249",
  address: "Sakthi Illam, 21/8, 5th Cross Street, United India Colony, Kodambakkam, Chennai - 600 024",
  addressLines: [
    "Sakthi Illam",
    "21/8, 5th Cross Street",
    "United India Colony",
    "Kodambakkam",
    "Chennai - 600 024",
  ],
  anandhaIllamAddressLines: [
    "Anandha Illam",
    "85/1, Ernavakkam",
    "Pandikavanur Panchayat",
    "Ponneri Taluk",
    "Thiruvallur",
    "Chennai - 67",
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const heroSlides = [
  {
    image: "/placeholders/hero-children.svg",
    eyebrow: "Hope begins with care",
    title: "Every Child Deserves Love, Protection and a Future.",
    body: "Together we can transform vulnerable children's lives through health, education and hope.",
  },
  {
    image: "/placeholders/hero-family.svg",
    eyebrow: "Family, dignity and belonging",
    title: "A Safe Home Can Rewrite the Story of a Childhood.",
    body: "CHES creates spaces where children are protected, cared for, and encouraged to thrive.",
  },
  {
    image: "/placeholders/hero-education.svg",
    eyebrow: "Education changes tomorrow",
    title: "When a Child Learns, an Entire Community Moves Forward.",
    body: "Your support keeps children healthy, in school, and surrounded by hope.",
  },
];

export const impactStats: Stat[] = [
  { value: 1994, label: "Founded" },
  { value: 1000, suffix: "+", label: "Children Supported" },
  { value: 5000, suffix: "+", label: "Families Reached" },
  { value: 30, suffix: "+", label: "Years of Service" },
];

export const originTimeline = [
  {
    year: "1993",
    title: "A need becomes impossible to ignore",
    text: "At the Institute of Child Health, two HIV positive orphan children had no safe home to return to.",
  },
  {
    year: "1994",
    title: "Compassion becomes action",
    text: "Dr. Manorama Pinagapany and committed supporters created a shelter rooted in dignity and care.",
  },
  {
    year: "Recovery",
    title: "Children begin to heal",
    text: "With nutrition, medicine, education and affection, vulnerable children found stability again.",
  },
  {
    year: "Today",
    title: "A movement of hope",
    text: "CHES continues supporting children and families through health, education and community care.",
  },
];

export const principles: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: ShieldCheck,
    title: "Protection first",
    description: "Every child deserves safety, dignity and consistent adult care.",
  },
  {
    icon: BookOpen,
    title: "Education as freedom",
    description: "Learning opens choices, confidence and a future beyond crisis.",
  },
  {
    icon: Stethoscope,
    title: "Health with humanity",
    description: "Medical care is paired with emotional support and practical guidance.",
  },
  {
    icon: HeartHandshake,
    title: "Community belonging",
    description: "Children flourish when families and communities are strengthened too.",
  },
];

export const values = [
  { icon: HandHeart, title: "Compassion", text: "Care that sees the whole child, not only the immediate need." },
  { icon: ShieldCheck, title: "Trust", text: "Clear programs, transparent giving and accountable stewardship." },
  { icon: Leaf, title: "Hope", text: "Long-term support that helps children grow into possibility." },
  { icon: Users, title: "Family", text: "A belief that children deserve love, belonging and community." },
];

export const projects: Project[] = [
  {
    title: "Child Health & Nutrition",
    category: "Health",
    description: "Medical support, nutrition guidance and regular health monitoring for children in need.",
    image: "/placeholders/project-health.svg",
  },
  {
    title: "Education Support",
    category: "Education",
    description: "School supplies, tutoring, mentorship and pathways that keep children learning.",
    image: "/placeholders/project-education.svg",
  },
  {
    title: "Family Care Program",
    category: "Community",
    description: "Counselling and practical support that helps families provide stable homes.",
    image: "/placeholders/project-family.svg",
  },
  {
    title: "Shelter & Recovery",
    category: "Care",
    description: "Safe environments for vulnerable children to recover with dignity and protection.",
    image: "/placeholders/project-shelter.svg",
  },
  {
    title: "Awareness Outreach",
    category: "Advocacy",
    description: "Community education that reduces stigma and connects families with resources.",
    image: "/placeholders/project-outreach.svg",
  },
  {
    title: "Youth Futures",
    category: "Education",
    description: "Life skills, higher education guidance and confidence-building for older children.",
    image: "/placeholders/project-youth.svg",
  },
];

export const galleryItems: GalleryItem[] = [
  { title: "A morning at the learning centre", type: "Images", image: "/placeholders/gallery-learning.svg" },
  { title: "Volunteer health camp", type: "Albums", image: "/placeholders/gallery-health.svg" },
  { title: "Children's day celebration", type: "Images", image: "/placeholders/gallery-celebration.svg" },
  { title: "Family counselling story", type: "Videos", image: "/placeholders/gallery-family.svg" },
  { title: "School supplies drive", type: "Albums", image: "/placeholders/gallery-school.svg" },
  { title: "Community awareness session", type: "Images", image: "/placeholders/gallery-community.svg" },
];

export const testimonials = [
  {
    quote: "CHES gave our child care, education and the feeling that tomorrow could be gentle again.",
    name: "Parent supported by CHES",
  },
  {
    quote: "Volunteering here showed me what quiet, consistent compassion can do over years.",
    name: "CHES volunteer",
  },
  {
    quote: "The trust comes from seeing every rupee turn into food, books, medicine and confidence.",
    name: "Long-term donor",
  },
];

export const reports = [
  "Annual Report 2025",
  "Impact Snapshot 2024",
  "Transparency Note",
  "Child Protection Policy",
];

export const faqs = [
  {
    question: "How will my donation be used?",
    answer: "Donations support health care, education, nutrition, shelter needs and family strengthening programs.",
  },
  {
    question: "Will I receive a receipt?",
    answer: "Yes. CHES can issue an acknowledgement for donations after payment details are shared.",
  },
  {
    question: "Can I volunteer with CHES?",
    answer: "Yes. Volunteers can support education, events, outreach, fundraising and professional services.",
  },
];

export const donationDetails = {
  upiId: "ches@upi",
  chequePayableTo: "CHES",
  domestic: {
    accountName: "CHES",
    bankName: "Indian Bank",
    bankAddress: "3RD Cross Street, Trustpuram, Kodambakkam, CHENNAI 600024.",
    cityCountry: "Chennai, India",
    accountNumber: "401654391",
    ifsc: "IDIB000K040",
    swift: "IDIBINBBMAS",
  },
  international: {
    bankName: "State Bank of India",
    bankAddress: "State Bank of India, New Delhi Main Branch, 11 Sansad Marg, New Delhi - 110001",
    cityCountry: "Delhi, India",
    accountName: "Community Health Education Society",
    accountNumber: "40304509979",
    ifsc: "SBIN0000691",
    swift: "SBININBB104",
  },
};

export const trustBadges = [
  { icon: ShieldCheck, label: "Secure Donation" },
  { icon: Landmark, label: "Transparent NGO" },
  { icon: Medal, label: "Tax Benefits" },
  { icon: CalendarHeart, label: "Receipt Available" },
];

export const leadership = [
  {
    name: "Dr. Manorama Pinagapany",
    role: "Founder",
    text: "A compassionate medical leader whose response to two children in need helped shape CHES.",
  },
  {
    name: "CHES Team",
    role: "Caregivers, educators and community workers",
    text: "A multidisciplinary team walking with children and families through long-term care.",
  },
];

export const awards = [
  { icon: Medal, title: "Community Service Recognition", text: "Honouring decades of child-centred care." },
  { icon: Building2, title: "Local Partnerships", text: "Collaborations with schools, hospitals and volunteers." },
  { icon: Sparkles, title: "Sustained Impact", text: "Thirty years of service with hope at the centre." },
  { icon: GraduationCap, title: "Education Milestones", text: "Children supported to stay in school and continue learning." },
];

export const sectionImages = {
  impact: "/placeholders/impact-care.svg",
  welcome: "/placeholders/welcome-ches.svg",
  origin: "/placeholders/origin-story.svg",
  mission: "/placeholders/mission-vision.svg",
  principles: "/placeholders/principles.svg",
  about: "/placeholders/about-founder.svg",
  contact: "/placeholders/contact-map.svg",
};

export const defaultIcon = Home;
