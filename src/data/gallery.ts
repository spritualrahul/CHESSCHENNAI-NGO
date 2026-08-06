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
  {
    title: "Youth fencing achievers",
    category: "Events",
    image: "/Assets/Galary/15110859_1066649233433715_8795815925162035227_o.jpg",
    alt: "Two CHES youth participants standing with fencing equipment",
  },
  {
    title: "Birthday celebration",
    category: "Events",
    image: "/Assets/Galary/1658146_700553100043332_894046267844192094_o.jpg",
    alt: "Children wearing birthday caps during a CHES celebration",
  },
  {
    title: "Life skills training",
    category: "Education",
    image: "/Assets/Galary/2016-04-07 16.57.37.jpg",
    alt: "Young people and facilitators at a CHES life skills training programme",
  },
  {
    title: "Festival smile",
    category: "Children",
    image: "/Assets/Galary/WhatsApp Image 2023-10-24 at 12.14.16 PM.jpeg",
    alt: "A smiling child dressed for a cultural celebration at CHES",
  },
  {
    title: "Old students reunion",
    category: "Community",
    image: "/Assets/Galary/reunion of old students .jpg",
    alt: "CHES old students and community members gathered for a reunion",
    featured: true,
  },
  {
    title: "STI and HIV prevention outreach",
    category: "Health",
    image: "/Assets/Galary/STI.jpeg",
    alt: "CHES STI and HIV prevention community outreach session",
  },
  {
    title: "Hospital care support",
    category: "Health",
    image: "/Assets/Galary/942a4e12-31ec-4dde-8ccf-ba72e103fabc.jpg",
    alt: "Children receiving care and support at a hospital",
  },
  {
    title: "Celebration gathering",
    category: "Events",
    image: "/Assets/Galary/DSCN0400.JPG",
    alt: "Children gathered indoors wearing celebration caps at a CHES event",
  },
  {
    title: "Children on an outing",
    category: "Children",
    image: "/Assets/Galary/Image165.jpg",
    alt: "Children travelling together during a CHES outing",
  },
  {
    title: "Coastal home after disaster",
    category: "Community",
    image: "/Assets/Galary/15.jpg",
    alt: "A damaged coastal home documented during CHES community recovery work",
  },
  {
    title: "Community recovery meeting",
    category: "Community",
    image: "/Assets/Galary/IMG_5961.JPG",
    alt: "Community members gathered for a CHES support and awareness meeting",
  },
  {
    title: "Recovery support gathering",
    category: "Community",
    image: "/Assets/Galary/IMG_5963.JPG",
    alt: "Families attending a CHES community recovery support session",
  },
  {
    title: "Relief material support",
    category: "Community",
    image: "/Assets/Galary/IMG_6001.JPG",
    alt: "CHES team distributing relief material to women from the community",
  },
];
