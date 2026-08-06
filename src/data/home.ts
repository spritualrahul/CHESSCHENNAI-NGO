import {
  BookOpen,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Home,
  Leaf,
  LucideIcon,
  MessageCircleHeart,
  School,
  ShieldCheck,
  Sparkles,
  Sprout,
  Stethoscope,
  Users,
} from "lucide-react";

export type StoryImage = {
  src: string;
  alt: string;
};

export type HeroSlide = StoryImage & {
  eyebrow: string;
  title: string;
  body: string;
};

const gallery = "/Assets/Galary";

export const homeHeroSlides: HeroSlide[] = [
  {
    src: `${gallery}/06367698-b922-469b-a84b-268e6e1edade.jpg`,
    alt: "Children holding soft toys together at a CHES home",
    eyebrow: "Community Health Education Society",
    title: "Every Child Deserves Love, Protection and a Future",
    body: "For over three decades, CHES has been transforming lives with compassion, healthcare, education, and hope.",
  },
  {
    src: `${gallery}/IMG_3127.jpeg`,
    alt: "Children and caregivers gathered together at a CHES community event",
    eyebrow: "Kids deserve to be happy in family and community",
    title: "Every Child Deserves Love, Protection and a Future",
    body: "Together we create hope through healthcare, education, child protection, and compassion.",
  },
  {
    src: `${gallery}/PHOTO-2025-02-22-10-19-17.jpg`,
    alt: "Children and adults celebrating together at a CHES home",
    eyebrow: "Hope grows in community",
    title: "Every Child Deserves Love, Protection and a Future",
    body: "Together we create hope through healthcare, education, child protection, and compassion.",
  },
];

export const storyImages = {
  welcome: {
    src: `${gallery}/06367698-b922-469b-a84b-268e6e1edade.jpg`,
    alt: "Children smiling together while holding soft toys at a CHES home",
  },
  origin: {
    src: `${gallery}/06f856a4-d5a9-4180-8c91-d2f22af62ce9.jpg`,
    alt: "Dr. Manorama Pinagapany caring for a child in an archival photograph",
  },
  community: {
    src: `${gallery}/PHOTO-2025-02-22-10-19-17.jpg`,
    alt: "Children and caregivers celebrating together in a bright community space",
  },
  education: {
    src: `${gallery}/Seed balls planting (4).jpeg`,
    alt: "Children learning and participating together outdoors",
  },
  cta: {
    src: `${gallery}/06367698-b922-469b-a84b-268e6e1edade.jpg`,
    alt: "Children smiling together at a CHES home",
  },
};

export const introParagraphs = [
  "In 1993, two HIV-positive orphaned children were discharged from the Institute of Child Health, Egmore, with nowhere to go and no one willing to care for them. Moved by compassion and a deep sense of responsibility, Dr. Manorama Pinagapany opened her heart and home to them.",
  "This single act of kindness became the foundation of the Community Health Education Society (CHES). Established in 1994, CHES grew into one of India’s pioneering organizations dedicated to the care, protection, treatment, and rehabilitation of children affected and infected by HIV. Over the years, it has evolved into a trusted organization committed to improving the lives of vulnerable children, women, and communities through comprehensive health, education, child protection, and empowerment programmes.",
];

export const originStory = [
  {
    label: "01",
    title: "First reported case of AIDS in India",
    text: "The first reported case of AIDS in India was identified in Chennai, Tamil Nadu. As the epidemic spread, many children lost their parents to HIV/AIDS, while stigma and fear left them without care or shelter.",
  },
  {
    label: "02",
    title: "A response rooted in compassion",
    text: "In this difficult context, the Community Health and Education Society (CHES), founded by Dr. Manorama Pinagapany, stepped in to support those rejected by society—especially women and children affected by HIV/AIDS.",
  },
  {
    label: "03",
    title: "The Shelter Home",
    text: "CHES’s first initiative, the Shelter Home, was established in 1994 for AIDS orphans. At the time, Dr. Manorama was working at the Institute of Child Health and Hospital for Children, Egmore, where two young children, Krishnaveni (S) and Ravi (A), were being treated for HIV and Hepatitis B. After discharge, they had nowhere to go.",
  },
  {
    label: "04",
    title: "The beginning of CHES",
    text: "Dr. Manorama took them in, marking the beginning of CHES. Both children were deeply traumatized—Krishnaveni was fearful of people, and Ravi was non-responsive and severely unwell. With consistent care and compassion, they gradually recovered, and within six months, their health and confidence began to return.",
  },
  {
    label: "05",
    title: "A mission of care, dignity, and hope",
    text: "Their recovery became the foundation and inspiration for CHES’s enduring mission of care, dignity, and hope.",
  },
];

export const visionMission = [
  {
    icon: Sparkles,
    title: "Vision of the Organization (2018)",
    text: "Construct a society where every child is respected with dignity, equality and justice, ensuring his/her rights to develop as a happy, healthy, educated and empowered individual.",
  },
  {
    icon: HandHeart,
    title: "Mission of the Organization (2018)",
    text: "CHES to develop simple, replicable and cost-effective solutions, jointly by providing innovative services, training, education, advocacy and research, done directly or in partnership that could focus programmes for children from vulnerable backgrounds protecting every child from all forms of discrimination, exploitation, abuse and neglect.",
  },
] satisfies Array<{ icon: LucideIcon; title: string; text: string }>;

export const principles = [
  { icon: ShieldCheck, title: "Best Interest of the Child", text: "All efforts will be focused on the Best Interest of the Child." },
  { icon: ShieldCheck, title: "Child Protection Policy", text: "The institution will adhere to Child Protection Policy." },
  { icon: Users, title: "Child Participation", text: "Child Rights, child participation will be given more importance." },
  { icon: Home, title: "A Safe Environment", text: "The environment in an institution shall be free from abuse, allowing children to cope with their situation and regain confidence." },
  { icon: HeartHandshake, title: "Care and Confidence", text: "All persons involved in taking care of the children in the institution shall support their care and confidence." },
  { icon: Heart, title: "Strengthen the Child", text: "Every effort would be taken to strengthen the child." },
  { icon: School, title: "Mainstream the Child", text: "Every effort would be taken to mainstream the child." },
  { icon: Home, title: "Link with the Family", text: "Every effort would be taken to link the child with the family." },
  { icon: Users, title: "Care for Every Child", text: "All persons involved in taking care of children in the institution shall work with respect and responsibility." },
  { icon: Leaf, title: "Family Connection", text: "Every effort would be taken to maintain the child’s relationship with family and community." },
  { icon: GraduationCap, title: "Educational System", text: "Every child will be linked to educational system." },
  { icon: Sprout, title: "Overall Growth", text: "Every child’s overall growth will be given more importance." },
] satisfies Array<{ icon: LucideIcon; title: string; text: string }>;

export const footerSocials = [
  { label: "Facebook", href: "#", icon: Users },
  { label: "WhatsApp", href: "#", icon: MessageCircleHeart },
  { label: "Child care", href: "#", icon: Heart },
  { label: "Community", href: "#", icon: Leaf },
  { label: "Education", href: "#", icon: BookOpen },
  { label: "Health", href: "#", icon: Stethoscope },
];
