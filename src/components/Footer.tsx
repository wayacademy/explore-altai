import { UI_COPY } from '../i18n/translations';
import type { Language } from '../types/travel';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const copy = UI_COPY[lang];

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 pb-8 border-b border-zinc-800">
          <div>
            <span className="font-editorial text-xl font-extrabold text-white tracking-tight">
              {copy.brand}
            </span>
            <p className="text-sm text-zinc-400 mt-2 max-w-md leading-relaxed">
              {copy.footer.tagline}
            </p>
          </div>

          <nav
            aria-label={copy.footer.navLabel}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            <a
              href="#expeditions"
              className="hover:text-white transition-colors py-1"
            >
              {copy.nav.tours}
            </a>
            <a
              href="#methodology"
              className="hover:text-white transition-colors py-1"
            >
              {copy.nav.howItWorks}
            </a>
            <a
              href="#recommender"
              className="hover:text-white transition-colors py-1"
            >
              {copy.nav.finder}
            </a>
            <a
              href="#booking"
              className="hover:text-white transition-colors py-1"
            >
              {copy.nav.contact}
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <p>{copy.footer.copyright}</p>
          <p>{copy.footer.locationLine}</p>
        </div>
      </div>
    </footer>
  );
}
