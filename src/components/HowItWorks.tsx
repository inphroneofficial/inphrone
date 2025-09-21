import { MessageSquare, BarChart3, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { ScrollAnimatedText } from "./ScrollAnimatedText";
import { TypingText } from "./TypingText";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Audiences Share",
      description: "Share opinions, polls, moods, and ideas about what they want to see",
      details: "Real voices expressing genuine interests",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: BarChart3,
      title: "Inphrone Analyzes",
      description: "Aggregates and analyzes data to identify patterns and trends",
      details: "Advanced analytics turn opinions into insights",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      icon: Lightbulb,
      title: "Creators Create",
      description: "Use insights to create smarter, audience-aligned content",
      details: "Data-driven creativity meets artistic vision",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30"
    }
  ];

  return (
    <section className="section-tight bg-subtle-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <ScrollAnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              How <TypingText text="Inphrone" className="text-primary" speed={120} /> Works
            </h2>
          </ScrollAnimatedText>
          <p className="text-base text-muted-foreground">
            The Creative Feedback Loop: Audiences → Inphrone → Creators → Great Content
          </p>
        </div>

        {/* Step by Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`p-6 rounded-xl bg-card border card-hover animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Step Number */}
                <div className="absolute -top-3 left-6">
                  <div className={`w-6 h-6 rounded-full ${step.bgColor} border-2 border-background flex items-center justify-center text-xs font-bold ${step.color}`}>
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 mx-auto mb-4 ${step.bgColor} rounded-full flex items-center justify-center`}>
                  <step.icon className={`w-6 h-6 ${step.color} animate-icon-pulse hover:animate-icon-bounce`} />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {step.details}
                  </p>
                </div>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="bg-card rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            The Creative Feedback Loop
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex-1">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">Audiences</h4>
              <p className="text-sm text-muted-foreground">Share opinions</p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="md:hidden">
              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
            </div>

            <div className="flex-1">
              <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">Inphrone</h4>
              <p className="text-sm text-muted-foreground">Provides insights</p>
            </div>

            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="md:hidden">
              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
            </div>

            <div className="flex-1">
              <div className="w-16 h-16 mx-auto mb-3 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">Creators</h4>
              <p className="text-sm text-muted-foreground">Create content</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span>Result: Content that truly resonates</span>
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;