import { useRef, useState } from 'react';
import { useTheme } from '../../context/useTheme';

export default function SpotlightCard({
  children,
  className = '',
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { isDarkMode } = useTheme();

  const spotlightColor = isDarkMode ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.06)';

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-8 shadow-xs dark:shadow-none transition-colors duration-300 ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
