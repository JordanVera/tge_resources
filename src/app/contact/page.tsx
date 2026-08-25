import type { Metadata } from 'next';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
  ShieldCheckIcon,
  MailIcon,
  ArrowRightIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { LeadForm } from '@/components/lead-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description: `Start a project with ${site.name}. Call ${site.phone} or submit your inquiry online.`,
};

const trustPoints = [
  'Timely, accurate, and cost-effective deliverables',
  'Response within one business day',
  'Senior staff assigned to your project',
  'Coast-to-coast service capability',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Let's talk about your project"
        description="We promise responsiveness, professionalism, courtesy, and fairness. Reach out and we will get back to you the same business day."
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <FadeIn className="space-y-6">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Houston, TX · Coast to Coast
              </Badge>
              <h2 className="font-heading text-2xl font-bold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Whether you need a Phase I ESA for loan origination, industrial hygiene
                support, or environmental compliance guidance — TGE is ready to deliver.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: PhoneIcon,
                  label: 'Phone',
                  value: site.phone,
                  href: site.phoneHref,
                  sub: 'Call or text',
                },
                {
                  icon: MailIcon,
                  label: 'Email',
                  value: site.email,
                  href: `mailto:${site.email}`,
                  sub: 'Project inquiries & quotes',
                },
                {
                  icon: MapPinIcon,
                  label: 'Headquarters',
                  value: `${site.address.street}, ${site.address.city} ${site.address.state} ${site.address.zip}`,
                  sub: 'Services delivered coast to coast',
                },
                {
                  icon: ClockIcon,
                  label: 'Office Hours',
                  value: site.hours.weekdays,
                  sub: 'Weekend availability by arrangement',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:glow-primary"
                >
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                        <ArrowRightIcon className="size-3" />
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                Federal procurement
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p><span className="font-semibold text-foreground">DUNS:</span> {site.codes.duns}</p>
                <p><span className="font-semibold text-foreground">CAGE:</span> {site.codes.cage}</p>
                <p><span className="font-semibold text-foreground">Certifications:</span> WBENC, SBA WOSB</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
              {site.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-1.5 text-xs font-medium">
                  <ShieldCheckIcon className="size-3.5 text-primary" />
                  {cert}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <h2 className="font-heading text-xl font-bold">Submit your project inquiry</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Tell us what you need and we will respond within one business day with a
                clear, transparent proposal.
              </p>
              <div className="mt-4 space-y-1.5">
                {trustPoints.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckIcon className="size-3.5 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
