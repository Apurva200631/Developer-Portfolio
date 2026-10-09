import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0071E3] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-[#6E6E73] leading-relaxed max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
