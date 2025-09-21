import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Interactive from "@/components/Interactive";
import Social from "@/components/Social";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatbotVisible, setChatbotVisible] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadImages = () => {
      // Add any critical images here if needed
    };
    preloadImages();

    // Chatbot visibility logic
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setChatbotVisible(scrolled < 200); // Show chatbot only when near top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Interactive />
      <Social />
      <Roadmap />
      <Footer />
      <BackToTop />
      <Chatbot isVisible={chatbotVisible} />
    </div>
  );
};

export default Index;
