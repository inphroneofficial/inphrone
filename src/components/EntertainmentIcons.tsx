import { 
  Tv, 
  Film, 
  Music, 
  Camera, 
  Mic, 
  Radio, 
  Clapperboard, 
  Video,
  Headphones,
  Monitor
} from 'lucide-react';

interface EntertainmentIconsProps {
  className?: string;
}

export const EntertainmentIcons = ({ className = "" }: EntertainmentIconsProps) => {
  const icons = [
    { Icon: Tv, label: "Television", delay: 0 },
    { Icon: Film, label: "Movies", delay: 0.5 },
    { Icon: Music, label: "Music", delay: 1 },
    { Icon: Camera, label: "Content", delay: 1.5 },
    { Icon: Mic, label: "Podcasts", delay: 2 },
    { Icon: Radio, label: "Radio", delay: 2.5 },
    { Icon: Clapperboard, label: "Production", delay: 3 },
    { Icon: Video, label: "Streaming", delay: 3.5 },
    { Icon: Headphones, label: "Audio", delay: 4 },
    { Icon: Monitor, label: "Digital", delay: 4.5 }
  ];

  return (
    <div className={`grid grid-cols-5 gap-4 ${className}`}>
      {icons.map(({ Icon, label, delay }, index) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-2"
          style={{ 
            animationDelay: `${delay}s`,
            animation: 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300 group-hover:animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export const FloatingEntertainmentIcons = () => {
  const floatingIcons = [
    { Icon: Tv, position: { top: '10%', left: '10%' }, delay: 0 },
    { Icon: Film, position: { top: '20%', right: '15%' }, delay: 1 },
    { Icon: Music, position: { bottom: '30%', left: '8%' }, delay: 2 },
    { Icon: Camera, position: { top: '50%', right: '10%' }, delay: 3 },
    { Icon: Mic, position: { bottom: '20%', right: '20%' }, delay: 4 },
    { Icon: Clapperboard, position: { top: '70%', left: '15%' }, delay: 5 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className="absolute opacity-10 dark:opacity-20 animate-float"
          style={{
            ...position,
            animationDelay: `${delay}s`,
            animationDuration: `${8 + index * 2}s`
          }}
        >
          <Icon className="w-12 h-12 md:w-16 md:h-16 text-primary dark:text-ice-blue" />
        </div>
      ))}
    </div>
  );
};