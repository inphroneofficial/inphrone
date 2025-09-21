import { Calendar, Users, Rocket, Star, Sparkles, Globe2, MessageSquare } from "lucide-react";
import { ScrollAnimatedText } from "./ScrollAnimatedText";
import { TypingText } from "./TypingText";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Feedback & Prototype 📊",
      subtitle: "Building with real voices",
      timeline: "Q3 2024 – Ongoing",
      status: "In Progress",
      description:
        "We are collecting feedback from audiences 👥, creators 🎨, and studios 🎬 to shape the foundation of Inphrone. Every opinion matters in building a smarter, people-powered platform.",
      highlights: [
        "🗣️ Audience surveys & real-time polls",
        "🎨 Creator & studio feedback sessions",
        "⚡ Interactive prototype testing",
        "🔁 Iterating features based on community needs"
      ],
      icon: Users,
      color: "blue",
      isActive: true
    },
    {
      phase: "Phase 2",
      title: "Full Platform Launch 🚀",
      subtitle: "Smarter decisions, better content",
      timeline: "2025",
      status: "Planned",
      description:
        "Launch the complete Inphrone platform where audiences share what excites them 💡, creators validate ideas before production 🎥, and studios save time & money 💰 by understanding demand early.",
      highlights: [
        "📊 Advanced analytics dashboard",
        "🎭 Multi-format testing (films, OTT, ads, music)",
        "🎁 Rewards & recognition for audiences",
        "🎯 Data-driven insights without limiting creativity"
      ],
      icon: Rocket,
      color: "purple",
      isActive: false
    },
    {
      phase: "Phase 3",
      title: "Global Expansion 🌍",
      subtitle: "Scaling & new possibilities",
      timeline: "Beyond 2025",
      status: "Vision",
      description:
        "Inphrone will expand worldwide with multi-language support 🌐, regional insights 📍, and partnerships with studios. One glimpse into the future: CineLaunch 🎬💰 — where audiences could directly fund the creators they believe in.",
      highlights: [
        "🌐 Multi-language & regional insights",
        "🤝 Global studio & platform partnerships",
        "🔮 AI-enhanced trend forecasting",
        "💰 CineLaunch (future): audience-powered funding"
      ],
      icon: Star,
      color: "green",
      isActive: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800";
      case "Planned":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800";
      case "Vision":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="section-tight bg-subtle-gradient relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background animate-gradient-slow"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <ScrollAnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              Our <TypingText text="Roadmap" className="text-primary" speed={120} />
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </h2>
          </ScrollAnimatedText>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Inphrone is on a journey to transform entertainment 🎬 through{" "}
            <span className="font-semibold text-primary">people-powered intelligence</span>.  
            Here’s how we’re moving from early feedback to a global movement 🌍.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-40 animate-pulse"></div>

          <div className="space-y-10 mb-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline node */}
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full border-4 border-background z-10 ${phase.isActive ? "bg-primary animate-bounce" : "bg-muted"}`}
                ></div>

                {/* Card */}
                <div
                  className={`ml-16 p-6 rounded-xl bg-card border shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                    !phase.isActive ? "opacity-80" : "animate-fade-in-up"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10">
                      <phase.icon className="w-6 h-6 text-primary animate-icon-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-medium text-muted-foreground">
                          {phase.phase}
                        </span>
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
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" /> Key Focus:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-xs text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-10 border shadow-xl animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <Globe2 className="w-6 h-6 text-accent" /> Our Vision ✨
          </h3>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl mx-auto">
            By 2025 and beyond, Inphrone will set the global standard for{" "}
            <span className="font-semibold text-primary">audience-driven content validation</span>.  
            Audiences 👥 will influence what gets made, creators 🎨 will take bold risks with confidence,  
            and studios 🎬 will reduce failures while unlocking originality.  
            CineLaunch glimpses the future: where audiences not only guide content, but may also fund the stories they believe in 💡💰.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
