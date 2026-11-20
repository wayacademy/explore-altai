import { useEffect, useState } from 'react';
import { Check, Minus, Plus, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { AddonId, Expedition, TravelTier } from '../types/travel';
import { ADDON_OPTIONS, calculateTripEstimate, formatMnt } from '../utils/travelLogic';
import { SafeImage } from './SafeImage';

interface ExpeditionModalProps {
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
  expedition,
  onClose,
  onProceedToBook,
}: ExpeditionModalProps) {
  const [activeDay, setActiveDay] = useState(1);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<TravelTier>('standard');
  const [selectedAddons, setSelectedAddons] = useState<AddonId[]>([]);

  useEffect(() => {
    if (expedition) {
      setActiveDay(expedition.itinerary[0]?.day ?? 1);
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
    expedition.basePriceMnt,
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
    expedition.itinerary.find((d) => d.day === activeDay) ?? expedition.itinerary[0];

  const handleBookClick = () => {
    const addonLabels = ADDON_OPTIONS.filter((a) => selectedAddons.includes(a.id)).map(
      (a) => a.label,
    );
    const notes =
      addonLabels.length > 0
        ? `Сонгосон нэмэлт үйлчилгээ: ${addonLabels.join(', ')}`
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-expedition-title"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl"
      >
        {/* Top Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-slate-200">
          <div className="min-w-0">
            <p className="text-xs text-slate-500 truncate">
              {expedition.categoryLabel} · {expedition.region} · {expedition.coordinates}
            </p>
            <h2
              id="modal-expedition-title"
              className="font-editorial text-xl sm:text-2xl font-bold text-slate-900 truncate"
            >
              {expedition.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Аяллын цонх хаах"
            className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Hero photo + tabular specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <SafeImage
                src={expedition.imageUrl}
                alt={expedition.imageAlt}
                fallbackTitle={expedition.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {expedition.summary}
              </p>
              <dl className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-sm">
                <div>
                  <dt className="text-xs text-slate-500">Үргэлжлэх хугацаа</dt>
                  <dd className="font-semibold text-slate-900 tabular-nums">
                    {expedition.days} өдөр / {expedition.nights} шөнө
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Дээд өндөрлөг</dt>
                  <dd className="font-semibold text-slate-900 tabular-nums">
                    {expedition.elevationM.toLocaleString('en-US')} м
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Нийт туулах зам</dt>
                  <dd className="font-semibold text-slate-900 tabular-nums">
                    {expedition.distanceKm.toLocaleString('en-US')} км
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Тохиромжтой улирал</dt>
                  <dd className="font-semibold text-slate-900">{expedition.bestSeason}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Interactive Day-by-Day Itinerary */}
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Өдөр бүрийн аяллын хөтөлбөр
            </h3>
            <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Өдрийн сонголт">
              {expedition.itinerary.map((item) => {
                const active = item.day === currentDayPlan?.day;
                return (
                  <button
                    key={item.day}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveDay(item.day)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                      active
                        ? 'bg-blue-700 text-white border-blue-700'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {item.day}-р өдөр
                  </button>
                );
              })}
            </div>

            {currentDayPlan && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDayPlan.day}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.13, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-slate-900">
                      {currentDayPlan.day}-р өдөр: {currentDayPlan.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-600">
                      {currentDayPlan.route}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    {currentDayPlan.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    Байрлах газар:{' '}
                    <span className="font-medium text-slate-800">
                      {currentDayPlan.accommodation}
                    </span>
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Included & Live Price Estimator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-slate-200 pt-6">
            <div className="lg:col-span-5">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Аяллын үнэд багтсан зүйлс
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {expedition.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live Pricing Calculator */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Зардлын тооцоолуур
                </h3>
                {estimate.discountRate > 0 && (
                  <span className="text-xs font-semibold text-blue-700 tabular-nums">
                    Бүлгийн {Math.round(estimate.discountRate * 100)}% хөнгөлөлт идэвхтэй
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs font-medium text-slate-600 mb-1.5">
                    Аялагчдын тоо (4+ хүн 5%, 8+ хүн 10% хямдралтай)
                  </span>
                  <div className="inline-flex items-center border border-slate-300 bg-white rounded-lg">
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                      aria-label="Аялагчийн тоог хасах"
                      className="w-10 h-10 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-l-lg"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span
                      data-testid="modal-travelers-count"
                      className="w-12 text-center text-sm font-bold text-slate-900 tabular-nums"
                    >
                      {travelers}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.min(20, n + 1))}
                      aria-label="Аялагчийн тоог нэмэх"
                      className="w-10 h-10 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded-r-lg"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-medium text-slate-600 mb-1.5">
                    Аяллын ангилал (VIP: +35% хувийн хөтөч)
                  </span>
                  <div className="grid grid-cols-2 gap-1 p-1 bg-slate-200/70 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setTier('standard')}
                      className={`py-2 px-3 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                        tier === 'standard'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Стандарт
                    </button>
                    <button
                      type="button"
                      onClick={() => setTier('vip')}
                      className={`py-2 px-3 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                        tier === 'vip'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Хувийн VIP
                    </button>
                  </div>
                </div>
              </div>

              {/* Addons */}
              <div>
                <span className="block text-xs font-medium text-slate-600 mb-2">
                  Нэмэлт сонголтууд (1 хүнд ногдох)
                </span>
                <div className="space-y-2">
                  {ADDON_OPTIONS.map((addon) => {
                    const checked = selectedAddons.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        className="flex items-center justify-between gap-3 p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-slate-300"
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleAddon(addon.id)}
                            className="w-4 h-4 rounded border-slate-300 text-blue-700 focus:ring-blue-700"
                          />
                          <div>
                            <div className="text-sm font-medium text-slate-900">
                              {addon.label}
                            </div>
                            <div className="text-xs text-slate-500">{addon.description}</div>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-700 tabular-nums whitespace-nowrap">
                          +{formatMnt(addon.pricePerPersonMnt)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Final Estimate Row */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">
                    Нийт урьдчилсан дүн ({travelers} хүн · 1 хүнд{' '}
                    <span className="tabular-nums font-medium text-slate-700">
                      {formatMnt(estimate.perPersonMnt)}
                    </span>
                    )
                  </div>
                  {estimate.discountAmount > 0 && (
                    <div className="text-xs text-blue-700 font-medium tabular-nums">
                      Бүлгийн хөнгөлөлтөөр {formatMnt(estimate.discountAmount)} хэмнэж байна
                    </div>
                  )}
                  <motion.div
                    key={estimate.totalMnt}
                    initial={{ opacity: 0.7, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    data-testid="modal-total-estimate"
                    className="text-2xl font-bold text-slate-900 tabular-nums"
                  >
                    {formatMnt(estimate.totalMnt)}
                  </motion.div>
                </div>

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBookClick}
                  className="px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  Энэ аяллыг захиалах
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
