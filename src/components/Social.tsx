import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Send, // using paper-plane as Telegram icon
  Mail, 
  ExternalLink, 
  MessageCircle, 
  Facebook 
} from "lucide-react";

import { SubscriptionForm } from "./SubscriptionForm";
import { ScrollAnimatedText } from "./ScrollAnimatedText";

const Social = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/inphrone",
      handle: "@inphrone",
      description: "Behind-the-scenes content and community updates",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/inphrone",
      handle: "@inphrone",
      description: "Real-time updates and industry insights",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@inphrone",
      handle: "@inphrone",
      description: "Deep dives and educational content",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Reddit",
      icon: MessageCircle,
      url: "https://www.reddit.com/user/inphrone/",
      handle: "u/inphrone",
      description: "Community discussions and feedback",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/inphrone/",
      handle: "@inphrone",
      description: "Community updates and engagement",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Telegram",
      icon: Send, // paper-plane style works for Telegram
      url: "https://t.me/inphroneofficial",
      handle: "@inphroneofficial",
      description: "Exclusive community updates, polls, and early access",
      color: "from-sky-400 to-sky-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:inphrone@gmail.com",
      handle: "inphrone@gmail.com",
      description: "Direct communication and partnerships",
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section className="section-tight bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <ScrollAnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Join Our <span className="text-primary">Community</span>
            </h2>
          </ScrollAnimatedText>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the Inphrone community across all platforms. Get updates, share feedback, and be part of the entertainment revolution.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target={social.name !== "Email" ? "_blank" : undefined}
              rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group p-4 rounded-xl bg-card border card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{social.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{social.handle}</p>
                <p className="text-xs text-muted-foreground/80">{social.description}</p>
                <div className="mt-3 flex items-center justify-center gap-1 text-xs text-primary group-hover:text-primary/80">
                  <span>Follow</span>
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Growing Community</h3>
            <p className="text-base text-muted-foreground">
              Join creators and audiences who are already part of the movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Early Supporters</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Creator Partners</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Studio Collaborations</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-3xl mx-auto">
          <SubscriptionForm />
        </div>
      </div>
    </section>
  );
};

export default Social;
