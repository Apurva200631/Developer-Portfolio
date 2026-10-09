import React from 'react';
import Link from 'next/link';

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#1D1D1F] text-white hover:bg-[#333336] active:bg-[#000000] shadow-sm',
    secondary:
      'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E5E5EA] active:bg-[#D2D2D7] border border-[#E5E5EA]',
    accent:
      'bg-[#0071E3] text-white hover:bg-[#0077ED] active:bg-[#0062C4] shadow-sm',
    ghost:
      'bg-transparent text-[#1D1D1F] hover:bg-[#F5F5F7] active:bg-[#E5E5EA]',
    link:
      'bg-transparent text-[#0071E3] hover:underline p-0 h-auto rounded-none',
  };

  const baseClasses =
    variant === 'link'
      ? `inline-flex items-center font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:outline-none ${className}`
      : `inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:outline-none select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, isExternal, ...rest } = props as ButtonAsLink;
    if (isExternal || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses} {...rest}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={baseClasses} {...buttonProps}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
}
