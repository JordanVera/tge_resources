'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, PhoneIcon, XIcon, ShieldCheckIcon } from 'lucide-react';

import { BrandLogo } from '@/components/brand-logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { nav, site } from '@/lib/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
      {/* Credential bar */}
      <div className="border-b border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs md:px-6">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheckIcon className="size-3.5 text-primary" />
              WBENC Certified Woman Owned
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              SBA WOSB · DUNS {site.codes.duns} · CAGE {site.codes.cage}
            </span>
          </div>
          <a
            href={site.phoneHref}
            className="hidden shrink-0 font-semibold text-foreground/80 transition-colors hover:text-primary md:block"
          >
            {site.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0" aria-label="TGE Resources, Inc. home">
          <BrandLogo priority className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 text-sm font-medium text-foreground/60 transition-colors hover:text-primary md:flex"
          >
            <PhoneIcon className="size-3.5" />
            {site.phone}
          </a>
          <Button asChild className="hidden h-9 px-4 text-sm sm:inline-flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                {open ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="pb-2">
                <SheetTitle>
                  <BrandLogo className="h-10 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <div className="px-4 pb-2">
                <Button asChild className="h-11 w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
                <a
                  href={site.phoneHref}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium transition-colors hover:bg-muted"
                >
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </div>
              <nav className="flex flex-col gap-0.5 px-4 pb-8 pt-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
