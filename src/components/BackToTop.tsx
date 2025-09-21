import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.pageYOffset;
      const scrollPercentage = (scrolled / scrollHeight) * 100;
      
      // Show button when user reaches 90% of the page (near bottom)
      if (scrollPercentage > 90) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-premium glass-effect transition-all duration-300 hover-glow ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <ChevronUp className="h-5 w-5" />
      <span className="sr-only">Back to top</span>
    </Button>
  );
};

export default BackToTop;