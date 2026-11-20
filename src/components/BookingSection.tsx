import { useEffect, useState } from 'react';
import { CheckCircle2, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { UI_COPY } from '../i18n/translations';
import type {
  BookingFormValues,
  BookingValidationErrors,
  Expedition,
  Language,
  TravelTier,
} from '../types/travel';
import {
  calculateTripEstimate,
  formatUsd,
  generateBookingReference,
  validateBookingForm,
} from '../utils/travelLogic';

interface BookingSectionProps {
  lang: Language;
  expeditions: Expedition[];
  prefill: {
    expeditionId: string;
    travelers: number;
    tier: TravelTier;
    notes: string;
  } | null;
}

export function BookingSection({
  lang,
  expeditions,
  prefill,
}: BookingSectionProps) {
  const [values, setValues] = useState<BookingFormValues>({
    fullName: '',
    email: '',
    phone: '',
    expeditionId: expeditions[0]?.id ?? '',
    travelers: 2,
    departureDate: '2026-07-15',
    tier: 'standard',
    notes: '',
  });
  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const [submittedRef, setSubmittedRef] = useState<{
    reference: string;
    expeditionTitle: string;
    fullName: string;
    email: string;
    travelers: number;
    departureDate: string;
    budgetDisplay: string;
  } | null>(null);

  const copy = UI_COPY[lang].booking;

  useEffect(() => {
    if (prefill) {
      setValues((prev) => ({
        ...prev,
        expeditionId: prefill.expeditionId,
        travelers: prefill.travelers,
        tier: prefill.tier,
        notes: prefill.notes,
      }));
      setSubmittedRef(null);
      setErrors({});
    }
  }, [prefill]);

  const selectedExpedition =
    expeditions.find((e) => e.id === values.expeditionId) ?? expeditions[0];

  const liveEstimate = selectedExpedition
    ? calculateTripEstimate(
        selectedExpedition.keyFacts.priceUsd,
        values.travelers,
        values.tier,
        [],
      )
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(values, lang);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    const trip = expeditions.find((item) => item.id === values.expeditionId);
    const est = trip
      ? calculateTripEstimate(
          trip.keyFacts.priceUsd,
          values.travelers,
          values.tier,
          [],
        )
      : null;

    const budgetDisplay =
      est && !est.isPriceOnRequest
        ? formatUsd(est.totalUsd)
        : trip?.keyFacts.priceLabel[lang] ?? copy.priceOnRequestNote;

    setSubmittedRef({
      reference: generateBookingReference(trip?.slug ?? 'alt'),
      expeditionTitle: trip?.title[lang] ?? '',
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      travelers: values.travelers,
      departureDate: values.departureDate,
      budgetDisplay,
    });
  };

  return (
    <section id="booking" className="py-12 sm:py-16 lg:py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Office & Direct Explore Altai Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                {copy.eyebrow}
              </p>
              <h2 className="font-editorial text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-[-0.025em] text-balance mb-4">
                {copy.heading}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {copy.intro}
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6 space-y-4 text-sm text-zinc-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-zinc-950">
                    {copy.officeTitle}
                  </div>
                  <div className="text-zinc-600">{copy.officeValue}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-zinc-950">
                    {copy.phoneTitle}
                  </div>
                  <div className="text-zinc-600 tabular-nums">
                    {copy.phoneValues}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-zinc-950">
                    {copy.emailTitle}
                  </div>
                  <div className="text-zinc-600">{copy.emailValue}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-zinc-950">
                    {copy.webTitle}
                  </div>
                  <div className="text-zinc-600">{copy.webValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form / Confirmation Card */}
          <div className="lg:col-span-7">
            {submittedRef ? (
              <div
                data-testid="booking-confirmation"
                className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-zinc-950 mb-1">
                      {copy.confirmTitle}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {copy.confirmSubtitlePrefix}{' '}
                      <span className="font-semibold text-zinc-950">
                        {submittedRef.email}
                      </span>{' '}
                      {copy.confirmSubtitleSuffix}
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-t border-b border-zinc-200 text-sm">
                  <div>
                    <dt className="text-xs text-zinc-500">{copy.refCode}</dt>
                    <dd className="font-mono font-semibold text-zinc-950">
                      {submittedRef.reference}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-zinc-500">{copy.bookerName}</dt>
                    <dd className="font-semibold text-zinc-950">
                      {submittedRef.fullName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-zinc-500">{copy.chosenTour}</dt>
                    <dd className="font-semibold text-zinc-950">
                      {submittedRef.expeditionTitle}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-zinc-500">
                      {copy.dateAndGroup}
                    </dt>
                    <dd className="font-semibold text-zinc-950 tabular-nums">
                      {submittedRef.departureDate} · {submittedRef.travelers}{' '}
                      {copy.personUnit}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-zinc-500">
                      {copy.estimatedBudget}
                    </dt>
                    <dd className="font-bold text-blue-600 tabular-nums">
                      {submittedRef.budgetDisplay}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setSubmittedRef(null)}
                  className="px-5 py-2.5 text-sm font-semibold text-zinc-700 bg-zinc-50 border border-zinc-300 hover:bg-zinc-100 rounded-xl transition-colors min-h-[44px]"
                >
                  {copy.newRequestBtn}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-zinc-200 rounded-2xl p-5 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="booking-fullname"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      {copy.formFullName}
                    </label>
                    <input
                      id="booking-fullname"
                      type="text"
                      value={values.fullName}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      placeholder={copy.formFullNamePlaceholder}
                      aria-invalid={Boolean(errors.fullName)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                    />
                    {errors.fullName && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      {copy.formPhone}
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder={copy.formPhonePlaceholder}
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                    />
                    {errors.phone && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      {copy.formEmail}
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      value={values.email}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder={copy.formEmailPlaceholder}
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                    />
                    {errors.email && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-expedition"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      {copy.formTour}
                    </label>
                    <select
                      id="booking-expedition"
                      value={values.expeditionId}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          expeditionId: e.target.value,
                        }))
                      }
                      aria-invalid={Boolean(errors.expeditionId)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                    >
                      {expeditions.map((trip) => (
                        <option key={trip.id} value={trip.id}>
                          {String(trip.number).padStart(2, '0')}.{' '}
                          {trip.title[lang]} ({trip.keyFacts.durationLabel[lang]})
                        </option>
                      ))}
                    </select>
                    {errors.expeditionId && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.expeditionId}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="booking-travelers"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      {copy.formTravelers}
                    </label>
                    <input
                      id="booking-travelers"
                      type="number"
                      min={1}
                      max={20}
                      value={values.travelers}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          travelers: Number(e.target.value) || 0,
                        }))
                      }
                      aria-invalid={Boolean(errors.travelers)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                    />
                    {errors.travelers && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.travelers}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      {copy.formDate}
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={values.departureDate}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          departureDate: e.target.value,
                        }))
                      }
                      aria-invalid={Boolean(errors.departureDate)}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                    />
                    {errors.departureDate && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-600"
                      >
                        {errors.departureDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-tier"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      {copy.formTier}
                    </label>
                    <select
                      id="booking-tier"
                      value={values.tier}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          tier: e.target.value as TravelTier,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[44px]"
                    >
                      <option value="standard">{copy.tierStandardOpt}</option>
                      <option value="vip">{copy.tierVipOpt}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-sm font-medium text-zinc-800 mb-1.5"
                  >
                    {copy.formNotes}
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={values.notes}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder={copy.formNotesPlaceholder}
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-zinc-200">
                  {liveEstimate && (
                    <div className="text-sm text-zinc-600">
                      {!liveEstimate.isPriceOnRequest ? (
                        <>
                          {copy.preliminaryTotal}{' '}
                          <span className="text-lg font-bold text-zinc-950 tabular-nums">
                            {formatUsd(liveEstimate.totalUsd)}
                          </span>
                        </>
                      ) : (
                        <span className="font-medium text-zinc-800">
                          {copy.priceOnRequestNote}
                        </span>
                      )}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors whitespace-nowrap shrink-0 min-h-[46px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    {copy.submitBtn}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
