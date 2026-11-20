import { PencilLine } from 'lucide-react';
import type { ReactNode } from 'react';

/** Мэдээлэл хараахан ирээгүй газрын жижиг шар тэмдэглэгээ: «Аяллын үнэ оруулна». */
export function Ph({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-ph-line bg-ph-bg px-2.5 py-0.5 text-[0.78rem] font-semibold leading-5 text-ph-ink ${className}`}
    >
      <PencilLine aria-hidden className="size-3.5 shrink-0" />
      <span>{children}</span>
    </span>
  );
}

/** Том хэсгийн байрлал: «Энд маршрутын газрын зураг орно». */
export function PhBlock({
  title,
  hint,
  className = '',
  icon,
}: {
  title: string;
  hint?: string;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-[22px] border-2 border-dashed border-ph-line bg-ph-bg/70 px-5 py-8 text-center text-ph-ink ${className}`}
    >
      {icon ?? <PencilLine aria-hidden className="size-5" />}
      <p className="text-sm font-bold">{title}</p>
      {hint && <p className="max-w-sm text-xs leading-relaxed opacity-80">{hint}</p>}
    </div>
  );
}
