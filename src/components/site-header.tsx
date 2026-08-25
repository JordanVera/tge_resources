'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDownIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react';

import { BrandLogo } from '@/components/brand-logo';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { services } from '@/lib/services';
import { nav, site } from '@/lib/site';
import { cn } from '@/lib/utils';

function isLinkActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesActive = pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="shrink-0"
          aria-label="TGE Resources, Inc. home"
        >
          <BrandLogo priority className="h-12 w-auto" />
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {nav.map((item) => {
              if (item.kind === 'services') {
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        'h-auto bg-transparent px-3 py-1.5 hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent',
                        servicesActive
                          ? 'text-primary'
                          : 'text-foreground/70 hover:text-foreground'
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-72 p-2">
                      <ul className="grid gap-0.5">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <NavigationMenuLink
                              asChild
                              className="flex-col items-start gap-0.5 p-2.5"
                            >
                              <Link href={`/services/${service.slug}`}>
                                <span className="text-sm font-medium">
                                  {service.shortName}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {service.eyebrow}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              const active = isLinkActive(pathname, item.href);
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        'rounded-md bg-transparent px-3 py-1.5 text-sm font-medium hover:bg-transparent focus:bg-transparent',
                        active
                          ? 'text-primary'
                          : 'text-foreground/70 hover:text-foreground'
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

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

          <Sheet
            open={open}
            onOpenChange={(next) => {
              setOpen(next);
              if (next) setMobileServicesOpen(pathname.startsWith('/services'));
            }}
          >
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                {open ? (
                  <XIcon className="size-4" />
                ) : (
                  <MenuIcon className="size-4" />
                )}
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
                {nav.map((item) => {
                  if (item.kind === 'services') {
                    return (
                      <div key={item.label}>
                        <button
                          type="button"
                          aria-expanded={mobileServicesOpen}
                          aria-controls="mobile-services-menu"
                          onClick={() =>
                            setMobileServicesOpen((current) => !current)
                          }
                          className={cn(
                            'flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                            servicesActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted'
                          )}
                        >
                          {item.label}
                          <ChevronDownIcon
                            className={cn(
                              'size-4 transition-transform',
                              mobileServicesOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        {mobileServicesOpen ? (
                          <div
                            id="mobile-services-menu"
                            className="mb-1 ml-3 mt-0.5 flex flex-col border-l border-border pl-2"
                          >
                            {services.map((service) => {
                              const href = `/services/${service.slug}`;
                              const active = pathname === href;
                              return (
                                <Link
                                  key={service.slug}
                                  href={href}
                                  onClick={() => setOpen(false)}
                                  className={cn(
                                    'rounded-lg px-3 py-2 text-sm transition-colors',
                                    active
                                      ? 'bg-primary/10 font-medium text-primary'
                                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                  )}
                                >
                                  {service.shortName}
                                </Link>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                        isLinkActive(pathname, item.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
