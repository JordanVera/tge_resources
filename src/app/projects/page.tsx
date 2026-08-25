import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

import { PageHero } from '@/components/page-hero';
import { ProjectsExplorer } from '@/components/projects-explorer';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projects | Environmental Consulting Case Studies',
  description:
    'Selected TGE Resources projects across aviation, energy, healthcare, industrial, public-sector, and litigation work — from Houston to coast-to-coast portfolios.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Work that holds up in the field, the agency file, and the closing room."
        description="A selection of TGE engagements spanning airports, industrial facilities, healthcare, public infrastructure, and multi-state portfolios. Same project record as our current site — presented with the rigor the work deserves."
        image={projects[2].image}
        imageAlt={projects[2].imageAlt}
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

      <Section>
        <ProjectsExplorer />
      </Section>

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {projects.length} featured projects · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Have a site or portfolio that looks like one of these?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              Tell us what you need. We respond within one business day with a
              clear, transparent proposal.
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
