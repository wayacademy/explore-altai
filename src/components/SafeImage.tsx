import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  loading = 'eager',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-blue-50 text-slate-600 p-6 text-center ${className}`}
      >
        <Mountain className="w-8 h-8 text-blue-700/70 mb-2" strokeWidth={1.5} />
        <span className="text-sm font-medium text-slate-700 max-w-xs">
          {fallbackTitle ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
