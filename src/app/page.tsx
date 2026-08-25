import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneIcon,
  SearchIcon,
  FlaskConicalIcon,
  CogIcon,
  LeafIcon,
  ClipboardCheckIcon,
  ScaleIcon,
  ZapIcon,
  HeartPulseIcon,
  HardHatIcon,
  LandmarkIcon,
  GraduationCapIcon,
  Building2Icon,
  TruckIcon,
  FactoryIcon,
  HotelIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UsersIcon,
  TrendingUpIcon,
  AwardIcon,
  MapPinIcon,
} from 'lucide-react';

import { ClientSlider } from '@/components/client-slider';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { HeroVideo } from '@/components/hero-video';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LeadForm } from '@/components/lead-form';
import { services, industries } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title:
    'Environmental Consulting Houston TX | Phase I & II ESA | Industrial Hygiene',
  description: site.description,
};

const serviceIconMap: Record<string, React.ElementType> = {
  Search: SearchIcon,
  FlaskConical: FlaskConicalIcon,
  Cog: CogIcon,
  Leaf: LeafIcon,
  ClipboardCheck: ClipboardCheckIcon,
  Scale: ScaleIcon,
};

const industryIconMap: Record<string, React.ElementType> = {
  Zap: ZapIcon,
  HeartPulse: HeartPulseIcon,
  HardHat: HardHatIcon,
  Landmark: LandmarkIcon,
  GraduationCap: GraduationCapIcon,
  Building2: Building2Icon,
  Hotel: HotelIcon,
  Truck: TruckIcon,
  Factory: FactoryIcon,
};

