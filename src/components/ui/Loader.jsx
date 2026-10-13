import React from 'react';
import { cn } from '../../lib/utils';

export default function Loader({ size = 40, className = '' }) {
  const dimension = typeof size === 'number' ? `${size}px` : size;
  
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div 
        className="border-2 border-brand-200 dark:border-brand-800 border-t-brand-900 dark:border-t-white rounded-full animate-spin"
        style={{ width: dimension, height: dimension }}
      ></div>
    </div>
  );
}
