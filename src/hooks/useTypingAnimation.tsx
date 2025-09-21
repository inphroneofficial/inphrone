import { useState, useEffect } from 'react';

export const useTypingAnimation = (text: string, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (text.length === 0) return;

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
  }, [text, speed]);

  return { displayText, isComplete };
};

export const useDelayedTyping = (text: string, delay = 0, speed = 100) => {
  const [shouldStart, setShouldStart] = useState(false);
  const { displayText, isComplete } = useTypingAnimation(shouldStart ? text : '', speed);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldStart(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { displayText, isComplete };
};