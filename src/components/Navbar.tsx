import { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { UI_COPY } from '../i18n/translations';
import type { Language } from '../types/travel';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onBookClick: () => void;
}

export function Navbar({ lang, onLanguageChange, onBookClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  const copy = UI_COPY[lang].nav;

  const navLinks = [
    { href: '#expeditions', label: copy.tours },
    { href: '#methodology', label: copy.howItWorks },
    { href: '#recommender', label: copy.finder },
    { href: '#booking', label: copy.contact },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleLanguage = () => {
    onLanguageChange(lang === 'mn' ? 'en' : 'mn');
  };

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/92 backdrop-blur-xl border-b border-white/10 text-zinc-100">
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 origin-left pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-editorial text-base sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
        >
          {UI_COPY[lang].brand}
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav
          aria-label={copy.menuLabel}
          className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-zinc-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language toggle + Primary CTA + Mobile drawer button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            data-testid="language-toggle"
            onClick={toggleLanguage}
            aria-label={copy.languageLabel}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] sm:min-h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className={lang === 'mn' ? 'text-white' : 'text-zinc-400'}>MN</span>
            <span aria-hidden="true" className="text-zinc-500">/</span>
            <span className={lang === 'en' ? 'text-white' : 'text-zinc-400'}>EN</span>
          </button>

          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            {copy.bookCta}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-zinc-200 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/10 bg-zinc-950 px-4 py-4 space-y-3"
          >
            <nav aria-label={copy.mobileMenuLabel} className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/10 hover:text-white rounded-xl transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  onLanguageChange('mn');
                  setMobileOpen(false);
                }}
                className={`py-2.5 text-sm font-semibold rounded-xl border min-h-[44px] transition-colors ${
                  lang === 'mn'
                    ? 'bg-white text-zinc-950 border-white'
                    : 'bg-white/5 text-zinc-300 border-white/15'
                }`}
              >
                Монгол (MN)
              </button>
              <button
                type="button"
                onClick={() => {
                  onLanguageChange('en');
                  setMobileOpen(false);
                }}
                className={`py-2.5 text-sm font-semibold rounded-xl border min-h-[44px] transition-colors ${
                  lang === 'en'
                    ? 'bg-white text-zinc-950 border-white'
                    : 'bg-white/5 text-zinc-300 border-white/15'
                }`}
              >
                English (EN)
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors min-h-[46px]"
            >
              {copy.bookCta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
