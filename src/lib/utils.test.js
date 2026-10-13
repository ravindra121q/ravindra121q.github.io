import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('Utility cn() function', () => {
  it('correctly merges class names', () => {
    expect(cn('font-bold', 'text-white')).toBe('font-bold text-white');
  });

  it('handles conditional class names properly', () => {
    const isDark = true;
    const isHidden = false;
    expect(cn('base-class', isDark && 'dark-mode', isHidden && 'hidden')).toBe('base-class dark-mode');
  });

  it('resolves conflicting tailwind classes via twMerge', () => {
    expect(cn('p-4', 'p-6')).toBe('p-6');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('handles null, undefined, and empty string arguments safely', () => {
    expect(cn(null, undefined, '', 'valid')).toBe('valid');
  });
});
