export type ProjectStatus = "present" | "past";

export type ChesProject = {
  number: string;
  status: ProjectStatus;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  detailIntro: string;
  image: string;
  imageAlt: string;
  achievements: string[];
  services: string[];
  impact: string[];
};

export const projectStats = [
  { value: "30+", label: "Years of Service" },
  { value: "1000+", label: "Children Supported" },
  { value: "Hundreds", label: "Communities Reached" },
  { value: "Many", label: "Lives Transformed" },
];

export const chesProjects: ChesProject[] = [
  {
    number: "01",
    status: "present",
    category: "Present Project",
    title: "Project Anandha Illam (Happy Home)",
    subtitle: "India's First Care Home for Children Living with HIV",
    description:
      "Founded in 1993, Anandha Illam provides holistic care, protection and opportunities for children affected and infected by HIV. Every child is nurtured with love, education, healthcare and life skills to grow into confident and independent adults.",
    detailIntro:
      "Anandha Illam is CHES' founding project and a long-term home of care for children affected and infected by HIV. The project combines protection, treatment support, education, counselling, nutrition, family reintegration and life preparation so every child can grow with dignity and confidence.",
    image: "/Assets/About/ches-children-care.jpeg",
    imageAlt: "Children and caregivers gathered together at a CHES home",
    achievements: [
      "67 HIV negative orphans adopted",
      "Children graduated as engineers, chartered accountants & professionals",
      "Many reintegrated with families",
      "A drummer girl in LIMCA Book of Records",
      "Six unique training manuals developed",
    ],
    services: [
      "Residential care and daily protection",
      "Education support and life skills development",
      "Healthcare, nutrition and ART adherence support",
      "Counselling, family tracing and reintegration",
    ],
    impact: [
      "Children grow in a safe, loving and structured environment",
      "Young people are supported to complete education and enter independent life",
      "Families are strengthened wherever reintegration is possible",
    ],
  },
  {
    number: "02",
    status: "present",
    category: "Present Project",
    title: "Make the Difference Reach the Unreached – Adding Value to Life",
    description:
      "This project focuses on nutrition, education, life skills, VOCATIONAL training, health awareness and psychosocial support for children affected by HIV. We strengthen their health, improve learning outcomes and help them build a brighter future.",
    detailIntro:
      "Make the Difference Reach the Unreached supports children affected by HIV through a complete care model that strengthens learning, health, nutrition, emotional wellbeing and practical skills. The project helps children stay connected to education while receiving the support they need to thrive.",
    image: "/Assets/About/ches-children-meal.jpeg",
    imageAlt: "Children sharing a meal and learning together at a CHES programme",
    achievements: [
      "Reaching 80–90 children every year",
      "100% ART adherence among children",
      "Improved reading, writing & numeracy",
      "Better growth & nutrition outcomes",
    ],
    services: [
      "Nutrition and growth monitoring",
      "Educational support and reading improvement",
      "Life skills, vocational training and counselling",
      "Health awareness and psychosocial support",
    ],
    impact: [
      "Children are supported to remain healthy and regular in school",
      "Learning outcomes improve through focused academic support",
      "Children gain confidence, discipline and practical life skills",
    ],
  },
  {
    number: "03",
    status: "present",
    category: "Present Project",
    title: "Project Resource Centre",
    description:
      "Operating at the Government Reception Unit, Royapuram, this project rescues and rehabilitates children in need of care and protection. We provide counselling, family reintegration and follow-up support to ensure every child is safe and supported.",
    detailIntro:
      "Project Resource Centre works with children in need of care and protection at the Government Reception Unit, Royapuram. The project focuses on rescue, rehabilitation, counselling, family tracing, safe reintegration and follow-up so each child is protected beyond immediate crisis care.",
    image: "/Assets/Galary/DSCN0324.JPG",
    imageAlt: "Children participating in a structured CHES Resource Centre activity",
    achievements: [
      "80% children reunified within JJ Act time",
      "85% children taken back by parents",
      "75% children retained successfully",
    ],
    services: [
      "Rescue support and immediate child protection response",
      "Counselling and case-based rehabilitation planning",
      "Family tracing, reintegration and follow-up",
      "Coordination with child protection systems",
    ],
    impact: [
      "Children are helped to return to safe family environments",
      "Families receive guidance after reunification",
      "Follow-up support reduces the risk of children returning to unsafe conditions",
    ],
  },
  {
    number: "04",
    status: "present",
    category: "Present Project",
    title: "Project Cradle Baby (Specialized Adoption Agency)",
    description:
      "Initiated in 2000, the Cradle program ensures safe care, testing, legal processes and adoption for abandoned and surrendered infants. We give them a chance to grow in a loving and permanent family.",
    detailIntro:
      "Project Cradle Baby provides safe, lawful and compassionate care for abandoned and surrendered infants. As a specialized adoption agency programme, it ensures medical testing, protection, documentation, transparent adoption processes and post-adoption support.",
    image: "/Assets/Galary/f57aaa2a-d28a-4ebc-b238-cc118e555f77.jpg",
    imageAlt: "A baby resting safely during care at a CHES programme",
    achievements: [
      "Hundreds of infants placed in loving adoptive families",
      "100% legal & transparent adoption",
      "Comprehensive pre & post adoption support",
    ],
    services: [
      "Safe care for abandoned and surrendered infants",
      "Medical testing, nutrition and protection",
      "Legal adoption procedures and documentation",
      "Pre-adoption and post-adoption counselling support",
    ],
    impact: [
      "Infants receive immediate safety, care and dignity",
      "Children are placed with loving permanent families",
      "Adoptive families receive guidance through the process",
    ],
  },
  {
    number: "05",
    status: "past",
    category: "Past Project",
    title: "STI & HIV Prevention among Women in Prostitution",
    subtitle: "Prevention, care and access to treatment",
    description:
      "CHES pioneered prevention and support work among women in prostitution, helping communities access information, testing, treatment and compassionate care while reducing stigma.",
    detailIntro:
      "This pioneering past project focused on STI and HIV prevention among women in prostitution, combining awareness, testing referrals, treatment linkage, counselling and community support. It helped vulnerable women access care with dignity and reduced stigma around HIV prevention.",
    image: "/Assets/Galary/STI.jpeg",
    imageAlt: "CHES STI and HIV prevention community outreach session",
    achievements: [
      "Community-based prevention and awareness",
      "Supported access to HIV testing and care",
      "Advocacy and referral support for vulnerable women",
    ],
    services: [
      "STI and HIV prevention education",
      "Testing referrals and treatment linkage",
      "Counselling and advocacy support",
      "Community awareness to reduce stigma",
    ],
    impact: [
      "Women received safer access to prevention and healthcare information",
      "Communities were linked to treatment and support systems",
      "The project strengthened CHES' early public health response",
    ],
  },
  {
    number: "06",
    status: "past",
    category: "Past Project",
    title: "Community Home-Based Care for PLHA",
    subtitle: "Care that reaches people where they live",
    description:
      "The home-based care programme brought health support, counselling, treatment adherence and family guidance closer to people living with HIV/AIDS and their communities.",
    detailIntro:
      "Community Home-Based Care for PLHA brought support into people's homes, helping people living with HIV/AIDS and their families manage treatment, health needs, counselling and social isolation. The project made care more reachable for communities facing stigma and distance from services.",
    image: "/Assets/Galary/IMG_6001.JPG",
    imageAlt: "The CHES team providing practical support to women in the community",
    achievements: [
      "Home-based care for people living with HIV/AIDS",
      "Family counselling and treatment support",
      "Reduced isolation through community care",
    ],
    services: [
      "Home visits and treatment adherence support",
      "Family counselling and caregiver guidance",
      "Health referrals and care coordination",
      "Community support for people living with HIV/AIDS",
    ],
    impact: [
      "People living with HIV/AIDS received care closer to home",
      "Families became better equipped to provide support",
      "Community-based care reduced fear, stigma and isolation",
    ],
  },
  {
    number: "07",
    status: "past",
    category: "Past Project",
    title: "Malarghal Tsunami Psychosocial Support",
    subtitle: "Helping children recover after disaster",
    description:
      "Following the tsunami, CHES worked with children and communities to provide psychosocial support, restore a sense of safety and help families begin rebuilding their lives.",
    detailIntro:
      "Malarghal Tsunami Psychosocial Support helped children and families recover after disaster through emotional care, community activities, counselling and practical support. The project focused on restoring confidence, routine and a sense of safety.",
    image: "/Assets/Galary/India Kids 2 copy.jpg",
    imageAlt: "Children standing near a damaged home during post-tsunami community recovery",
    achievements: [
      "Psychosocial support for children and families",
      "Community activities that restored confidence",
      "Practical support during recovery",
    ],
    services: [
      "Psychosocial support for children",
      "Counselling and emotional recovery activities",
      "Community-based recovery programmes",
      "Family support during rebuilding",
    ],
    impact: [
      "Children were supported through trauma and disruption",
      "Families regained confidence through community care",
      "The project helped restore routine, trust and hope after disaster",
    ],
  },
  {
    number: "08",
    status: "past",
    category: "Past Project",
    title: "Project Thooli",
    subtitle: "Pediatric ART and child health support",
    description:
      "Project Thooli helped children affected by HIV access pediatric antiretroviral treatment, follow-up care, nutrition guidance and the support needed to stay healthy and in school.",
    detailIntro:
      "Project Thooli supported children affected by HIV with pediatric ART access, treatment follow-up, nutrition guidance, education support and counselling. The project helped children remain healthy, supported and connected to learning.",
    image: "/Assets/Galary/942a4e12-31ec-4dde-8ccf-ba72e103fabc.jpg",
    imageAlt: "Children receiving hospital care and treatment support",
    achievements: [
      "Improved access to pediatric ART",
      "Health monitoring and adherence support",
      "Education and family counselling",
    ],
    services: [
      "Pediatric ART linkage and adherence support",
      "Health monitoring and nutrition guidance",
      "Education support for children affected by HIV",
      "Family counselling and follow-up care",
    ],
    impact: [
      "Children received consistent treatment support",
      "Health and school continuity were strengthened",
      "Families were guided to care for children with confidence",
    ],
  },
];
