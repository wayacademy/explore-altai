import { PHOTO_WIDTHS } from '../data/photoWidths';

/**
 * Where the subject sits in each photo (CSS object-position). Most photos are
 * 2.16:1 phone panoramas, so square or 4:3 boxes cut the sides; this keeps the
 * people, animals or peak inside the frame.
 */
const FOCUS: Record<string, string> = {
  'classic-1': '45% 45%',
  'tsamba-1': '58% 55%',
  'khuiten-1': '58% 45%',
  'gef-1': '14% 50%',
  'gef-2': '12% 40%',
  'deluun-1': '40% 55%',
  'deluun-2': '6% 60%',
  'ahorse-1': '58% 60%',
  'ahorse-4': '32% 12%',
  'ohorse-1': '50% 70%',
  'bulgan-1': '38% 60%',
  'nw-1': '38% 55%',
  'nw-5': '48% 55%',
  'culture-deel': '48% 45%',
  'west-1': '42% 70%',
  'wild-leopard': '30% 72%',
  'about-camp': '42% 62%',
};

/** A site photo with a srcset of its real sizes and a subject-aware crop. */
export function Photo({
  name,
  alt = '',
  sizes = '100vw',
  className = '',
  focus,
  eager = false,
}: {
  name: string;
  alt?: string;
  sizes?: string;
  className?: string;
  focus?: string;
  eager?: boolean;
}) {
  const widths = PHOTO_WIDTHS[name];
  const files = [`./img/${name}-s.webp`, `./img/${name}.webp`, `./img/${name}-l.webp`];
  const srcSet = widths ? widths.map((w, n) => `${files[n]} ${w}w`).join(', ') : undefined;
  return (
    <img
      src={files[1]}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{ objectPosition: focus ?? FOCUS[name] ?? '50% 50%' }}
      className={className}
    />
  );
}
