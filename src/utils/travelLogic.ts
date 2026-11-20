import type {
  AddonId,
  AddonOption,
  BookingFormValues,
  BookingValidationErrors,
  Expedition,
  FilterState,
  PriceEstimate,
  RecommenderCriteria,
  TravelTier,
} from '../types/travel';

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'horse-guide',
    label: 'Морин аяллын тусгай хөтөч',
    description: 'Нэмэлт морь ба орон нутгийн уяач хөтөч',
    pricePerPersonMnt: 240000,
  },
  {
    id: 'photo-gear',
    label: 'Гэрэл зургийн зөвлөх',
    description: 'Нар мандах, жаргах цагийн зураг авалтын төлөвлөлт',
    pricePerPersonMnt: 320000,
  },
  {
    id: 'drone-film',
    label: 'Аяллын богино баримтат кино',
    description: '4K дрон болон газрын дүрс эвлүүлэг',
    pricePerPersonMnt: 450000,
  },
];

export function formatMnt(amount: number): string {
  const rounded = Math.round(amount);
  return `₮${rounded.toLocaleString('en-US')}`;
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
        trip.title,
        trip.subtitle,
        trip.region,
        trip.categoryLabel,
        trip.summary,
        ...trip.highlights,
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
      return a.basePriceMnt - b.basePriceMnt;
    }
    if (state.sortBy === 'duration-asc') {
      return a.days - b.days;
    }
    const featDiff = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    if (featDiff !== 0) {
      return featDiff;
    }
    return b.days - a.days;
  });

  return sorted;
}

export function calculateTripEstimate(
  basePriceMnt: number,
  travelers: number,
  tier: TravelTier,
  selectedAddons: AddonId[],
): PriceEstimate {
  const safeTravelers = Math.max(1, Math.min(20, Math.floor(travelers)));
  const tierMultiplier = tier === 'vip' ? 1.35 : 1;
  const baseSubtotal = Math.round(basePriceMnt * safeTravelers * tierMultiplier);

  const addonsPerPerson = selectedAddons.reduce((sum, id) => {
    const found = ADDON_OPTIONS.find((item) => item.id === id);
    return sum + (found ? found.pricePerPersonMnt : 0);
  }, 0);
  const addonsTotal = addonsPerPerson * safeTravelers;

  let discountRate = 0;
  if (safeTravelers >= 8) {
    discountRate = 0.1;
  } else if (safeTravelers >= 4) {
    discountRate = 0.05;
  }

  const gross = baseSubtotal + addonsTotal;
  const discountAmount = Math.round(gross * discountRate);
  const totalMnt = gross - discountAmount;
  const perPersonMnt = Math.round(totalMnt / safeTravelers);

  return {
    baseSubtotal,
    tierMultiplier,
    addonsTotal,
    discountRate,
    discountAmount,
    totalMnt,
    perPersonMnt,
  };
}

export function recommendTrips(
  trips: Expedition[],
  criteria: RecommenderCriteria,
): Expedition[] {
  const scored = trips.map((trip) => {
    let score = 0;

    if (criteria.interest === 'any' || trip.category === criteria.interest) {
      score += 4;
    }

    if (criteria.durationBucket === 'short' && trip.days <= 5) {
      score += 3;
    } else if (
      criteria.durationBucket === 'medium' &&
      trip.days >= 6 &&
      trip.days <= 8
    ) {
      score += 3;
    } else if (criteria.durationBucket === 'long' && trip.days >= 9) {
      score += 3;
    }

    if (trip.pace === criteria.pace) {
      score += 2;
    }

    if (trip.featured) {
      score += 0.5;
    }

    return { trip, score };
  });

  scored.sort((a, b) => b.score - a.score || a.trip.days - b.trip.days);
  return scored.slice(0, 2).map((entry) => entry.trip);
}

export function validateBookingForm(
  values: BookingFormValues,
): BookingValidationErrors {
  const errors: BookingValidationErrors = {};

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName = 'Овог нэрээ бүтнээр оруулна уу (хамгийн багадаа 2 тэмдэгт).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!values.email || !emailPattern.test(values.email.trim())) {
    errors.email = 'Зөв имэйл хаяг оруулна уу (жишээ: bat@domain.mn).';
  }

  const digitsOnly = (values.phone || '').replace(/\D/g, '');
  if (digitsOnly.length < 8 || digitsOnly.length > 15) {
    errors.phone = 'Холбогдох утасны дугаараа зөв оруулна уу (8–15 орон).';
  }

  if (!values.expeditionId) {
    errors.expeditionId = 'Аяллын чиглэлээ сонгоно уу.';
  }

  if (!Number.isFinite(values.travelers) || values.travelers < 1 || values.travelers > 20) {
    errors.travelers = 'Аялагчдын тоо 1-ээс 20 хооронд байх ёстой.';
  }

  if (!values.departureDate) {
    errors.departureDate = 'Гарах боломжит огноогоо сонгоно уу.';
  }

  return errors;
}

export function generateBookingReference(expeditionSlug: string): string {
  const code = expeditionSlug.slice(0, 3).toUpperCase();
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `KT-2026-${code}-${suffix}`;
}
