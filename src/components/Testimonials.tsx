import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/site';
import { useLang } from '../i18n/lang';
import { PhBlock } from './Placeholder';

export function Testimonials() {
  const { t, pick } = useLang();
  const r = t.reviews;
  const row = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="gutter">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-accent">{r.eyebrow}</p>
            <h2 className="font-display mt-2 text-[2.1rem] leading-[1.08] md:text-5xl">
              {r.titleA}<span className="text-accent">{r.titleB}</span>{r.titleC}
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">{r.text}</p>
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <ul className="marquee flex w-max gap-4 pl-4">
          {row.map((x, n) => (
            <li key={`${x.id}-${n}`} aria-hidden={n >= TESTIMONIALS.length} className="flex w-[320px] shrink-0 flex-col rounded-[24px] border border-line bg-card p-5 shadow-card md:w-[380px]">
              <Quote className="size-6 text-sun" aria-hidden />
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/85">{pick(x.quote)}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft font-bold text-accent">{x.name.charAt(0)}</span>
                <span>
                  <span className="block text-sm font-bold">{x.name}</span>
                  <span className="block text-xs text-muted">{pick(x.from)}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="gutter">
        <div className="mx-auto mt-6 max-w-[1240px]">
          <PhBlock
            icon={<span className="flex gap-0.5 text-ph-ink">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className="size-4 fill-current" />)}</span>}
            title={r.todo}
            hint={r.todoHint}
          />
        </div>
      </div>
    </section>
  );
}
