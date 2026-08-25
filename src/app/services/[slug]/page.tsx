import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { LeadForm } from '@/components/lead-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  getRelatedServices,
  getService,
  services,
} from '@/lib/services';
import { site } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: 'Service not found' };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.metaDescription,
            url: `${site.url}/services/${service.slug}`,
            image: `${site.url}${service.image}`,
            provider: {
              '@type': 'ProfessionalService',
              name: site.name,
              telephone: site.phone,
              url: site.url,
            },
            areaServed: 'United States',
          }),
        }}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        description={service.heroDescription}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <Button asChild className="h-12 px-6 text-base font-semibold">
          <Link href="/contact">
            Start a project
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-12 px-6 bg-background/80 text-base font-medium">
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Overview"
              title={service.name}
              description={service.overview[0]}
            />
            <div className="space-y-4">
              {service.overview.slice(1).map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Who we support
                </h2>
                <ul className="space-y-2.5">
                  {service.audience.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="How we work"
          title="A process built around the decision you need to make"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {service.process.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.04}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Deliverables"
              title="What you receive"
            />
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="border-t">
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="Related services"
          title="Other ways TGE can support this project"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className="group">
              <Card className="h-full overflow-hidden py-0 transition-all hover:glow-primary">
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-base font-semibold">
                    {item.name}
                  </h3>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View service
                    <ArrowRightIcon className="size-3.5" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="quote">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Start a conversation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Tell us about your {service.shortName.toLowerCase()} project
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We respond within one business day with a clear, transparent proposal.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <LeadForm defaultService={service.formValue} />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
