import { Calendar, Users, Rocket, Star } from "lucide-react";
import { ScrollAnimatedText } from "./ScrollAnimatedText";
import { TypingText } from "./TypingText";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "AudiencePulse",
      subtitle: "Pre-creation insights platform",
      timeline: "Q1 2024",
      status: "In Development",
      description: "Launch the core platform for audiences to share opinions and creators to access real-time insights.",
      features: [
        "Audience opinion collection system",
        "Basic analytics dashboard for creators",
        "Real-time sentiment analysis",
        "Mobile-responsive web platform"
      ],
      icon: Users,
      color: "blue",
      isActive: true
    },
    {
      phase: "Phase 2", 
      title: "CineLaunch",
      subtitle: "Funding & mentorship ecosystem",
      timeline: "Q3 2024",
      status: "Planned",
      description: "Expand to include funding opportunities and mentorship programs for validated content ideas.",
      features: [
        "Creator funding marketplace",
        "Mentor matching system", 
        "Project collaboration tools",
        "Advanced analytics and predictions"
      ],
      icon: Rocket,
      color: "purple",
      isActive: false
    },
    {
      phase: "Phase 3",
      title: "Global Expansion",
      subtitle: "Worldwide entertainment revolution",
      timeline: "Q1 2025",
      status: "Vision",
      description: "Scale globally with localized features, partnerships with major studios, and AI-enhanced insights.",
      features: [
        "Multi-language support",
        "Regional content preferences",
        "Studio partnership program",
        "AI-powered trend prediction"
      ],
      icon: Star,
      color: "green",
      isActive: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800";
      case "Planned":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800";
      case "Vision":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getIconColor = (color: string, isActive: boolean) => {
    const opacity = isActive ? "" : "/50";
    switch (color) {
      case "blue":
        return `text-blue-600${opacity}`;
      case "purple":
        return `text-purple-600${opacity}`;
      case "green":
        return `text-green-600${opacity}`;
      default:
        return `text-gray-600${opacity}`;
    }
  };

  const getBgColor = (color: string, isActive: boolean) => {
    const opacity = isActive ? "100" : "50";
    switch (color) {
      case "blue":
        return `bg-blue-${opacity} dark:bg-blue-950/30`;
      case "purple":
        return `bg-purple-${opacity} dark:bg-purple-950/30`;
      case "green":
        return `bg-green-${opacity} dark:bg-green-950/30`;
      default:
        return `bg-gray-${opacity}`;
    }
  };

  return (
    <section className="section-tight bg-subtle-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <ScrollAnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our <TypingText text="Roadmap" className="text-primary" speed={120} />
            </h2>
          </ScrollAnimatedText>
          <p className="text-base text-muted-foreground">
            Follow our journey as we revolutionize entertainment through people-powered intelligence.
          </p>
        </div>

        {/* Enhanced Timeline with Visual Effects */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
          
          <div className="space-y-8 mb-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background z-10 ${getBgColor(phase.color, phase.isActive)} ${phase.isActive ? 'animate-pulse' : ''}`}></div>
                
                <div className={`ml-16 p-6 rounded-xl bg-card border card-hover shadow-lg hover:shadow-xl ${!phase.isActive ? 'opacity-75' : ''} animate-slide-up transform hover:scale-105 transition-all duration-500`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 ${getBgColor(phase.color, phase.isActive)} rounded-lg flex items-center justify-center`}>
                      <phase.icon className={`w-5 h-5 ${getIconColor(phase.color, phase.isActive)} ${phase.isActive ? 'animate-icon-pulse hover:animate-icon-bounce' : ''}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-medium text-muted-foreground">{phase.phase}</span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(phase.status)}`}>
                          {phase.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{phase.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {phase.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 ${getBgColor(phase.color, phase.isActive)} rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Vision Statement */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 animate-scale-in border border-primary/20 shadow-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Our Vision for 2025
          </h3>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl mx-auto">
            By 2025, Inphrone will be the global standard for content validation, helping creators and studios make data-driven decisions while empowering audiences to shape the entertainment they love.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20 hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-1 animate-bounce">1M+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary/10 border border-secondary/20 hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-secondary mb-1 animate-bounce" style={{ animationDelay: '0.2s' }}>10K+</div>
              <div className="text-sm text-muted-foreground">Content Creators</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-accent/10 border border-accent/20 hover:scale-110 transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-1 animate-bounce" style={{ animationDelay: '0.4s' }}>100+</div>
              <div className="text-sm text-muted-foreground">Studio Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;