import { useRef, useEffect } from 'react';
import { useTheme } from '../../context/useTheme';

export default function ShapeWaves({
  waveCount = 5,
  speed = 0.012,
  amplitude = 35,
  frequency = 0.008,
  className = ''
}) {
  const canvasRef = useRef(null);
  const { isDarkMode } = useTheme();

  const lineColor = isDarkMode ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.06)';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = null;
    let step = 0;
    let isVisible = false;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const w = parent.clientWidth;
        const h = parent.clientHeight;
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          if (prefersReducedMotion) renderSingleFrame();
        }
      }
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    const rafInit = requestAnimationFrame(resizeCanvas);

    const renderSingleFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const offset = i * (Math.PI / waveCount);
        const yBase = (canvas.height / (waveCount + 1)) * (i + 1);

        ctx.moveTo(0, yBase);

        for (let x = 0; x < canvas.width; x += 15) {
          const y = yBase + Math.sin(x * frequency + step + offset) * amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const opacity = isDarkMode ? (0.02 + (i / waveCount) * 0.05) : (0.01 + (i / waveCount) * 0.03);
        ctx.fillStyle = lineColor.replace(/[\d.]+\)$/, `${opacity})`);
        ctx.fill();

        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const draw = () => {
      if (!isVisible) return;
      step += speed;
      renderSingleFrame();
      animationId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isVisible = Boolean(entry && entry.isIntersecting);

      if (isVisible && !prefersReducedMotion) {
        if (!animationId) {
          animationId = requestAnimationFrame(draw);
        }
      } else {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        if (prefersReducedMotion) {
          renderSingleFrame();
        }
      }
    }, { threshold: 0.05 });

    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(rafInit);
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode, lineColor, waveCount, speed, amplitude, frequency]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
