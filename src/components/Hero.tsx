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
              "Demand Creates Supply. Inphrone shows creators what audiences truly want."
            </p>

            {/* Info Box */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-6 mx-auto w-full max-w-[95vw] sm:max-w-xl">
              <p className="text-base sm:text-lg text-foreground font-medium break-words">
                🎯 <strong>What is Inphrone?</strong>  
A revolutionary platform bridging audiences and creators through real-time, people-powered insights. Audiences (17–50) share their preferences, interests, favorite genres, and the types of content they enjoy or are waiting to watch across all entertainment categories. Creators receive validated audience data to produce relevant, engaging content while reducing the risk of failure.

              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-full overflow-x-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[95vw] sm:max-w-4xl mx-auto mb-8">
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 w-full">
                <h4 className="font-semibold text-foreground mb-2">👥 For Audiences</h4>
                <p className="text-sm text-muted-foreground break-words">
                  Share weekly opinions, moods, and preferences anonymously. Track InphroSync stats, your influence streaks, daily Fastest Finger First participation, and see live counts of moods, devices, and apps used by other audiences.
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 w-full">
                <h4 className="font-semibold text-foreground mb-2">🎬 For Creators & Studios</h4>
                <p className="text-sm text-muted-foreground break-words">
                  Access real-time audience intelligence. Understand genre demand, mood trends, app/device preferences, and audience distribution. Validate ideas before production, reduce risk, and explore new genres confidently.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 w-full">
                <h4 className="font-semibold text-foreground mb-2">🏆 Engagement & Rewards</h4>
                <p className="text-sm text-muted-foreground break-words">
                  Participate in Fastest Finger First, submit weekly opinions, earn streaks, points, coupons, and badges. Curiosity and interactivity make Inphrone a daily habit.
                </p>
              </div>
            </div>
          </div>

          {/* Why Inphrone */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 mb-6 break-words mx-auto w-full max-w-[95vw] sm:max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">🚀 Why Inphrone Matters</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4">
              Today, repetitive, low-value content dominates because creators chase likes, shares, and engagement rather than real audience interest. Inphrone flips the model: demand creates supply, not the other way around. Creators can finally know what audiences truly want.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm break-words">
              <div>
                <strong className="text-foreground">Audience Impact:</strong>
                <ul className="text-muted-foreground mt-1 space-y-1">
                  <li>• Influence entertainment anonymously</li>
                  <li>• Daily InphroSync engagement & streaks</li>
                  <li>• Live stats by age, gender, location</li>
                </ul>
              </div>
              <div>
                <strong className="text-foreground">Creator Benefits:</strong>
                <ul className="text-muted-foreground mt-1 space-y-1">
                  <li>• Validate ideas before creating content</li>
                  <li>• Reduce production risk and waste</li>
                  <li>• Explore new genres and trends with real demand data</li>
                  <li>• AI platforms can leverage data for content generation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center w-full max-w-[95vw] mx-auto mb-12">
            <p className="text-lg sm:text-xl font-bold text-primary mb-2">
              Be Part of Shaping Entertainment!
            </p>
            <p className="text-base sm:text-lg text-muted-foreground break-words">
              Join our waitlist, share insights, and see the live vision of Inphrone in action. Actual vision builds trust; theory alone isn’t enough.
            </p>
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
                Experience how Inphrone bridges the gap between audiences and creators, and see live how your input matters.
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
                  Real opinions, moods, and preferences in daily InphroSync.
                </p>
              </div>
              <div className="glass-card p-6 text-center hover-scale w-full">
                <div className="w-12 h-12 bg-secondary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎨</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Creators Listen
                </h3>
                <p className="text-sm text-muted-foreground">
                  Data-driven insights to reduce risk and create relevant content.
                </p>
              </div>
              <div className="glass-card p-6 text-center hover-scale w-full">
                <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎞️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Content Created
                </h3>
                <p className="text-sm text-muted-foreground">
                  Based on real audience demand, not assumptions.
                </p>
              </div>
              <div className="glass-card p-6 text-center hover-scale w-full">
                <div className="w-12 h-12 bg-primary-glow-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Everyone Wins
                </h3>
                <p className="text-sm text-muted-foreground">
                  Audiences influence content, creators succeed, engagement thrives.
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
      </div>
    </section>
  );
};

export default Hero;
