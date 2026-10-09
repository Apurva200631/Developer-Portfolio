import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'prose';
}

export function Container({
  children,
  className = '',
  size = 'default',
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-3xl',
    default: 'max-w-5xl',
    wide: 'max-w-6xl',
    prose: 'max-w-2xl',
  };

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
