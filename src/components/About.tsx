import { Brain, Lightbulb, Target } from "lucide-react";
import { ScrollAnimatedText } from "./ScrollAnimatedText";
import { TypingText } from "./TypingText";

const About = () => {
  return (
    <section className="section-tight bg-subtle-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <ScrollAnimatedText>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              About <TypingText text="Inphrone" className="text-primary" speed={120} />
            </h2>
          </ScrollAnimatedText>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">In</strong> = Insights + <strong className="text-foreground">Phronesis</strong> (Practical Wisdom)
            </p>
            <p className="text-base text-muted-foreground">
              Inphrone combines real-time audience insights with practical wisdom to revolutionize content creation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 rounded-xl bg-card card-hover animate-slide-up">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Intelligence</h3>
            <p className="text-sm text-muted-foreground">
              Harness collective audience intelligence to understand what resonates before creation begins.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card card-hover animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Wisdom</h3>
            <p className="text-sm text-muted-foreground">
              Transform raw data into actionable insights that guide creative decisions with practical wisdom.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card card-hover animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Purpose</h3>
            <p className="text-sm text-muted-foreground">
              Create content that truly resonates, reducing waste and empowering authentic creativity.
            </p>
          </div>
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
          <p className="text-xl font-semibold text-primary mb-3">
            "AI predicts yesterday. Inphrone builds tomorrow."
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We're creating a future where every piece of content is crafted with deep understanding of what audiences truly want.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;