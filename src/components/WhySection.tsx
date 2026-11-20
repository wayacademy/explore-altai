import { Award, Feather, Home, SlidersHorizontal } from 'lucide-react';
import { useLang } from '../i18n/lang';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

const ICONS = [Home, SlidersHorizontal, Feather, Award];

export function WhySection() {
  const { t } = useLang();
  const w = t.why;
  const POINTS = w.points.map((p, n) => ({ ...p, icon: ICONS[n] }));
  return (
    <section id="why" className="my-16 bg-night py-16 text-white md:my-24 md:py-24">
      <div className="gutter mx-auto grid max-w-[1288px] items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-blue-300">{w.eyebrow}</p>
          <h2 className="font-display mt-3 text-[2.1rem] leading-[1.08] md:text-5xl">
            {w.titleA}<span className="text-blue-300">{w.titleB}</span>{w.titleC}
          </h2>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {POINTS.map(({ icon: Icon, title, text }, n) => (
              <Reveal as="li" key={title} delay={n * 0.05} className="flex gap-4 py-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/8 text-blue-300"><Icon className="size-5" aria-hidden /></span>
                <span>
                  <span className="block font-bold">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-white/70">{text}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="relative">
          {/* Panorama-shaped tiles, so each photo keeps its subject: wide, two squares, wide */}
          <div className="grid grid-cols-2 gap-3">
            <Photo name="ahorse-4" alt={w.alts[0]} sizes="(min-width: 1024px) 620px, 100vw" className="col-span-2 aspect-[2.6/1] w-full rounded-[22px] object-cover" />
            <Photo name="deluun-2" alt={w.alts[1]} sizes="(min-width: 1024px) 310px, 50vw" className="aspect-square w-full rounded-[22px] object-cover" />
            <Photo name="nw-5" alt={w.alts[2]} sizes="(min-width: 1024px) 310px, 50vw" className="aspect-square w-full rounded-[22px] object-cover" />
            <Photo name="about-camp" alt={w.alts[3]} sizes="(min-width: 1024px) 620px, 100vw" className="col-span-2 aspect-[2.6/1] w-full rounded-[22px] object-cover" />
          </div>
          <p className="mt-3 text-xs text-white/50">{w.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
