import { ArrowUpRight, MapPin } from 'lucide-react';
import { FESTIVALS } from '../data/site';
import { useLang } from '../i18n/lang';
import { Photo } from './Photo';
import { Ph } from './Placeholder';
import { Reveal } from './Reveal';

export function FestivalsSection({ onOpenTour }: { onOpenTour: (id: string) => void }) {
  const { lang, t, pick } = useLang();
  const f0 = t.fest;
  return (
    <section id="festivals" className="gutter py-6 md:py-10">
      <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-card)] bg-night text-white shadow-card">
          <Photo name="gef-1" alt={f0.imgAlt} sizes="(min-width: 1024px) 560px, 100vw" focus="22% 45%" className="absolute inset-0 size-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
            <p className="eyebrow text-blue-300">{f0.eyebrow}</p>
            <h2 className="font-display mt-2 text-[2.1rem] leading-[1.08] md:text-5xl">{f0.title}</h2>
            <p className="mt-3 max-w-md text-white/80">{f0.text}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="rounded-[var(--radius-card)] border border-line bg-card p-4 shadow-card md:p-6">
          <div className="flex items-center justify-between gap-3 px-1">
            <h3 className="font-bold">{f0.calendar}</h3>
            <span className="eyebrow text-muted">{f0.yearly}</span>
          </div>
          <ol className="mt-4 space-y-2.5">
            {FESTIVALS.map((f) => (
              <li key={f.id}>
                <div className={`group flex items-center gap-4 rounded-[20px] border p-3.5 transition ${f.tourId ? 'border-accent/25 bg-accent-soft/60' : 'border-line bg-paper/60 hover:bg-paper'}`}>
                  <span className={`grid w-[64px] shrink-0 place-items-center rounded-2xl py-2 text-center ${f.month === 10 ? 'bg-sun text-white' : 'bg-ink text-white'}`}>
                    {f0.monthTop && <span className="text-[0.65rem] font-semibold uppercase tracking-wider opacity-80">{f0.monthTop}</span>}
                    <span className={`font-extrabold leading-none tabular-nums ${f0.monthTop ? 'text-2xl' : 'py-1.5 text-lg uppercase'}`}>{f0.month(f.month)}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-snug">{lang === 'mn' ? f.name : f.nameEn}</span>
                    {lang === 'mn' && <span className="block text-xs text-muted">{f.nameEn}</span>}
                    <span className="mt-1 block text-sm text-ink/80">{pick(f.when)}</span>
                    <span className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted"><MapPin className="size-3" aria-hidden />{pick(f.place)}</span>
                  </span>
                  {f.tourId && (
                    <button type="button" onClick={() => onOpenTour(f.tourId!)} className="hidden shrink-0 items-center gap-1 rounded-xl bg-accent px-3.5 py-2 text-xs font-bold text-white transition hover:bg-accent-dark sm:inline-flex">
                      {f0.tour} <ArrowUpRight className="size-3.5" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-4 flex flex-wrap items-center gap-2 px-1 text-sm text-muted">
            <span>{f0.other}</span>
            <Ph>{f0.otherTodo}</Ph>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
