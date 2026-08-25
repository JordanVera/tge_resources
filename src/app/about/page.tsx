import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRightIcon,
  AwardIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { aboutHighlights, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | WBENC Woman Owned Environmental Consulting',
  description:
    'TGE Resources is a WBENC-certified Woman Owned environmental consulting firm established in 1994 in Houston, TX. 10,000+ projects, 80% referral rate, coast-to-coast service.',
};

const statsData = [
  {
    value: site.stats.years,
    label: 'Years of Operation',
    sub: `Est. ${site.founded}`,
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: `About ${site.name}`,
            description:
              'TGE Resources is a WBENC-certified Woman Owned environmental consulting firm established in 1994.',
            url: `${site.url}/about`,
            mainEntity: {
              '@type': 'ProfessionalService',
              name: site.name,
              foundingDate: String(site.founded),
              telephone: site.phone,
              email: site.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: site.address.street,
                addressLocality: site.address.city,
                addressRegion: site.address.state,
                postalCode: site.address.zip,
                addressCountry: 'US',
              },
            },
          }),
        }}
      />

      <PageHero
        eyebrow="About TGE Resources"
        title="30 years. 10,000+ projects. 80% referral rate."
        description="Every project we undertake is bound by our core values. Our commitment to reliable, honest, and trustworthy scientific practices sets us apart — and keeps clients coming back."
        image="/projects/discovery-green-park-conservancy.jpg"
        imageAlt="Discovery Green Park in Houston, a TGE Resources project site"
      >
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
      </PageHero>

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

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Who we are"
              title="Environmental excellence from Houston, coast to coast."
              description="TGE Resources is a WBENC-certified Woman Owned environmental consulting firm established in 1994. We deliver timely, accurate, and cost-effective Phase I & II ESA, industrial hygiene, environmental engineering, remediation, compliance, and litigation support."
            />
            <div className="space-y-4">
              {aboutHighlights.map((item) => (
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
                      <span className="size-2 shrink-0 rounded-full bg-primary/70" />
                      {v}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

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
                      className="font-semibold transition-colors hover:text-primary"
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
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="Federal / procurement"
          title="Certified, registered, and ready to work."
          description="TGE is structured for public, private, and government engagements — with the certifications and codes procurement teams need on file."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <FadeIn>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {site.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-start gap-2.5 text-sm font-medium"
                    >
                      <ShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      {cert}
                    </li>
                  ))}
                </ul>
                <Separator className="my-5" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                      DUNS
                    </p>
                    <p className="mt-1 font-semibold">{site.codes.duns}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                      CAGE Code
                    </p>
                    <p className="mt-1 font-semibold">{site.codes.cage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  NAICS Codes
                </h3>
                <div className="space-y-2.5">
                  {site.naics.map((n) => (
                    <div
                      key={n.code}
                      className="flex items-baseline gap-3 text-sm"
                    >
                      <span className="font-mono text-xs font-semibold text-primary">
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

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
              WBENC · SBA Certified · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready to partner with TGE Resources?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
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
