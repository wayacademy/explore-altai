import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { TESTIMONIALS } from '../data/expeditions';
import { CATEGORY_ITEMS, UI_COPY } from '../i18n/translations';
import type {
  Expedition,
  Language,
  RecommenderCriteria,
} from '../types/travel';
import { formatUsd, recommendTrips } from '../utils/travelLogic';
import { SafeImage } from './SafeImage';

interface TripRecommenderAndProofProps {
  lang: Language;
  expeditions: Expedition[];
  onSelectTrip: (trip: Expedition) => void;
}

export function TripRecommenderAndProof({
  lang,
  expeditions,
  onSelectTrip,
}: TripRecommenderAndProofProps) {
  const [criteria, setCriteria] = useState<RecommenderCriteria>({
    interest: 'any',
    durationBucket: 'medium',
    pace: 'balanced',
  });

  const copy = UI_COPY[lang].recommender;

  const interestOptions: {
    id: RecommenderCriteria['interest'];
    label: string;
  }[] = [
    { id: 'any', label: copy.anyInterest },
    ...CATEGORY_ITEMS.filter((c) => c.id !== 'all').map((c) => ({
      id: c.id as Exclude<RecommenderCriteria['interest'], 'any'>,
      label: c.label[lang],
    })),
  ];

  const recommended = useMemo(
    () => recommendTrips(expeditions, criteria),
    [expeditions, criteria],
  );

  return (
    <section
      id="recommender"
      className="py-12 sm:py-16 lg:py-24 bg-white border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* Interactive Expedition Recommender */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-6 sm:mb-8"
          >
            <p className="text-sm font-semibold text-blue-600 mb-2">
              {copy.eyebrow}
            </p>
            <h2 className="font-editorial text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-[-0.025em] text-balance mb-3">
              {copy.heading}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600">{copy.intro}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-6 space-y-5 sm:space-y-6">
              <div>
                <span className="block text-sm font-semibold text-zinc-950 mb-2.5">
                  {copy.step1}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((item) => {
                    const active = criteria.interest === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setCriteria((prev) => ({
                            ...prev,
                            interest: item.id,
                          }))
                        }
                        className={`px-3 py-2.5 text-xs sm:text-sm font-medium rounded-xl border text-left transition-colors min-h-[44px] truncate ${
                          active
                            ? 'bg-zinc-950 text-white border-zinc-950'
                            : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="block text-sm font-semibold text-zinc-950 mb-2.5">
                  {copy.step2}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {copy.durations.map((item) => {
                    const active = criteria.durationBucket === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setCriteria((prev) => ({
                            ...prev,
                            durationBucket: item.id,
                          }))
                        }
                        className={`px-2 py-2.5 text-xs sm:text-sm font-medium rounded-xl border text-center transition-colors min-h-[44px] tabular-nums ${
                          active
                            ? 'bg-zinc-950 text-white border-zinc-950'
                            : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="block text-sm font-semibold text-zinc-950 mb-2.5">
                  {copy.step3}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {copy.paces.map((item) => {
                    const active = criteria.pace === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setCriteria((prev) => ({
                            ...prev,
                            pace: item.id,
                          }))
                        }
                        className={`px-2 py-2.5 text-xs sm:text-sm font-medium rounded-xl border text-center transition-colors min-h-[44px] ${
                          active
                            ? 'bg-zinc-950 text-white border-zinc-950'
                            : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Matched Top 2 Recommendations */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {recommended.map((trip, index) => (
                  <motion.div
                    layout
                    key={trip.id}
                    data-testid={`recommended-card-${trip.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5"
                  >
                    <div>
                      <div className="aspect-[4/3] w-full bg-zinc-100 overflow-hidden">
                        <SafeImage
                          src={trip.imageUrl}
                          alt={trip.imageAlt[lang]}
                          fallbackTitle={trip.title[lang]}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-medium text-blue-600 mb-1.5">
                          {index === 0 ? copy.topMatch : copy.secondMatch} ·{' '}
                          <span className="tabular-nums">
                            {trip.keyFacts.durationLabel[lang]}
                          </span>
                        </p>
                        <h3 className="font-editorial text-lg font-bold text-zinc-950 mb-2">
                          {trip.title[lang]}
                        </h3>
                        <p className="text-sm text-zinc-600 line-clamp-2">
                          {trip.summary[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 py-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                      <span className="text-base font-bold text-zinc-950 tabular-nums">
                        {trip.keyFacts.priceUsd !== null
                          ? formatUsd(trip.keyFacts.priceUsd)
                          : trip.keyFacts.priceLabel[lang]}
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectTrip(trip)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap min-h-[44px] px-2"
                      >
                        <span>{copy.viewProgram}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacent Testimonials */}
        <div className="pt-10 sm:pt-12 border-t border-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                {copy.testimonialsEyebrow}
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-[-0.025em]">
                {copy.testimonialsHeading}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-zinc-500 mb-3">
                    {item.expeditionTitle[lang]}
                  </p>
                  <p className="text-sm text-zinc-700 leading-relaxed mb-5">
                    «{item.quote[lang]}»
                  </p>
                </div>

                <footer className="pt-4 border-t border-zinc-200">
                  <div className="text-sm font-bold text-zinc-950">
                    {item.name[lang]}
                  </div>
                  <div className="text-xs text-zinc-500 mb-1.5">
                    {item.role[lang]}
                  </div>
                  <div className="text-xs font-medium text-blue-600">
                    {item.outcome[lang]}
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
