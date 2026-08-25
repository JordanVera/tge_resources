import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRightIcon,
  AwardIcon,
  FolderKanbanIcon,
  HomeIcon,
  PhoneIcon,
  SearchIcon,
} from 'lucide-react';

import { FadeIn, Reveal } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: `The page you requested could not be located on ${site.name}. Return home, browse our environmental consulting services, or contact our Houston team.`,
  robots: { index: false, follow: true },
};

const destinations = [
  {
    href: '/',
    label: 'Home',
    description: 'Start over on the TGE Resources homepage.',
    icon: HomeIcon,
  },
  {
    href: '/#services',
    label: 'Services',
    description: 'Phase I & II ESA, IH, engineering, remediation, and more.',
    icon: SearchIcon,
  },
  {
    href: '/projects',
    label: 'Projects',
    description: 'Selected work for public and private clients coast to coast.',
    icon: FolderKanbanIcon,
  },
  {
    href: '/about',
    label: 'About',
    description: `WBENC-certified Woman Owned firm. Est. ${site.founded}.`,
    icon: AwardIcon,
  },
] as const;

export default function NotFound() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-70" />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <Reveal>
            <p className="font-heading text-7xl font-bold tracking-tighter text-primary/25 md:text-9xl">
              404
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Page not found
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              This site isn&apos;t in our records.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The page you requested doesn&apos;t exist — it may have been
              moved, renamed, or never published. Unlike a Phase I, there&apos;s
              nothing here to assess. {site.name} is still here:{' '}
              {site.stats.years} years of environmental consulting from Houston,
              coast to coast.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6 text-base font-semibold">
              <Link href="/">
                Back to home
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-6 text-base font-medium"
            >
              <Link href="/contact">Get a quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-6 text-base font-medium"
            >
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </Reveal>
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Find your way"
          title="Where would you like to go?"
          description="Use these links to get back on site — or jump straight into the practice area you came here for."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item, index) => (
            <FadeIn key={item.href} delay={index * 0.06}>
              <Link href={item.href} className="block h-full">
                <Card className="h-full py-0 transition-all hover:glow-primary">
                  <CardContent className="flex h-full flex-col gap-3 p-6">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <p className="font-heading text-base font-semibold">
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-semibold text-primary">
                      Go there
                      <ArrowRightIcon className="size-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} className="mt-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <h2 className="mb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Core services
              </h2>
              <p className="mb-5 text-sm text-muted-foreground">
                Looking for a specific practice area? Start here.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary/8"
                    >
                      <span>
                        <span className="block">{service.name}</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          {service.eyebrow}
                        </span>
                      </span>
                      <ArrowRightIcon className="size-4 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </Section>

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold tracking-widest text-primary uppercase">
              Need a person, not a page?
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Talk with our Houston team.
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              {site.hours.weekdays}. We typically respond the same business day.
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
