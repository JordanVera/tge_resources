'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Badge } from '@/components/ui/badge';
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from '@/lib/projects';
import { cn } from '@/lib/utils';

const filters = ['All', ...projectCategories] as const;
type Filter = (typeof filters)[number];

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <div>
      <div className="sticky top-27 z-30 -mx-4 mb-10 border-y border-border bg-background/95 px-4 py-3 backdrop-blur-md md:-mx-6 md:px-6">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors',
                filter === item
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {item}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {visible.length} project{visible.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {visible.map((project, index) => (
          <FadeIn key={project.slug}>
            <article
              id={project.slug}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div
                className={cn(
                  'grid lg:grid-cols-2',
                  index % 2 === 1 && 'lg:[&>div:first-child]:order-2',
                )}
              >
                <div className="relative min-h-60 bg-muted lg:min-h-80">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/15">
                      {project.category}
                    </Badge>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                      <MapPinIcon className="size-3.5" />
                      {project.location}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-balance">
                    {project.title}
                  </h2>
                  <ul className="mt-5 space-y-2.5">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
