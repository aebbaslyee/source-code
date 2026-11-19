import Image from 'next/image';
import type { HeritageSite } from '../../data/heritage';

export function HeritageIllustration({ site, compact = false }: { site: HeritageSite; compact?: boolean }) {
  return (
    <Image
      src={site.image}
      alt={`Photo of ${site.name}`}
      width={800}
      height={500}
      sizes={compact ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" : "(max-width: 900px) 100vw, 50vw"}
      priority={!compact && site.slug === 'hundred-islands'}
      unoptimized
      style={{ width: '100%', height: compact ? 220 : '100%', minHeight: compact ? 180 : 300, objectFit: 'cover', display: 'block' }}
    />
  );
}
