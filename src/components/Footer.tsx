export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-zinc-800">
          <div>
            <span className="font-editorial text-xl font-extrabold text-white tracking-tight">
              Хөх Тэнгэр
            </span>
            <p className="text-sm text-zinc-400 mt-2 max-w-md">
              Монгол орны онгон байгаль, нүүдэлчдийн соёлыг хариуцлагатайгаар түгээх
              тусгайлсан экспедицийн баг.
            </p>
          </div>

          <nav aria-label="Доод хэсгийн цэс" className="flex flex-wrap gap-6 text-sm">
            <a href="#expeditions" className="hover:text-white transition-colors">
              Аяллууд
            </a>
            <a href="#methodology" className="hover:text-white transition-colors">
              Хөтөлбөр
            </a>
            <a href="#recommender" className="hover:text-white transition-colors">
              Зөвлөмж
            </a>
            <a href="#booking" className="hover:text-white transition-colors">
              Холбоо барих
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Хөх Тэнгэр Экспедиц ХХК. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p>Улаанбаатар хот, Монгол Улс · hello@khukhtenger.mn</p>
        </div>
      </div>
    </footer>
  );
}
