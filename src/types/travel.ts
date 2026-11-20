export type Language = 'mn' | 'en';

export interface LocalizedText {
  mn: string;
  en: string;
}

export interface LocalizedList {
  mn: string[];
  en: string[];
}

export type ExpeditionCategory =
  | 'all'
  | 'trekking'
  | 'eagle'
  | 'river'
  | 'horse'
  | 'culture'
  | 'discovery'
  | 'wildlife';

export type SortOption = 'featured' | 'duration-asc' | 'duration-desc' | 'price-asc';

export type TravelTier = 'standard' | 'vip';

export type AddonId = 'horse-guide' | 'photo-gear' | 'drone-film';

export interface AddonOption {
  id: AddonId;
  label: LocalizedText;
  description: LocalizedText;
  pricePerPersonUsd: number;
}

export interface ItineraryDay {
  dayLabel: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  meta?: LocalizedText;
}

export interface TourKeyFacts {
  days: number | null;
  durationLabel: LocalizedText;
  priceUsd: number | null;
  priceLabel: LocalizedText;
  season: LocalizedText;
  departures2027: LocalizedText;
  groupSize: LocalizedText;
  grade: LocalizedText;
}

export interface Expedition {
  number: number;
  id: string;
  slug: string;
  webPage: string;
  oldPage?: string;
  category: Exclude<ExpeditionCategory, 'all'>;
  categoryLabel: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  region: LocalizedText;
  keyFacts: TourKeyFacts;
  pace: 'relaxed' | 'balanced' | 'active';
  elevationM?: number;
  coordinates?: string;
  imageUrl: string;
  imageAlt: LocalizedText;
  featured?: boolean;
  summary: LocalizedText;
  overview: LocalizedList;
  highlights: LocalizedList;
  itineraryNote?: LocalizedText;
  itinerary: ItineraryDay[];
  included: LocalizedList;
  notIncluded: LocalizedList;
}

export interface FilterState {
  category: ExpeditionCategory;
  query: string;
  sortBy: SortOption;
  savedOnly: boolean;
  savedIds: string[];
}

export interface PriceEstimate {
  isPriceOnRequest: boolean;
  basePriceUsd: number;
  baseSubtotalUsd: number;
  tierMultiplier: number;
  addonsTotalUsd: number;
  discountRate: number;
  discountAmountUsd: number;
  totalUsd: number;
  perPersonUsd: number;
}

export interface RecommenderCriteria {
  interest: Exclude<ExpeditionCategory, 'all'> | 'any';
  durationBucket: 'short' | 'medium' | 'long';
  pace: 'relaxed' | 'balanced' | 'active';
}

export interface BookingFormValues {
  fullName: string;
  email: string;
  phone: string;
  expeditionId: string;
  travelers: number;
  departureDate: string;
  tier: TravelTier;
  notes: string;
}

export interface BookingValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  expeditionId?: string;
  travelers?: string;
  departureDate?: string;
}

export interface Testimonial {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  expeditionTitle: LocalizedText;
  quote: LocalizedText;
  outcome: LocalizedText;
}
