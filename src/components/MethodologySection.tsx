import { motion } from 'motion/react';
import { METHODOLOGY_PILLARS } from '../data/expeditions';
import { UI_COPY } from '../i18n/translations';
import type { Language } from '../types/travel';
import { SafeImage } from './SafeImage';

interface MethodologySectionProps {
  lang: Language;
}

export function MethodologySection({ lang }: MethodologySectionProps) {
  const copy = UI_COPY[lang].methodology;

  return (
    <section
      id="methodology"
      className="py-12 sm:py-16 lg:py-24 bg-zinc-950 text-zinc-100 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          {/* Left editorial numbered list */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-blue-400 tracking-wide mb-2">
                {copy.eyebrow}
              </p>
              <h2 className="font-editorial text-2xl sm:text-4xl font-extrabold text-white tracking-[-0.025em] text-balance mb-4">
                {copy.heading}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                {copy.intro}
              </p>
            </div>

            <div className="divide-y divide-zinc-800 border-t border-b border-zinc-800">
              {METHODOLOGY_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-4 sm:py-5 flex items-start gap-4 sm:gap-5 group"
                >
                  <span className="font-mono text-sm font-semibold text-blue-400 tabular-nums pt-0.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                    {pillar.number}.
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1 tracking-wide">
                      {pillar.title[lang]}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {pillar.description[lang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right matching-height image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-64 sm:h-96 lg:h-full lg:min-h-[480px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <SafeImage
                src="/src/assets/images/dest_orkhon_steppe_1795175546419.jpg"
                alt={copy.imageCaptionTitle}
                fallbackTitle={copy.imageCaptionEyebrow}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pt-16 pb-5 sm:pb-6 px-5 sm:px-6">
                <p className="text-xs text-zinc-200 mb-1">
                  {copy.imageCaptionEyebrow}
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {copy.imageCaptionTitle}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
