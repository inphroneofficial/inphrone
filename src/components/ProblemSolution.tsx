import { AlertTriangle, CheckCircle, Bot, Users, TrendingDown, TrendingUp } from "lucide-react";
import { ScrollAnimatedText } from "./ScrollAnimatedText";

const ProblemSolution = () => {
  return (
    <section className="section-tight bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <ScrollAnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                The <span className="text-destructive">Problem</span>
              </h2>
            </ScrollAnimatedText>
            <p className="text-lg text-muted-foreground">
              Creators don't know what audiences want until it's too late
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20 card-hover animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-8 h-8 text-destructive" />
                <h3 className="text-xl font-semibold text-foreground">Current Reality</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span>Creators invest without knowing audience demand</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span>Studios rely on outdated trends and safe bets</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span>Internet flooded with repetitive content</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span>Audiences watch recycled ideas instead of fresh ones</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 card-hover animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">The Solution</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Real-time audience insights before content creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Data-backed roadmaps before investing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Discover untapped demand, not just past hits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Audiences influence creation and feel valued</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI vs Inphrone Comparison */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <ScrollAnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                <span className="text-muted-foreground">AI</span> vs <span className="text-primary">Inphrone</span>
              </h2>
            </ScrollAnimatedText>
            <p className="text-base text-muted-foreground">
              Understanding the fundamental difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Column */}
            <div className="space-y-4 animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-8 h-8 text-muted-foreground" />
                <h3 className="text-2xl font-bold text-muted-foreground">AI Approach</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 bg-background rounded-lg border border-muted">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Past Data Focus</h4>
                  <p className="text-xs text-muted-foreground">Assumptions based on historical data</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-muted">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Algorithmic Loops</h4>
                  <p className="text-xs text-muted-foreground">Repeats proven formulas</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-muted">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Reactive Analysis</h4>
                  <p className="text-xs text-muted-foreground">Works only on what happened</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-muted">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Risk Aversion</h4>
                  <p className="text-xs text-muted-foreground">Cannot predict future demand</p>
                </div>
              </div>
            </div>

            {/* Inphrone Column */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Inphrone Approach</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Future Demand</h4>
                  <p className="text-xs text-muted-foreground">Real-time audience voices</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Human-Centered</h4>
                  <p className="text-xs text-muted-foreground">Captures what audiences want</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Proactive Insights</h4>
                  <p className="text-xs text-muted-foreground">Shapes future content direction</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Originality</h4>
                  <p className="text-xs text-muted-foreground">Reduces risk, fuels innovation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-primary/10 rounded-xl p-6 animate-scale-in">
            <p className="text-xl font-bold text-primary">
              "AI predicts yesterday. Inphrone builds tomorrow."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;