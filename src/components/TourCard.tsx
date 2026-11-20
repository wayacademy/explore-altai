import { motion } from 'motion/react';
import { ArrowUpRight, CalendarRange, Clock, Heart, MapPin } from 'lucide-react';
import { CATEGORY_LABELS } from '../data/tours';
import { useLang } from '../i18n/lang';
import type { Tour } from '../types/travel';
import { daysLabel, formatUsd, img } from '../utils/travelLogic';
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
        <img
          src={img(tour.images[0], large ? 'l' : 's')}
          alt={tour.title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink backdrop-blur">
          {pick(CATEGORY_LABELS[tour.category])}
        </span>
        <button
          type="button"
          onClick={() => onToggleSave(tour.id)}
          aria-pressed={saved}
          aria-label={saved ? t.tours.unsave : t.tours.save}
          className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:scale-105"
        >
          <Heart className={`size-[18px] transition ${saved ? 'fill-[#d2453a] text-[#d2453a]' : ''}`} />
        </button>
      </div>
      {large && tour.images.length > 2 && (
        <div aria-hidden className="hidden grid-cols-2 gap-1.5 pt-1.5 lg:grid">
          {tour.images.slice(1, 3).map((name) => (
            <div key={name} className="aspect-[2.1/1] overflow-hidden">
              <img src={img(name, 's')} alt="" loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-[1.04]" />
            </div>
          ))}
        </div>
      )}

      <div className={`flex flex-col p-5 ${large ? 'lg:flex-none lg:p-7' : 'flex-1'}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-muted">
          <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" aria-hidden />{tour.region}</span>
          {days && <span className="inline-flex items-center gap-1"><Clock className="size-3.5" aria-hidden />{days}</span>}
          {tour.season && <span className="inline-flex items-center gap-1"><CalendarRange className="size-3.5" aria-hidden />{tour.season}</span>}
        </div>
        <h3 className={`font-display mt-2 font-semibold leading-snug tracking-tight ${large ? 'text-xl lg:text-[1.9rem]' : 'text-xl'}`}>
          <button type="button" onClick={() => onOpen(tour.id)} className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {tour.title}
          </button>
        </h3>
        {tour.titleEn && <p className="mt-0.5 text-xs text-muted">{tour.titleEn}</p>}
        <p className={`mt-3 text-sm leading-relaxed text-ink/75 ${large ? 'line-clamp-3 lg:line-clamp-none' : 'line-clamp-3'}`}>{tour.summary}</p>
        {large && (
          <ul className="mt-4 hidden gap-x-6 gap-y-1.5 text-sm text-ink/80 lg:grid lg:grid-cols-2">
            {tour.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-sun" />{h}</li>
            ))}
          </ul>
        )}
        <div className="min-h-5 flex-1" />
        <div className="flex items-end justify-between gap-3 border-t border-line pt-4">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted">{t.price.perPerson}</p>
            {price ? (
              <p className="text-lg font-extrabold tabular-nums">
                {price.pre && <span className="text-sm font-semibold text-muted">{price.pre}</span>}
                {price.value}
                {price.post && <span className="text-sm font-semibold text-muted">{price.post}</span>}
              </p>
            ) : (
              <Ph className="mt-1">{t.price.todo}</Ph>
            )}
          </div>
          <span aria-hidden className="pointer-events-none inline-flex items-center gap-1 rounded-full bg-chip px-3.5 py-2 text-sm font-bold transition group-hover:bg-accent group-hover:text-white">
            {t.tours.details} <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
