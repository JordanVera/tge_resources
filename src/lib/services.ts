export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  body: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  formValue: string;
  eyebrow: string;
  description: string;
  icon: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  overview: string[];
  audience: string[];
  process: ServiceStep[];
  deliverables: string[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: 'environmental-due-diligence',
    name: 'Environmental Due Diligence',
    shortName: 'Due Diligence',
    formValue: 'Environmental Due Diligence (Phase I / II ESA)',
    eyebrow: 'Phase I & II ESA',
    description:
      'TGE has completed well over ten thousand projects for loan origination, mortgage financing, and property foreclosure — from single locations to large portfolios. Our work products are a key component in risk mitigation decision-making.',
    icon: 'Search',
    bullets: [
      'Phase I Environmental Site Assessments',
      'Phase II Site Investigations',
      'Portfolio & single-site assessments',
      'Loan origination & foreclosure support',
      'Risk mitigation decision support',
    ],
    image: '/services/environmental-due-diligence.jpg',
    imageAlt:
      'Environmental professionals conducting a Phase I site assessment at an industrial property',
    metaTitle: 'Phase I & II ESA | Environmental Due Diligence Houston TX',
    metaDescription:
      'Phase I and Phase II Environmental Site Assessments from TGE Resources. 10,000+ due diligence projects for lenders, buyers, and property owners across the U.S.',
    heroTitle: 'Environmental due diligence that lenders and buyers can act on.',
    heroDescription:
      'Phase I and Phase II ESAs built for loan origination, acquisitions, refinancing, and foreclosure — delivered with the speed and documentation your transaction requires.',
    overview: [
      'When a property changes hands or a loan is originated, environmental unknowns can stall closing or transfer liability to the wrong party. TGE’s due diligence team has completed more than 10,000 Phase I and Phase II Environmental Site Assessments for lenders, equity investors, corporate real estate groups, and public agencies.',
      'We work to ASTM E1527 and related standards, then go further when the site history, surrounding land use, or transaction structure demands it. Findings are written so credit, legal, and asset teams can make a decision — not decode a technical report.',
      'Whether you need a single-site Phase I on a tight closing calendar or a multi-state portfolio screened on a common protocol, senior staff stay involved from kickoff through reliance letters.',
    ],
    audience: [
      'Commercial lenders and CMBS originators',
      'Corporate and institutional buyers',
      'Special servicers and foreclosure teams',
      'Public agencies acquiring or disposing of real estate',
      'Attorneys coordinating environmental representations',
    ],
    process: [
      {
        title: 'Scoping & records',
        body: 'We confirm the ASTM standard, user-provided information, and turnaround, then pull historical aerials, city directories, regulatory databases, and chain-of-title clues that actually matter for the site.',
      },
      {
        title: 'Site reconnaissance',
        body: 'Trained assessors walk the property and adjoining uses, document RECs, and photograph conditions so the report can stand up to underwriting review.',
      },
      {
        title: 'Findings & Phase II, if needed',
        body: 'Recognized environmental conditions are explained in plain language. If sampling is warranted, we design a Phase II that answers the credit question without inflating scope.',
      },
      {
        title: 'Reliance & close support',
        body: 'Reports, reliance letters, and follow-up with counsel or the lender’s reviewer are part of the engagement — not extras billed at the eleventh hour.',
      },
    ],
    deliverables: [
      'ASTM-compliant Phase I ESA report',
      'Phase II sampling plan, field work, and laboratory interpretation',
      'Portfolio screening matrices and prioritized findings',
      'Lender-ready reliance letters',
      'Recommendations for further investigation or no further action',
    ],
    faqs: [
      {
        question: 'How fast can TGE complete a Phase I ESA?',
        answer:
          'Standard Phase I reports are typically delivered in 10–15 business days. Rush schedules are available when records access and site access allow — tell us the closing date when you inquire.',
      },
      {
        question: 'Do you work to ASTM E1527-21?',
        answer:
          'Yes. Phase I ESAs are performed to the current ASTM E1527 standard and EPA All Appropriate Inquiries (AAI) rule, with updates as those standards evolve.',
      },
      {
        question: 'Can you assess a full portfolio at once?',
        answer:
          'Yes. We regularly run multi-site and multi-state programs on a shared protocol so findings can be compared, prioritized, and reported to a single credit committee.',
      },
    ],
  },
  {
    slug: 'industrial-hygiene',
    name: 'Industrial Hygiene Consulting',
    shortName: 'Industrial Hygiene',
    formValue: 'Industrial Hygiene (IH) Consulting',
    eyebrow: 'IH Consulting',
    description:
      "Building age, use, occupancy, or condition may degrade air quality and increase risk. TGE's IH professionals reduce uncertainty and drive solutions for petrochemical, heavy industry, and OSHA-regulated environments.",
    icon: 'FlaskConical',
    bullets: [
      'Indoor air quality assessment',
      'Mold & asbestos inspection',
      'OSHA exposure monitoring',
      'Petrochemical & industrial IH',
      'Occupant health & comfort solutions',
    ],
    image: '/services/industrial-hygiene.jpg',
    imageAlt:
      'Industrial hygienist monitoring air quality inside a petrochemical facility',
    metaTitle: 'Industrial Hygiene Consulting Houston TX | IAQ, Mold & OSHA',
    metaDescription:
      'Industrial hygiene consulting from TGE Resources: indoor air quality, mold and asbestos inspection, and OSHA exposure monitoring for industrial and commercial facilities.',
    heroTitle: 'Industrial hygiene that reduces exposure — and uncertainty.',
    heroDescription:
      'From petrochemical plants to occupied commercial buildings, TGE’s IH team measures what people actually breathe and recommends controls that hold up to OSHA, occupants, and operations.',
    overview: [
      'Indoor air quality complaints, suspected mold, aging building materials, and process emissions all create the same problem: you cannot manage what you have not measured. TGE’s industrial hygienists design sampling that answers the regulatory or occupant question without collecting data for its own sake.',
      'Our work spans OSHA-regulated industry — including Gulf Coast petrochemical and heavy manufacturing — as well as healthcare, education, and commercial properties where occupant comfort and liability sit side by side.',
      'Results come with context: comparison to PELs, TLVs, and relevant indoor air guidance, plus practical next steps for engineering controls, medical surveillance, or abatement.',
    ],
    audience: [
      'EHS managers at manufacturing and petrochemical sites',
      'Facility and property managers with IAQ complaints',
      'Healthcare and education campuses',
      'Contractors planning renovation or demolition',
      'Counsel evaluating occupant or worker exposure claims',
    ],
    process: [
      {
        title: 'Exposure characterization',
        body: 'We map processes, building systems, occupancy, and complaint history so sampling targets the right agents, shifts, and locations.',
      },
      {
        title: 'Field monitoring',
        body: 'Personal and area sampling, IAQ parameters, mold/moisture investigation, and asbestos surveys are executed with chain-of-custody and accredited laboratories.',
      },
      {
        title: 'Interpretation',
        body: 'Results are compared to occupational limits and indoor environmental criteria, with clear language on whether a hazard is present and how significant it is.',
      },
      {
        title: 'Control recommendations',
        body: 'We specify ventilation, isolation, PPE, abatement, or medical follow-up — coordinated with operations so recommendations can actually be implemented.',
      },
    ],
    deliverables: [
      'OSHA exposure monitoring reports',
      'Indoor air quality assessments',
      'Mold, moisture, and asbestos inspection reports',
      'Abatement oversight and clearance sampling',
      'Written control and ventilation recommendations',
    ],
    faqs: [
      {
        question: 'Do you handle both industrial plants and office buildings?',
        answer:
          'Yes. The same IH staff works OSHA-regulated process environments and occupied commercial, healthcare, and education buildings. The sampling design changes with the question — the rigor does not.',
      },
      {
        question: 'Can TGE support an OSHA inspection or citation response?',
        answer:
          'We provide exposure data, program gap review, and documentation that EHS and counsel can use in agency discussions. We do not replace your legal representation.',
      },
      {
        question: 'How do you approach mold investigations?',
        answer:
          'We start with moisture source and building science, not spore counts alone. Sampling is used to confirm or bound a problem after the physical investigation, then we outline remediation that matches the extent of damage.',
      },
    ],
  },
  {
    slug: 'environmental-engineering',
    name: 'Environmental Engineering',
    shortName: 'Engineering',
    formValue: 'Environmental Engineering',
    eyebrow: 'Engineering Services',
    description:
      "Environmental engineering integrated across TGE's full service line to answer complex client needs — controlling and mitigating exposure to human health and the environment while reducing risk and further damage to property.",
    icon: 'Cog',
    bullets: [
      'Exposure control & mitigation design',
      'Risk reduction strategies',
      'Multi-service engineering integration',
      'NAICS 541330 certified',
      'Complex project management',
    ],
    image: '/services/environmental-engineering.jpg',
    imageAlt:
      'Environmental engineers reviewing plans at an industrial treatment facility',
    metaTitle: 'Environmental Engineering Houston TX | Mitigation Design',
    metaDescription:
      'Environmental engineering from TGE Resources: exposure control, mitigation design, and integrated solutions for complex industrial and property projects. NAICS 541330.',
    heroTitle: 'Engineering that controls exposure and protects the asset.',
    heroDescription:
      'TGE designs practical mitigation — not theoretical systems — so contamination, vapor, stormwater, and process risks are managed without stalling operations.',
    overview: [
      'Complex sites rarely need a single discipline. TGE’s environmental engineering practice sits inside the same firm as due diligence, IH, remediation, and compliance, so design decisions are informed by field data instead of being handed off between vendors.',
      'We focus on exposure control and risk reduction: vapor mitigation, treatment systems, containment, stormwater and wastewater interfaces, and engineering that keeps a property usable while cleanup or monitoring continues.',
      'Registered under NAICS 541330, the team is built for industrial, commercial, and public-sector projects where constructability and agency acceptance matter as much as the calculation.',
    ],
    audience: [
      'Industrial operators with process or legacy contamination',
      'Developers needing vapor or soil-gas mitigation',
      'Public agencies designing cleanup or infrastructure interfaces',
      'Property owners protecting occupied buildings',
      'Project teams that need engineering tied to field investigation',
    ],
    process: [
      {
        title: 'Problem definition',
        body: 'We start with the exposure pathway, regulatory driver, and operational constraints — not a catalog of treatment technologies.',
      },
      {
        title: 'Options analysis',
        body: 'Alternatives are scored on effectiveness, constructability, O&M burden, and cost so you can choose a path with eyes open.',
      },
      {
        title: 'Design & agency interface',
        body: 'Drawings, specifications, and calculations are prepared for contractors and, where required, submitted for agency review.',
      },
      {
        title: 'Implementation support',
        body: 'TGE stays available through construction, startup, and performance verification so the system matches the design intent.',
      },
    ],
    deliverables: [
      'Mitigation and treatment system design packages',
      'Engineering evaluations and alternatives analyses',
      'Vapor intrusion control design',
      'Construction support and startup documentation',
      'Performance and operations guidance',
    ],
    faqs: [
      {
        question: 'Is this standalone engineering or tied to TGE’s other services?',
        answer:
          'Both. Some clients hire us only for design. Many use engineering as the bridge between a Phase II or IH finding and a constructed control — which is where having investigation and design in one firm saves time.',
      },
      {
        question: 'Do you stamp drawings?',
        answer:
          'Engineering deliverables are prepared under the responsible professional’s license as required for the jurisdiction and project type. Confirm stamp needs when you request a proposal.',
      },
      {
        question: 'Can you work with our existing contractor?',
        answer:
          'Yes. We regularly design for owner-selected contractors and provide RFI support, field observation, and startup review without taking over construction management unless asked.',
      },
    ],
  },
  {
    slug: 'environmental-remediation',
    name: 'Environmental Remediation',
    shortName: 'Remediation',
    formValue: 'Environmental Remediation',
    eyebrow: 'NAICS 562910',
    description:
      'When corrective action is necessary, TGE brings cost-effective solutions in risk management, remediation planning & design, field implementation, effectiveness monitoring, post-closure care, and agency reporting.',
    icon: 'Leaf',
    bullets: [
      'Remediation planning & design',
      'Field implementation',
      'Effectiveness monitoring',
      'Post-closure care',
      'Agency reporting & coordination',
    ],
    image: '/services/environmental-remediation.jpg',
    imageAlt:
      'Remediation crew excavating and managing soil at a contaminated industrial site',
    metaTitle: 'Environmental Remediation Houston TX | Cleanup & Monitoring',
    metaDescription:
      'Cost-effective environmental remediation from TGE Resources: planning, field implementation, monitoring, post-closure care, and agency reporting. NAICS 562910.',
    heroTitle: 'Remediation sized to the risk — not the worst-case invoice.',
    heroDescription:
      'When cleanup is required, TGE plans, implements, and documents corrective action that regulators will accept and that operations can live with.',
    overview: [
      'Corrective action is where environmental cost can spiral. TGE’s remediation practice (NAICS 562910) is built to match the remedy to the risk: excavation where it is the cleanest answer, in-situ or monitoring-based approaches where they close the pathway for less.',
      'We handle planning and design, field implementation, effectiveness monitoring, post-closure care, and the agency reporting that keeps a site moving toward no further action or an accepted engineering control.',
      'Gulf Coast industrial sites, commercial redevelopment, and public properties are all in our book of work. Senior staff stay on the project so field changes do not quietly expand scope.',
    ],
    audience: [
      'Industrial facilities with soil or groundwater plumes',
      'Owners under TCEQ or EPA cleanup programs',
      'Developers needing a site ready for construction',
      'Lenders requiring remedy as a closing condition',
      'Public entities managing legacy contamination',
    ],
    process: [
      {
        title: 'Remedy selection',
        body: 'We evaluate source, pathway, receptors, and land-use plans, then recommend a remedy that can actually be permitted, constructed, and maintained.',
      },
      {
        title: 'Work plan & approvals',
        body: 'Plans, health and safety, waste handling, and agency submittals are prepared before heavy equipment mobilizes.',
      },
      {
        title: 'Field implementation',
        body: 'TGE manages or oversees excavation, treatment, well installation, and related work with documented waste tracking.',
      },
      {
        title: 'Monitor, close, or maintain',
        body: 'Effectiveness sampling, post-closure care, and reporting continue until the agency endpoint is met or an accepted long-term control is in place.',
      },
    ],
    deliverables: [
      'Remedial action plans and design',
      'Field implementation and contractor oversight',
      'Waste characterization and disposal documentation',
      'Effectiveness monitoring reports',
      'Post-closure care and agency correspondence',
    ],
    faqs: [
      {
        question: 'Does TGE self-perform cleanup or oversee contractors?',
        answer:
          'We design and manage the remedy and, depending on the scope, self-perform selected field tasks or oversee specialty contractors. The structure is chosen so quality and cost stay visible.',
      },
      {
        question: 'Can you work under an existing TCEQ or EPA order?',
        answer:
          'Yes. We routinely step into ordered sites, inherit prior data, and align the next phase of work with the current regulatory instrument.',
      },
      {
        question: 'How do you keep remediation from overrunning budget?',
        answer:
          'By defining the endpoint first, sampling enough to bound waste volumes, and putting change-order triggers in writing before mobilization. We would rather narrow the first phase than surprise you in the field.',
      },
    ],
  },
  {
    slug: 'environmental-compliance',
    name: 'Environmental Compliance',
    shortName: 'Compliance',
    formValue: 'Environmental Compliance',
    eyebrow: 'Regulatory Support',
    description:
      "Environmental compliance is dynamic and ever-expanding. TGE's specialists work closely with your EHS team to identify, prioritize, and act on your industry-specific compliance needs across all major environmental programs.",
    icon: 'ClipboardCheck',
    bullets: [
      'Industry-specific compliance audits',
      'EHS program support',
      'Regulatory gap analysis',
      'Compliance action planning',
      'Multi-program coverage',
    ],
    image: '/services/environmental-compliance.jpg',
    imageAlt:
      'EHS specialist conducting an environmental compliance inspection on a factory floor',
    metaTitle: 'Environmental Compliance Consulting Houston TX | EHS Support',
    metaDescription:
      'Environmental compliance audits, gap analysis, and EHS program support from TGE Resources. Industry-specific help across air, water, waste, and reporting programs.',
    heroTitle: 'Compliance support that keeps EHS ahead of the next inspection.',
    heroDescription:
      'TGE works beside your EHS team to find the gaps that matter, prioritize them, and close them across air, water, waste, and reporting programs.',
    overview: [
      'Environmental rules do not sit still, and neither does a Gulf Coast industrial facility. TGE’s compliance specialists help EHS teams see which requirements actually apply, which records will be asked for, and which gaps would become findings.',
      'We cover the major program areas — air, stormwater, wastewater, waste, SPCC, EPCRA, and related state programs — with industry-specific audits instead of generic checklists.',
      'The goal is an action plan your staff can run: owners, due dates, and enough technical backup to implement without another round of consulting for every permit form.',
    ],
    audience: [
      'Plant and corporate EHS managers',
      'Newly acquired facilities needing a baseline audit',
      'Companies preparing for agency inspection',
      'Organizations building or refreshing written programs',
      'Public-sector operations with multi-media permits',
    ],
    process: [
      {
        title: 'Applicability & records review',
        body: 'We inventory permits, plans, training, and operating data to see what the facility is obligated to do — not what a template assumes.',
      },
      {
        title: 'On-site audit',
        body: 'Walkdowns focus on the conditions inspectors look for: labeling, containment, emissions points, outfalls, satellite accumulation, and recordkeeping in the field.',
      },
      {
        title: 'Gap ranking',
        body: 'Findings are ranked by enforcement risk and operational difficulty so you are not staring at an undifferentiated list of 80 items.',
      },
      {
        title: 'Action planning',
        body: 'We leave you with owners, sequencing, and, where requested, help drafting plans, permit modifications, or training.',
      },
    ],
    deliverables: [
      'Multi-media compliance audit reports',
      'Regulatory gap analyses',
      'Corrective action plans with priorities',
      'Permit and plan update support',
      'EHS program and training assistance',
    ],
    faqs: [
      {
        question: 'Which programs can TGE cover in one audit?',
        answer:
          'Typical multi-media reviews include air, stormwater, wastewater, hazardous and industrial waste, SPCC, and EPCRA/Tier II, tailored to the site’s NAICS and permits. We can narrow or expand the scope to match your risk.',
      },
      {
        question: 'Will you write the programs or only identify gaps?',
        answer:
          'Either. Many clients want a findings report and a ranked punch list. Others ask us to draft or refresh SPCC, SWPPP, waste, or training documents after the audit.',
      },
      {
        question: 'Do you support inspections in real time?',
        answer:
          'When scheduled in advance, we can be on site or on call during an inspection to help EHS locate records and understand information requests. We do not speak for the company in lieu of counsel.',
      },
    ],
  },
  {
    slug: 'litigation-support',
    name: 'Litigation Support & Expert Witness',
    shortName: 'Litigation Support',
    formValue: 'Litigation Support',
    eyebrow: '25+ Years of Experience',
    description:
      "TGE's litigation support and expert witness work spans all service areas over 25+ years. Senior management serves as fact and expert witness for litigation upon request and prequalification by counsel.",
    icon: 'Scale',
    bullets: [
      'Expert witness testimony',
      'Fact witness for TGE projects',
      'All environmental service areas',
      '25+ years of case experience',
      'Prequalification by counsel',
    ],
    image: '/services/litigation-support.jpg',
    imageAlt:
      'Senior environmental expert reviewing scientific evidence with counsel',
    metaTitle: 'Environmental Expert Witness Houston TX | Litigation Support',
    metaDescription:
      'Environmental litigation support and expert witness services from TGE Resources. 25+ years across due diligence, IH, engineering, remediation, and compliance.',
    heroTitle: 'Expert opinions grounded in 25+ years of project work.',
    heroDescription:
      'TGE’s senior staff support counsel as fact and expert witnesses — only after prequalification — across the same environmental disciplines we practice in the field.',
    overview: [
      'Litigation over contamination, exposure, and transactional disclosures is won or lost on whether the science is defensible. TGE has provided litigation support for more than 25 years across due diligence, industrial hygiene, engineering, remediation, and compliance.',
      'Senior management may serve as fact witnesses on TGE project files or as expert witnesses when counsel prequalifies the assignment. We do not advertise a “testifying expert” for every dispute — the fit has to be real.',
      'Support can include file review, opposing-expert critique, deposition and trial testimony, and technical exhibits that a jury or judge can follow without watering down the underlying data.',
    ],
    audience: [
      'Environmental and commercial litigators',
      'In-house counsel at industrial companies',
      'Insurers evaluating environmental claims',
      'Parties in allocation or cost-recovery disputes',
      'Counsel needing a fact witness on a TGE work product',
    ],
    process: [
      {
        title: 'Conflict & prequalification',
        body: 'We check conflicts and confirm that the technical questions fall inside TGE’s actual practice before any opinions are formed.',
      },
      {
        title: 'File and site review',
        body: 'Project files, sampling data, historical records, and — when appropriate — site conditions are reviewed on a privileged, counsel-directed basis.',
      },
      {
        title: 'Opinions & exhibits',
        body: 'Written opinions, figures, and demonstratives are prepared to the standard of the venue, with a clear line from data to conclusion.',
      },
      {
        title: 'Testimony',
        body: 'Deposition and trial support is scheduled with counsel. Fact testimony is limited to TGE’s work; expert testimony stays within the disclosed opinions.',
      },
    ],
    deliverables: [
      'Confidential technical file reviews',
      'Expert reports and rebuttal reports',
      'Fact-witness support on TGE projects',
      'Deposition and trial testimony',
      'Exhibits and data summaries for counsel',
    ],
    faqs: [
      {
        question: 'Will TGE automatically take any environmental case?',
        answer:
          'No. Engagements are accepted only after conflict checks and counsel prequalification. If the facts sit outside our practice, we will say so early.',
      },
      {
        question: 'What is the difference between fact and expert witness work?',
        answer:
          'Fact testimony addresses work TGE actually performed. Expert testimony offers opinions on issues in the case, within a disclosed scope, and is only offered when we have the independent basis to hold those opinions.',
      },
      {
        question: 'Do you work for plaintiffs and defendants?',
        answer:
          'We work for the party whose technical questions we can support honestly. That has included both sides over the years, always subject to conflicts.',
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3) {
  return services.filter((service) => service.slug !== slug).slice(0, limit);
}

export const industries = [
  { name: 'Energy', icon: 'Zap' },
  { name: 'Healthcare', icon: 'HeartPulse' },
  { name: 'Construction', icon: 'HardHat' },
  { name: 'Government', icon: 'Landmark' },
  { name: 'Education', icon: 'GraduationCap' },
  { name: 'Commercial', icon: 'Building2' },
  { name: 'Hospitality', icon: 'Hotel' },
  { name: 'Transportation', icon: 'Truck' },
  { name: 'Industrial', icon: 'Factory' },
];
