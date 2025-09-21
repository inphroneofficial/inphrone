import { Gift, BarChart, Users, Star, TrendingUp, Shield } from "lucide-react";
import { ScrollAnimatedText } from "./ScrollAnimatedText";
import { TypingText } from "./TypingText";

const Features = () => {
  const features = [
    {
      icon: Gift,
      title: "Audience Rewards",
      description: "Earn badges, coupons, and recognition for sharing your voice",
      details: [
        "Gift cards and credits for participation",
        "Exclusive badges and profile recognition",
        "Early access to content you helped shape"
      ],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart,
      title: "Creator Insights Dashboard",
      description: "Comprehensive analytics for smarter content decisions",
      details: [
        "Real-time audience sentiment analysis",
        "Demographic breakdowns and trends",
        "Content demand predictions"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Studio Tools",
      description: "Enterprise-grade content validation and market research",
      details: [
        "Content validation before investment",
        "Market sizing and opportunity analysis",
        "ROI optimization recommendations"
      ],
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "For Audiences",
      points: [
        "Your opinions shape what gets created",
        "Earn rewards for participating",
        "Enjoy more content aligned with your interests"
      ]
    },
    {
      icon: TrendingUp,
      title: "For Creators",
      points: [
        "Know what people want before creating",
        "Take bold creative risks with confidence",
        "Save time and money on failed projects"
      ]
    },
    {
      icon: Shield,
      title: "For Studios",
      points: [
        "Reduce failed projects and losses",
        "Discover untapped market demand",
        "Make data-driven investment decisions"
      ]
    }
  ];

  return (
    <section className="section-tight bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Features */}
        <div className="text-center mb-8">
          <ScrollAnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              <TypingText text="Powerful Features" speed={100} />
            </h2>
          </ScrollAnimatedText>
          <p className="text-base text-muted-foreground">
            Everything you need to revolutionize content creation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="p-6 rounded-xl bg-card border card-hover h-full animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-icon-pulse`}>
                  <feature.icon className="w-6 h-6 text-white group-hover:animate-icon-bounce" />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-left">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${feature.gradient} rounded-full mt-2 flex-shrink-0`} />
                        <span className="text-xs text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <ScrollAnimatedText>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Why Everyone <span className="text-primary">Wins</span>
              </h3>
            </ScrollAnimatedText>
            <p className="text-base text-muted-foreground">
              Inphrone creates value for every stakeholder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary animate-icon-pulse hover:animate-icon-bounce" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{benefit.title}</h4>
                </div>

                <div className="space-y-2">
                  {benefit.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;