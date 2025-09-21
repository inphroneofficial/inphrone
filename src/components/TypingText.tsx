import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  delay?: number;
}

export const TypingText = ({ 
  text, 
  speed = 100, 
  className = "", 
  showCursor = true,
  delay = 0 
}: TypingTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;
    
    const startTimer = setTimeout(() => {
      setShouldStart(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [isVisible, delay]);

  useEffect(() => {
    if (!shouldStart || text.length === 0) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [shouldStart, text, speed]);

  return (
    <span ref={ref as any} className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};