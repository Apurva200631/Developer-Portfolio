import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'neutral' | 'accent' | 'outline';
  className?: string;
}

export function Badge({
  children,
  variant = 'neutral',
  className = '',
  ...props
}: BadgeProps) {
  const variantClasses = {
    neutral: 'bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA]',
    accent: 'bg-[#F0F6FF] text-[#0071E3] border border-[#CCE1FB]',
    outline: 'bg-transparent text-[#1D1D1F] border border-[#D2D2D7]',
  };

  return (
    <span
      className={`inline-flex items-center text-xs font-medium tracking-normal px-2.5 py-1 rounded-full ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
