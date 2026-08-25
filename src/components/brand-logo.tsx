import Image from 'next/image';

import { cn } from '@/lib/utils';

export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo/logo-main.png"
      alt="TGE Resources, Inc."
      width={199}
      height={136}
      priority={priority}
      className={cn('h-12 w-auto', className)}
    />
  );
}
