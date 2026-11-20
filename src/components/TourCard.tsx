import { motion } from 'motion/react';
import { ArrowUpRight, CalendarRange, Clock, Heart, MapPin } from 'lucide-react';
import { CATEGORY_LABELS } from '../data/tours';
import { useLang } from '../i18n/lang';
import type { Tour } from '../types/travel';
import { daysLabel, formatUsd } from '../utils/travelLogic';
import { Photo } from './Photo';
import { Ph } from './Placeholder';

export function TourCard({
  tour,
  saved,
  onToggleSave,
  onOpen,
  large = false,
}: {
  tour: Tour;
  saved: boolean;
  onToggleSave: (id: string) => void;
  onOpen: (id: string) => void;
  large?: boolean;
}) {
  const { lang, t, pick } = useLang();
  const days = daysLabel(tour, lang);
  const price = tour.priceUsd ? t.price.from(formatUsd(tour.priceUsd)) : null;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-card shadow-card transition-shadow hover:shadow-lift ${
        large ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[340px] lg:flex-1' : 'aspect-[4/3]'}`}>
        <Photo
          name={tour.images[0]}
          alt={tour.title}
          sizes={large ? '(min-width: 1024px) 820px, 50vw' : '(min-width: 1024px) 400px, 50vw'}
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-2 top-2 max-w-[calc(100%-3rem)] truncate rounded-full bg-white/90 px-2 py-0.5 text-[0.65rem] font-bold text-ink backdrop-blur sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
          {pick(CATEGORY_LABELS[tour.category])}
        </span>
        <button
          type="button"
          onClick={() => onToggleSave(tour.id)}
          aria-pressed={saved}
          aria-label={saved ? t.tours.unsave : t.tours.save}
          className="absolute right-2 top-2 z-10 grid size-8 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:scale-105 sm:right-3 sm:top-3 sm:size-10"
        >
          <Heart className={`size-4 transition sm:size-[18px] ${saved ? 'fill-[#d2453a] text-[#d2453a]' : ''}`} />
        </button>
      </div>
      {large && tour.images.length > 2 && (
        <div aria-hidden className="hidden grid-cols-2 gap-1.5 pt-1.5 lg:grid">
          {tour.images.slice(1, 3).map((name) => (
            <div key={name} className="aspect-[2.1/1] overflow-hidden">
              <Photo name={name} sizes="410px" className="size-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            </div>
          ))}
        </div>
      )}

      <div className={`flex flex-1 flex-col p-3 sm:p-5 ${large ? 'lg:flex-none lg:p-7' : ''}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-semibold text-muted sm:text-xs">
          <span className="hidden items-center gap-1 sm:inline-flex"><MapPin className="size-3.5" aria-hidden />{tour.region}</span>
          {days && <span className="inline-flex items-center gap-1"><Clock className="size-3 sm:size-3.5" aria-hidden />{days}</span>}
          {tour.season && <span className="hidden items-center gap-1 sm:inline-flex"><CalendarRange className="size-3.5" aria-hidden />{tour.season}</span>}
        </div>
        <h3 className={`font-display mt-1.5 font-semibold leading-snug tracking-tight sm:mt-2 ${large ? 'text-[0.98rem] sm:text-xl lg:text-[1.9rem]' : 'text-[0.98rem] sm:text-xl'}`}>
          <button type="button" onClick={() => onOpen(tour.id)} className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {tour.title}
          </button>
        </h3>
        {tour.titleEn && <p className="mt-0.5 hidden text-xs text-muted sm:block">{tour.titleEn}</p>}
        <p className={`mt-3 hidden text-sm leading-relaxed text-ink/75 sm:block ${large ? 'line-clamp-3 lg:line-clamp-none' : 'line-clamp-3'}`}>{tour.summary}</p>
        {large && (
          <ul className="mt-4 hidden gap-x-6 gap-y-1.5 text-sm text-ink/80 lg:grid lg:grid-cols-2">
            {tour.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-sun" />{h}</li>
            ))}
          </ul>
        )}
        <div className="min-h-3 flex-1 sm:min-h-5" />
        <div className="flex items-end justify-between gap-3 border-t border-line pt-2.5 sm:pt-4">
          <div className="min-w-0">
            <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-muted sm:text-[0.7rem]">{t.price.perPerson}</p>
            {price ? (
              <p className="text-base font-extrabold tabular-nums sm:text-lg">
                {price.pre && <span className="text-sm font-semibold text-muted">{price.pre}</span>}
                {price.value}
                {price.post && <span className="text-sm font-semibold text-muted">{price.post}</span>}
              </p>
            ) : (
              <Ph className="mt-1 px-2! text-[0.66rem]! sm:px-2.5! sm:text-[0.78rem]!">{t.price.todo}</Ph>
            )}
          </div>
          <span aria-hidden className="pointer-events-none hidden items-center gap-1 rounded-full bg-chip px-3.5 py-2 text-sm font-bold transition group-hover:bg-accent group-hover:text-white sm:inline-flex">
            {t.tours.details} <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
