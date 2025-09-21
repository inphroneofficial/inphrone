import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollAnimatedText = ({ children, className = "", delay = 0 }: ScrollAnimatedTextProps) => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};