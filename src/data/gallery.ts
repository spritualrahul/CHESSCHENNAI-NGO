import {
  CalendarHeart,
  Camera,
  GraduationCap,
  HandHeart,
  HeartPulse,
  LucideIcon,
  UsersRound,
} from "lucide-react";

export type GalleryCategory = "All" | "Children" | "Health" | "Education" | "Community" | "Events";

export type GalleryFilter = {
  label: GalleryCategory;
  icon: LucideIcon;
};

export type GalleryPhoto = {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  alt: string;
  featured?: boolean;
};

export const galleryFilters: GalleryFilter[] = [
  { label: "All", icon: Camera },
  { label: "Children", icon: UsersRound },
  { label: "Health", icon: HeartPulse },
  { label: "Education", icon: GraduationCap },
  { label: "Community", icon: HandHeart },
  { label: "Events", icon: CalendarHeart },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    title: "Pongal traditions together",
    category: "Events",
    image: "/Assets/Galary/PHOTO-2025-02-22-10-19-17.jpg",
    alt: "Children and caregivers celebrating Pongal together at CHES",
    featured: true,
  },
  {
    title: "Old students reunion",
    category: "Community",
    image: "/Assets/Galary/reunion of old students .jpg",
    alt: "CHES alumni, team members and friends gathered for a reunion",
    featured: true,
  },
  {
    title: "A room full of celebration",
    category: "Events",
    image: "/Assets/Galary/DSCN0400.JPG",
    alt: "Children wearing party hats during a joyful CHES celebration",
    featured: true,
  },
  {
    title: "Growing through play",
    category: "Children",
    image: "/Assets/new images/DSCN3721.JPG",
    alt: "Young children playing together in a colourful CHES activity room",
    featured: true,
  },
  {
    title: "A milestone visit",
    category: "Events",
    image: "/Assets/new images/DSC_0422.JPG",
    alt: "CHES leaders welcoming visiting guests during a milestone event",
    featured: true,
  },
  {
    title: "A community of care",
    category: "Community",
    image: "/Assets/Galary/b6ecebbc-f1a0-4ef4-a479-b2d7eced0a99.jpg",
    alt: "Women and children gathered together in the CHES community",
    featured: true,
  },
  {
    title: "A thoughtful young face",
    category: "Children",
    image: "/Assets/new images/DSC_0296.JPG",
    alt: "A young child in the care of CHES looking thoughtfully at the camera",
  },
  {
    title: "Safe beginnings",
    category: "Children",
    image: "/Assets/new images/DSC_0297.JPG",
    alt: "A baby resting safely during care at CHES",
  },
  {
    title: "Birthday joy",
    category: "Events",
    image: "/Assets/Galary/1658146_700553100043332_894046267844192094_o.jpg",
    alt: "Children wearing party hats during a birthday celebration",
  },
  {
    title: "Youth fencing achievers",
    category: "Events",
    image: "/Assets/Galary/15110859_1066649233433715_8795815925162035227_o.jpg",
    alt: "Two young CHES achievers standing proudly with fencing equipment",
  },
  {
    title: "Life-skills learning",
    category: "Education",
    image: "/Assets/Galary/2016-04-07 16.57.37.jpg",
    alt: "Young people and facilitators completing a CHES training programme",
  },
  {
    title: "Friends in the community",
    category: "Community",
    image: "/Assets/Galary/39f64ac2-ecf7-4e1b-b7f3-5965940fa6dc.jpg",
    alt: "CHES community team members smiling together outdoors",
  },
  {
    title: "Confidence in motion",
    category: "Children",
    image: "/Assets/Galary/472482_257474167684563_1607903775_o.jpg",
    alt: "A child enjoying an outdoor ball activity at CHES",
  },
  {
    title: "Learning practical skills",
    category: "Education",
    image: "/Assets/Galary/557350ca-2394-4ef4-bd7b-45d12f384f7c.jpg",
    alt: "A young person learning practical mechanical skills through CHES",
  },
  {
    title: "Healthy daily routines",
    category: "Health",
    image: "/Assets/Galary/5d4cf5a0-7e6f-4c33-bdbf-1be64e19911d.jpg",
    alt: "A child practising a healthy handwashing routine",
  },
  {
    title: "Community recovery meeting",
    category: "Community",
    image: "/Assets/Galary/IMG_5961.JPG",
    alt: "Families attending a CHES community recovery meeting",
  },
  {
    title: "Recovery support gathering",
    category: "Community",
    image: "/Assets/Galary/IMG_5963.JPG",
    alt: "Women gathered for a CHES recovery and awareness session",
  },
  {
    title: "Children on an outing",
    category: "Children",
    image: "/Assets/Galary/Image165.jpg",
    alt: "Children travelling together during a CHES educational outing",
  },
  {
    title: "Festival smile",
    category: "Children",
    image: "/Assets/Galary/WhatsApp Image 2023-10-24 at 12.14.16 PM.jpeg",
    alt: "A smiling young child dressed for a cultural celebration",
  },
  {
    title: "Documenting disaster impact",
    category: "Community",
    image: "/Assets/Galary/15.jpg",
    alt: "A coastal home documented during CHES post-disaster recovery work",
  },
  {
    title: "The smallest steps",
    category: "Children",
    image: "/Assets/Galary/IMG_4333.jpg",
    alt: "The tiny feet of an infant receiving safe care through CHES",
  },
  {
    title: "Rest and protection",
    category: "Health",
    image: "/Assets/Galary/IMG_4334.jpg",
    alt: "A newborn resting safely during care at CHES",
  },
  {
    title: "Growing stronger",
    category: "Health",
    image: "/Assets/Galary/IMG_4336.jpg",
    alt: "A young child building strength and balance during a floor activity",
  },
  {
    title: "Comfort and calm",
    category: "Health",
    image: "/Assets/Galary/IMG_4339.jpg",
    alt: "A sleeping infant resting comfortably during CHES care",
  },
  {
    title: "Learning one line at a time",
    category: "Education",
    image: "/Assets/Galary/IMG_4352.jpg",
    alt: "A child concentrating while writing in a workbook",
  },
];
