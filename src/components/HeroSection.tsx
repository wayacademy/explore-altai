import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPlanClick: () => void;
}

const HERO_SLIDES = [
  {
    id: 'altai',
    label: '01 · Алтай',
    location: 'Баян-Өлгий аймаг · 4,050 м өндөрлөг',
    caption: 'Алтай Таван Богд ба Потанины мөсөн гол — 9 хоног',
    imageUrl: '/src/assets/images/hero_mongolia_expedition_1795175547348.jpg',
    imageAlt: 'Алтай Таван Богдын мөнх цаст оргилууд ба хөндийн морин экспедиц',
  },
  {
    id: 'gobi',
    label: '02 · Говь',
    location: 'Өмнөговь аймаг · Хонгорын элс',
    caption: 'Говийн Алтан Манхан ба Баянзаг — 6 хоног',
    imageUrl: '/src/assets/images/dest_gobi_khongor_1795175546870.jpg',
    imageAlt: 'Говийн Хонгорын элсний алтан манхан дээрх тэмээн жин',
  },
  {
    id: 'khuvsgul',
    label: '03 · Хөвсгөл',
    location: 'Хөвсгөл аймаг · Дархадын хотгор',
    caption: 'Хөвсгөл Далай ба Цаатны Тайга — 7 хоног',
    imageUrl: '/src/assets/images/dest_khuvsgul_taiga_1795175547240.jpg',
    imageAlt: 'Хөвсгөл нуурын үүрийн тунгалаг мандал ба цаст уулс',
  },
];

const KEY_METRICS = [
  { value: '14', label: 'Монголын тусгай маршрут' },
  { value: '8–12', label: 'Нэг бүлгийн хүний хязгаар' },
  { value: '98%', label: 'Аялагчдын сэтгэл ханамж' },
  { value: '12 жил', label: 'Хээрийн экспедицийн туршлага' },
];

export function HeroSection({ onExploreClick, onPlanClick }: HeroSectionProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[slideIndex];

  return (
    <section
      id="top"
      className="relative bg-zinc-950 text-white overflow-hidden border-b border-zinc-800"
    >
      {/* Full-bleed atmospheric background imagery */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <SafeImage
              src={currentSlide.imageUrl}
              alt={currentSlide.imageAlt}
              fallbackTitle={currentSlide.caption}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Directional dark editorial scrim for crisp contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/65 to-zinc-950/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end min-h-[420px] lg:min-h-[470px]">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-medium text-blue-400 tracking-wide mb-4"
            >
              Улаанбаатараас Монголын хязгаар руу · 2026 оны улирал
            </motion.p>

            <h1
              className="font-editorial font-extrabold text-white tracking-[-0.03em] text-balance leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 4.6vw, 4.15rem)' }}
            >
              Онгон байгалийн гүнд өөрийн замаар аял
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-xl mb-8"
            >
              Алтай Таван Богдын мөсөн голоос Хонгорын элсний дуулах манхан хүртэл —
              цөөн хүнтэй, нарийн төлөвлөлттэй, байгальд ээлтэй экспедицийг бид
              бүрэн хариуцан зохион байгуулна.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[44px] shadow-lg shadow-blue-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span>Маршрутууд үзэх</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={onPlanClick}
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-white border border-white/25 hover:border-white/50 bg-white/10 backdrop-blur-md hover:bg-white/15 rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Аялал тохируулах
              </motion.button>
            </div>
          </div>

          {/* Right Slide Info & Interactive Switcher */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-end gap-4">
            <div className="lg:text-right">
              <p className="text-xs text-zinc-300 mb-1">{currentSlide.location}</p>
              <p className="text-sm sm:text-base font-semibold text-white">
                {currentSlide.caption}
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Онцлох зургийн цомог"
              className="inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-900/75 backdrop-blur-md border border-white/15 self-start lg:self-end"
            >
              {HERO_SLIDES.map((slide, idx) => {
                const active = idx === slideIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSlideIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                      active
                        ? 'bg-white text-zinc-950'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {slide.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Integrated Architectural 4-Column Metrics Row */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {KEY_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.06 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-1"
            >
              <div className="font-editorial text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-300">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
