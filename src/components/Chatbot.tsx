import { useState, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, ChevronDown } from "lucide-react";
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

  const defaultQuestions = [
    {
      question: "What is Inphrone?",
      answer: "Inphrone is a revolutionary platform that bridges the gap between entertainment creators and their audiences through people-powered intelligence. We help creators make data-driven decisions while empowering audiences to shape the entertainment they love."
    },
    {
      question: "How does it work?",
      answer: "Inphrone creates a direct feedback loop: audiences share their preferences and opinions, our platform analyzes this data to provide insights, creators use these insights to make better content, and everyone benefits from more relevant entertainment."
    },
    {
      question: "Who can use Inphrone?",
      answer: "Inphrone is designed for content creators, entertainment studios, and audiences. Creators get valuable insights, studios make better investment decisions, and audiences help shape the content they want to see."
    },
    {
      question: "When will it launch?",
      answer: "We're currently in Phase 1 development with AudiencePulse launching in Q1 2024. CineLaunch (funding ecosystem) follows in Q3 2024, and global expansion is planned for Q1 2025."
    },
    {
      question: "How can I get involved?",
      answer: "Join our waitlist by filling out the form on our website! You'll get early access opportunities, exclusive updates, and the chance to help shape our platform. Your input matters in building the future of entertainment."
    }
  ];

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuestionClick = (question: string, answer: string) => {
    addMessage(question, false);
    setTimeout(() => {
      addMessage(answer, true);
    }, 500);
    // Don't hide questions after clicking
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, false);
    setInputValue("");
    
    // Simple response logic
    setTimeout(() => {
      const lowercaseInput = inputValue.toLowerCase();
      let response = "Thanks for your question! For detailed information, please check our FAQ section or fill out our form to get personalized assistance from our team.";
      
      if (lowercaseInput.includes("inphrone") || lowercaseInput.includes("what")) {
        response = "Inphrone is a people-powered intelligence platform for entertainment. We connect creators with their audiences to build better content together. Want to learn more? Join our waitlist!";
      } else if (lowercaseInput.includes("how") || lowercaseInput.includes("work")) {
        response = "We create a feedback loop where audiences share preferences, creators get insights, and better content is made. It's that simple! Ready to be part of the revolution?";
      } else if (lowercaseInput.includes("join") || lowercaseInput.includes("signup")) {
        response = "Great! Fill out our form above to join the waitlist. You'll get early access and help shape the future of entertainment!";
      }
      
      addMessage(response, true);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage("Hi! I'm here to help you learn about Inphrone. Click on any question below or ask me anything!", true);
    }
  }, [isOpen]);

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
                  <CardTitle className="text-sm font-semibold text-foreground">Inphrone Assistant</CardTitle>
                  <p className="text-xs text-emerald-500 font-medium">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 hover:bg-destructive/10 text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] p-3 rounded-lg text-xs leading-relaxed ${
                        message.isBot
                          ? 'bg-muted/70 text-foreground border border-border/30'
                          : 'bg-primary text-primary-foreground ml-auto shadow-sm'
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
                    <p className="text-xs text-muted-foreground font-medium">Quick questions:</p>
                    {defaultQuestions.map((item, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs h-auto p-3 text-left justify-start hover:bg-primary/10 border-primary/30 text-foreground hover:text-primary transition-colors"
                        onClick={() => handleQuestionClick(item.question, item.answer)}
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