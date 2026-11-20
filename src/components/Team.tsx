import { Camera } from 'lucide-react';
import { TEAM } from '../data/site';
import { useLang } from '../i18n/lang';
import { img } from '../utils/travelLogic';
import { Ph } from './Placeholder';
import { Reveal } from './Reveal';

export function Team() {
  const { t, pick } = useLang();
  return (
    <section id="team" className="gutter pb-16 md:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-accent">{t.team.eyebrow}</p>
            <h2 className="font-display mt-2 text-[2.1rem] leading-[1.08] md:text-5xl">{t.team.title}</h2>
          </div>
          <Ph>{t.team.todo}</Ph>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {TEAM.map((m, n) => (
            <Reveal as="li" key={m.id} delay={n * 0.05} className={`flex flex-col rounded-[24px] border border-line bg-card p-4 shadow-card sm:p-5 ${n === 0 ? 'col-span-2 lg:col-span-1' : ''}`}>
              {m.photo ? (
                <img src={img(m.photo)} alt={pick(m.fullName)} loading="lazy" className="size-20 rounded-[18px] object-cover object-top sm:size-28 sm:rounded-[20px]" />
              ) : (
                <div className="grid size-24 place-items-center rounded-[20px] border-2 border-dashed border-ph-line bg-ph-bg/70 text-ph-ink sm:size-28">
                  <span className="flex flex-col items-center gap-1 text-center">
                    <Camera className="size-5" aria-hidden />
                    <span className="text-[0.7rem] font-bold">{t.team.photoTodo}</span>
                  </span>
                </div>
              )}
              <p className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">{pick(m.name)}</p>
              <p className="text-xs text-muted">{pick(m.fullName)} · {pick(m.role)}</p>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/75 sm:text-sm">{pick(m.bio)}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