const statsData = [
  {
    value: site.stats.years,
    label: 'Years of Operation',
    sub: 'Est. 1994',
    icon: AwardIcon,
  },
  {
    value: site.stats.projects,
    label: 'Projects Completed',
    sub: 'Coast to coast',
    icon: CheckCircleIcon,
  },
  {
    value: site.stats.clients,
    label: 'Clients Served',
    sub: 'Public & private',
    icon: UsersIcon,
  },
  {
    value: site.stats.referral,
    label: 'New Work from Referrals',
    sub: 'Industry leading retention',
    icon: TrendingUpIcon,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <HeroVideo src="/hero-video.mp4" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/50 to-background/20" />
        {/* <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" /> */}
        <div className="hero-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-40">
          <FadeIn>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/20">
                <ShieldCheckIcon className="mr-1.5 size-3" />
                WBENC Certified Woman Owned
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                Est. {site.founded} · Houston, TX
              </Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              Environmental <span className="text-primary">excellence</span>{' '}
              built on{' '}
              <span className="relative inline-block">
                30 years
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40 rounded" />
              </span>{' '}
              of trust.
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From Phase I &amp; II ESA to industrial hygiene, remediation, and
              litigation support — TGE delivers timely, accurate, and
              cost-effective environmental services with an unwavering
              commitment to client interests.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6 text-base font-semibold">
              <Link href="/contact">
                Start a project
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-6 bg-background/80 text-base font-medium"
            >
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.28} className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {[
              'Environmental Due Diligence',
              'Industrial Hygiene',
              'Remediation',
              'Compliance',
              'Litigation Support',
            ].map((s) => (
              <span
                key={s}
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
              >
                <span className="size-1 rounded-full bg-primary/60" />
                {s}
              </span>
            ))}
          </FadeIn>
        </div>
      </div>

      {/* Stats — the social proof block */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {statsData.map((stat) => (
            <FadeIn key={stat.label}>
              <div className="flex flex-col items-center gap-1 p-8 text-center">
                <stat.icon className="mb-1 size-5 text-primary" />
                <p className="text-4xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Clients */}
      <section
        id="clients"
        className="overflow-hidden border-b border-border bg-background py-14 md:py-16"
      >
        <FadeIn className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Trusted clients
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
            Organizations that rely on TGE
          </h2>
        </FadeIn>
        <ClientSlider />
      </section>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="Core services"
          title="Comprehensive environmental consulting"
          description="From single-site assessments to complex multi-phase remediation projects — TGE brings the same disciplined rigor and senior expertise to every engagement."
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon] ?? SearchIcon;
            return (
              <StaggerItem key={service.slug}>
                <Card className="group h-full transition-all hover:glow-primary">
                  <CardHeader>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                        {service.eyebrow}
                      </span>
                    </div>
                    <CardTitle className="mt-3 text-base leading-snug">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircleIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Industries */}
      <Section id="industries" className="bg-card/30 blueprint-grid">
        <SectionHeading
          eyebrow="Industries served"
          title="Your sector, our expertise"
          description="TGE's multidisciplinary team delivers industry-specific environmental solutions to public and private institutions, as well as the federal marketplace."
          centered
        />
        <Stagger className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-9">
          {industries.map((industry) => {
            const Icon = industryIconMap[industry.icon] ?? Building2Icon;
            return (
              <StaggerItem key={industry.name}>
                <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card/80 p-4 text-center transition-shadow hover:glow-primary">
                  <Icon className="size-6 text-primary" />
                  <span className="text-xs font-medium leading-tight">
                    {industry.name}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="About TGE Resources"
              title="30 years. 10,000+ projects. 80% referral rate."
              description="Every project we undertake is bound by our core values. Our commitment to reliable, honest, and trustworthy scientific practices sets us apart — and keeps clients coming back."
            />
            <div className="mt-6 space-y-4">
              {[
                {
                  title:
                    'Client & staff retention exceeds any industry benchmark',
                  body: "Over 80% of new work originates from client referrals. Our team's tenure and expertise is a direct competitive advantage for every client engagement.",
                },
                {
                  title: '130+ years of combined management experience',
                  body: 'Our senior leadership team brings deep technical expertise across due diligence, IH, engineering, remediation, compliance, and litigation support.',
                },
                {
                  title: 'Certified for federal and private-sector work',
                  body: 'WBENC and SBA-certified Woman Owned Small Business. DUNS and CAGE registered for federal procurement. Public, private, and government clients.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-4">
            {/* Core values */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Core Values
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {site.coreValues.map((v) => (
                    <div
                      key={v}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <span className="size-2 rounded-full bg-primary/70 shrink-0" />
                      {v}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Address / contact */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Houston Headquarters
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">{site.address.street}</p>
                      <p className="text-muted-foreground">
                        {site.address.city}, {site.address.state}{' '}
                        {site.address.zip}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon className="size-4 shrink-0 text-primary" />
                    <a
                      href={site.phoneHref}
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
                <Separator className="my-4" />
                <p className="text-xs text-muted-foreground">
                  {site.hours.weekdays}
                </p>
              </CardContent>
            </Card>

            {/* NAICS */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  NAICS Codes
                </h3>
                <div className="space-y-1.5">
                  {site.naics.map((n) => (
                    <div
                      key={n.code}
                      className="flex items-center gap-2 text-xs"
                    >
                      <span className="font-mono font-semibold text-primary">
                        {n.code}
                      </span>
                      <span className="text-muted-foreground">
                        {n.description}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Lead form */}
      <Section id="quote" className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Start a conversation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Tell us about your project
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We respond within one business day with a clear, transparent
              proposal. No unnecessary scope, no overpriced deliverables — just
              honest, expert work.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
              {[
                'Timely & accurate deliverables',
                'Cost-effective solutions',
                '10,000+ projects of experience',
                'Coast-to-coast service',
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <CheckCircleIcon className="size-3.5 shrink-0 text-primary" />
                  {p}
                </div>
              ))}
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA strip */}
      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
              WBENC · SBA Certified · Est. 1994
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready to partner with TGE Resources?
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground max-w-lg">
              We promise responsiveness, professionalism, courtesy, and fairness
              — and we bring innovation and efficiency to everything we do.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 px-6 font-semibold">
              <Link href="/contact">
                Start a project
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
