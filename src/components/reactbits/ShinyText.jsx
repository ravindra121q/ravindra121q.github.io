import React from 'react';

export default function ShinyText({
  text,
  disabled = false,
  className = ''
}) {
  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`relative inline-block overflow-hidden align-baseline ${className}`}>
      <span className="relative z-10 text-neutral-900 dark:text-white font-extrabold">{text}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-emerald-400/35 dark:via-white/40 to-transparent animate-shimmer pointer-events-none"
      />
    </span>
  );
}
