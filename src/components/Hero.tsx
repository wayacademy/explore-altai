import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { COMPANY, FESTIVALS, HERO_SLIDES } from '../data/site';
import { TOURS } from '../data/tours';
import { useLang } from '../i18n/lang';
import { img } from '../utils/travelLogic';

const SLIDE_MS = 6000;
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ onOpenTour }: { onOpenTour: (id: string) => void }) {
  const reduce = useReducedMotion();
  const { t, pick } = useLang();
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const [paused, setPaused] = useState(false);
  const slide = HERO_SLIDES[i];
  const ms = reduce ? 9000 : SLIDE_MS;
  const go = useCallback((n: number) => setI((n + HERO_SLIDES.length) % HERO_SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(i + 1), ms);
    return () => window.clearTimeout(t);
  }, [i, paused, ms, go]);

  const useVideo = !reduce && !failed[slide.id];
  const metrics = [
    { value: String(COMPANY.founded), label: t.hero.metrics.since },
    { value: String(TOURS.length), label: t.hero.metrics.tours },
    { value: String(FESTIVALS.length), label: t.hero.metrics.festivals },
    { value: '2019', label: t.hero.metrics.award },
  ];

  return (
    <section id="top" className="relative overflow-hidden border-b border-zinc-800 bg-night text-white" aria-label={t.hero.section}>
      {/* Background: one short clip per tour, cross-fading */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <img src={img(slide.poster)} alt="" className={`absolute inset-0 size-full object-cover ${useVideo ? '' : 'kenburns'}`} fetchPriority={i === 0 ? 'high' : 'auto'} />
            {useVideo && (
              <video
                key={slide.video}
                className="absolute inset-0 size-full object-cover"
                src={`./video/${slide.video}.mp4`}
                poster={img(slide.poster)}
                muted
                playsInline
                autoPlay
                preload="auto"
                onError={() => setFailed((f) => ({ ...f, [slide.id]: true }))}
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/55 to-night/20" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/40" />
      </div>

      <div className="gutter relative z-10 mx-auto max-w-[1288px] pb-10 pt-14 lg:pb-12 lg:pt-24">
        <div className="grid min-h-[440px] grid-cols-1 items-end gap-8 lg:min-h-[500px] lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }} className="mb-4 text-xs font-medium tracking-wide text-blue-400 sm:text-sm">
              {t.hero.eyebrow(COMPANY.founded)}
            </motion.p>
            <h1 className="font-display mb-6 text-balance leading-[1.06] text-white" style={{ fontSize: 'clamp(2.4rem, 4.6vw, 4.2rem)' }}>
              {t.hero.title}
            </h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05, ease: EASE }} className="mb-8 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              {t.hero.text}
            </motion.p>
            <div className="flex flex-wrap items-center gap-3">
              <motion.a whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} href="#tours" className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-blue-500">
                {t.hero.ctaTours} <ArrowRight className="size-4" />
              </motion.a>
              <motion.a whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} href="#finder" className="inline-flex min-h-[44px] items-center rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/50 hover:bg-white/15">
                {t.hero.ctaFinder}
              </motion.a>
            </div>
          </div>

          {/* Current tour + story-style switcher */}
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.button
                key={slide.id}
                type="button"
                onClick={() => onOpenTour(slide.tourId)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-zinc-900/60 p-3 pr-4 text-left backdrop-blur-md transition hover:border-white/35 lg:w-[400px]"
              >
                <img src={img(slide.poster, 's')} alt="" className="h-16 w-20 shrink-0 rounded-xl object-cover" />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-400">{pick(slide.meta)}</span>
                  <span className="mt-0.5 block font-semibold leading-snug">{pick(slide.title)}</span>
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-ink transition group-hover:bg-blue-400">
                  <ArrowUpRight className="size-4" />
                </span>
              </motion.button>
            </AnimatePresence>

            <div role="tablist" aria-label={t.hero.tabs} className="flex w-full gap-1 overflow-x-auto rounded-xl border border-white/15 bg-zinc-900/75 p-1 backdrop-blur-md no-scrollbar lg:w-auto">
              {HERO_SLIDES.map((s, n) => {
                const active = n === i;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => go(n)}
                    className={`relative shrink-0 overflow-hidden rounded-lg px-3 py-1.5 text-xs font-semibold tabular-nums transition-colors ${active ? 'bg-white text-ink' : 'text-zinc-300 hover:text-white'}`}
                  >
                    {String(n + 1).padStart(2, '0')} · {pick(s.label)}
                    {active && (
                      <span
                        key={`${s.id}-${paused}`}
                        aria-hidden
                        className="progress-fill absolute inset-x-0 bottom-0 h-[2px] bg-accent"
                        style={{ animationDuration: `${ms}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 lg:grid-cols-4 lg:gap-8">
          {metrics.map((m, n) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.06 * n, ease: EASE }} className="space-y-1">
              <div className="font-display text-2xl tabular-nums text-white sm:text-3xl">{m.value}</div>
              <div className="text-xs text-zinc-300 sm:text-sm">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
