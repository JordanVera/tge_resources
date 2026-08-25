'use client';

import { useReducedMotion } from 'framer-motion';

export function HeroVideo({ src }: { src: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return null;
  }

  return (
    <video
      className="absolute inset-0 size-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
