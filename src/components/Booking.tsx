import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { COMPANY, PAYMENT_TERMS } from '../data/site';
import { tourById } from '../data/tours';
import { useLang } from '../i18n/lang';
import type { Ui } from '../i18n/ui';
import type { BookingFormValues, BookingValidationErrors, Tour } from '../types/travel';
import { bookingReference, estimateTrip, formatUsd, validateBooking } from '../utils/travelLogic';
import { Ph } from './Placeholder';

function nextMonths(count: number, label: Ui['booking']['monthLabel']) {
  const now = new Date();
  return Array.from({ length: count }, (_, n) => {
    const d = new Date(now.getFullYear(), now.getMonth() + 1 + n, 1);
    const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    return { value, label: label(d.getFullYear(), d.getMonth() + 1) };
  });
}

function CopyLine({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(value).then(
      () => {
        setDone(true);
        window.setTimeout(() => setDone(false), 1500);
      },
      () => undefined,
    );
  };
  return (
    <li className="flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10"><Icon className="size-4" aria-hidden /></span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-white/60">{label}</span>
        <span className="block select-all truncate font-semibold">{value}</span>
      </span>
      <button type="button" onClick={copy} className="rounded-full px-2.5 py-1.5 text-xs font-bold text-white/70 hover:bg-white/10" aria-label={t.booking.copy(label)}>
        {done ? t.booking.copied : <Copy className="size-4" />}
      </button>
    </li>
  );
}

const field = 'w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-white';

