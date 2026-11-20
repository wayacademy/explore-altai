export type ExpeditionCategory =
  | 'all'
  | 'mountain'
  | 'desert'
  | 'lake'
  | 'culture';

export type SortOption = 'featured' | 'price-asc' | 'duration-asc';

export type TravelTier = 'standard' | 'vip';

export type AddonId = 'horse-guide' | 'photo-gear' | 'drone-film';

export interface AddonOption {
  id: AddonId;
  label: string;
  description: string;
  pricePerPersonMnt: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  route: string;
  description: string;
  accommodation: string;
}

export interface Expedition {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  region: string;
  category: Exclude<ExpeditionCategory, 'all'>;
  categoryLabel: string;
  days: number;
  nights: number;
  basePriceMnt: number;
  difficulty: 'Хөнгөн' | 'Дунд' | 'Ахисан';
  pace: 'relaxed' | 'balanced' | 'active';
  maxGroupSize: number;
  bestSeason: string;
  elevationM: number;
  distanceKm: number;
  coordinates: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  summary: string;
  highlights: string[];
  included: string[];
  itinerary: ItineraryDay[];
}

export interface FilterState {
  category: ExpeditionCategory;
  query: string;
  sortBy: SortOption;
  savedOnly: boolean;
  savedIds: string[];
}

export interface PriceEstimate {
  baseSubtotal: number;
  tierMultiplier: number;
  addonsTotal: number;
  discountRate: number;
  discountAmount: number;
  totalMnt: number;
  perPersonMnt: number;
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
  name: string;
  role: string;
  expeditionTitle: string;
  quote: string;
  outcome: string;
}
