import { Bookmark, Search, SlidersHorizontal } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Expedition, ExpeditionCategory, SortOption } from '../types/travel';
import { formatMnt } from '../utils/travelLogic';
import { SafeImage } from './SafeImage';

interface ExpeditionsSectionProps {
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

const CATEGORY_TABS: { id: ExpeditionCategory; label: string }[] = [
  { id: 'all', label: 'Бүх аялал' },
  { id: 'mountain', label: 'Уул & Алтай' },
  { id: 'desert', label: 'Говь & Цөл' },
  { id: 'lake', label: 'Нуур & Тайга' },
  { id: 'culture', label: 'Соёл & Нүүдэл' },
];

export function ExpeditionsSection({
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
  const showAsymmetricFeatured =
    category === 'all' && query.trim() === '' && !savedOnly && expeditions.length >= 4;

  return (
    <section id="expeditions" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div>
            <p className="text-sm font-medium text-blue-700 mb-2">
              2026 оны шилмэл хөтөлбөрүүд
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Монгол орны онцлох аяллууд
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Нийт <span className="font-semibold text-slate-900 tabular-nums">{totalCount}</span> маршрутаас
            одоо <span className="font-semibold text-slate-900 tabular-nums">{expeditions.length}</span> чиглэл
            харагдаж байна. Карт бүр дээр дарж дэлгэрэнгүй хөтөлбөр болон үнэ тооцоолуурыг нээнэ үү.
          </p>
        </motion.div>

        {/* Interactive Filter & Search Toolbar */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Segmented Filter Buttons with gliding layoutId highlight */}
          <div
            role="tablist"
            aria-label="Аяллын төрлөөр шүүх"
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg"
          >
            {CATEGORY_TABS.map((tab) => {
              const active = category === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onCategoryChange(tab.id)}
                  className={`relative px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                    active ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="expedition-category-indicator"
                      transition={{ type: 'spring', stiffness: 450, damping: 36 }}
                      className="absolute inset-0 bg-white rounded-md shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search, Sort & Shortlist Controls */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <div className="relative flex-1 sm:w-56">
              <label htmlFor="trip-search" className="sr-only">
                Чиглэл эсвэл бүс нутгаар хайх
              </label>
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="trip-search"
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Газар, чиглэлээр хайх..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 min-h-[40px]"
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="trip-sort" className="sr-only">
                Эрэмбэлэх
              </label>
              <SlidersHorizontal className="w-4 h-4 text-slate-500 hidden sm:block" />
              <select
                id="trip-sort"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as SortOption)}
                className="px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[40px]"
              >
                <option value="featured">Онцлох дараалал</option>
                <option value="price-asc">Үнэ: Багаас их рүү</option>
                <option value="duration-asc">Хугацаа: Богиноос урт</option>
              </select>
            </div>

            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={onToggleSavedOnly}
              aria-pressed={savedOnly}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                savedOnly
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>Хадгалсан ({savedIds.length})</span>
            </motion.button>
          </div>
        </div>

        {/* Empty State */}
        {expeditions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200 rounded-2xl p-12 text-center"
          >
            <p className="text-lg font-semibold text-slate-900 mb-2">
              Таны хайлтад тохирох аялал олдсонгүй
            </p>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              {savedOnly
                ? 'Танд одоогоор хадгалсан аялал байхгүй эсвэл сонгосон шүүлтүүрт тохирох чиглэл алга.'
                : 'Хайлтын түлхүүр үг болон ангиллын шүүлтүүрээ өөрчлөн дахин шалгана уу.'}
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors min-h-[44px]"
            >
              Шүүлтүүр цэвэрлэх
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {expeditions.map((trip, idx) => {
                const isSaved = savedIds.includes(trip.id);
                const isWide = showAsymmetricFeatured && idx === 0;

                return (
                  <motion.article
                    key={trip.id}
                    data-testid={`expedition-card-${trip.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: Math.min(idx * 0.03, 0.12),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5 ${
                      isWide
                        ? 'md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-12'
                        : 'flex flex-col'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-slate-100 ${
                        isWide
                          ? 'md:col-span-7 aspect-[4/3] md:aspect-auto md:h-full md:min-h-[340px]'
                          : 'aspect-[4/3] w-full'
                      }`}
                    >
                      <SafeImage
                        src={trip.imageUrl}
                        alt={trip.imageAlt}
                        fallbackTitle={trip.title}
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
                            ? `Хадгалснаас хасах: ${trip.title}`
                            : `Хадгалах: ${trip.title}`
                        }
                        aria-pressed={isSaved}
                        className={`absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                          isSaved
                            ? 'bg-blue-700 text-white border-blue-700'
                            : 'bg-white/95 text-slate-700 border-slate-200 hover:text-slate-900'
                        }`}
                      >
                        <Bookmark
                          className="w-4 h-4"
                          fill={isSaved ? 'currentColor' : 'none'}
                        />
                      </motion.button>
                    </div>

                    <div
                      className={`p-6 flex-1 flex flex-col justify-between ${
                        isWide ? 'md:col-span-5' : ''
                      }`}
                    >
                      <div>
                        {/* Unboxed metadata with typographic separators (Zero-Pill Discipline) */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500 mb-2">
                          <span>{trip.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{trip.region}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{trip.days} хоног</span>
                          <span aria-hidden="true">·</span>
                          <span>{trip.difficulty}</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                          {trip.title}
                        </h3>
                        <p
                          className={`text-sm text-slate-600 leading-relaxed mb-5 ${
                            isWide ? 'line-clamp-3' : 'line-clamp-2'
                          }`}
                        >
                          {trip.summary}
                        </p>

                        {isWide && (
                          <ul className="hidden md:block space-y-1.5 text-xs text-slate-600 mb-5 border-t border-slate-100 pt-4">
                            {trip.highlights.slice(0, 3).map((item) => (
                              <li key={item} className="truncate">
                                · {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                        <div>
                          <span className="block text-xs text-slate-500">1 хүний суурь үнэ</span>
                          <span className="text-lg font-bold text-slate-900 tabular-nums">
                            {formatMnt(trip.basePriceMnt)}
                          </span>
                        </div>

                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.97 }}
                          onClick={() => onSelectTrip(trip)}
                          className="px-4 py-2 text-sm font-semibold text-blue-700 hover:text-white bg-slate-50 hover:bg-blue-700 border border-slate-200 hover:border-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                        >
                          Дэлгэрэнгүй
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
