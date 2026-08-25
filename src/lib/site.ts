export const site = {
  name: "TGE Resources",
  shortName: "TGE",
  tagline: "Environmental Excellence · Protective Strategies · Responsible Solutions",
  description:
    "TGE Resources is a WBENC-certified Woman Owned environmental consulting firm established in 1994. We deliver timely, accurate, and cost-effective Phase I & II ESA, industrial hygiene, environmental engineering, remediation, compliance, and litigation support services across the U.S.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tgeresources.com",
  phone: "713-744-5805",
  phoneHref: "tel:+17137445805",
  email: process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? "info@tgeresources.com",
  address: {
    street: "8048 Northcourt Road",
    city: "Houston",
    state: "TX",
    zip: "77040",
  },
  city: "Houston",
  state: "TX",
  region: "Houston, TX",
  founded: 1994,
  stats: {
    projects: "10,000+",
    clients: "500+",
    years: "30+",
    experience: "130+",
    referral: "80%",
  },
  certifications: [
    "WBENC Certified Woman Owned Business",
    "SBA Certified WOSB",
    "U.S. Small Business Chamber of Commerce",
  ],
  codes: {
    duns: "929574051",
    cage: "08PQ6",
  },
  naics: [
    { code: "541620", description: "Environmental Consulting" },
    { code: "541350", description: "Building Inspection Services" },
    { code: "541330", description: "Engineering Services" },
    { code: "562910", description: "Remediation Services" },
    { code: "541690", description: "Scientific & Tech Consulting" },
    { code: "237990", description: "Heavy/Civil Engineering Construction" },
  ],
  coreValues: ["Respect", "Performance", "Convenience", "Ethics", "Consistency", "Availability"],
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 5:00 PM",
    schema: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  },
} as const;

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Get a Quote" },
] as const;
