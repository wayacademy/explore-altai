import { motion } from 'motion/react';
import { CalendarCheck, CalendarRange, Check, Clock, Gauge, Map, Minus, Plus, Route, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CATEGORY_LABELS } from '../data/tours';
import { useLang } from '../i18n/lang';
import type { Tour } from '../types/travel';
import { daysLabel, estimateTrip, formatUsd, img } from '../utils/travelLogic';
import { Ph, PhBlock } from './Placeholder';

export function TourModal({ tour, onClose, onBook }: { tour: Tour; onClose: () => void; onBook: (tourId: string, travelers: number) => void }) {
  const { lang, t, pick } = useLang();
  const m = t.modal;
  const price = tour.priceUsd ? t.price.from(formatUsd(tour.priceUsd)) : null;
  const [shot, setShot] = useState(0);
  const [travelers, setTravelers] = useState(2);
  const est = estimateTrip(tour.priceUsd, travelers);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  // The six key facts every tour shows in the same place (price is in the side panel).
  const facts: { key: keyof typeof m.facts; icon: typeof Clock; value: string | null | undefined }[] = [
    { key: 'duration', icon: Clock, value: daysLabel(tour, lang) },
    { key: 'season', icon: CalendarRange, value: tour.season },
    { key: 'departures', icon: CalendarCheck, value: tour.departures },
    { key: 'group', icon: Users, value: tour.group },
    { key: 'grade', icon: Gauge, value: tour.difficulty },
    { key: 'startEnd', icon: Route, value: tour.startEnd },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-night/60 backdrop-blur-sm md:items-center md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-title"
    >
      <motion.div
        className="relative flex max-h-[94dvh] w-full max-w-[1120px] flex-col overflow-hidden rounded-t-[28px] bg-paper shadow-lift md:rounded-[32px]"
        initial={{ y: 40, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 40, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={m.close}
          className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-white/95 text-ink shadow-card transition hover:scale-105"
        >
          <X className="size-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain">
          {/* Gallery */}
          <div className="relative bg-night">
            <motion.img
              key={tour.images[shot]}
              src={img(tour.images[shot], shot === 0 ? 'l' : '')}
              alt={tour.title}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              className="aspect-[16/9] max-h-[52vh] w-full object-cover md:aspect-[21/9]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 text-white md:p-8">
              <div>
                <p className="eyebrow text-white/75">{pick(CATEGORY_LABELS[tour.category])} · {tour.region}</p>
                <h2 id="tour-title" className="font-display mt-1 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{tour.title}</h2>
              </div>
              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 no-scrollbar">
                {tour.images.map((name, n) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setShot(n)}
                    aria-label={m.photo(n + 1)}
                    className={`h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition ${n === shot ? 'border-white' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img(name, 's')} alt="" className="size-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[1fr_340px]">
            <div className="min-w-0 space-y-10">
              {/* Facts */}
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-3">
                {facts.map(({ key, icon: Icon, value }) => (
                  <div key={key} className="bg-card p-4">
                    <dt className="flex items-center gap-1.5 text-xs font-semibold text-muted"><Icon className="size-3.5" aria-hidden />{m.facts[key]}</dt>
                    <dd className="mt-1.5 text-sm font-bold">{value || <Ph>{m.factTodo[key]}</Ph>}</dd>
                  </div>
                ))}
              </dl>

              <section>
                <h3 className="eyebrow text-accent">{m.overview}</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-ink/85">{tour.summary}</p>
                {tour.note && <p className="mt-3 rounded-2xl bg-accent-soft px-4 py-3 text-sm text-accent-dark">{tour.note}</p>}
                {tour.todo && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tour.todo.map((x) => <Ph key={x}>{x}</Ph>)}
                  </div>
                )}
              </section>

              <section>
                <h3 className="eyebrow text-accent">{m.highlights}</h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex gap-3 rounded-2xl bg-card p-3.5 text-sm leading-snug shadow-card">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sun/15 text-sun"><Check className="size-3.5" /></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="eyebrow text-accent">{m.itinerary}</h3>
                {tour.itinerary ? (
                  <ol className="relative mt-4 space-y-1 before:absolute before:bottom-3 before:left-[27px] before:top-3 before:w-px before:bg-line">
                    {tour.itinerary.map((d) => (
                      <li key={d.day} className="relative flex gap-4 rounded-2xl p-2 transition hover:bg-card">
                        <span className="z-10 grid h-9 min-w-[40px] shrink-0 place-items-center rounded-full border border-line bg-card px-2 text-xs font-extrabold tabular-nums">
                          {d.day}
                        </span>
                        <div className="min-w-0 pt-1.5">
                          <p className="font-bold leading-snug">{d.title}</p>
                          {d.text && <p className="mt-1 text-sm leading-relaxed text-ink/70">{d.text}</p>}
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <PhBlock className="mt-4" title={m.itineraryTodo} hint={m.itineraryHint} />
                )}
              </section>

              <section className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] bg-card p-5 shadow-card">
                  <h3 className="font-bold">{m.included}</h3>
                  {tour.included ? (
                    <ul className="mt-3 space-y-2 text-sm text-ink/80">
                      {tour.included.map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-[#2f8a57]" />{x}</li>)}
                    </ul>
                  ) : (
                    <Ph className="mt-3">{m.includedTodo}</Ph>
                  )}
                </div>
                <div className="rounded-[22px] bg-card p-5 shadow-card">
                  <h3 className="font-bold">{m.excluded}</h3>
                  {tour.excluded ? (
                    <ul className="mt-3 space-y-2 text-sm text-ink/80">
                      {tour.excluded.map((x) => <li key={x} className="flex gap-2"><Minus className="mt-0.5 size-4 shrink-0 text-muted" />{x}</li>)}
                    </ul>
                  ) : (
                    <Ph className="mt-3">{m.excludedTodo}</Ph>
                  )}
                </div>
              </section>

              <section>
                <h3 className="eyebrow text-accent">{m.route}</h3>
                <PhBlock className="mt-3 min-h-[200px]" icon={<Map className="size-6" aria-hidden />} title={m.mapTodo} hint={m.mapHint} />
              </section>
            </div>

            {/* Booking side panel */}
            <aside className="lg:sticky lg:top-20 lg:self-start">
              <div className="rounded-[24px] border border-line bg-card p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t.price.perPerson}</p>
                {price ? (
                  <p className="font-display mt-1 text-4xl font-semibold tabular-nums">
                    {price.pre && <span className="font-sans text-base font-semibold text-muted">{price.pre}</span>}
                    {price.value}
                    {price.post && <span className="font-sans text-base font-semibold text-muted">{price.post}</span>}
                  </p>
                ) : (
                  <Ph className="mt-2">{t.price.todo}</Ph>
                )}
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-paper p-2">
                  <span className="pl-2 text-sm font-semibold">{m.travelers}</span>
                  <div className="flex items-center gap-1">
                    <button type="button" aria-label={m.less} onClick={() => setTravelers((n) => Math.max(1, n - 1))} className="grid size-9 place-items-center rounded-full bg-white shadow-sm"><Minus className="size-4" /></button>
                    <span className="w-8 text-center font-extrabold tabular-nums" aria-live="polite">{travelers}</span>
                    <button type="button" aria-label={m.more} onClick={() => setTravelers((n) => Math.min(20, n + 1))} className="grid size-9 place-items-center rounded-full bg-white shadow-sm"><Plus className="size-4" /></button>
                  </div>
                </div>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-3"><dt className="text-muted">{m.total}</dt><dd className="font-bold tabular-nums">{est.totalUsd != null ? formatUsd(est.totalUsd) : <Ph>{m.totalTodo}</Ph>}</dd></div>
                  <div className="flex justify-between gap-3"><dt className="text-muted">{m.deposit(travelers)}</dt><dd className="font-bold tabular-nums">{formatUsd(est.depositUsd)}</dd></div>
                  {est.balanceUsd != null && <div className="flex justify-between gap-3"><dt className="text-muted">{m.balance}</dt><dd className="font-bold tabular-nums">{formatUsd(est.balanceUsd)}</dd></div>}
                </dl>
                <button type="button" onClick={() => onBook(tour.id, travelers)} className="mt-5 w-full rounded-xl bg-accent py-3.5 text-sm font-bold text-white transition hover:bg-accent-dark">
                  {m.book}
                </button>
                <p className="mt-3 text-center text-xs text-muted">{m.custom}</p>
              </div>
            </aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
