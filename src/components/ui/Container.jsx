import React from 'react';

const sizesMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  "2xl": "max-w-[1600px]",
  full: "max-w-full"
};

export default function Container({ children, className = '', size = 'xl' }) {
  return (
    <div className={`mx-auto px-6 md:px-8 lg:px-12 w-full ${sizesMap[size]} ${className}`}>
      {children}
    </div>
  );
}
