import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FAQ } from '../data/site';
import { useLang } from '../i18n/lang';
import { Ph } from './Placeholder';

export function Faq() {
  const { t, pick } = useLang();
  const [open, setOpen] = useState<string | null>(FAQ[0].id);
  return (
    <section id="faq" className="gutter pb-16 md:pb-24">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-accent">{t.faq.eyebrow}</p>
          <h2 className="font-display mt-2 text-[2.1rem] leading-[1.08] md:text-5xl">{t.faq.title}</h2>
          <p className="mt-3 max-w-sm text-muted">{t.faq.text}</p>
        </div>
        <ul className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-card shadow-card">
          {FAQ.map((f) => {
            const isOpen = open === f.id;
            return (
              <li key={f.id}>
                <h3>
                  <button
                    type="button"
                    id={`faq-${f.id}`}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold transition hover:bg-paper md:px-6"
                  >
                    {pick(f.q)}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid size-8 shrink-0 place-items-center rounded-full bg-chip">
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-sm leading-relaxed text-ink/75 md:px-6">
                        {f.a ? pick(f.a) : <Ph>{f.todo ? pick(f.todo) : t.faq.todo}</Ph>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
