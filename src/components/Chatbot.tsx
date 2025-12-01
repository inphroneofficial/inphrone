import { useState, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  ChevronDown,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isVisible: boolean;
}

export const Chatbot = ({ isVisible }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showQuestions, setShowQuestions] = useState(true);
// ✅ Updated Questions with Answers
const defaultQuestions = [
  {
    question: "🤔 What is Inphrone?",
    answer:
      "🎬 Inphrone is a **people-powered intelligence platform** connecting audiences and creators. \n👥 Audiences (17–50) share preferences, moods, and favorite genres across all entertainment categories. \n🎨 Creators and studios get validated, real-time insights to produce content that truly resonates — reducing failures and guesswork. \n🏆 Rewards, streaks, and InphroSync keep audiences engaged daily!",
  },
  {
    question: "⚡ How does it work?",
    answer:
      "🔄 The Creative Feedback Loop:\n1️⃣ Audiences share their opinions, moods, and interests 💬\n2️⃣ Inphrone analyzes this data with AI 📊\n3️⃣ Creators receive **secure, anonymous insights** 🎨\n4️⃣ Content is made that audiences actually want to watch 🏆\n\n💡 Bonus: Features like **Your Turn** let users ask questions and get responses from the community, creating more engagement!",
  },
  {
    question: "🌍 Who can use Inphrone?",
    answer:
      "👩‍🎨 **Creators** → Validate ideas before production, reduce risks, and create content audiences love.\n🏢 **Studios** → Understand demand early and make smarter investment decisions.\n👥 **Audiences** → Influence what gets made, interact anonymously, earn rewards, and discover content tailored to them.",
  },
  {
    question: "📅 When will it launch?",
    answer:
      "🚀 **Beta is live in Dec 2025!** Audiences and creators are testing features and giving real feedback.\n🌱 **Full platform launch in 2026** with complete analytics, rewards, and multi-format testing.\n🌍 Global expansion and CineLaunch (audience-funded content) will follow beyond 2026.",
  },
  {
    question: "🙌 How can I get involved?",
    answer:
      "✅ Join the **beta** to share your opinions, try InphroSync, and use Your Turn!\n🔔 Get early access, exclusive updates, and rewards.\n💡 Your input helps shape the platform and ensures entertainment evolves with the audience.",
  },
];


  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleQuestionClick = (question: string, answer: string) => {
    addMessage(question, false);
    setTimeout(() => {
      addMessage(answer, true);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, false);
    const userInput = inputValue;
    setInputValue("");

    setTimeout(() => {
      const lowercaseInput = userInput.toLowerCase();
      let response =
        "🙏 Thanks for your question! For details, check our FAQ or fill the feedback form to stay updated 📋✨.";

      if (lowercaseInput.includes("inphrone") || lowercaseInput.includes("what")) {
        response =
          "🎬 Inphrone is **people-powered intelligence for entertainment**. We connect creators with real audience voices 👥 to make smarter, more original content 🚀.";
      } else if (
        lowercaseInput.includes("how") ||
        lowercaseInput.includes("work")
      ) {
        response =
          "🔄 Inphrone works as a *Creative Feedback Loop*: \n👥 Audiences share → 📊 Creators listen → 🎞️ Better content gets made → 🏆 Everyone wins!";
      } else if (
        lowercaseInput.includes("join") ||
        lowercaseInput.includes("signup") ||
        lowercaseInput.includes("waitlist")
      ) {
        response =
          "🙌 Awesome! 🎉 You can join our **waitlist** by filling the feedback form 📋. That way, you’ll get **early access & exclusive updates** 🔔.";
      }

      addMessage(response, true);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // ✅ Add greeting message when chatbot first opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage(
        "👋 Hi! I’m your Inphrone Assistant 🤖. Click on any quick question below or type your own message!",
        true
      );
    }
  }, [isOpen]);

  // ✅ Clear Chat option
  const handleClearChat = () => {
    setMessages([]);
    setTimeout(() => {
      addMessage("🧹 Chat cleared! Start fresh by asking a question ⬇️", true);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 mb-4 shadow-2xl border-primary/20 animate-slide-in-up bg-card/95 backdrop-blur-md">
          <CardHeader className="pb-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg border-b border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-foreground">
                    Inphrone Assistant
                  </CardTitle>
                  <p className="text-xs text-emerald-500 font-medium">Online</p>
                </div>
              </div>
              <div className="flex gap-1">
                {/* ✅ Clear Chat Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClearChat}
                  className="h-6 w-6 hover:bg-destructive/10 text-foreground"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 hover:bg-destructive/10 text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.isBot ? "justify-start" : "justify-end"
                    }`}
                  >
                    {message.isBot && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] p-3 rounded-lg text-xs leading-relaxed whitespace-pre-line ${
                        message.isBot
                          ? "bg-muted/70 text-foreground border border-border/30"
                          : "bg-primary text-primary-foreground ml-auto shadow-sm"
                      }`}
                    >
                      {message.text}
                    </div>
                    {!message.isBot && (
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Default Questions */}
                {showQuestions && (
                  <div className="space-y-2 mt-4">
                    <p className="text-xs text-muted-foreground font-medium">
                      Quick questions:
                    </p>
                    {defaultQuestions.map((item, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs h-auto p-3 text-left justify-start hover:bg-primary/10 border-primary/30 text-foreground hover:text-primary transition-colors"
                        onClick={() =>
                          handleQuestionClick(item.question, item.answer)
                        }
                      >
                        {item.question}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-3 border-t border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-xs h-8 bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="h-8 w-8 bg-primary hover:bg-primary/90"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
              {!showQuestions && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuestions(true)}
                  className="w-full mt-2 text-xs h-6 text-muted-foreground hover:text-foreground"
                >
                  <ChevronDown className="w-3 h-3 mr-1" />
                  Show quick questions
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </Button>
    </div>
  );
};
