import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube, Mail, Sparkles, ExternalLink, Heart, MessageCircle, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 section-tight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Enhanced Final CTA Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Be Part of Building <br />
            <span className="text-primary">the Future with Inphrone!</span>
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl mx-auto">
            Fill out this quick form to join our waitlist, share your ideas, and help shape our platform. 
            <strong className="text-foreground"> Your input matters.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              variant="hero" 
              size="lg" 
              className="group text-base px-8 py-4"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header", "_blank")}
            >
              <Sparkles className="w-5 h-5" />
              Join Our Community
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="https://instagram.com/inphrone" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Follow on Instagram
            </a>
            <a href="https://x.com/inphrone" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Follow on X
            </a>
            <a href="https://youtube.com/@inphrone" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Subscribe on YouTube
            </a>
            <a href="https://www.reddit.com/user/inphrone/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Join on Reddit
            </a>
            <a href="https://www.facebook.com/inphrone/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Follow on Facebook
            </a>
            <a href="mailto:inphrone@gmail.com" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-border">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">INPHRONE</h3>
            <p className="text-sm text-muted-foreground">
              People-Powered Intelligence for Entertainment. We're building the future where every piece of content resonates with its audience.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/inphrone" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com/inphrone" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@inphrone" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.reddit.com/user/inphrone/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/inphrone/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="mailto:inphrone@gmail.com" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-foreground">Platform</h4>
            <div className="space-y-1">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Inphrone</a>
              <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#roadmap" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Roadmap</a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold text-foreground">Community</h4>
            <div className="space-y-1">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Join Waitlist
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdh9vlflrEmmfP4zUFFFJmh-8jDtRtQ1stUQENmLIobYGxwAg/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Fill Survey
              </a>
              <a href="mailto:inphrone@gmail.com" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="https://www.inphrone.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">www.inphrone.com</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2025 Inphrone. Built By</span>
           <span>G Thangella For</span>
            <span>for creators and audiences.</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;