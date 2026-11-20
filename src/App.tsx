import { AnimatePresence, MotionConfig } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Booking } from './components/Booking';
import { Faq } from './components/Faq';
import { FestivalsSection } from './components/FestivalsSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Recommender } from './components/Recommender';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { TourModal } from './components/TourModal';
import { ToursSection } from './components/ToursSection';
import { WhySection } from './components/WhySection';
import { tourById, toursIn } from './data/tours';
import { LangProvider, useLang } from './i18n/lang';
import type { CategoryFilter, SortOption } from './types/travel';
import { filterAndSortTours } from './utils/travelLogic';

const SAVED_KEY = 'explorealtai_saved_v1';

function readSaved(): string[] {
  try {
    const raw = window.localStorage.getItem(SAVED_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

const hashTour = () => {
  const id = window.location.hash.slice(1);
  return tourById(id) ? id : null;
};

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}

function Site() {
  const { lang } = useLang();
  const allTours = useMemo(() => toursIn(lang), [lang]);
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [savedOnly, setSavedOnly] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(readSaved);
  const [activeId, setActiveId] = useState<string | null>(hashTour);
  const [prefill, setPrefill] = useState<{ tourId: string; travelers: number; n: number } | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(SAVED_KEY, JSON.stringify(savedIds));
    } catch {
      /* storage may be unavailable */
    }
  }, [savedIds]);

  useEffect(() => {
    const onHash = () => setActiveId(hashTour());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const tours = useMemo(
    () => filterAndSortTours(allTours, { category, query, sortBy, savedOnly, savedIds }),
    [allTours, category, query, sortBy, savedOnly, savedIds],
  );

  const openTour = useCallback((id: string) => {
    setActiveId(id);
    try {
      window.history.replaceState(null, '', `#${id}`);
    } catch {
      /* ignore */
    }
  }, []);

  const closeTour = useCallback(() => {
    setActiveId(null);
    try {
      window.history.replaceState(null, '', '#tours');
    } catch {
      /* ignore */
    }
  }, []);

  const book = useCallback((tourId: string, travelers: number) => {
    closeTour();
    setPrefill({ tourId, travelers, n: Date.now() });
    window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 80);
  }, [closeTour]);

  const toggleSave = (id: string) => setSavedIds((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const reset = () => {
    setCategory('all');
    setQuery('');
    setSortBy('featured');
    setSavedOnly(false);
  };
  const active = activeId ? allTours.find((x) => x.id === activeId) : undefined;

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">
          <Hero onOpenTour={openTour} />
          <ToursSection
            tours={tours}
            category={category}
            onCategory={setCategory}
            query={query}
            onQuery={setQuery}
            sortBy={sortBy}
            onSort={setSortBy}
            savedIds={savedIds}
            savedOnly={savedOnly}
            onToggleSavedOnly={() => setSavedOnly((v) => !v)}
            onToggleSave={toggleSave}
            onOpen={openTour}
            onReset={reset}
          />
          <FestivalsSection onOpenTour={openTour} />
          <WhySection />
          <Recommender tours={allTours} onOpenTour={openTour} />
          <Testimonials />
          <Team />
          <Faq />
          <Booking tours={allTours} prefill={prefill} />
        </main>
        <Footer />
        <AnimatePresence>{active && <TourModal key={active.id} tour={active} onClose={closeTour} onBook={book} />}</AnimatePresence>
      </div>
    </MotionConfig>
  );
}
