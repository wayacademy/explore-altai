import test from 'node:test';
import assert from 'node:assert/strict';
import { EXPEDITIONS } from '../data/expeditions';
import {
  calculateTripEstimate,
  filterAndSortTrips,
  formatMnt,
  recommendTrips,
  validateBookingForm,
} from './travelLogic';

test('formatMnt formats Mongolian Tugrik cleanly without decimals', () => {
  assert.equal(formatMnt(3850000), '₮3,850,000');
  assert.equal(formatMnt(1250000.4), '₮1,250,000');
});

test('filterAndSortTrips filters by category, search query, and saved list', () => {
  const desertOnly = filterAndSortTrips(EXPEDITIONS, {
    category: 'desert',
    query: '',
    sortBy: 'featured',
    savedOnly: false,
    savedIds: [],
  });
  assert.equal(desertOnly.length, 1);
  assert.equal(desertOnly[0].id, 'gobi-khongor');

  const queryMatch = filterAndSortTrips(EXPEDITIONS, {
    category: 'all',
    query: 'Хөвсгөл',
    sortBy: 'featured',
    savedOnly: false,
    savedIds: [],
  });
  assert.equal(queryMatch.length, 1);
  assert.equal(queryMatch[0].id, 'khuvsgul-taiga');

  const savedOnly = filterAndSortTrips(EXPEDITIONS, {
    category: 'all',
    query: '',
    sortBy: 'price-asc',
    savedOnly: true,
    savedIds: ['terelj-khentii', 'altai-tavan-bogd'],
  });
  assert.equal(savedOnly.length, 2);
  assert.ok(savedOnly[0].basePriceMnt <= savedOnly[1].basePriceMnt);
});

test('calculateTripEstimate applies VIP multiplier, add-ons, and group discounts', () => {
  const soloStandard = calculateTripEstimate(2000000, 2, 'standard', []);
  assert.equal(soloStandard.discountRate, 0);
  assert.equal(soloStandard.totalMnt, 4000000);
  assert.equal(soloStandard.perPersonMnt, 2000000);

  const groupFourWithAddon = calculateTripEstimate(2000000, 4, 'standard', ['horse-guide']);
  // Base = 8,000,000 + Addon (240,000 * 4 = 960,000) = 8,960,000; 5% discount = 448,000 => 8,512,000
  assert.equal(groupFourWithAddon.discountRate, 0.05);
  assert.equal(groupFourWithAddon.discountAmount, 448000);
  assert.equal(groupFourWithAddon.totalMnt, 8512000);

  const vipEight = calculateTripEstimate(1000000, 8, 'vip', []);
  // Base = 1,000,000 * 8 * 1.35 = 10,800,000; 10% discount = 1,080,000 => 9,720,000
  assert.equal(vipEight.discountRate, 0.1);
  assert.equal(vipEight.totalMnt, 9720000);
});

test('recommendTrips returns top 2 expeditions matching duration and interest', () => {
  const results = recommendTrips(EXPEDITIONS, {
    interest: 'mountain',
    durationBucket: 'long',
    pace: 'active',
  });
  assert.equal(results.length, 2);
  assert.equal(results[0].id, 'altai-tavan-bogd');
});

test('validateBookingForm catches invalid inputs and passes valid submission', () => {
  const invalid = validateBookingForm({
    fullName: '',
    email: 'not-an-email',
    phone: '123',
    expeditionId: '',
    travelers: 0,
    departureDate: '',
    tier: 'standard',
    notes: '',
  });
  assert.ok(invalid.fullName);
  assert.ok(invalid.email);
  assert.ok(invalid.phone);
  assert.ok(invalid.expeditionId);
  assert.ok(invalid.travelers);
  assert.ok(invalid.departureDate);

  const valid = validateBookingForm({
    fullName: 'Бат-Эрдэнэ Дорж',
    email: 'baterdene@mongoltravel.mn',
    phone: '99112233',
    expeditionId: 'altai-tavan-bogd',
    travelers: 4,
    departureDate: '2026-07-15',
    tier: 'vip',
    notes: 'Гэрэл зургийн хөтөч хүсэж байна',
  });
  assert.deepEqual(valid, {});
});
