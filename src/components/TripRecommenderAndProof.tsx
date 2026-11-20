import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { TESTIMONIALS } from '../data/expeditions';
import type { Expedition, RecommenderCriteria } from '../types/travel';
import { formatMnt, recommendTrips } from '../utils/travelLogic';
import { SafeImage } from './SafeImage';

interface TripRecommenderAndProofProps {
  expeditions: Expedition[];
  onSelectTrip: (trip: Expedition) => void;
}

export function TripRecommenderAndProof({
  expeditions,
  onSelectTrip,
}: TripRecommenderAndProofProps) {
  const [criteria, setCriteria] = useState<RecommenderCriteria>({
    interest: 'any',
    durationBucket: 'medium',
    pace: 'balanced',
  });

  const recommended = useMemo(
    () => recommendTrips(expeditions, criteria),
    [expeditions, criteria],
  );

  return (
    <section id="recommender" className="py-16 lg:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Interactive Expedition Recommender */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-8"
          >
            <p className="text-sm font-semibold text-blue-600 mb-2">
              Аяллын тохируулагч
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-[-0.025em] text-balance mb-3">
              Өөрт тохирох чиглэлээ 10 секундэд олоорой
            </h2>
            <p className="text-base text-zinc-600">
              Сонирхож буй байгалийн тогтоц, аяллын хоног болон хэмнэлээ сонгомогц танд
              хамгийн их нийцэх хоёр маршрутыг шууд санал болгоно.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-6">
              <div>
                <span className="block text-sm font-semibold text-zinc-900 mb-2.5">
                  1. Байгалийн төрөл
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'any', label: 'Бүх байгаль' },
                    { id: 'mountain', label: 'Өндөр уул, ой' },
                    { id: 'desert', label: 'Говь, манхан' },
                    { id: 'lake', label: 'Нуур, тайга' },
                    { id: 'culture', label: 'Түүх, нүүдэл' },
                  ].map((item) => {
                    const active = criteria.interest === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setCriteria((prev) => ({
                            ...prev,
                            interest: item.id as RecommenderCriteria['interest'],
                          }))
                        }
                        className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border text-left transition-colors min-h-[40px] ${
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
                <span className="block text-sm font-semibold text-zinc-900 mb-2.5">
                  2. Хугацааны сонголт
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'short', label: '3–5 хоног' },
                    { id: 'medium', label: '6–8 хоног' },
                    { id: 'long', label: '9+ хоног' },
                  ].map((item) => {
                    const active = criteria.durationBucket === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setCriteria((prev) => ({
                            ...prev,
                            durationBucket: item.id as RecommenderCriteria['durationBucket'],
                          }))
                        }
                        className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border text-center transition-colors min-h-[40px] tabular-nums ${
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
                <span className="block text-sm font-semibold text-zinc-900 mb-2.5">
                  3. Аяллын хэмнэл
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'relaxed', label: 'Тайван' },
                    { id: 'balanced', label: 'Тэнцвэртэй' },
                    { id: 'active', label: 'Идэвхтэй' },
                  ].map((item) => {
                    const active = criteria.pace === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          setCriteria((prev) => ({
                            ...prev,
                            pace: item.id as RecommenderCriteria['pace'],
                          }))
                        }
                        className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border text-center transition-colors min-h-[40px] ${
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
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5"
                  >
                    <div>
                      <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                        <SafeImage
                          src={trip.imageUrl}
                          alt={trip.imageAlt}
                          fallbackTitle={trip.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-medium text-blue-700 mb-1.5">
                          {index === 0 ? 'Хамгийн өндөр тохирол' : 'Хоёрдогч санал'} ·{' '}
                          <span className="tabular-nums">{trip.days} хоног</span>
                        </p>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {trip.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{trip.summary}</p>
                      </div>
                    </div>

                    <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <span className="text-base font-bold text-slate-900 tabular-nums">
                        {formatMnt(trip.basePriceMnt)}
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectTrip(trip)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap"
                      >
                        <span>Хөтөлбөр үзэх</span>
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
        <div className="pt-12 border-t border-zinc-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                Аялагчдын бодит түүх
              </p>
              <h2 className="font-editorial text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-[-0.025em]">
                Бидэнтэй аялсан багуудын сэтгэгдэл
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    {item.expeditionTitle}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-5">
                    «{item.quote}»
                  </p>
                </div>

                <footer className="pt-4 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-500 mb-1.5">{item.role}</div>
                  <div className="text-xs font-medium text-blue-700">{item.outcome}</div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
