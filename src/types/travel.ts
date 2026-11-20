export type Lang = 'mn' | 'en';
/** Text written in both languages. */
export type L<T = string> = { mn: T; en: T };

export type TourCategory = 'trek' | 'eagle' | 'horse' | 'river' | 'discovery' | 'culture' | 'wildlife';
export type CategoryFilter = TourCategory | 'all';
export type SortOption = 'featured' | 'duration-asc' | 'duration-desc' | 'price-asc';

export interface ItineraryDay {
  /** "1", "3–7" гэх мэт өдрийн дугаар */
  day: string;
  title: string;
  text: string;
}

/**
 * Нэг аялал. `null` утга нь «мэдээлэл хараахан ирээгүй» гэсэн үг:
 * сайт дээр энэ талбарын оронд «… оруулна» гэсэн шар тэмдэглэгээ гарна.
 */
export interface Tour {
  id: string;
  title: string;
  titleEn: string;
  category: TourCategory;
  region: string;
  days: number | null;
  /** Өдрийн тоо тодорхойгүй үед харуулах тайлбар (жишээ нь «Голоор 3 өдөр») */
  daysNote?: string;
  priceUsd: number | null;
  /** Ахын хэлсэн улирал. null бол «Улирал оруулна» */
  season: string | null;
  /** Аялал явдаг сарууд (1–12) — сонгогч, шүүлтүүрт ашиглана */
  months: number[] | null;
  group: string | null;
  difficulty: string | null;
  /** null бол «Эхлэх, дуусах цэг оруулна» */
  startEnd: string | null;
  /** 2027 оны гарах огноонууд. Байхгүй бол шар тэмдэглэгээ гарна */
  departures?: string | null;
  featured?: boolean;
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[] | null;
  included: string[] | null;
  excluded: string[] | null;
  /** public/img доторх зургийн нэрс (өргөтгөлгүй). Эхнийх нь нүүр зураг */
  images: string[];
  /** Аяллын онцгой тэмдэглэл */
  note?: string;
  /** Энэ аялалд тусгайлан нэмэх ёстой мэдээлэл */
  todo?: string[];
}

/** The English version of a tour's text; numbers stay in tours.ts. */
export type TourText = Pick<Tour, 'title' | 'region' | 'summary' | 'highlights' | 'itinerary'> &
  Partial<Pick<Tour, 'season' | 'group' | 'difficulty' | 'startEnd' | 'daysNote' | 'included' | 'excluded' | 'note' | 'todo' | 'departures'>>;

export interface HeroSlide {
  id: string;
  tourId: string;
  label: L;
  title: L;
  meta: L;
  poster: string;
  video: string;
}

export interface Festival {
  id: string;
  name: string;
  nameEn: string;
  when: L;
  month: 9 | 10;
  place: L;
  tourId?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  from: L;
  quote: L;
}

export interface TeamMember {
  id: string;
  name: L;
  fullName: L;
  role: L;
  bio: L;
  /** public/img доторх зураг */
  photo?: string;
}

export interface FaqItem {
  id: string;
  q: L;
  a: L | null;
  /** Хариулт бүрэн биш үед харуулах тэмдэглэгээ */
  todo?: L;
}

export interface FilterState {
  category: CategoryFilter;
  query: string;
  sortBy: SortOption;
  savedOnly: boolean;
  savedIds: string[];
}

export interface RecommenderCriteria {
  interest: TourCategory | 'any';
  length: 'short' | 'medium' | 'long';
  season: 'summer' | 'autumn' | 'winter' | 'any';
}

export interface BookingFormValues {
  fullName: string;
  email: string;
  phone: string;
  tourId: string;
  travelers: number;
  month: string;
  notes: string;
}

export interface BookingValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  tourId?: string;
  travelers?: string;
  month?: string;
}

export interface PriceEstimate {
  /** null бол аяллын үнэ хараахан ороогүй */
  totalUsd: number | null;
  depositUsd: number;
  balanceUsd: number | null;
}
