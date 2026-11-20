import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Heart, Search, SlidersHorizontal } from 'lucide-react';
import { CATEGORY_LABELS, TOURS } from '../data/tours';
import { useLang } from '../i18n/lang';
import type { CategoryFilter, SortOption, Tour, TourCategory } from '../types/travel';
import { img } from '../utils/travelLogic';
import { Ph } from './Placeholder';
import { TourCard } from './TourCard';

const CATS: CategoryFilter[] = ['all', 'trek', 'eagle', 'horse', 'river', 'discovery', 'culture', 'wildlife'];
/** Хөтөлбөр нь хараахан бүрэн бус аяллууд: «бүгд» харагдацад доод талд өргөн картаар гарна. */
const SPOTLIGHT = ['culture-traditions', 'wildlife-safari'];

export function ToursSection(props: {
  tours: Tour[];
  category: CategoryFilter;
  onCategory: (c: CategoryFilter) => void;
  query: string;
  onQuery: (q: string) => void;
  sortBy: SortOption;
  onSort: (s: SortOption) => void;
  savedIds: string[];
  savedOnly: boolean;
  onToggleSavedOnly: () => void;
  onToggleSave: (id: string) => void;
  onOpen: (id: string) => void;
  onReset: () => void;
}) {
  const { tours, category, query, sortBy, savedIds, savedOnly } = props;
  const { t, pick } = useLang();
  const showLarge = category === 'all' && !query && sortBy === 'featured' && !savedOnly;
  const gridTours = showLarge ? tours.filter((x) => !SPOTLIGHT.includes(x.id)) : tours;
  const spotlight = showLarge ? tours.filter((x) => SPOTLIGHT.includes(x.id)) : [];
  const count = (c: CategoryFilter) => (c === 'all' ? TOURS.length : TOURS.filter((t) => t.category === (c as TourCategory)).length);

  return (
    <section id="tours" className="gutter py-16 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-accent">{t.tours.eyebrow}</p>
            <h2 className="font-display mt-2 text-[2.1rem] leading-[1.08] md:text-5xl">
              {t.tours.titleA}<span className="text-accent">{t.tours.titleB}</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            {t.tours.countPre(TOURS.length)}<b className="text-ink">{tours.length}</b>{t.tours.countPost(TOURS.length)}
          </p>
        </div>

        {/* Filter bar */}
        <div className="mt-8 flex flex-col gap-3 rounded-[24px] border border-line bg-card p-3 shadow-card">
          <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 no-scrollbar" role="tablist" aria-label={t.tours.categories}>
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => props.onCategory(c)}
                className={`relative shrink-0 rounded-xl px-4 py-2 text-sm font-bold transition ${category === c ? 'text-white' : 'text-ink/70 hover:bg-chip hover:text-ink'}`}
              >
                {category === c && <motion.span layoutId="cat-pill" className="absolute inset-0 rounded-xl bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span className="relative">
                  {c === 'all' ? t.tours.all : pick(CATEGORY_LABELS[c])} <span className="opacity-60">{count(c)}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
            <label className="relative w-full min-w-0 sm:w-auto sm:max-w-[360px] sm:flex-1">
              <span className="sr-only">{t.tours.search}</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
              <input
                id="tour-search"
                value={query}
                onChange={(e) => props.onQuery(e.target.value)}
                placeholder={t.tours.searchPh}
                className="w-full rounded-xl border border-line bg-paper py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-accent focus:bg-white"
              />
            </label>
            <label className="relative sm:ml-auto">
              <span className="sr-only">{t.tours.sort}</span>
              <SlidersHorizontal className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
              <select
                id="tour-sort"
                value={sortBy}
                onChange={(e) => props.onSort(e.target.value as SortOption)}
                className="appearance-none rounded-xl border border-line bg-paper py-2.5 pl-10 pr-8 text-sm font-semibold outline-none focus:border-accent"
              >
                {(Object.keys(t.tours.sortOptions) as SortOption[]).map((k) => (
                  <option key={k} value={k}>{t.tours.sortOptions[k]}</option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={props.onToggleSavedOnly}
              aria-pressed={savedOnly}
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition ${savedOnly ? 'border-[#d2453a] bg-[#fdecea] text-[#b2342b]' : 'border-line bg-paper hover:bg-chip'}`}
            >
              <Heart className={`size-4 ${savedOnly ? 'fill-current' : ''}`} /> {t.tours.saved} ({savedIds.length})
            </button>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {gridTours.map((tour, n) => (
              <TourCard
                key={tour.id}
                tour={tour}
                large={showLarge && n === 0}
                saved={savedIds.includes(tour.id)}
                onToggleSave={props.onToggleSave}
                onOpen={props.onOpen}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {tours.length === 0 && (
          <div className="mt-6 rounded-[24px] border border-dashed border-line bg-card p-10 text-center">
            <p className="font-semibold">{savedOnly ? t.tours.emptySaved : t.tours.emptyQuery}</p>
            <p className="mt-1 text-sm text-muted">{savedOnly ? t.tours.emptySavedHint : t.tours.emptyQueryHint}</p>
            <button type="button" onClick={props.onReset} className="mt-4 rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white">{t.tours.reset}</button>
          </div>
        )}

        {/* Tours whose programme is still being written: wide photo cards under the grid */}
        {spotlight.length > 0 && (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {spotlight.map((tour) => (
              <button
                key={tour.id}
                type="button"
                onClick={() => props.onOpen(tour.id)}
                className="group relative flex min-h-[280px] overflow-hidden rounded-[var(--radius-card)] bg-night text-left text-white shadow-card"
              >
                <img src={img(tour.images[0])} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-80 transition duration-700 group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-transparent" />
                <div className="relative mt-auto w-full p-6">
                  <p className="eyebrow text-blue-300">{pick(CATEGORY_LABELS[tour.category])}</p>
                  <h3 className="font-display mt-1 text-2xl font-semibold">{tour.title}</h3>
                  <p className="mt-1 line-clamp-2 max-w-lg text-sm text-white/80">{tour.summary}</p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <Ph>{t.tours.spotlightTodo}</Ph>
                    <span aria-hidden className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3.5 py-2 text-sm font-bold backdrop-blur transition group-hover:bg-white group-hover:text-ink">
                      {t.tours.details} <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
