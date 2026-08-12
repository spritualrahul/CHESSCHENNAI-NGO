import {
  Accessibility,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Home,
  LucideIcon,
  ShieldCheck,
  Users,
  UsersRound,
} from "lucide-react";

export const aboutHero = {
  title: "About Us",
  body: "Three decades of compassion, innovation and impact in the lives of children, women and communities.",
  promise: "Every Child. Every Right. Every Chance.",
  image: "/Assets/new images/DSC_0482.JPG",
  alt: "Children, caregivers and guests celebrating together at CHES",
};

export const aboutStats = [
  { icon: HeartHandshake, title: "Our Progress", detail: "Since 1994 till 2025" },
  { icon: HeartPulse, title: "Founder & Director", detail: "Dr. Manorama Pinagapany" },
  { icon: UsersRound, title: "Board of Directors", detail: "Leadership & Governance" },
  { icon: Users, title: "Management Team", detail: "Our Core Team" },
];

export const progressCards = [
  {
    period: "1994",
    title: "A Humble Beginning",
    text: "Founded with the care for two HIV-positive orphans with nowhere to go.",
    image: "/Assets/About/ches-founder-child.jpeg",
    alt: "Founder caring for a child in the early years of CHES",
  },
  {
    period: "1996–2004",
    title: "Expanding & Reaching The Unreached",
    text: "Pioneered HIV prevention, outreach, transgender inclusion and home-based care initiatives.",
    image: "/Assets/new images/6.jpg",
    alt: "An archival gathering of children and caregivers in the early CHES years",
  },
  {
    period: "2005–2014",
    title: "Strengthening Systems & Child Care",
    text: "Launched paediatric ART, foster care, child protection programs and scaled community impact.",
    image: "/Assets/new images/8.jpg",
    alt: "Children taking part in a creative indoor learning session",
  },
  {
    period: "2015–2025",
    title: "Transforming Lives at Scale",
    text: "Holistic programs in health, education, protection and livelihood empowering thousands of lives.",
    image: "/Assets/new images/DSC_0477.JPG",
    alt: "Children welcoming guests with balloons at a CHES event",
  },
];

export const journeyIntro = {
  eyebrow: "Since 1994",
  title: "A Journey of Compassion, Innovation and Impact",
  image: "/Assets/new images/4.jpg",
  alt: "Children seated in a caring circle with a CHES volunteer",
  paragraphs: [
    "The Community Health Education Society (CHES) was founded in 1994 with a simple yet powerful mission—to care for two HIV-positive orphans who had nowhere to go. What began as a small act of compassion steadily evolved into a pioneering movement addressing HIV, child protection, gender equity, and community well-being across Tamil Nadu and beyond.",
  ],
};

