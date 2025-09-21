import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

const Interactive = () => {
  return (
    <section className="section-tight bg-mesh-gradient relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Shape the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Your feedback today shapes Inphrone tomorrow. Help us build the platform that will revolutionize entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Why Participate */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Why Fill Our Survey?
              </h3>
              <p className="text-base text-muted-foreground">
                This isn't just another survey. Your responses directly influence how we build Inphrone.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border card-hover">
                <div className="w-10 h-10 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-base">🚀 Early Access</h4>
                  <p className="text-sm text-muted-foreground">Get priority access when we launch</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border card-hover">
                <div className="w-10 h-10 bg-secondary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-base">🗣️ Your Voice Matters</h4>
                  <p className="text-sm text-muted-foreground">Help shape features and functionality</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border card-hover">
                <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-base">🌟 Be Part of the Revolution</h4>
                  <p className="text-sm text-muted-foreground">Join the movement to transform entertainment</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                variant="premium" 
                size="lg" 
                className="w-full md:w-auto text-base px-6 py-3 hover-glow"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header", "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Take Survey Now (2-3 minutes)
              </Button>
              <p className="text-xs text-muted-foreground">
                Quick, anonymous, and incredibly valuable for our development
              </p>
            </div>
          </div>

          {/* Right Side - Survey Embed */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-xl p-6 border card-hover">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Inphrone Feedback Survey
                </h4>
                <p className="text-sm text-muted-foreground">
                  Help us build the future of entertainment
                </p>
              </div>

              {/* Enhanced Survey Link */}
              <div className="bg-primary-gradient rounded-xl p-6 text-center min-h-[300px] flex flex-col items-center justify-center shadow-premium">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-white mb-3">
                  Shape the Future of Entertainment
                </h5>
                <p className="text-white/90 mb-6 text-sm max-w-md">
                  Your 2-3 minutes of feedback helps us build a platform that truly serves both audiences and creators.
                </p>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="group glass-effect text-base px-6 py-3 text-white border-white/30 hover:bg-white/20"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header", "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Take Survey Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Your responses are anonymous and help us refine our platform
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to Transform Entertainment?
          </h3>
          <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of creators and audiences who are already part of the Inphrone community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="premium" 
              size="lg" 
              className="text-base px-6 py-3 hover-glow"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header", "_blank")}
            >
              <Sparkles className="w-4 h-4" />
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive;