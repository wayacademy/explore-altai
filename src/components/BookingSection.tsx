import { useEffect, useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import type {
  BookingFormValues,
  BookingValidationErrors,
  Expedition,
  TravelTier,
} from '../types/travel';
import {
  calculateTripEstimate,
  formatMnt,
  generateBookingReference,
  validateBookingForm,
} from '../utils/travelLogic';

interface BookingSectionProps {
  expeditions: Expedition[];
  prefill: {
    expeditionId: string;
    travelers: number;
    tier: TravelTier;
    notes: string;
  } | null;
}

export function BookingSection({ expeditions, prefill }: BookingSectionProps) {
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
    totalMnt: number;
  } | null>(null);

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
        selectedExpedition.basePriceMnt,
        values.travelers,
        values.tier,
        [],
      )
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(values);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    const trip = expeditions.find((item) => item.id === values.expeditionId);
    const est = trip
      ? calculateTripEstimate(trip.basePriceMnt, values.travelers, values.tier, [])
      : null;

    setSubmittedRef({
      reference: generateBookingReference(trip?.slug ?? 'trp'),
      expeditionTitle: trip?.title ?? 'Сонгосон аялал',
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      travelers: values.travelers,
      departureDate: values.departureDate,
      totalMnt: est?.totalMnt ?? 0,
    });
  };

  return (
    <section id="booking" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Office & Trust Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-medium text-blue-700 mb-2">
                Захиалга ба зөвлөгөө
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
                2026 оны аяллаа одооноос төлөвлөөрэй
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Доорх хүсэлтийг илгээснээс хойш ажлын 4 цагийн дотор манай ахлах
                аяллын зөвлөх тантай холбогдож нислэг, баазын суудлыг баталгаажуулна.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-700 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Улаанбаатар дахь төв оффис</div>
                  <div className="text-slate-600">
                    Сүхбаатар дүүрэг, 1-р хороо, Чингисийн өргөн чөлөө 17, 402 тоот
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-700 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Утас (09:00 – 19:00)</div>
                  <div className="text-slate-600 tabular-nums">+976 7711-4890</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-700 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Имэйл хаяг</div>
                  <div className="text-slate-600">hello@khukhtenger.mn</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form / Confirmation Card */}
          <div className="lg:col-span-7">
            {submittedRef ? (
              <div
                data-testid="booking-confirmation"
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Захиалгын хүсэлт амжилттай бүртгэгдлээ
                    </h3>
                    <p className="text-sm text-slate-600">
                      Таны хүсэлтийг <span className="font-semibold text-slate-900">{submittedRef.email}</span> хаяг руу
                      урьдчилсан баталгаажуулалтын хамт илгээлээ.
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-t border-b border-slate-200 text-sm">
                  <div>
                    <dt className="text-xs text-slate-500">Захиалгын код</dt>
                    <dd className="font-mono font-semibold text-slate-900">
                      {submittedRef.reference}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Захиалагч</dt>
                    <dd className="font-semibold text-slate-900">{submittedRef.fullName}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Сонгосон маршрут</dt>
                    <dd className="font-semibold text-slate-900">
                      {submittedRef.expeditionTitle}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Хугацаа ба хүний тоо</dt>
                    <dd className="font-semibold text-slate-900 tabular-nums">
                      {submittedRef.departureDate} · {submittedRef.travelers} хүн
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Урьдчилсан нийт төсөв</dt>
                    <dd className="font-bold text-blue-700 tabular-nums">
                      {formatMnt(submittedRef.totalMnt)}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setSubmittedRef(null)}
                  className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors min-h-[44px]"
                >
                  Өөр аяллын хүсэлт илгээх
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-fullname"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Овог нэр
                    </label>
                    <input
                      id="booking-fullname"
                      type="text"
                      value={values.fullName}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      placeholder="Ж.нь: Бат-Эрдэнэ Дорж"
                      aria-invalid={Boolean(errors.fullName)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[44px]"
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Утасны дугаар
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="99112233"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[44px]"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Имэйл хаяг
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      value={values.email}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="name@company.mn"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[44px]"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-expedition"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Сонгох аялал
                    </label>
                    <select
                      id="booking-expedition"
                      value={values.expeditionId}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, expeditionId: e.target.value }))
                      }
                      aria-invalid={Boolean(errors.expeditionId)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[44px]"
                    >
                      {expeditions.map((trip) => (
                        <option key={trip.id} value={trip.id}>
                          {trip.title} ({trip.days} хоног)
                        </option>
                      ))}
                    </select>
                    {errors.expeditionId && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.expeditionId}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label
                      htmlFor="booking-travelers"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Хүний тоо
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
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[44px]"
                    />
                    {errors.travelers && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.travelers}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Гарах огноо
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={values.departureDate}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, departureDate: e.target.value }))
                      }
                      aria-invalid={Boolean(errors.departureDate)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[44px]"
                    />
                    {errors.departureDate && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.departureDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-tier"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      Ангилал
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
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 min-h-[44px]"
                    >
                      <option value="standard">Стандарт бүлэг</option>
                      <option value="vip">Хувийн VIP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-sm font-medium text-slate-800 mb-1.5"
                  >
                    Нэмэлт хүсэлт, хоолны дэглэм эсвэл тусгай шаардлага
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={values.notes}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder="Ж.нь: Цагаан хоолтой, гэрэл зургийн хөтөч нэмэх хүсэлтэй..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
                  {liveEstimate && (
                    <div className="text-sm text-slate-600">
                      Урьдчилсан дүн:{' '}
                      <span className="text-lg font-bold text-slate-900 tabular-nums">
                        {formatMnt(liveEstimate.totalMnt)}
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                  >
                    Захиалгын хүсэлт илгээх
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
