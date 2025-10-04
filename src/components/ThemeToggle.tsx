import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useScrollHide } from "@/hooks/useScrollHide";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isHidden = useScrollHide(200);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`
        fixed top-4 right-4 z-50
        flex items-center justify-center
        h-10 w-10 rounded-full
        bg-primary/10 dark:bg-secondary/20
        shadow-glow transition-all duration-300
        hover:bg-primary/20 hover:scale-110 hover:rotate-12
        ${isHidden ? 'translate-y-[-100px] opacity-0' : 'translate-y-0 opacity-100'}
      `}
    >
      {/* Light Mode Sun */}
      <Sun className={`
        absolute h-6 w-6 text-primary-foreground
        transition-all duration-500
        rotate-0 scale-100 dark:rotate-90 dark:scale-0
      `} />
      {/* Dark Mode Moon */}
      <Moon className={`
        absolute h-6 w-6 text-accent-foreground
        transition-all duration-500
        rotate-90 scale-0 dark:rotate-0 dark:scale-100
      `} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
