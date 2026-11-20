import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { BookingSection } from './components/BookingSection';
import { ExpeditionModal } from './components/ExpeditionModal';
import { ExpeditionsSection } from './components/ExpeditionsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MethodologySection } from './components/MethodologySection';
import { Navbar } from './components/Navbar';
import { TripRecommenderAndProof } from './components/TripRecommenderAndProof';
import { EXPEDITIONS } from './data/expeditions';
import { UI_COPY } from './i18n/translations';
import type {
  Expedition,
  ExpeditionCategory,
  Language,
  SortOption,
  TravelTier,
} from './types/travel';
import { filterAndSortTrips } from './utils/travelLogic';

const SAVED_STORAGE_KEY = 'explore_altai_saved_trips_v1';
const LANG_STORAGE_KEY = 'explore_altai_lang_v1';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'mn') {
        return saved;
      }
    } catch {
      // Ignore storage read failures
    }
    return 'mn';
  });

  const [category, setCategory] = useState<ExpeditionCategory>('all');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [savedOnly, setSavedOnly] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = window.localStorage.getItem(SAVED_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed.filter((id): id is string => typeof id === 'string');
        }
      }
    } catch {
      // Ignore storage read failures
    }
    return [];
  });

  const [activeTrip, setActiveTrip] = useState<Expedition | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<{
    expeditionId: string;
    travelers: number;
    tier: TravelTier;
    notes: string;
  } | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage write failures
    }
    document.documentElement.lang = lang;
    document.title = UI_COPY[lang].metaTitle;
  }, [lang]);

  useEffect(() => {
    try {
      window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // Ignore storage write failures
    }
  }, [savedIds]);

  const filteredExpeditions = useMemo(
    () =>
      filterAndSortTrips(EXPEDITIONS, {
        category,
        query,
        sortBy,
        savedOnly,
        savedIds,
      }),
    [category, query, sortBy, savedOnly, savedIds],
  );

  const toggleSaveTrip = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const resetFilters = () => {
    setCategory('all');
    setQuery('');
    setSortBy('featured');
    setSavedOnly(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedToBook = (payload: {
    expeditionId: string;
    travelers: number;
    tier: TravelTier;
    notes: string;
  }) => {
    setActiveTrip(null);
    setBookingPrefill(payload);
    setTimeout(() => {
      scrollToSection('booking');
    }, 60);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-950">
        <Navbar
          lang={lang}
          onLanguageChange={setLang}
          onBookClick={() => scrollToSection('booking')}
        />

        <main className="flex-1">
          <HeroSection
            lang={lang}
            onExploreClick={() => scrollToSection('expeditions')}
            onPlanClick={() => scrollToSection('recommender')}
          />

          <ExpeditionsSection
            lang={lang}
            expeditions={filteredExpeditions}
            totalCount={EXPEDITIONS.length}
            category={category}
            onCategoryChange={setCategory}
            query={query}
            onQueryChange={setQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            savedIds={savedIds}
            savedOnly={savedOnly}
            onToggleSavedOnly={() => setSavedOnly((prev) => !prev)}
            onToggleSaveTrip={toggleSaveTrip}
            onSelectTrip={(trip) => setActiveTrip(trip)}
            onResetFilters={resetFilters}
          />

          <MethodologySection lang={lang} />

          <TripRecommenderAndProof
            lang={lang}
            expeditions={EXPEDITIONS}
            onSelectTrip={(trip) => setActiveTrip(trip)}
          />

          <BookingSection
            lang={lang}
            expeditions={EXPEDITIONS}
            prefill={bookingPrefill}
          />
        </main>

        <Footer lang={lang} />

        <AnimatePresence>
          {activeTrip && (
            <ExpeditionModal
              key={activeTrip.id}
              lang={lang}
              expedition={activeTrip}
              onClose={() => setActiveTrip(null)}
              onProceedToBook={handleProceedToBook}
            />
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
