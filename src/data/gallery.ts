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
    title: "Children running together",
    category: "Children",
    image: "/Assets/Galary/06367698-b922-469b-a84b-268e6e1edade.jpg",
    alt: "Children smiling together during a CHES programme",
    featured: true,
  },
  {
    title: "Learning with focus",
    category: "Education",
    image: "/Assets/About/ches-children-meal.jpeg",
    alt: "A child participating in an education and care programme",
    featured: true,
  },
  {
    title: "Care and health support",
    category: "Health",
    image: "/Assets/Galary/f57aaa2a-d28a-4ebc-b238-cc118e555f77.jpg",
    alt: "A child receiving care through a CHES health support programme",
    featured: true,
  },
  {
    title: "Friends in the community",
    category: "Community",
    image: "/Assets/About/ches-children-care.jpeg",
    alt: "Children standing together in a CHES community care setting",
    featured: true,
  },
  {
    title: "Group celebration",
    category: "Children",
    image: "/Assets/Galary/IMG_3127.jpeg",
    alt: "Children and young people gathered together at CHES",
    featured: true,
  },
  {
    title: "Creative learning day",
    category: "Education",
    image: "/Assets/Galary/PHOTO-2025-02-22-10-19-17.jpg",
    alt: "Children taking part in a colorful learning activity",
    featured: true,
  },
  {
    title: "Community circle",
    category: "Community",
    image: "/Assets/Galary/Seed balls planting (2).jpeg",
    alt: "Community members participating in a group activity",
  },
  {
    title: "A child's portrait",
    category: "Children",
    image: "/Assets/Galary/06f856a4-d5a9-4180-8c91-d2f22af62ce9.jpg",
    alt: "A child smiling during a CHES programme",
  },
  {
    title: "Women and community care",
    category: "Community",
    image: "/Assets/Galary/39f64ac2-ecf7-4e1b-b7f3-5965940fa6dc.jpg",
    alt: "Community members receiving support through CHES outreach",
  },
  {
    title: "Health outreach",
    category: "Health",
    image: "/Assets/About/ches-founder-child.jpeg",
    alt: "A child with a caregiver during a CHES health and care programme",
  },
  {
    title: "Seed ball planting",
    category: "Events",
    image: "/Assets/Galary/Seed balls planting (4).jpeg",
    alt: "A CHES environmental and community event",
  },
  {
    title: "Children at CHES home",
    category: "Children",
    image: "/Assets/Galary/5d4cf5a0-7e6f-4c33-bdbf-1be64e19911d.jpg",
    alt: "Children standing together at a CHES home",
  },
  {
    title: "Programme gathering",
    category: "Events",
    image: "/Assets/Galary/472482_257474167684563_1607903775_o.jpg",
    alt: "A CHES programme gathering with children and supporters",
  },
  {
    title: "Community activity",
    category: "Community",
    image: "/Assets/Galary/b6ecebbc-f1a0-4ef4-a479-b2d7eced0a99.jpg",
    alt: "Children and community members during a CHES activity",
  },
  {
    title: "Learning and support",
    category: "Education",
    image: "/Assets/Galary/557350ca-2394-4ef4-bd7b-45d12f384f7c.jpg",
    alt: "A CHES education support moment",
  },
];