export const journeySections = [
  {
    title: "Expanding Care Beyond Orphanhood",
    text: "While CHES initially focused on lifelong orphan care, emerging challenges demanded broader interventions. Women employed in orphan care—many of whom were rehabilitated sex workers or widows of people living with HIV (PLHA)—highlighted critical gaps in HIV prevention. This led CHES to launch innovative STI and HIV prevention programs among women in prostitution (1996–1997), supported by APAC-VHS-USAID and TANSACS.",
  },
  {
    title: "Creative, play-based education",
    text: "CHES became widely recognized for its creative, play-based education methods—such as the Loss and Gain Chart, condom demonstrations, and pictorial reporting tools—many of which were later adopted under national HIV programs (NACP).",
  },
  {
    title: "Reaching the Unreached",
    text: "CHES expanded prevention efforts to clients of sex workers through large-scale street outreach programs across Chennai, reaching over one million people. These initiatives significantly increased HIV awareness and voluntary testing.",
  },
  {
    title: "Inclusion and social acceptance",
    text: "At the Koovagam festival, CHES recognized the marginalization of transgender communities and responded with a landmark innovation—the first-ever transgender beauty pageant (1996)—sparking national attention and social acceptance. This advocacy led to government-allotted housing, the formation of the transgender CBO THAA (1999), and later interventions for male sex workers (Nanban, 2004).",
  },
  {
    title: "Pioneering Community Home-Based Care",
    text: "Drawing from its paediatric HIV expertise, CHES launched India’s first community home-based care program (1997) for PLHA. By shifting focus to children infected and affected by HIV (OVC), CHES created a low-cost, replicable, and sustainable care model.",
  },
  {
    title: "Women living with HIV as outreach workers",
    text: "CHES also pioneered the training and employment of women living with HIV as outreach workers, empowering them economically and socially. Its flagship training manual, Nurtured Hope, received international recognition and was translated into multiple languages.",
  },
  {
    title: "Innovation in Child Care and Protection",
    text: "CHES introduced foster care models for AIDS orphans, trained community caregivers, and expanded services through programs like Mottughal (2003). Following the 2004 tsunami, CHES provided psychosocial support to affected children through the Malarghal program in partnership with SCARF and Plan International.",
  },
  {
    title: "Rights and protection at the core",
    text: "Recognizing rising risks of trafficking and abuse, CHES integrated Child Rights and Protection into its core work, contributing to state and national guidelines on child sexual abuse and becoming a recognized training institution for multiple stakeholders.",
  },
  {
    title: "Strengthening Health Systems and Policy Impact",
    text: "CHES played a key role in strengthening health systems and influencing policy across Tamil Nadu.",
    bullets: [
      "Rolling out paediatric ART through Project Thooli TN (2005)",
      "Implementing Prevention of Parent-to-Child Transmission (PPTCT), reducing transmission rates to zero",
      "Advocating early for universal HIV screening in pregnancy",
      "Supporting elderly caregivers through Granny’s Club",
      "Establishing a permanent home for AIDS orphans with support from the Emirates Airline Foundation",
    ],
  },
  {
    title: "Transforming Lives at Scale",
    text: "Through Anandha Illam, CHES has cared for over 310 children, enabling adoption, foster care, reintegration, and higher education. Today, CHES alumni include engineers, nurses, and creative professionals. Children excel in academics, sports, and the arts, with national-level achievements.",
  },
  {
    title: "Aftercare, Childline and community action",
    text: "CHES also leads aftercare services for youth aging out of institutional care, Childline services across Greater Chennai, disaster response (cyclones, COVID-19), environmental action, and women’s livelihood programs.",
  },
  {
    title: "Strong Systems, Sustainable Future",
    text: "From humble beginnings with handwritten accounts, CHES has built robust financial and governance systems, adopting Tally, PFMS, transparent audits, and strong internal controls. Since 2015, CHES has expanded skill development and income-generation programs for women from disadvantaged communities.",
  },
  {
    title: "Today",
    text: "CHES works holistically with children, women, families, and communities, ensuring rights, dignity, safety, and opportunity—leaving no one behind.",
  },
] satisfies Array<{ title: string; text: string; bullets?: string[] }>;

export const milestones = [
  { year: "1994", title: "CHES was founded to care for two HIV-positive orphans.", text: "The beginning of a long journey of love and responsibility.", icon: HeartHandshake },
  { year: "1996", title: "Pioneered STI & HIV prevention programs among women in prostitution", text: "Supported by APAC-VHS-USAID and TANSACS.", icon: HeartPulse },
  { year: "1997", title: "India’s first community home-based care program for PLHA", text: "Shifting focus towards children infected and affected by HIV.", icon: Home },
  { year: "2004", title: "Integrated Child Rights & Protection into core programs", text: "Contributed to state and national guidelines on child sexual abuse.", icon: ShieldCheck },
  { year: "2025", title: "Holistic programs ensuring rights, dignity, safety and opportunity", text: "Leaving no one behind.", icon: Accessibility },
] satisfies Array<{ year: string; title: string; text: string; icon: LucideIcon }>;

export const impactAreas = [
  { title: "Health & HIV Care", text: "Prevention, treatment, PPTCT, home-based care and health systems strengthening.", icon: HeartPulse, tone: "blue" },
  { title: "Child Protection", text: "Foster care, aftercare, child rights, Childline and protection from abuse and exploitation.", icon: ShieldCheck, tone: "green" },
  { title: "Education & Growth", text: "Education support, life skills, career guidance and holistic child development.", icon: GraduationCap, tone: "gold" },
  { title: "Women Empowerment", text: "Livelihood programs, skill development and empowering women for self-reliance.", icon: Users, tone: "rose" },
  { title: "Community Well-being", text: "Disaster response, environmental action and community development initiatives.", icon: HeartHandshake, tone: "purple" },
] satisfies Array<{ title: string; text: string; icon: LucideIcon; tone: string }>;

