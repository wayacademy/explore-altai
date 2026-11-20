import test from 'node:test';
import assert from 'node:assert/strict';
import { EXPEDITIONS } from '../data/expeditions';
import {
  calculateTripEstimate,
  filterAndSortTrips,
  formatUsd,
  recommendTrips,
  validateBookingForm,
} from './travelLogic';

test('all 20 Explore Altai tours and all 7 categories are present without loss', () => {
  assert.equal(EXPEDITIONS.length, 20);
  const categories = new Set(EXPEDITIONS.map((t) => t.category));
  assert.deepEqual(
    [...categories].sort(),
    ['culture', 'discovery', 'eagle', 'horse', 'river', 'trekking', 'wildlife'],
  );
  assert.equal(EXPEDITIONS[0].title.en, 'Classic Altai Trekking');
  assert.equal(EXPEDITIONS[0].keyFacts.priceUsd, 2350);
  assert.equal(EXPEDITIONS[19].title.en, 'Discover the Wild Altai: Wildlife Safari');
});

test('formatUsd formats USD cleanly without decimals', () => {
  assert.equal(formatUsd(2350), '$2,350');
  assert.equal(formatUsd(1250.4), '$1,250');
});

test('filterAndSortTrips filters by category, bilingual search query, and saved list', () => {
  const eagleOnly = filterAndSortTrips(EXPEDITIONS, {
    category: 'eagle',
    query: '',
    sortBy: 'featured',
    savedOnly: false,
    savedIds: [],
  });
  assert.equal(eagleOnly.length, 3);

  const riverOnly = filterAndSortTrips(EXPEDITIONS, {
    category: 'river',
    query: '',
    sortBy: 'featured',
    savedOnly: false,
    savedIds: [],
  });
  assert.equal(riverOnly.length, 5);

  const mnQueryMatch = filterAndSortTrips(EXPEDITIONS, {
    category: 'all',
    query: 'Цамбагарав',
    sortBy: 'featured',
    savedOnly: false,
    savedIds: [],
  });
  assert.ok(mnQueryMatch.some((t) => t.id === 'tsambagarav-trekking'));

  const enQueryMatch = filterAndSortTrips(EXPEDITIONS, {
    category: 'all',
    query: 'Chuluut Gol',
    sortBy: 'featured',
    savedOnly: false,
    savedIds: [],
  });
  assert.equal(enQueryMatch.length, 1);
  assert.equal(enQueryMatch[0].id, 'khangai-nuruu-heart-of-mongolia');

  const savedOnly = filterAndSortTrips(EXPEDITIONS, {
    category: 'all',
    query: '',
    sortBy: 'duration-asc',
    savedOnly: true,
    savedIds: ['munkhhairkhan-trekking', 'golden-eagle-festival-horseback'],
  });
  assert.equal(savedOnly.length, 2);
  assert.equal(savedOnly[0].id, 'golden-eagle-festival-horseback');
});

test('calculateTripEstimate applies USD pricing, VIP multiplier, add-ons, group discounts, and On Request mode', () => {
  const classicTwo = calculateTripEstimate(2350, 2, 'standard', []);
  assert.equal(classicTwo.isPriceOnRequest, false);
  assert.equal(classicTwo.totalUsd, 4700);
  assert.equal(classicTwo.discountRate, 0);

  const groupFourWithAddon = calculateTripEstimate(2350, 4, 'standard', ['horse-guide']);
  // Base = 9,400 + Addon (160 * 4 = 640) = 10,040; 5% discount = 502 => 9,538
  assert.equal(groupFourWithAddon.discountRate, 0.05);
  assert.equal(groupFourWithAddon.discountAmountUsd, 502);
  assert.equal(groupFourWithAddon.totalUsd, 9538);

  const vipEight = calculateTripEstimate(1000, 8, 'vip', []);
  // Base = 1,000 * 8 * 1.35 = 10,800; 10% discount = 1,080 => 9,720
  assert.equal(vipEight.discountRate, 0.1);
  assert.equal(vipEight.totalUsd, 9720);

  const onRequestTour = calculateTripEstimate(null, 4, 'standard', ['photo-gear']);
  assert.equal(onRequestTour.isPriceOnRequest, true);
  assert.equal(onRequestTour.addonsTotalUsd, 840);
});

test('recommendTrips returns top 2 tours matching category, duration and pace', () => {
  const results = recommendTrips(EXPEDITIONS, {
    interest: 'eagle',
    durationBucket: 'short',
    pace: 'balanced',
  });
  assert.equal(results.length, 2);
  assert.equal(results[0].category, 'eagle');
});

test('validateBookingForm catches invalid inputs and produces localized MN/EN errors', () => {
  const invalidMn = validateBookingForm(
    {
      fullName: '',
      email: 'bad',
      phone: '123',
      expeditionId: '',
      travelers: 0,
      departureDate: '',
      tier: 'standard',
      notes: '',
    },
    'mn',
  );
  assert.ok(invalidMn.fullName?.includes('Овог нэр'));
  assert.ok(invalidMn.email);
  assert.ok(invalidMn.phone);

  const invalidEn = validateBookingForm(
    {
      fullName: '',
      email: 'bad',
      phone: '123',
      expeditionId: '',
      travelers: 0,
      departureDate: '',
      tier: 'standard',
      notes: '',
    },
    'en',
  );
  assert.ok(invalidEn.fullName?.includes('full name'));

  const valid = validateBookingForm(
    {
      fullName: 'Elena Becker',
      email: 'elena@example.com',
      phone: '+97699063539',
      expeditionId: 'classic-altai-trekking',
      travelers: 4,
      departureDate: '2026-08-10',
      tier: 'vip',
      notes: 'Custom pace',
    },
    'en',
  );
  assert.deepEqual(valid, {});
});
