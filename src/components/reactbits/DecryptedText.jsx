import { useState, useEffect, useRef, useCallback } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function DecryptedText({
  text = '',
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  className = '',
  parentClassName = '',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const isAnimating = useRef(false);

  const getRandomChar = useCallback((targetChar) => {
    if (useOriginalCharsOnly) {
      const chars = text.replace(/\s/g, '');
      return chars[Math.floor(Math.random() * chars.length)] || targetChar;
    }
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }, [text, useOriginalCharsOnly]);

  const triggerDecrypt = useCallback(() => {
    if (isAnimating.current || !text) return;
    isAnimating.current = true;

    let iteration = 0;
    const textLength = text.length;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';

            let revealIndex = index;
            if (revealDirection === 'end') {
              revealIndex = textLength - 1 - index;
            }

            const isRevealed = sequential
              ? revealIndex <= Math.floor((iteration / maxIterations) * textLength)
              : iteration >= maxIterations;

            if (isRevealed) {
              return text[index];
            }
            return getRandomChar(char);
          })
          .join('');
      });

      iteration++;

      if (iteration > maxIterations + textLength) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimating.current = false;
      }
    }, speed);
  }, [text, revealDirection, sequential, maxIterations, speed, getRandomChar]);

  useEffect(() => {
    if (animateOn === 'view') {
      triggerDecrypt();
    }
  }, [animateOn, triggerDecrypt]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      triggerDecrypt();
    }
  };

  return (
    <span
      className={`inline-block font-mono cursor-pointer ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
