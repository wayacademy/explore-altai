import { Bookmark, Search, SlidersHorizontal } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CATEGORY_ITEMS, UI_COPY } from '../i18n/translations';
import type {
  Expedition,
  ExpeditionCategory,
  Language,
  SortOption,
} from '../types/travel';
import { formatUsd } from '../utils/travelLogic';
import { SafeImage } from './SafeImage';

interface ExpeditionsSectionProps {
  lang: Language;
  expeditions: Expedition[];
  totalCount: number;
  category: ExpeditionCategory;
  onCategoryChange: (cat: ExpeditionCategory) => void;
  query: string;
  onQueryChange: (q: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  savedIds: string[];
  savedOnly: boolean;
  onToggleSavedOnly: () => void;
  onToggleSaveTrip: (id: string) => void;
  onSelectTrip: (trip: Expedition) => void;
  onResetFilters: () => void;
}

export function ExpeditionsSection({
  lang,
  expeditions,
  totalCount,
  category,
  onCategoryChange,
  query,
  onQueryChange,
  sortBy,
  onSortChange,
  savedIds,
  savedOnly,
  onToggleSavedOnly,
  onToggleSaveTrip,
  onSelectTrip,
  onResetFilters,
}: ExpeditionsSectionProps) {
  const copy = UI_COPY[lang].toursSection;
  const showAsymmetricFeatured =
    category === 'all' &&
    query.trim() === '' &&
    !savedOnly &&
    sortBy === 'featured' &&
    expeditions.length >= 4;

  return (
    <section
      id="expeditions"
      className="py-12 sm:py-16 lg:py-24 bg-zinc-50 border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-2">
              {copy.eyebrow}
            </p>
            <h2 className="font-editorial text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-[-0.025em] text-balance">
              {copy.heading}
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
            {copy.showingPrefix}{' '}
            <span className="font-semibold text-zinc-950 tabular-nums">
              {totalCount}
            </span>{' '}
            {copy.showingMid}{' '}
            <span className="font-semibold text-zinc-950 tabular-nums">
              {expeditions.length}
            </span>{' '}
            {copy.showingSuffix}
          </p>
        </motion.div>

        {/* Interactive 2-tier Filter & Search Toolbar: swipeable category rail on mobile + clean search/sort row */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8 space-y-3">
          {/* Category Rail (horizontal scroll-snap on phones, tidy wrap on desktop) */}
          <div
            role="tablist"
            aria-label={copy.filterTablistLabel}
            className="flex flex-nowrap lg:flex-wrap items-center gap-1 p-1 bg-zinc-100 rounded-xl overflow-x-auto no-scrollbar snap-x"
          >
            {CATEGORY_ITEMS.map((tab) => {
              const active = category === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onCategoryChange(tab.id)}
                  className={`relative snap-start px-3 py-2 text-xs sm:text-[13px] font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    active
                      ? 'text-zinc-950 font-semibold'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="expedition-category-indicator"
                      transition={{ type: 'spring', stiffness: 450, damping: 36 }}
                      className="absolute inset-0 bg-white rounded-lg shadow-sm ring-1 ring-zinc-950/5"
                    />
                  )}
                  <span className="relative z-10">{tab.label[lang]}</span>
                </button>
              );
            })}
          </div>

          {/* Search, Sort & Shortlist Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2.5 border-t border-zinc-100">
            <div className="relative flex-1 sm:max-w-sm">
              <label htmlFor="trip-search" className="sr-only">
                {copy.searchLabel}
              </label>
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="trip-search"
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder={copy.searchPlaceholder}
                className="w-full pl-10 pr-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 min-h-[44px]"
              />
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <label htmlFor="trip-sort" className="sr-only">
                  {copy.sortLabel}
                </label>
                <SlidersHorizontal className="w-4 h-4 text-zinc-500 hidden md:block shrink-0" />
                <select
                  id="trip-sort"
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value as SortOption)}
                  className="w-full sm:w-auto px-3 py-2 text-sm bg-white border border-zinc-300 rounded-xl text-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                >
                  <option value="featured">{copy.sortOptions.featured}</option>
                  <option value="duration-asc">{copy.sortOptions['duration-asc']}</option>
                  <option value="duration-desc">{copy.sortOptions['duration-desc']}</option>
                  <option value="price-asc">{copy.sortOptions['price-asc']}</option>
                </select>
              </div>

              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={onToggleSavedOnly}
                aria-pressed={savedOnly}
                className={`inline-flex items-center justify-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl border transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  savedOnly
                    ? 'bg-zinc-950 text-white border-zinc-950'
                    : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950'
                }`}
              >
                <Bookmark className="w-4 h-4 shrink-0" />
                <span>
                  {copy.savedButton} ({savedIds.length})
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {expeditions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-zinc-200 rounded-2xl p-8 sm:p-12 text-center"
          >
            <p className="text-lg font-semibold text-zinc-950 mb-2">
              {copy.emptyTitle}
            </p>
            <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6">
              {savedOnly ? copy.emptySaved : copy.emptySearch}
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-zinc-950 hover:bg-blue-600 rounded-xl transition-colors min-h-[44px]"
            >
              {copy.resetFilters}
            </button>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${savedOnly ? 'saved' : 'all'}-${sortBy}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {expeditions.map((trip, idx) => {
                const isSaved = savedIds.includes(trip.id);
                const isWide = showAsymmetricFeatured && idx === 0;
                const title = trip.title[lang];

                return (
                  <motion.article
                    key={trip.id}
                    data-testid={`expedition-card-${trip.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: Math.min(idx * 0.025, 0.12),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`group bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5 ${
                      isWide
                        ? 'md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-12'
                        : 'flex flex-col'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-zinc-100 ${
                        isWide
                          ? 'md:col-span-7 aspect-[16/10] md:aspect-auto md:h-full md:min-h-[340px]'
                          : 'aspect-[4/3] w-full'
                      }`}
                    >
                      <SafeImage
                        src={trip.imageUrl}
                        alt={trip.imageAlt[lang]}
                        fallbackTitle={title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        animate={isSaved ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => onToggleSaveTrip(trip.id)}
                        aria-label={
                          isSaved
                            ? `${copy.saveAriaRemove}: ${title}`
                            : `${copy.saveAriaAdd}: ${title}`
                        }
                        aria-pressed={isSaved}
                        className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 rounded-xl flex items-center justify-center border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                          isSaved
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white/95 text-zinc-700 border-zinc-200 hover:text-zinc-950'
                        }`}
                      >
                        <Bookmark
                          className="w-4 h-4"
                          fill={isSaved ? 'currentColor' : 'none'}
                        />
                      </motion.button>
                    </div>

                    <div
                      className={`p-5 sm:p-6 flex-1 flex flex-col justify-between ${
                        isWide ? 'md:col-span-5' : ''
                      }`}
                    >
                      <div>
                        {/* Unboxed metadata with typographic separators (Zero-Pill Discipline) */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-zinc-500 mb-2">
                          <span className="font-mono text-zinc-400 tabular-nums">
                            {String(trip.number).padStart(2, '0')}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{trip.categoryLabel[lang]}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">
                            {trip.keyFacts.durationLabel[lang]}
                          </span>
                        </div>

                        <h3 className="font-editorial text-lg sm:text-xl font-bold text-zinc-950 tracking-[-0.02em] mb-1.5">
                          {title}
                        </h3>
                        <p className="text-xs font-medium text-zinc-500 mb-2.5">
                          {trip.region[lang]}
                        </p>
                        <p
                          className={`text-sm text-zinc-600 leading-relaxed mb-4 sm:mb-5 ${
                            isWide ? 'line-clamp-3' : 'line-clamp-2'
                          }`}
                        >
                          {trip.summary[lang]}
                        </p>

                        {isWide && trip.highlights[lang].length > 0 && (
                          <ul className="hidden md:block space-y-1.5 text-xs text-zinc-600 mb-5 border-t border-zinc-100 pt-4">
                            {trip.highlights[lang].slice(0, 3).map((item) => (
                              <li key={item} className="truncate">
                                · {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <span className="block text-xs text-zinc-500">
                            {trip.keyFacts.priceUsd !== null
                              ? copy.priceFromLabel
                              : copy.priceOnRequestLabel}
                          </span>
                          <span className="text-base sm:text-lg font-bold text-zinc-950 tabular-nums truncate block">
                            {trip.keyFacts.priceUsd !== null
                              ? formatUsd(trip.keyFacts.priceUsd)
                              : trip.keyFacts.priceLabel[lang]}
                          </span>
                        </div>

                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.97 }}
                          onClick={() => onSelectTrip(trip)}
                          className="px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:text-white bg-zinc-100 hover:bg-zinc-950 rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                        >
                          {copy.detailsButton}
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