export function Booking({ tours, prefill }: { tours: Tour[]; prefill: { tourId: string; travelers: number; n: number } | null }) {
  const { lang, t, pick } = useLang();
  const b = t.booking;
  const months = useMemo(() => nextMonths(14, b.monthLabel), [b]);
  const [v, setV] = useState<BookingFormValues>({ fullName: '', email: '', phone: '', tourId: tours[0].id, travelers: 2, month: '', notes: '' });
  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const [ref, setRef] = useState<string | null>(null);

  useEffect(() => {
    if (prefill) {
      setV((x) => ({ ...x, tourId: prefill.tourId, travelers: prefill.travelers }));
      setRef(null);
    }
  }, [prefill]);

  const tour = tours.find((x) => x.id === v.tourId) ?? tourById(v.tourId);
  const est = estimateTrip(tour?.priceUsd ?? null, v.travelers);
  const set = <K extends keyof BookingFormValues>(k: K, val: BookingFormValues[K]) => setV((x) => ({ ...x, [k]: val }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateBooking(v, lang);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setRef(bookingReference(v.tourId));
  };

  const err = (k: keyof BookingValidationErrors) => errors[k] && <p className="mt-1 text-xs font-semibold text-[#b2342b]">{errors[k]}</p>;

  return (
    <section id="contact" className="gutter pb-10">
      <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col rounded-[var(--radius-card)] bg-night p-6 text-white md:p-8">
          <p className="eyebrow text-blue-300">{b.eyebrow}</p>
          <h2 className="font-display mt-2 text-[2.1rem] leading-[1.08] md:text-5xl">{b.title}</h2>
          <p className="mt-3 text-white/75">{b.text}</p>
          <ul className="mt-7 space-y-4">
            <CopyLine icon={Phone} label={b.phone} value={COMPANY.phones[0]} />
            <CopyLine icon={Phone} label={b.phone2} value={COMPANY.phones[1]} />
            <CopyLine icon={Mail} label={b.email} value={COMPANY.email} />
            <li className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10"><MapPin className="size-4" aria-hidden /></span>
              <span><span className="block text-xs text-white/60">{b.address}</span><span className="block font-semibold">{pick(COMPANY.address)}</span></span>
            </li>
          </ul>
          <div className="mt-4"><Ph>{b.whatsappTodo}</Ph></div>

          <div className="mt-8 rounded-[22px] bg-white/6 p-5">
            <p className="font-bold">{b.terms}</p>
            <dl className="mt-3 space-y-2.5 text-sm">
              {PAYMENT_TERMS.map((x) => (
                <div key={x.when.en} className="flex justify-between gap-4 border-b border-white/10 pb-2.5 last:border-0 last:pb-0">
                  <dt className="text-white/65">{pick(x.when)}</dt>
                  <dd className="text-right font-semibold">{pick(x.what)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-line bg-card p-6 shadow-card md:p-8">
          <AnimatePresence mode="wait">
            {ref ? (
              <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex h-full flex-col items-start justify-center py-6">
                <CheckCircle2 className="size-12 text-[#2f8a57]" />
                <h3 className="font-display mt-4 text-3xl font-semibold">{b.doneTitle} <span className="tabular-nums">{ref}</span></h3>
                <p className="mt-3 max-w-md text-ink/75">{b.doneText(v.fullName, tour?.title ?? '', v.travelers)}</p>
                <div className="mt-4"><Ph>{b.demo}</Ph></div>
                <button type="button" onClick={() => setRef(null)} className="mt-6 rounded-xl bg-chip px-4 py-2.5 text-sm font-bold">{b.again}</button>
              </motion.div>
            ) : (
              <motion.form key="form" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="b-name" className="text-sm font-bold">{b.fields.fullName}</label>
                  <input id="b-name" className={`${field} mt-1.5`} value={v.fullName} onChange={(e) => set('fullName', e.target.value)} placeholder={b.namePh} autoComplete="name" />
                  {err('fullName')}
                </div>
                <div>
                  <label htmlFor="b-email" className="text-sm font-bold">{b.fields.email}</label>
                  <input id="b-email" type="email" className={`${field} mt-1.5`} value={v.email} onChange={(e) => set('email', e.target.value)} placeholder="name@gmail.com" autoComplete="email" />
                  {err('email')}
                </div>
                <div>
                  <label htmlFor="b-phone" className="text-sm font-bold">{b.fields.phone}</label>
                  <input id="b-phone" className={`${field} mt-1.5`} value={v.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+49 151 2345 678" autoComplete="tel" />
                  {err('phone')}
                </div>
                <div>
                  <label htmlFor="b-tour" className="text-sm font-bold">{b.fields.tour}</label>
                  <select id="b-tour" className={`${field} mt-1.5`} value={v.tourId} onChange={(e) => set('tourId', e.target.value)}>
                    {tours.map((x) => <option key={x.id} value={x.id}>{x.title}</option>)}
                  </select>
                  {err('tourId')}
                </div>
                <div>
                  <label htmlFor="b-travelers" className="text-sm font-bold">{b.fields.travelers}</label>
                  <input id="b-travelers" type="number" min={1} max={20} className={`${field} mt-1.5 tabular-nums`} value={v.travelers} onChange={(e) => set('travelers', Number(e.target.value))} />
                  {err('travelers')}
                </div>
                <div>
                  <label htmlFor="b-month" className="text-sm font-bold">{b.fields.month}</label>
                  <select id="b-month" className={`${field} mt-1.5`} value={v.month} onChange={(e) => set('month', e.target.value)}>
                    <option value="">{b.choose}</option>
                    {months.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
                  </select>
                  {err('month')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="b-notes" className="text-sm font-bold">{b.fields.notes}</label>
                  <textarea id="b-notes" rows={3} className={`${field} mt-1.5 resize-y`} value={v.notes} onChange={(e) => set('notes', e.target.value)} placeholder={b.notesPh} />
                </div>
                <div className="flex flex-col gap-4 border-t border-line pt-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <dl className="text-sm">
                    <div className="flex items-center gap-2"><dt className="text-muted">{b.estimate}</dt><dd className="font-extrabold tabular-nums">{est.totalUsd != null ? formatUsd(est.totalUsd) : <Ph>{t.price.todo}</Ph>}</dd></div>
                    <div className="mt-1 flex items-center gap-2"><dt className="text-muted">{b.deposit}</dt><dd className="font-bold tabular-nums">{formatUsd(est.depositUsd)}</dd></div>
                  </dl>
                  <button type="submit" className="rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent-dark">{b.submit}</button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
