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
import type {
  Expedition,
  ExpeditionCategory,
  SortOption,
  TravelTier,
} from './types/travel';
import { filterAndSortTrips } from './utils/travelLogic';

const SAVED_STORAGE_KEY = 'khukh_tenger_saved_trips_v1';

export default function App() {
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
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar onBookClick={() => scrollToSection('booking')} />

        <main className="flex-1">
          <HeroSection
            onExploreClick={() => scrollToSection('expeditions')}
            onPlanClick={() => scrollToSection('recommender')}
          />

          <ExpeditionsSection
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

          <MethodologySection />

          <TripRecommenderAndProof
            expeditions={EXPEDITIONS}
            onSelectTrip={(trip) => setActiveTrip(trip)}
          />

          <BookingSection expeditions={EXPEDITIONS} prefill={bookingPrefill} />
        </main>

        <Footer />

        <AnimatePresence>
          {activeTrip && (
            <ExpeditionModal
              key={activeTrip.id}
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
