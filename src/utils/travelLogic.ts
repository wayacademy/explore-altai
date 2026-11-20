import { DEPOSIT_USD } from '../data/site';
import { UI } from '../i18n/ui';
import type {
  BookingFormValues,
  BookingValidationErrors,
  FilterState,
  Lang,
  PriceEstimate,
  RecommenderCriteria,
  Tour,
} from '../types/travel';

/** public/img доторх зургийн зам. size: 's' жижиг (720px), 'l' том (1800px), '' дунд (1200px). */
export function img(name: string, size: '' | 's' | 'l' = ''): string {
  return `./img/${name}${size ? `-${size}` : ''}.webp`;
}

export function formatUsd(amount: number): string {
  return `$${Math.round(amount).toLocaleString('en-US')}`;
}

export function daysLabel(tour: Tour, lang: Lang = 'mn'): string | null {
  if (tour.days) return UI[lang].days(tour.days);
  return tour.daysNote ?? null;
}

export function filterAndSortTours(tours: Tour[], state: FilterState): Tour[] {
  const q = state.query.trim().toLowerCase();
  const filtered = tours.filter((t) => {
    if (state.savedOnly && !state.savedIds.includes(t.id)) return false;
    if (state.category !== 'all' && t.category !== state.category) return false;
    if (q) {
      const hay = [t.title, t.titleEn, t.region, t.summary, ...t.highlights].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  // Хугацаа/үнэ мэдэгдэхгүй аяллууд жагсаалтын төгсгөлд үлдэнэ.
  const big = Number.MAX_SAFE_INTEGER;
  return [...filtered].sort((a, b) => {
    if (state.sortBy === 'duration-asc') return (a.days ?? big) - (b.days ?? big);
    if (state.sortBy === 'duration-desc') return (b.days ?? -1) - (a.days ?? -1);
    if (state.sortBy === 'price-asc') return (a.priceUsd ?? big) - (b.priceUsd ?? big);
    const f = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    return f !== 0 ? f : tours.indexOf(a) - tours.indexOf(b);
  });
}

const SEASON_MONTHS: Record<Exclude<RecommenderCriteria['season'], 'any'>, number[]> = {
  summer: [6, 7, 8],
  autumn: [9, 10],
  winter: [11, 12, 1, 2, 3],
};

export function recommendTours(tours: Tour[], c: RecommenderCriteria): Tour[] {
  const scored = tours.map((t) => {
    let score = 0;
    if (c.interest === 'any' || t.category === c.interest) score += 4;
    const d = t.days ?? 0;
    if ((c.length === 'short' && d > 0 && d <= 10) || (c.length === 'medium' && d >= 11 && d <= 14) || (c.length === 'long' && d >= 15)) {
      score += 3;
    }
    if (c.season !== 'any' && t.months) {
      if (t.months.some((m) => SEASON_MONTHS[c.season as keyof typeof SEASON_MONTHS].includes(m))) score += 3;
      else score -= 2;
    }
    if (t.featured) score += 0.5;
    return { t, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 2).map((s) => s.t);
}

export function estimateTrip(priceUsd: number | null, travelers: number): PriceEstimate {
  const n = Math.max(1, Math.min(20, Math.floor(travelers || 1)));
  const depositUsd = DEPOSIT_USD * n;
  if (priceUsd == null) return { totalUsd: null, depositUsd, balanceUsd: null };
  const totalUsd = priceUsd * n;
  return { totalUsd, depositUsd, balanceUsd: Math.max(0, totalUsd - depositUsd) };
}

export function validateBooking(v: BookingFormValues, lang: Lang = 'mn'): BookingValidationErrors {
  const msg = UI[lang].booking.errors;
  const e: BookingValidationErrors = {};
  if (!v.fullName || v.fullName.trim().length < 2) e.fullName = msg.fullName;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((v.email || '').trim())) e.email = msg.email;
  const digits = (v.phone || '').replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15) e.phone = msg.phone;
  if (!v.tourId) e.tourId = msg.tourId;
  if (!Number.isFinite(v.travelers) || v.travelers < 1 || v.travelers > 20) e.travelers = msg.travelers;
  if (!v.month) e.month = msg.month;
  return e;
}

export function bookingReference(tourId: string): string {
  const code = tourId.replace(/[^a-z]/gi, '').slice(0, 3).toUpperCase();
  return `EA-${new Date().getFullYear()}-${code}-${Math.floor(1000 + Math.random() * 9000)}`;
}
