import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
    image: "/inphrone logo.png",
    title: "Inphrone Brand",
    description: "People-Powered Intelligence for Entertainment",
  },
  {
    image: "/inphrone banner.jpg",
    title: "Inphrone Platform Overview",
    description: "The complete ecosystem for creators and audiences",
  },
  {
    image: "/inphrone 1.png",
    title: "Vision of Inphrone",
    description: "AI predicts yesterday. Inphrone builds tomorrow.",
  },
  {
    image: "/slide 14.png",
    title: "A New Beginning",
    description: "A fresh perspective to inspire meaningful innovation.",
  },
  {
    image: "/slide 13.png",
    title: "Connecting People",
    description: "Shaping ideas that connect people and possibilities.",
  },
  {
    image: "/slide 12.png",
    title: "From Data to Insights",
    description: "Transforming insights into powerful opportunities.",
  },
  {
    image: "/slide 11.png",
    title: "Guiding Creativity",
    description: "Empowering creativity with clarity and direction.",
  },
  {
    image: "/slide 10.png",
    title: "Vision into Action",
    description: "Building bridges between vision and execution.",
  },
  {
    image: "/slide 9.png",
    title: "Driven by Innovation",
    description: "Driving forward with innovation at the core.",
  },
  {
    image: "/slide 8.png",
    title: "Smarter Choices",
    description: "Uncovering patterns that lead to smarter choices.",
  },
  {
    image: "/slide 7.png",
    title: "Designing Tomorrow",
    description: "Crafting solutions designed for tomorrow’s needs.",
  },
  {
    image: "/slide 6.png",
    title: "Power of Collaboration",
    description: "Celebrating collaboration as the heart of progress.",
  },
  {
    image: "/slide 5.png",
    title: "Overcoming Challenges",
    description: "A journey from challenges to bold opportunities.",
  },
  {
    image: "/slide 4.png",
    title: "Simplifying Complexity",
    description: "Making complexity simple and actionable.",
  },
  {
    image: "/slide 3.png",
    title: "Insights that Inspire",
    description: "Insights that spark originality and growth.",
  },
  {
    image: "/slide 2.png",
    title: "Voices into Value",
    description: "Turning voices into value for creators everywhere.",
  },
  {
    image: "/slide 1.png",
    title: "Future with Inphrone",
    description: "A vision shaped by people, powered by wisdom.",
  },
];


  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden shadow-premium">
      {/* Main Image Display */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain bg-gradient-to-br from-primary/10 to-secondary/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {slide.title}
                </h3>
                <p className="text-sm text-white/90">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white border-none"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Play/Pause Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white border-none"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-2 p-4 bg-card/50">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-110"
                : "bg-muted hover:bg-primary/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
        <div className="ml-4 flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;
