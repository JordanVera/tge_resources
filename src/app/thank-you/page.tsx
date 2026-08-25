import type { Metadata } from 'next';
import Link from 'next/link';

import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Thank You',
  description: `Thanks for contacting ${site.name}. We will be in touch shortly.`,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Reveal className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 md:px-6">
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        Inquiry received
      </p>
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Thank you for reaching out.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        We have received your project inquiry. A member of our team will review your
        request and respond within one business day — usually the same afternoon.
        If your project is time-sensitive, please call us directly at{' '}
        <a href={site.phoneHref} className="font-semibold text-primary hover:underline">
          {site.phone}
        </a>
        .
      </p>
      <p className="mt-3 text-sm italic text-primary/70">
        Environmental Excellence · Protective Strategies · Responsible Solutions
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-11 px-5">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-5">
          <a href={site.phoneHref}>Call {site.phone}</a>
        </Button>
      </div>
    </Reveal>
  );
}
