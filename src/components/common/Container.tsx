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
    default: 'max-w-5xl xl:max-w-6xl',
    wide: 'max-w-6xl 2xl:max-w-7xl',
    prose: 'max-w-2xl lg:max-w-3xl',
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
