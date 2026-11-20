import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { href: '#expeditions', label: 'Аяллууд' },
  { href: '#methodology', label: 'Хөтөлбөр' },
  { href: '#recommender', label: 'Зөвлөмж' },
  { href: '#booking', label: 'Холбоо барих' },
];

export function Navbar({ onBookClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-white/10 text-zinc-100">
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 origin-left pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-editorial text-lg sm:text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
        >
          Хөх Тэнгэр
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav
          aria-label="Үндсэн цэс"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (desktop) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            Захиалга өгөх
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Цэс хаах' : 'Цэс нээх'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-zinc-200 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950 px-4 py-4 space-y-2">
          <nav aria-label="Гар утасны цэс" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors min-h-[44px]"
            >
              Захиалга өгөх
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
