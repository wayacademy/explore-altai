import test from 'node:test';
import assert from 'node:assert/strict';
import { TOURS } from '../data/tours';
import { estimateTrip, filterAndSortTours, formatUsd, recommendTours, validateBooking } from './travelLogic';

const base = { category: 'all' as const, query: '', sortBy: 'featured' as const, savedOnly: false, savedIds: [] };

test('formatUsd', () => {
  assert.equal(formatUsd(2350), '$2,350');
  assert.equal(formatUsd(4700.4), '$4,700');
});

test('ахын үлдээсэн 12 аялал + соёл, сафари = 14, давхардсан id алга', () => {
  assert.equal(TOURS.length, 14);
  assert.equal(new Set(TOURS.map((t) => t.id)).size, 14);
});

test('ангиллаар шүүнэ', () => {
  const eagle = filterAndSortTours(TOURS, { ...base, category: 'eagle' });
  assert.deepEqual(eagle.map((t) => t.id).sort(), ['deluun', 'golden-eagle']);
});

test('хайлт монгол, англи нэрээр олно', () => {
  assert.ok(filterAndSortTours(TOURS, { ...base, query: 'Хүйтэн' }).some((t) => t.id === 'khuiten'));
  assert.ok(filterAndSortTours(TOURS, { ...base, query: 'classic' }).some((t) => t.id === 'classic-altai'));
});

test('үнээр эрэмбэлэхэд үнэгүй аяллууд төгсгөлд', () => {
  const sorted = filterAndSortTours(TOURS, { ...base, sortBy: 'price-asc' });
  assert.equal(sorted[0].id, 'classic-altai');
});

test('хадгалсан аяллууд', () => {
  const s = filterAndSortTours(TOURS, { ...base, savedOnly: true, savedIds: ['deluun'] });
  assert.deepEqual(s.map((t) => t.id), ['deluun']);
});

test('үнэ байхгүй бол нийт дүн null, урьдчилгаа бодогдоно', () => {
  assert.deepEqual(estimateTrip(null, 3), { totalUsd: null, depositUsd: 1500, balanceUsd: null });
  assert.deepEqual(estimateTrip(2350, 2), { totalUsd: 4700, depositUsd: 1000, balanceUsd: 3700 });
});

test('өвлийн бүргэд сонгоход Дэлүүн эхэнд', () => {
  const r = recommendTours(TOURS, { interest: 'eagle', length: 'short', season: 'winter' });
  assert.equal(r[0].id, 'deluun');
});

test('захиалгын маягтын шалгалт', () => {
  const e = validateBooking({ fullName: 'A', email: 'x', phone: '12', tourId: '', travelers: 0, month: '', notes: '' });
  assert.deepEqual(Object.keys(e).sort(), ['email', 'fullName', 'month', 'phone', 'tourId', 'travelers']);
  const ok = validateBooking({ fullName: 'Anna Berg', email: 'anna@mail.com', phone: '+49 151 2345 678', tourId: 'deluun', travelers: 2, month: '2027-01', notes: '' });
  assert.deepEqual(ok, {});
});

test('every tour has full English text with no Mongolian left in it', async () => {
  const { TOURS, toursIn } = await import('../data/tours');
  const { TOURS_EN } = await import('../data/tours.en');
  const cyrillic = /[Ѐ-ӿ]/;
  for (const t of TOURS) assert.ok(TOURS_EN[t.id], `missing English for ${t.id}`);
  for (const t of toursIn('en')) {
    const { images, ...text } = t;
    void images;
    assert.ok(!cyrillic.test(JSON.stringify(text)), `Mongolian text left in English ${t.id}`);
  }
});

test('English itinerary has the same days as the Mongolian one', async () => {
  const { TOURS, localizeTour } = await import('../data/tours');
  for (const t of TOURS) {
    const en = localizeTour(t, 'en');
    assert.deepEqual(en.itinerary?.map((d) => d.day) ?? null, t.itinerary?.map((d) => d.day) ?? null, t.id);
    assert.equal(en.days, t.days);
    assert.equal(en.priceUsd, t.priceUsd);
  }
});

test('interface text has the same keys in both languages', async () => {
  const { UI } = await import('../i18n/ui');
  const keys = (o: unknown, p = ''): string[] =>
    o && typeof o === 'object' && !Array.isArray(o)
      ? Object.entries(o as Record<string, unknown>).flatMap(([k, v]) => keys(v, `${p}${k}.`))
      : [p];
  assert.deepEqual(keys(UI.en).sort(), keys(UI.mn).sort());
});