export const founderParagraphs = [
  "Dr.P.Manorama a pediatric Gastroenterologist started her clinical care services by joining the Tamilnadu medical service in the year 1981 as civil assistant surgeon and has been in Development sector /HIV/AIDS since 1993. She initiated the department of ‘ORAL REHYDRATION THERAPY’ at the Institute of child health and hospital for children Egmore and worked as the in charge medical officer of the same department from May 1981 to April 1982. In 1994 she initiated the Nongovernmental organization called Community health Education Society to cater to the needs of AIDS orphans in 1994 and became its founder President.",
  "This pediatrician is one of the few people who have a passion to work among down trodden and can speak, educate or train people on child development, child emotional support, setting up child friendly atmosphere and attitude, JJACT or HIV and AIDS. Dr. Manorama spent most of her time for children affected by AIDS. She has been the architect of the OVC Home based care program, the first of its kind in India and designed the various models of Care of children infected and affected by AIDS.",
  "She has developed several policy documents, conducted RAAP, Situational assessment and IMPACT studies for Tamilnadu. Her RAAP study was used as a base for the development of strategies for the Phase III of NACO which started to lay emphasis on children and HIV. For TamilNadu State AIDS control society she developed the Operational Guidelines for the Tamilnadu Trust for children affected by AIDS. Her expertise has been used to review the draft national guidelines for children and HIV. She had reviewed the Gaps in training curriculum and training programs for doctors offered by leading agencies. This study she took up for INP+ and was also involved in the dissemination of the same in which she had spelled her recommendations for future programs and has had assisted PWN+ to develop a manual on treatment preparedness education for children. Her explicit and exemplary work has brought in a change in the lives of AIDS orphans by successfully promoting foster parents for HIV infected AIDS orphans and adoption services for children affected by AIDS. She as the NGO director and as the architect of OVC care was one of the key person who developed the Tamilnadu Family Care continuum program through Tamilnadu.",
  "She has been associated with Tamilnadu government under various capacities. She is the Chairperson of Chennai Child Welfare Committee a position with powers of first class magistrate. During her tenure she has handled maximum number of child sexual abuse cases. As the chairperson of Child welfare Committee of Chennai she has taken the Rights of children as a benchmark of child development. She is also a member of the Tamilnadu State and Chennai district Prevention of child and Women Trafficking committee. She had been associated with TANSACS and has served as member of the Joint Appraisal Review Team, member of the Technical Advisory Committee, Executive committee member, as a member of “The women and AIDS” Adhoc committee and member of the Care support committee.",
  "Dr.P.Manorama was instrumental in fighting for the rights of the Transgender. Her invitation to district administration as the chief guest to hear to the round table conference on “Problems of Transgender “ evoked the right response from the Collector of Villupuram to grant ONE CENT of Land free from Government of Tamilnadu for 20 Transgender at Villupuram. She later went on to develop a Community Based Organisation for Transgender Called “THAA” through a community participatory approach. She looked in to the social acceptance of Eunuchs, played a great role in empowering them and helped them to register the organization called “Thaa”.",
  "Her exemplary work with women in Prostitution made the target community understand the need for a behaviour change. She has educated nearly 5000 FSW about HIV and AIDS. She brought a lot of innovative games in educating FSW on economic importance of using condom. She constituted the CBO for sex workers called “Jansi Rani Magalir Munertra Sangam”.",
  "She is one of the 7 core members from Tamilnadu who developed the 2nd NGO report for the Child Rights Convention in the year 2007 – 2008. She is also a member of women protection committee of National Institute of Fashion Design and Hindu college Pattabiram and Life member IMA, Chennai.",
  "She was instrument in bring out different modules on care of children, prevention education to children, on counseling etc; Dr.Manorama has attended many state, national and international conferences, has presented papers, posters at such congregations, have chaired or co-chaired different workshop both at national and international level.",
];

