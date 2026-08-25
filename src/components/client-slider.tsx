'use client';

import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';

import { clients } from '@/lib/clients';

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex items-center gap-12 pr-12 md:gap-16 md:pr-16"
      aria-hidden={hidden || undefined}
    >
      {clients.map((client) => (
        <li
          key={`${hidden ? 'dup-' : ''}${client.name}`}
          className="flex h-14 shrink-0 items-center justify-center md:h-16"
        >
          <Image
            src={client.src}
            alt={hidden ? '' : client.name}
            width={320}
            height={120}
            className="h-12 w-auto object-contain md:h-14"
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientSlider() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 px-4 md:px-6">
        {clients.map((client) => (
          <li
            key={client.name}
            className="flex h-14 items-center justify-center"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={320}
              height={120}
              className="h-12 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="group relative mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-scroll [--animation-duration:45s] hover:paused">
        <LogoRow />
        <LogoRow hidden />
      </div>
    </div>
  );
}
