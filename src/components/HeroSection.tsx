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
    caption: 'Алтай Таван Богд ба Потанины мөсөн гол — 9 хоногийн аялал',
    imageUrl: '/src/assets/images/hero_mongolia_expedition_1795175547348.jpg',
    imageAlt: 'Алтай Таван Богдын мөнх цаст оргилууд ба хөндийн морин экспедиц',
  },
  {
    id: 'gobi',
    label: '02 · Говь',
    location: 'Өмнөговь аймаг · Хонгорын элс',
    caption: 'Говийн Алтан Манхан ба Баянзаг — 6 хоногийн аялал',
    imageUrl: '/src/assets/images/dest_gobi_khongor_1795175546870.jpg',
    imageAlt: 'Говийн Хонгорын элсний алтан манхан дээрх тэмээн жин',
  },
  {
    id: 'khuvsgul',
    label: '03 · Хөвсгөл',
    location: 'Хөвсгөл аймаг · Дархадын хотгор',
    caption: 'Хөвсгөл Далай ба Цаатны Тайга — 7 хоногийн аялал',
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
      className="bg-gradient-to-b from-white via-white to-slate-50/70 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left typographic column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-medium text-blue-700 tracking-wide mb-4"
              >
                Улаанбаатараас Монголын хязгаар руу · 2026 оны улирал
              </motion.p>
              <h1
                className="font-editorial font-bold text-slate-900 tracking-tight text-balance leading-[1.12] mb-5"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
              >
                Онгон байгалийн гүнд{' '}
                <em className="italic font-semibold text-blue-800">өөрийн замаар</em>{' '}
                аял
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8"
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[44px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                >
                  <span>Маршрутууд үзэх</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onPlanClick}
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 bg-white rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                >
                  Аялал тохируулах
                </motion.button>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-1.5 gap-x-3 text-xs sm:text-sm text-slate-500">
              <span>Лицензтэй хөтөч & баг</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Шууд нислэг & 4x4 жийп</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Уян хатан цуцлалт</span>
            </div>
          </div>

          {/* Right visual carrier with interactive crossfade slides */}
          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-96 lg:h-full lg:min-h-[450px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-lg shadow-slate-900/5">
              <AnimatePresence mode="sync">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pt-20 pb-5 px-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-slate-200 mb-1">{currentSlide.location}</p>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    {currentSlide.caption}
                  </p>
                </div>

                {/* Interactive Slide Selector */}
                <div
                  role="tablist"
                  aria-label="Онцлох зургийн цомог"
                  className="flex items-center gap-1 p-1 rounded-lg bg-black/45 backdrop-blur-sm border border-white/15 shrink-0 self-start sm:self-end"
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
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                          active
                            ? 'bg-white text-slate-900'
                            : 'text-slate-200 hover:text-white'
                        }`}
                      >
                        {slide.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column metrics strip below hero split */}
        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {KEY_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.08 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