export const founderAwards = [
  "Countess Albino gold Medal for her exemplary work for AIDS orphans",
  "Maitland Memorial Prize for proficiency in clinical medicine",
  "Dr.Rathsamy Memorial Prize for proficiency in Social preventive medicine",
  "First ranker continuously in the X-Ray Quiz competition held at the ICH&HC",
  "Second Prize – Dr.Collin Srinivansan award for research paper",
  "For the Sake of Honour award by Rotary club for meritorial service",
  "Flame award for meritorial service for AIDS orphans by Lion’s Club",
  "Certificate of appreciation for service rendered by APAC-VHS-USAID",
  "Certificate of appreciation for the work towards Children affected by AIDS by Family Health International",
  "Teddy Trust award, for her meritorial service for AIDS orphans",
  "Appreciation award for services to AIDS orphans by Sekizhar Panpattu Sangam",
  "Certificate of appreciation for work towards Children affected due to AIDS by FHI",
  "Poes Flame award for meritorial service for AIDS orphans by Lion’s Club",
  "Viketan Nambikai Viruthu for Ma Manithargal (2024)",
  "Imagine Award of Excellence by Paavai Rotary North (2023)",
  "Life Time Achievement award by Indian Medical Association (2021)",
  "Lion’s Club International Certificate of Appreciation for extraordinary service to Humanity (2021)",
  "Provoke Award 3.0 Humanitarian award (2019)",
  "Outstanding Women Achiever award by Dr.MGR Medical University (2012)",
  "Stree Ratna Award from ExNoRa International (2012)",
  "Jones Oration GOLD medal at Women Doctors conference (2010)",
  "Outstanding achiever award from TANSACS (2004)",
  "Present Day School Education and its impact on children won the second place in the Dr.Colin Srinivasan award",
  "Certificate of Merit for scientific presentation, 2nd Prize by Women Doctor’s Association (1980)",
  "Maitland Memorial Prize for proficiency in clinical medicine during her under-graduation",
  "Dr.Rathsamy Memorial Prize for proficiency in Social preventive medicine during her under-graduation",
  "First ranker continuously in the X-Ray Quiz competition held at the Institute for Child Health and Hospital for Children from 1979 to 1981",
];

export const boardMembers = [
  ["M.Karthik", "President"],
  ["Dr.V.Sivakumar", "Vice President"],
  ["Ms.Deepa Anandkrishnan", "Secretary"],
  ["Mr. V. Mohan Babu", "Treasurer"],
  ["Ms. Banumathy", "Member"],
  ["Ms. S. Vasantha", "Member"],
  ["Ms. Asha Udyasuriyan", "Member"],
  ["Ms. Kalyani", "Member"],
  ["Mr.Naresh Karthik", "Member"],
  ["Mr.Govindarajan", "Member"],
  ["Ms.PremaRathnavelu", "Member"],
  ["Mr.Rajaram", "Member"],
] as const;

export const managementTeam = [
  { name: "Dr.P.Manorama", role: "Director CHES", text: "Dr.P.Manorama, Director CHES who wears many hats, heads the team. Basically a medical doctor by profession has transformed herself as a Child Rights Activist. She has 45 year of experience on health sector and 30 years of experience on development sector.", image: "/Assets/About/dr-manorama-office.jpeg" },
  { name: "Mr. P.Muthupandian", role: "Manager Admin", text: "Mr. P.Muthupandian, is the Manager Admin of CHES. He is also the Superintendent of Anandha Illam and has been associated with CHES since its inception. He is a cinematographer turned social worker.", image: "/Assets/About/p-muthupandian.jpeg" },
  { name: "Mr.V.Rajbabu", role: "Manager Management", text: "Mr.V.Rajbabu, is the Manager Management of CHES. He is a silent worker who speaks few words but observes many things deeply. He has also been associated with CHES since its inception.", image: "/Assets/About/v-rajbabu.jpeg" },
  { name: "Mr.V. Kumaresan", role: "Technical Manager", text: "Mr.V. Kumaresan is the Technical manager of CHES. Always smiling, accommodative, responsible, has great respect for seniors and much willing to work with anyone and any project.", image: "/Assets/About/v-kumaresan.jpeg" },
  { name: "Ms. Mohanavalli", role: "Finance Manager", text: "Ms. Mohanavalli is the Finance Manager of CHES. A silent staff, much wanted by all, travels almost 150 kms daily to keep up her good work.", image: "/Assets/About/mohanavalli.jpeg" },
];

export const founderPortrait = "/Assets/About/dr-manorama-portrait.jpeg";
