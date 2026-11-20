import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { CATEGORY_LABELS } from '../data/tours';
import { useLang } from '../i18n/lang';
import type { RecommenderCriteria, Tour, TourCategory } from '../types/travel';
import { daysLabel, img, recommendTours } from '../utils/travelLogic';

function Chips<T extends string>({ name, options, value, onChange }: { name: string; options: { v: T; l: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <fieldset>
      <legend className="text-sm font-bold">{name}</legend>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.v}
            type="button"
            aria-pressed={value === o.v}
            onClick={() => onChange(o.v)}
            className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${value === o.v ? 'border-accent bg-accent text-white' : 'border-line bg-paper hover:border-ink/30'}`}
          >
            {o.l}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function Recommender({ tours, onOpenTour }: { tours: Tour[]; onOpenTour: (id: string) => void }) {
  const { lang, t, pick } = useLang();
  const f = t.finder;
  const INTERESTS: { v: RecommenderCriteria['interest']; l: string }[] = [
    { v: 'any', l: f.any },
    ...(Object.keys(CATEGORY_LABELS) as TourCategory[]).map((k) => ({ v: k, l: pick(CATEGORY_LABELS[k]) })),
  ];
  const LENGTHS = (['short', 'medium', 'long'] as const).map((v) => ({ v, l: f.lengths[v] }));
  const SEASONS = (['summer', 'autumn', 'winter', 'any'] as const).map((v) => ({ v, l: f.seasons[v] }));
  const [c, setC] = useState<RecommenderCriteria>({ interest: 'any', length: 'medium', season: 'summer' });
  const picks = useMemo(() => recommendTours(tours, c), [tours, c]);

  return (
    <section id="finder" className="gutter pb-16 md:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <p className="eyebrow text-accent">{f.eyebrow}</p>
        <h2 className="font-display mt-2 text-[2.1rem] leading-[1.08] md:text-5xl">
          {f.titleA}<span className="text-accent">{f.titleB}</span>{f.titleC}
        </h2>
        <p className="mt-3 max-w-xl text-muted">{f.text}</p>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6 rounded-[var(--radius-card)] border border-line bg-card p-6 shadow-card">
            <Chips name={f.q1} options={INTERESTS} value={c.interest} onChange={(interest) => setC({ ...c, interest })} />
            <Chips name={f.q2} options={LENGTHS} value={c.length} onChange={(length) => setC({ ...c, length })} />
            <Chips name={f.q3} options={SEASONS} value={c.season} onChange={(season) => setC({ ...c, season })} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {picks.map((tour, n) => (
                <motion.button
                  key={tour.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: n * 0.06 }}
                  onClick={() => onOpenTour(tour.id)}
                  className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-card text-left shadow-card transition hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={img(tour.images[0], 's')} alt="" className="size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">
                      <Sparkles className="size-3.5 text-sun" /> {n === 0 ? f.best : f.also}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold text-muted">{pick(CATEGORY_LABELS[tour.category])}{daysLabel(tour, lang) ? ` · ${daysLabel(tour, lang)}` : ''}</p>
                    <p className="font-display mt-1 text-xl font-semibold leading-snug">{tour.title}</p>
                    <p className="mt-2 line-clamp-3 text-sm text-ink/70">{tour.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-accent">
                      {f.view} <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
