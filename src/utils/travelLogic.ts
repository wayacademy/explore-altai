import type {
  AddonId,
  AddonOption,
  BookingFormValues,
  BookingValidationErrors,
  Expedition,
  FilterState,
  Language,
  PriceEstimate,
  RecommenderCriteria,
  TravelTier,
} from '../types/travel';

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'horse-guide',
    label: {
      mn: 'Нэмэлт морин хөтөч ба ачааны мал',
      en: 'Dedicated Horse Guide & Extra Pack Animal',
    },
    description: {
      mn: 'Хөтөч, эмээл тоноглол болон ачаа зөөх нэмэлт морь/тэмээ',
      en: 'Additional wrangler support & luggage horse/camel allocation',
    },
    pricePerPersonUsd: 160,
  },
  {
    id: 'photo-gear',
    label: {
      mn: 'Гэрэл зургийн хөтөч ба цагийн төлөвлөлт',
      en: 'Wildlife & Eagle Photography Field Guide',
    },
    description: {
      mn: 'Нар мандах/жаргах цаг болон ан амьтны ажиглалтын цэгүүд',
      en: 'Golden-hour positioning for landscapes, eagles & wildlife',
    },
    pricePerPersonUsd: 210,
  },
  {
    id: 'drone-film',
    label: {
      mn: 'Аяллын 4K баримтат бичлэг ба зураг',
      en: 'Expedition 4K Drone & Documentary Edit',
    },
    description: {
      mn: 'Багийн аяллын дурсамжийн эвлүүлсэн богино кино',
      en: 'Edited aerial and ground highlight film of your expedition',
    },
    pricePerPersonUsd: 290,
  },
];

export function formatUsd(amount: number): string {
  const rounded = Math.round(amount);
  return `$${rounded.toLocaleString('en-US')}`;
}

