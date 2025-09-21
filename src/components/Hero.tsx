import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ExternalLink, Info, Zap, Target, Users } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ice-blue dark:bg-gradient-to-b dark:from-ice-blue dark:to-background">
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
      
      {/* Enhanced Animated Background Elements with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-primary/5 dark:from-foreground/10 dark:to-primary/5" />
      <FloatingEntertainmentIcons />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl animate-float opacity-30"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              background: i % 3 === 0 ? 'hsl(var(--primary) / 0.1)' : 
                         i % 3 === 1 ? 'hsl(var(--secondary) / 0.1)' : 'hsl(var(--accent) / 0.08)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i * 0.8}s`,
              transform: `translateY(${parallaxOffset * (0.05 + i * 0.01)}px)`
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
              top: `${20 + i * 25}%`,
              right: `${10 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i * 2}s`,
              transform: `translateY(${parallaxOffset * (0.05 + i * 0.02)}px)`
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Premium Hero Section */}
        <div className="text-center mb-16">
          <div 
            ref={titleRef as any}
            className={`transition-all duration-1000 ${
              titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
              <TypingText 
                text="INPHRONE" 
                className="text-gradient animate-gradient"
                speed={150}
                delay={500}
              />
            </h1>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl font-medium text-foreground mb-3">
                <TypingText 
                  text="People-Powered Intelligence for Entertainment"
                  speed={80}
                  delay={2500}
                  showCursor={false}
                />
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                "AI predicts yesterday. Inphrone builds tomorrow."
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 backdrop-blur-sm mb-6">
                <p className="text-base md:text-lg text-foreground font-medium">
                  🎯 <strong>What is Inphrone?</strong> A revolutionary platform that bridges the gap between entertainment creators and their audiences through people-powered intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">🎬 For Creators</h4>
                  <p className="text-sm text-muted-foreground">Get real-time feedback and data-driven insights to create content that truly resonates</p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">👥 For Audiences</h4>
                  <p className="text-sm text-muted-foreground">Share your preferences and help shape the entertainment you love</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">🏆 For Everyone</h4>
                  <p className="text-sm text-muted-foreground">Better entertainment that connects creators and audiences like never before</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-6 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  🚀 Why Inphrone Matters
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  The entertainment industry faces a critical disconnect: creators often produce content based on assumptions, 
                  while audiences struggle to influence what gets made. Inphrone solves this by creating a direct feedback loop.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
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

              <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-primary mb-2">
                  Be Part of Building the Future!
                </p>
                <p className="text-base text-muted-foreground">
                  Fill out this quick form to join our waitlist, share your ideas, and help shape our platform. Your input matters.
                </p>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="premium" 
              size="lg" 
              className="group text-lg px-10 py-4 shadow-premium hover-glow"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header", "_blank")}
            >
              <Sparkles className="w-5 h-5" />
              Join the Revolution
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-muted-foreground">
              ✨ <strong>2 minutes</strong> to help shape entertainment's future
            </p>
          </div>
        </div>

        {/* Image Slideshow Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              🔁 The Creative Feedback Loop
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience how Inphrone bridges the gap between audiences and creators
            </p>
          </div>
          <ImageSlideshow />
        </div>

        {/* Compact Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">👂</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Audiences Share</h3>
            <p className="text-sm text-muted-foreground">Real opinions, real time</p>
          </div>
          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-secondary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🎨</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Creators Listen</h3>
            <p className="text-sm text-muted-foreground">Data-driven insights</p>
          </div>
          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🎞️</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Content Created</h3>
            <p className="text-sm text-muted-foreground">What people want</p>
          </div>
          <div className="glass-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-primary-glow-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🏆</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Everyone Wins</h3>
            <p className="text-sm text-muted-foreground">Better entertainment</p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <DeveloperModal 
        open={isDeveloperModalOpen} 
        onOpenChange={setIsDeveloperModalOpen} 
      />
    </section>
  );
};

export default Hero;