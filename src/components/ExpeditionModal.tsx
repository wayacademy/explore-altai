import { useEffect, useState } from 'react';
import { Check, ExternalLink, Minus, Plus, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { UI_COPY } from '../i18n/translations';
import type {
  AddonId,
  Expedition,
  Language,
  TravelTier,
} from '../types/travel';
import {
  ADDON_OPTIONS,
  calculateTripEstimate,
  formatUsd,
} from '../utils/travelLogic';
import { SafeImage } from './SafeImage';

interface ExpeditionModalProps {
  lang: Language;
  expedition: Expedition | null;
  onClose: () => void;
  onProceedToBook: (payload: {
    expeditionId: string;
    travelers: number;
    tier: TravelTier;
    notes: string;
  }) => void;
}

export function ExpeditionModal({
  lang,
  expedition,
  onClose,
  onProceedToBook,
}: ExpeditionModalProps) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [showAllDays, setShowAllDays] = useState(false);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<TravelTier>('standard');
  const [selectedAddons, setSelectedAddons] = useState<AddonId[]>([]);

  const copy = UI_COPY[lang].modal;

  useEffect(() => {
    if (expedition) {
      setActiveDayIndex(0);
      setShowAllDays(false);
      setTravelers(2);
      setTier('standard');
      setSelectedAddons([]);
    }
  }, [expedition]);

  useEffect(() => {
    if (!expedition) {
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [expedition, onClose]);

  if (!expedition) {
    return null;
  }

  const estimate = calculateTripEstimate(
    expedition.keyFacts.priceUsd,
    travelers,
    tier,
    selectedAddons,
  );

  const toggleAddon = (id: AddonId) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const currentDayPlan =
    expedition.itinerary[activeDayIndex] ?? expedition.itinerary[0];

  const handleBookClick = () => {
    const addonLabels = ADDON_OPTIONS.filter((a) =>
      selectedAddons.includes(a.id),
    ).map((a) => a.label[lang]);
    const notes =
      addonLabels.length > 0
        ? `${lang === 'en' ? 'Selected add-ons' : 'Сонгосон нэмэлт үйлчилгээ'}: ${addonLabels.join(', ')}`
        : '';

    onProceedToBook({
      expeditionId: expedition.id,
      travelers,
      tier,
      notes,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-zinc-950/75 overflow-y-auto"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.99 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-expedition-title"
        className="relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-2xl border border-zinc-200 shadow-2xl flex flex-col"
      >
        {/* Mobile sheet drag handle */}
        <div
          aria-hidden="true"
          className="w-10 h-1.5 bg-zinc-300 rounded-full mx-auto mt-2.5 sm:hidden shrink-0"
        />

        {/* Top Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 bg-white border-b border-zinc-200">
          <div className="min-w-0">
            <p className="text-xs text-zinc-500 truncate">
              {String(expedition.number).padStart(2, '0')} ·{' '}
              {expedition.categoryLabel[lang]} · {expedition.region[lang]}
            </p>
            <h2
              id="modal-expedition-title"
              className="font-editorial text-lg sm:text-2xl font-bold text-zinc-950 tracking-[-0.02em] truncate"
            >
              {expedition.title[lang]}
            </h2>
          </div>
          <button
            type="button"
            data-testid="close-modal"
            onClick={onClose}
            aria-label={copy.closeAria}
            className="w-11 h-11 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 flex-1">
          {/* Hero photo + Complete Key Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            <div className="lg:col-span-6 aspect-[16/10] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
              <SafeImage
                src={expedition.imageUrl}
                alt={expedition.imageAlt[lang]}
                fallbackTitle={expedition.title[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between bg-zinc-50 rounded-xl p-4 sm:p-5 border border-zinc-200">
              <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                {expedition.summary[lang]}
              </p>

              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4 border-t border-zinc-200 text-sm">
                <div>
                  <dt className="text-xs text-zinc-500">{copy.factDuration}</dt>
                  <dd className="font-semibold text-zinc-950 tabular-nums">
                    {expedition.keyFacts.durationLabel[lang]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500">{copy.factPrice}</dt>
                  <dd className="font-semibold text-zinc-950 tabular-nums">
                    {expedition.keyFacts.priceLabel[lang]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500">{copy.factSeason}</dt>
                  <dd className="font-semibold text-zinc-950">
                    {expedition.keyFacts.season[lang]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500">
                    {copy.factDepartures2027}
                  </dt>
                  <dd className="font-semibold text-zinc-950">
                    {expedition.keyFacts.departures2027[lang]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500">{copy.factGroupSize}</dt>
                  <dd className="font-semibold text-zinc-950">
                    {expedition.keyFacts.groupSize[lang]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500">{copy.factGrade}</dt>
                  <dd className="font-semibold text-zinc-950">
                    {expedition.keyFacts.grade[lang]}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Overview & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-zinc-200 pt-6">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-editorial text-lg font-bold text-zinc-950">
                {copy.overviewTitle}
              </h3>
              <div className="space-y-3 text-sm text-zinc-700 leading-relaxed">
                {expedition.overview[lang].map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <p className="text-xs text-zinc-500 pt-1 inline-flex items-center gap-1.5 flex-wrap">
                <span>{copy.officialPageLabel}:</span>
                <span className="font-mono text-zinc-700 break-all">
                  {expedition.webPage}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              </p>
            </div>

            <div className="lg:col-span-5 bg-zinc-50 border border-zinc-200 rounded-xl p-4 sm:p-5">
              <h3 className="font-editorial text-base font-bold text-zinc-950 mb-3">
                {copy.highlightsTitle}
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-700">
                {expedition.highlights[lang].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="text-blue-600 font-bold leading-5 shrink-0"
                    >
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="border-t border-zinc-200 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 className="font-editorial text-lg font-bold text-zinc-950">
                {copy.itineraryTitle}
              </h3>
              {expedition.itinerary.length > 1 && (
                <button
                  type="button"
                  onClick={() => setShowAllDays((prev) => !prev)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 py-1.5 px-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200/70 transition-colors min-h-[36px]"
                >
                  {showAllDays
                    ? lang === 'en'
                      ? 'Interactive day view'
                      : 'Өдрөөр шүүж харах'
                    : lang === 'en'
                      ? `Show all ${expedition.itinerary.length} steps`
                      : `Бүх ${expedition.itinerary.length} хэсгийг харах`}
                </button>
              )}
            </div>

            {expedition.itinerary.length === 0 ? (
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
                <h4 className="font-semibold text-zinc-950 text-sm mb-1.5">
                  {copy.onRequestItineraryTitle}
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {expedition.itineraryNote?.[lang]}
                </p>
              </div>
            ) : showAllDays ? (
              <div className="space-y-3">
                {expedition.itinerary.map((item) => (
                  <div
                    key={item.dayLabel.en}
                    className="bg-zinc-50 border border-zinc-200 rounded-xl p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-sm text-zinc-950">
                        <span className="text-blue-600 mr-1.5 tabular-nums">
                          {item.dayLabel[lang]}:
                        </span>
                        {item.title[lang]}
                      </h4>
                      {item.meta && (
                        <span className="text-xs font-mono text-zinc-600">
                          {item.meta[lang]}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {item.description[lang]}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div
                  className="flex flex-nowrap sm:flex-wrap gap-2 mb-4 overflow-x-auto no-scrollbar pb-1"
                  role="tablist"
                  aria-label={copy.daySelectorLabel}
                >
                  {expedition.itinerary.map((item, idx) => {
                    const active = idx === activeDayIndex;
                    return (
                      <button
                        key={item.dayLabel.en}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveDayIndex(idx)}
                        className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-colors whitespace-nowrap shrink-0 tabular-nums min-h-[40px] ${
                          active
                            ? 'bg-zinc-950 text-white border-zinc-950'
                            : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50'
                        }`}
                      >
                        {item.dayLabel[lang]}
                      </button>
                    );
                  })}
                </div>

                {currentDayPlan && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDayPlan.dayLabel.en}
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.13, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 sm:p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-bold text-zinc-950">
                          {currentDayPlan.dayLabel[lang]}:{' '}
                          {currentDayPlan.title[lang]}
                        </h4>
                        {currentDayPlan.meta && (
                          <span className="text-xs font-mono text-zinc-600">
                            {currentDayPlan.meta[lang]}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-700 leading-relaxed">
                        {currentDayPlan.description[lang]}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </>
            )}
          </div>

          {/* Included / Not Included & Live Quote Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-zinc-200 pt-6">
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="font-editorial text-base font-bold text-zinc-950 mb-3">
                  {copy.includedTitle}
                </h3>
                <ul className="space-y-2 text-sm text-zinc-700">
                  {expedition.included[lang].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {expedition.notIncluded[lang].length > 0 && (
                <div className="pt-4 border-t border-zinc-200">
                  <h4 className="font-editorial text-sm font-bold text-zinc-950 mb-2.5">
                    {copy.notIncludedTitle}
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600">
                    {expedition.notIncluded[lang].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-zinc-400">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Live Pricing / Custom Inquiry Calculator */}
            <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 rounded-xl p-4 sm:p-5 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-editorial text-lg font-bold text-zinc-950">
                  {copy.estimatorTitle}
                </h3>
                {estimate.discountRate > 0 && (
                  <span className="text-xs font-semibold text-blue-600 tabular-nums">
                    {copy.groupDiscountActive} ({Math.round(estimate.discountRate * 100)}%)
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-medium text-zinc-600 mb-1.5">
                    {copy.travelersLabel}
                  </span>
                  <div className="inline-flex items-center border border-zinc-300 bg-white rounded-xl">
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                      aria-label={copy.minusTravelerAria}
                      className="w-11 h-11 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 rounded-l-xl"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span
                      data-testid="modal-travelers-count"
                      className="w-12 text-center text-sm font-bold text-zinc-950 tabular-nums"
                    >
                      {travelers}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.min(20, n + 1))}
                      aria-label={copy.plusTravelerAria}
                      className="w-11 h-11 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 rounded-r-xl"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-medium text-zinc-600 mb-1.5">
                    {copy.tierLabel}
                  </span>
                  <div className="grid grid-cols-2 gap-1 p-1 bg-zinc-200/70 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setTier('standard')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap min-h-[38px] ${
                        tier === 'standard'
                          ? 'bg-white text-zinc-950 shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {copy.tierStandard}
                    </button>
                    <button
                      type="button"
                      onClick={() => setTier('vip')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap min-h-[38px] ${
                        tier === 'vip'
                          ? 'bg-white text-zinc-950 shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {copy.tierVip}
                    </button>
                  </div>
                </div>
              </div>

              {/* Optional Add-ons */}
              <div>
                <span className="block text-xs font-medium text-zinc-600 mb-2">
                  {copy.addonsLabel}
                </span>
                <div className="space-y-2">
                  {ADDON_OPTIONS.map((addon) => {
                    const checked = selectedAddons.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        className="flex items-center justify-between gap-3 p-3 bg-white border border-zinc-200 rounded-xl cursor-pointer hover:border-zinc-300 min-h-[48px]"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleAddon(addon.id)}
                            className="w-5 h-5 rounded border-zinc-300 text-blue-600 focus:ring-blue-600 shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="text-sm font-medium text-zinc-950">
                              {addon.label[lang]}
                            </div>
                            <div className="text-xs text-zinc-500">
                              {addon.description[lang]}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-zinc-700 tabular-nums whitespace-nowrap shrink-0">
                          +{formatUsd(addon.pricePerPersonUsd)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Desktop Estimate Summary */}
              <div className="hidden sm:flex pt-4 border-t border-zinc-200 flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  {estimate.isPriceOnRequest ? (
                    <>
                      <div className="text-xs text-zinc-600">
                        {copy.onRequestEstimateNote}
                      </div>
                      <div
                        data-testid="modal-total-estimate"
                        className="text-xl font-bold text-zinc-950 tabular-nums mt-0.5"
                      >
                        {expedition.keyFacts.priceLabel[lang]}
                        {estimate.addonsTotalUsd > 0 &&
                          ` + ${formatUsd(estimate.addonsTotalUsd)}`}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-xs text-zinc-500">
                        {copy.totalEstimateLabel} ({travelers} ·{' '}
                        <span className="tabular-nums font-medium text-zinc-700">
                          {formatUsd(estimate.perPersonUsd)} / {copy.perPersonSuffix}
                        </span>
                        )
                      </div>
                      {estimate.discountAmountUsd > 0 && (
                        <div className="text-xs text-blue-600 font-medium tabular-nums">
                          {copy.savingsPrefix} {formatUsd(estimate.discountAmountUsd)}{' '}
                          {copy.savingsSuffix}
                        </div>
                      )}
                      <motion.div
                        key={estimate.totalUsd}
                        initial={{ opacity: 0.7, y: 2 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                        data-testid="modal-total-estimate"
                        className="text-2xl font-bold text-zinc-950 tabular-nums"
                      >
                        {formatUsd(estimate.totalUsd)}
                      </motion.div>
                    </>
                  )}
                </div>

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBookClick}
                  className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  {copy.bookButton}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Thumb-Zone Sticky Action Footer inside Bottom Sheet */}
        <div className="sm:hidden sticky bottom-0 z-10 bg-white border-t border-zinc-200 px-4 pt-3 pb-safe flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="block text-[11px] text-zinc-500 truncate">
              {estimate.isPriceOnRequest
                ? copy.factPrice
                : `${copy.totalEstimateLabel} (${travelers})`}
            </span>
            <span
              data-testid="modal-total-estimate-mobile"
              className="text-base font-bold text-zinc-950 tabular-nums block truncate"
            >
              {estimate.isPriceOnRequest
                ? expedition.keyFacts.priceLabel[lang]
                : formatUsd(estimate.totalUsd)}
            </span>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={handleBookClick}
            className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
          >
            {copy.bookButton}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
