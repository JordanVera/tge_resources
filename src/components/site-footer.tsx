import Link from 'next/link';
import { MapPinIcon, PhoneIcon, MailIcon, ShieldCheckIcon } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary/30 bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border py-5">
          {site.certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheckIcon className="size-4 shrink-0 text-primary" />
              {cert}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <div className="mb-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">TGE</span>
            <span className="text-xs font-semibold tracking-widest text-foreground/60 uppercase">Resources</span>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground italic mb-4">
            Environmental Excellence · Protective Strategies · Responsible Solutions
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Established {site.founded}. Environmental consulting serving clients coast-to-coast
            from Houston, TX.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
            >
              <PhoneIcon className="size-4 shrink-0 text-primary" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4 shrink-0 text-primary" />
              {site.email}
            </a>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="text-xs">
                <p>{site.address.street}</p>
                <p>{site.address.city}, {site.address.state} {site.address.zip}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <span className="text-muted-foreground">{s.shortName}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Federal / Procurement
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">DUNS</span>
              <p>{site.codes.duns}</p>
            </li>
            <li>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">CAGE Code</span>
              <p>{site.codes.cage}</p>
            </li>
            <li className="pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50">NAICS Codes</span>
              {site.naics.map((n) => (
                <p key={n.code} className="text-xs">{n.code} — {n.description}</p>
              ))}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Core Values
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {site.coreValues.map((v) => (
              <li key={v} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary/60 shrink-0" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Established {site.founded} · WBENC Certified · Houston, TX</p>
      </div>
    </footer>
  );
}
