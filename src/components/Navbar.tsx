import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLang } from '../i18n/lang';
import type { Lang } from '../types/travel';

export function Logo({ light = false }: { light?: boolean }) {
  const { t } = useLang();
  return (
    <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={t.nav.home}>
      <svg viewBox="0 0 40 28" className={`h-6 w-9 ${light ? 'text-white' : 'text-accent'}`} aria-hidden>
        <path d="M1 26 13 7l6 9 5-7 15 17Z" fill="currentColor" />
        <path d="m13 7 3.2 4.8-2.2-1-1 2.4-1.2-2.6-2 1.2Z" fill={light ? '#09090b' : '#fff'} opacity="0.85" />
        <path d="M24 9l2.6 3-1.8-.6-.8 1.6-.9-1.8-1.5.8Z" fill={light ? '#09090b' : '#fff'} opacity="0.85" />
      </svg>
      <span className="leading-none">
        <span className={`font-display block text-lg ${light ? 'text-white' : 'text-ink'}`}>Explore Altai</span>
        <span className={`eyebrow block !text-[0.58rem] ${light ? 'text-zinc-400' : 'text-muted'}`}>Tours &amp; Expeditions</span>
      </span>
    </a>
  );
}

function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.nav.langLabel} className={`items-center rounded-lg border border-white/15 p-0.5 text-xs font-bold ${className}`}>
      {(['mn', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`rounded-md px-2 py-1 uppercase transition ${lang === l ? 'bg-white text-ink' : 'text-zinc-400 hover:text-white'}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLang();
  const LINKS = t.nav.links;
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 240, damping: 32, restDelta: 0.001 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className="sticky z-40 border-b border-white/10 bg-night/90 text-zinc-100 backdrop-blur-xl"
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <motion.div aria-hidden style={{ scaleX }} className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-blue-500" />
      <nav className="gutter mx-auto flex h-16 max-w-[1288px] items-center justify-between gap-6" aria-label={t.nav.menuLabel}>
        <Logo light />
        <ul className="hidden items-center gap-7 text-sm font-medium text-zinc-300 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="whitespace-nowrap py-1 transition-colors hover:text-white">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangSwitch className="flex" />
          <a href="#contact" className="hidden rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:inline-flex">
            {t.nav.book}
          </a>
          <button
            type="button"
            id="menu-toggle"
            className="grid size-10 place-items-center rounded-xl border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="gutter overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="py-3">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-semibold text-zinc-200 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-accent px-4 py-3 text-center font-semibold text-white">
                {t.nav.book}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
