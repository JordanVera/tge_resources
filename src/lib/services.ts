export type Service = {
  slug: string;
  name: string;
  shortName: string;
  formValue: string;
  eyebrow: string;
  description: string;
  icon: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "environmental-due-diligence",
    name: "Environmental Due Diligence",
    shortName: "Due Diligence",
    formValue: "Environmental Due Diligence (Phase I / II ESA)",
    eyebrow: "Phase I & II ESA",
    description:
      "TGE has completed well over ten thousand projects for loan origination, mortgage financing, and property foreclosure — from single locations to large portfolios. Our work products are a key component in risk mitigation decision-making.",
    icon: "Search",
    bullets: [
      "Phase I Environmental Site Assessments",
      "Phase II Site Investigations",
      "Portfolio & single-site assessments",
      "Loan origination & foreclosure support",
      "Risk mitigation decision support",
    ],
  },
  {
    slug: "industrial-hygiene",
    name: "Industrial Hygiene Consulting",
    shortName: "Industrial Hygiene",
    formValue: "Industrial Hygiene (IH) Consulting",
    eyebrow: "IH Consulting",
    description:
      "Building age, use, occupancy, or condition may degrade air quality and increase risk. TGE's IH professionals reduce uncertainty and drive solutions for petrochemical, heavy industry, and OSHA-regulated environments.",
    icon: "FlaskConical",
    bullets: [
      "Indoor air quality assessment",
      "Mold & asbestos inspection",
      "OSHA exposure monitoring",
      "Petrochemical & industrial IH",
      "Occupant health & comfort solutions",
    ],
  },
  {
    slug: "environmental-engineering",
    name: "Environmental Engineering",
    shortName: "Engineering",
    formValue: "Environmental Engineering",
    eyebrow: "Engineering Services",
    description:
      "Environmental engineering integrated across TGE's full service line to answer complex client needs — controlling and mitigating exposure to human health and the environment while reducing risk and further damage to property.",
    icon: "Cog",
    bullets: [
      "Exposure control & mitigation design",
      "Risk reduction strategies",
      "Multi-service engineering integration",
      "NAICS 541330 certified",
      "Complex project management",
    ],
  },
  {
    slug: "environmental-remediation",
    name: "Environmental Remediation",
    shortName: "Remediation",
    formValue: "Environmental Remediation",
    eyebrow: "NAICS 562910",
    description:
      "When corrective action is necessary, TGE brings cost-effective solutions in risk management, remediation planning & design, field implementation, effectiveness monitoring, post-closure care, and agency reporting.",
    icon: "Leaf",
    bullets: [
      "Remediation planning & design",
      "Field implementation",
      "Effectiveness monitoring",
      "Post-closure care",
      "Agency reporting & coordination",
    ],
  },
  {
    slug: "environmental-compliance",
    name: "Environmental Compliance",
    shortName: "Compliance",
    formValue: "Environmental Compliance",
    eyebrow: "Regulatory Support",
    description:
      "Environmental compliance is dynamic and ever-expanding. TGE's specialists work closely with your EHS team to identify, prioritize, and act on your industry-specific compliance needs across all major environmental programs.",
    icon: "ClipboardCheck",
    bullets: [
      "Industry-specific compliance audits",
      "EHS program support",
      "Regulatory gap analysis",
      "Compliance action planning",
      "Multi-program coverage",
    ],
  },
  {
    slug: "litigation-support",
    name: "Litigation Support & Expert Witness",
    shortName: "Litigation Support",
    formValue: "Litigation Support",
    eyebrow: "25+ Years of Experience",
    description:
      "TGE's litigation support and expert witness work spans all service areas over 25+ years. Senior management serves as fact and expert witness for litigation upon request and prequalification by counsel.",
    icon: "Scale",
    bullets: [
      "Expert witness testimony",
      "Fact witness for TGE projects",
      "All environmental service areas",
      "25+ years of case experience",
      "Prequalification by counsel",
    ],
  },
];

export const industries = [
  { name: "Energy", icon: "Zap" },
  { name: "Healthcare", icon: "HeartPulse" },
  { name: "Construction", icon: "HardHat" },
  { name: "Government", icon: "Landmark" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Commercial", icon: "Building2" },
  { name: "Hospitality", icon: "Hotel" },
  { name: "Transportation", icon: "Truck" },
  { name: "Industrial", icon: "Factory" },
];