export function filterAndSortTrips(
  trips: Expedition[],
  state: FilterState,
): Expedition[] {
  const normalizedQuery = state.query.trim().toLowerCase();

  const filtered = trips.filter((trip) => {
    if (state.savedOnly && !state.savedIds.includes(trip.id)) {
      return false;
    }
    if (state.category !== 'all' && trip.category !== state.category) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const searchable = [
        String(trip.number),
        trip.title.mn,
        trip.title.en,
        trip.subtitle.mn,
        trip.subtitle.en,
        trip.region.mn,
        trip.region.en,
        trip.categoryLabel.mn,
        trip.categoryLabel.en,
        trip.summary.mn,
        trip.summary.en,
        ...trip.highlights.mn,
        ...trip.highlights.en,
        ...trip.overview.mn,
        ...trip.overview.en,
      ]
        .join(' ')
        .toLowerCase();
      if (!searchable.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (state.sortBy === 'price-asc') {
      const aPrice = a.keyFacts.priceUsd ?? Number.MAX_SAFE_INTEGER;
      const bPrice = b.keyFacts.priceUsd ?? Number.MAX_SAFE_INTEGER;
      if (aPrice !== bPrice) {
        return aPrice - bPrice;
      }
      return a.number - b.number;
    }
    if (state.sortBy === 'duration-asc') {
      const aDays = a.keyFacts.days ?? Number.MAX_SAFE_INTEGER;
      const bDays = b.keyFacts.days ?? Number.MAX_SAFE_INTEGER;
      if (aDays !== bDays) {
        return aDays - bDays;
      }
      return a.number - b.number;
    }
    if (state.sortBy === 'duration-desc') {
      const aDays = a.keyFacts.days ?? -1;
      const bDays = b.keyFacts.days ?? -1;
      if (aDays !== bDays) {
        return bDays - aDays;
      }
      return a.number - b.number;
    }
    // Featured / default catalog order 1..20
    return a.number - b.number;
  });

  return sorted;
}

export function calculateTripEstimate(
  basePriceUsd: number | null,
  travelers: number,
  tier: TravelTier,
  selectedAddons: AddonId[],
): PriceEstimate {
  const safeTravelers = Math.max(1, Math.min(20, Math.floor(travelers)));
  const isPriceOnRequest = basePriceUsd === null;
  const effectiveBase = basePriceUsd ?? 0;
  const tierMultiplier = tier === 'vip' ? 1.35 : 1;
  const baseSubtotalUsd = Math.round(
    effectiveBase * safeTravelers * tierMultiplier,
  );

  const addonsPerPerson = selectedAddons.reduce((sum, id) => {
    const found = ADDON_OPTIONS.find((item) => item.id === id);
    return sum + (found ? found.pricePerPersonUsd : 0);
  }, 0);
  const addonsTotalUsd = addonsPerPerson * safeTravelers;

  let discountRate = 0;
  if (safeTravelers >= 8) {
    discountRate = 0.1;
  } else if (safeTravelers >= 4) {
    discountRate = 0.05;
  }

  const gross = baseSubtotalUsd + addonsTotalUsd;
  const discountAmountUsd = Math.round(gross * discountRate);
  const totalUsd = gross - discountAmountUsd;
  const perPersonUsd = Math.round(totalUsd / safeTravelers);

  return {
    isPriceOnRequest,
    basePriceUsd: effectiveBase,
    baseSubtotalUsd,
    tierMultiplier,
    addonsTotalUsd,
    discountRate,
    discountAmountUsd,
    totalUsd,
    perPersonUsd,
  };
}

export function recommendTrips(
  trips: Expedition[],
  criteria: RecommenderCriteria,
): Expedition[] {
  const scored = trips.map((trip) => {
    let score = 0;

    if (criteria.interest === 'any' || trip.category === criteria.interest) {
      score += 5;
    }

    const days = trip.keyFacts.days;
    if (criteria.durationBucket === 'short') {
      if ((days !== null && days <= 10) || days === null) {
        score += days !== null ? 3 : 2;
      }
    } else if (criteria.durationBucket === 'medium') {
      if (days !== null && days >= 11 && days <= 14) {
        score += 3;
      }
    } else if (criteria.durationBucket === 'long') {
      if (days !== null && days >= 15) {
        score += 3;
      }
    }

    if (trip.pace === criteria.pace) {
      score += 2;
    }

    if (trip.featured) {
      score += 0.5;
    }

    return { trip, score };
  });

  scored.sort((a, b) => b.score - a.score || a.trip.number - b.trip.number);
  return scored.slice(0, 2).map((entry) => entry.trip);
}

export function validateBookingForm(
  values: BookingFormValues,
  lang: Language = 'mn',
): BookingValidationErrors {
  const errors: BookingValidationErrors = {};

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName =
      lang === 'en'
        ? 'Please enter your full name (at least 2 characters).'
        : 'Овог нэрээ бүтнээр оруулна уу (хамгийн багадаа 2 тэмдэгт).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!values.email || !emailPattern.test(values.email.trim())) {
    errors.email =
      lang === 'en'
        ? 'Please enter a valid email address (e.g., name@domain.com).'
        : 'Зөв имэйл хаяг оруулна уу (жишээ: bat@domain.mn).';
  }

  const digitsOnly = (values.phone || '').replace(/\D/g, '');
  if (digitsOnly.length < 8 || digitsOnly.length > 15) {
    errors.phone =
      lang === 'en'
        ? 'Please enter a valid phone number (8–15 digits).'
        : 'Холбогдох утасны дугаараа зөв оруулна уу (8–15 орон).';
  }

  if (!values.expeditionId) {
    errors.expeditionId =
      lang === 'en'
        ? 'Please choose a tour route.'
        : 'Аяллын чиглэлээ сонгоно уу.';
  }

  if (
    !Number.isFinite(values.travelers) ||
    values.travelers < 1 ||
    values.travelers > 20
  ) {
    errors.travelers =
      lang === 'en'
        ? 'Travelers must be between 1 and 20.'
        : 'Аялагчдын тоо 1-ээс 20 хооронд байх ёстой.';
  }

  if (!values.departureDate) {
    errors.departureDate =
      lang === 'en'
        ? 'Please choose a preferred departure date.'
        : 'Гарах боломжит огноогоо сонгоно уу.';
  }

  return errors;
}

export function generateBookingReference(expeditionSlug: string): string {
  const code = expeditionSlug.slice(0, 3).toUpperCase();
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `EA-2026-${code}-${suffix}`;
}
