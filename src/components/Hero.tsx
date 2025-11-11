import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Info, Zap, Target, Users } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { DeveloperModal } from "@/components/DeveloperModal";
import ImageSlideshow from "@/components/ImageSlideshow";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { TypingText } from "@/components/TypingText";
import { FloatingEntertainmentIcons } from "@/components/EntertainmentIcons";

const Hero = () => {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const parallaxOffset = useParallax();

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden bg-ice-blue dark:bg-gradient-to-b dark:from-ice-blue dark:to-background overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Developer Info Button */}
      <div className="absolute top-6 left-6 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDeveloperModalOpen(true)}
          className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
        >
          <Info className="h-5 w-5" />
        </Button>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-primary/5 dark:from-foreground/10 dark:to-primary/5" />
      <FloatingEntertainmentIcons />
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl animate-float opacity-30"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              background:
                i % 3 === 0
                  ? "hsl(var(--primary) / 0.1)"
                  : i % 3 === 1
                  ? "hsl(var(--secondary) / 0.1)"
                  : "hsl(var(--accent) / 0.08)",
              top: `${Math.min(Math.random() * 90, 90)}%`,
              left: `${Math.min(Math.random() * 90, 90)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i * 0.8}s`,
              transform: `translateY(${parallaxOffset * (0.05 + i * 0.01)}px)`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-gradient" />

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Zap, Target, Users].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              top: `${Math.min(20 + i * 25, 85)}%`,
              right: `${Math.min(10 + i * 15, 85)}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i * 2}s`,
              transform: `translateY(${parallaxOffset * (0.05 + i * 0.02)}px)`,
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 py-20 text-center overflow-x-hidden">
        <div
          ref={titleRef as any}
          className={`transition-all duration-1000 ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          } w-full max-w-[100vw]`}
        >
        {/* Hero Title */}
<h1
  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none text-center break-words inphrone-title inphrone-title-glow"
>
  <TypingText
    text="INPHRONE"
    className="hero-title-3d"
    speed={150}
    delay={500}
  />
</h1>

{/* Subtitle */}
<div className="mx-auto mb-8 px-4 sm:px-0 max-w-[100vw] text-center">
  <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 break-words">
    <TypingText
      text="People-Powered Intelligence for Entertainment"
      speed={80}
      delay={2500}
      showCursor={false}
    />
  </p>

<p className="text-base sm:text-lg md:text-xl font-semibold text-foreground text-center mb-6 break-words">
  "AI predicts yesterday. Inphrone builds tomorrow."
</p>

            {/* Info Box */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 backdrop-blur-sm mb-6 mx-auto w-full max-w-[95vw] sm:max-w-xl">
              <p className="text-base sm:text-lg text-foreground font-medium break-words">
                🎯 <strong>What is Inphrone?</strong> A revolutionary platform
                that bridges the gap between entertainment creators and their
                audiences through people-powered intelligence.
              </p>
            </div>

            {/* Features Grid */}
            <div className="w-full overflow-x-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[95vw] sm:max-w-4xl mx-auto mb-8">
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 w-full">
                  <h4 className="font-semibold text-foreground mb-2">
                    🎬 For Creators
                  </h4>
                  <p className="text-sm text-muted-foreground break-words">
                    Get real-time feedback and data-driven insights to create
                    content that truly resonates
                  </p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 w-full">
                  <h4 className="font-semibold text-foreground mb-2">
                    👥 For Audiences
                  </h4>
                  <p className="text-sm text-muted-foreground break-words">
                    Share your preferences and help shape the entertainment you
                    love
                  </p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 w-full">
                  <h4 className="font-semibold text-foreground mb-2">
                    🏆 For Everyone
                  </h4>
                  <p className="text-sm text-muted-foreground break-words">
                    Better entertainment that connects creators and audiences
                    like never before
                  </p>
                </div>
              </div>
            </div>

            {/* Why Inphrone */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 mb-6 break-words mx-auto w-full max-w-[95vw] sm:max-w-4xl">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                🚀 Why Inphrone Matters
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4">
                The entertainment industry faces a critical disconnect: creators
                often produce content based on assumptions, while audiences
                struggle to influence what gets made. Inphrone solves this by
                creating a direct feedback loop.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm break-words">
                <div>
                  <strong className="text-foreground">Real-World Impact:</strong>
                  <ul className="text-muted-foreground mt-1 space-y-1">
                    <li>• Reduce content production waste by 40%</li>
                    <li>• Increase audience satisfaction by 60%</li>
                    <li>• Create more inclusive entertainment</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-foreground">Long-term Vision:</strong>
                  <ul className="text-muted-foreground mt-1 space-y-1">
                    <li>• Democratic content creation</li>
                    <li>• AI-powered audience insights</li>
                    <li>• Global entertainment ecosystem</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center w-full max-w-[95vw] mx-auto">
              <p className="text-lg sm:text-xl font-bold text-primary mb-2">
                Be Part of Building the Future!
              </p>
              <p className="text-base sm:text-lg text-muted-foreground break-words">
                Fill out this quick form to join our waitlist, share your ideas,
                and help shape our platform. Your input matters.
              </p>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-[95vw]">
          <Button
            variant="premium"
            size="lg"
            className="group text-lg px-10 py-4 shadow-premium hover-glow"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header",
                "_blank"
              )
            }
          >
            <Sparkles className="w-5 h-5" />
            Join the Revolution
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">
            ✨ <strong>2 minutes</strong> to help shape entertainment's future
          </p>
        </div>

        {/* Image Slideshow Section */}
        <div className="mb-16 w-full overflow-x-hidden">
          <div className="text-center mb-8 px-3 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              🔁 The Creative Feedback Loop
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-[95vw] sm:max-w-3xl mx-auto break-words">
              Experience how Inphrone bridges the gap between audiences and
              creators
            </p>
          </div>
          <div className="w-full max-w-[95vw] sm:max-w-5xl mx-auto overflow-hidden rounded-2xl">
            <ImageSlideshow />
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="w-full overflow-x-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full max-w-[95vw] sm:max-w-6xl mx-auto px-3 sm:px-0">
            <div className="glass-card p-6 text-center hover-scale w-full">
              <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">👂</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Audiences Share
              </h3>
              <p className="text-sm text-muted-foreground">
                Real opinions, real time
              </p>
            </div>
            <div className="glass-card p-6 text-center hover-scale w-full">
              <div className="w-12 h-12 bg-secondary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Creators Listen
              </h3>
              <p className="text-sm text-muted-foreground">Data-driven insights</p>
            </div>
            <div className="glass-card p-6 text-center hover-scale w-full">
              <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎞️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Content Created
              </h3>
              <p className="text-sm text-muted-foreground">What people want</p>
            </div>
            <div className="glass-card p-6 text-center hover-scale w-full">
              <div className="w-12 h-12 bg-primary-glow-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🏆</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Everyone Wins
              </h3>
              <p className="text-sm text-muted-foreground">
                Better entertainment
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        <DeveloperModal
          open={isDeveloperModalOpen}
          onOpenChange={setIsDeveloperModalOpen}
        />
      </div>
    </section>
  );
};

export default Hero;
