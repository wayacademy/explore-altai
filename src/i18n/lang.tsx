import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { L, Lang } from '../types/travel';
import { UI } from './ui';

const KEY = 'explorealtai_lang_v1';

function readLang(): Lang {
  try {
    const saved = window.localStorage.getItem(KEY);
    if (saved === 'mn' || saved === 'en') return saved;
  } catch {
    /* storage may be unavailable */
  }
  return 'mn';
}

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'mn', setLang: () => undefined });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* ignore */
    }
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** lang: одоогийн хэл, t: интерфейсийн бичвэр, pick: хоёр хэлтэй утгаас сонгох. */
export function useLang() {
  const { lang, setLang } = useContext(Ctx);
  const pick = useCallback(<T,>(v: L<T>): T => v[lang], [lang]);
  return { lang, setLang, t: UI[lang], pick };
}
