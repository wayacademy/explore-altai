import { COMPANY } from '../data/site';
import { useLang } from '../i18n/lang';
import { Logo } from './Navbar';
import { Ph } from './Placeholder';

export function Footer() {
  const { t, pick } = useLang();
  const f = t.footer;
  return (
    <footer className="gutter pb-8 pt-6">
      <div className="mx-auto max-w-[1240px] rounded-[var(--radius-card)] bg-ink px-6 py-8 text-white md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/65">{f.about(COMPANY.legalName)}</p>
            <ul className="mt-4 space-y-1 text-sm text-white/80">
              {COMPANY.awards.map((a) => <li key={a.en}>★ {pick(a)}</li>)}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="font-bold">{f.tours}</p>
              <ul className="mt-3 space-y-2 text-white/70">
                <li><a href="#tours" className="hover:text-white">{f.allTours}</a></li>
                <li><a href="#festivals" className="hover:text-white">{f.festivals}</a></li>
                <li><a href="#finder" className="hover:text-white">{f.finder}</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold">{f.company}</p>
              <ul className="mt-3 space-y-2 text-white/70">
                <li><a href="#why" className="hover:text-white">{f.about2}</a></li>
                <li><a href="#team" className="hover:text-white">{f.team}</a></li>
                <li><a href="#reviews" className="hover:text-white">{f.reviews}</a></li>
                <li><a href="#faq" className="hover:text-white">{f.faq}</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold">{f.contact}</p>
              <ul className="mt-3 space-y-2 text-white/70">
                {COMPANY.phones.map((p) => <li key={p} className="select-all">{p}</li>)}
                <li className="select-all break-all">{COMPANY.email}</li>
                <li className="select-all break-all">{COMPANY.companyEmail}</li>
                <li className="select-all break-all">{COMPANY.facebook}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {COMPANY.founded}–{new Date().getFullYear()} Explore the Great Altai Tours and Expeditions</p>
          <div className="flex flex-wrap gap-2">
            <Ph>{f.socialTodo}</Ph>
          </div>
        </div>
      </div>
    </footer>
  );
}
