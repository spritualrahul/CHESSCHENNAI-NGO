export type NavItem = {
  label: string;
  href: string;
};

export const site = {
  name: "CHES",
  fullName: "Community Health Education Society",
  tagline: "Health, education and hope for vulnerable children.",
  url: "https://cheschennai.org",
  email: "admin@cheschennai.com",
  privacyNoticeVersion: "2026-08-14",
  privacyEffectiveDate: "14 August 2026",
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

export const donationDetails = {
  upiId: "9444077177@indianbk",
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
