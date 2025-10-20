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
    description: "Where Insight meets Phronesis — People-powered intelligence for a wiser entertainment world.",
  },
  {
    image: "/INPHRONE BANNER.png",
    title: "Inphrone Platform Overview",
    description: "A global ecosystem where audiences, creators, and studios connect through real opinions and creative wisdom.",
  },
  {
    image: "/inphrone 1.png",
    title: "Vision of Inphrone",
    description: "AI predicts yesterday. Inphrone builds tomorrow — with human emotion and collective intelligence.",
  },
  {
    image: "/slide 18.png",
    title: "A New Beginning",
    description: "Reimagining how stories are born — from audience hearts to creator hands.",
  },
  {
    image: "/slide 17.png",
    title: "Empowering Imagination",
    description: "Fueling the next generation of storytellers with authentic audience insights.",
  },
  {
    image: "/slide 16.png",
    title: "Human Pulse of Entertainment",
    description: "Every opinion counts — shaping the rhythm of global entertainment through shared voices.",
  },
  {
    image: "/slide 15.png",
    title: "Wisdom in Action",
    description: "Transforming crowd opinions into actionable insights that guide creators and studios worldwide.",
  },
  {
    image: "/slide 14.png",
    title: "Unified Ecosystem",
    description: "A seamless space connecting audiences, creators, studios, and platforms — all driven by insight.",
  },
  {
    image: "/slide 13.png",
    title: "Connecting People",
    description: "Turning emotions, choices, and opinions into bridges that unite creators and communities.",
  },
  {
    image: "/slide 12.png",
    title: "From Data to Insights",
    description: "Transforming raw audience data into meaningful trends that empower smarter creative decisions.",
  },
  {
    image: "/slide 11.png",
    title: "Guiding Creativity",
    description: "Helping creators see what audiences truly feel — without limiting imagination or artistic freedom.",
  },
  {
    image: "/slide 10.png",
    title: "Vision into Action",
    description: "Empowering every creative idea to move from inspiration to real impact with the power of insights.",
  },
  {
    image: "/slide 9.png",
    title: "Driven by Innovation",
    description: "At the crossroads of creativity and technology — redefining how entertainment evolves.",
  },
  {
    image: "/slide 8.png",
    title: "Smarter Choices",
    description: "Giving creators the clarity to make data-backed, emotionally resonant decisions.",
  },
  {
    image: "/slide 7.png",
    title: "Designing Tomorrow",
    description: "Crafting tools and experiences that evolve with the changing pulse of global audiences.",
  },
  {
    image: "/slide 6.png",
    title: "Power of Collaboration",
    description: "Creators and audiences shaping the future together — powered by understanding, not algorithms.",
  },
  {
    image: "/slide 5.png",
    title: "Overcoming Challenges",
    description: "Breaking through guesswork, bias, and creative uncertainty with the voice of real people.",
  },
  {
    image: "/slide 4.png",
    title: "Simplifying Complexity",
    description: "Turning vast global data into intuitive, visual insights that anyone can understand.",
  },
  {
    image: "/slide 3.png",
    title: "Insights that Inspire",
    description: "Transforming audience wisdom into creative inspiration across film, OTT, music, and gaming.",
  },
  {
    image: "/slide 2.png",
    title: "Voices into Value",
    description: "Turning global opinions into measurable impact — giving creators what truly matters: connection.",
  },
  {
    image: "/slide 1.png",
    title: "Future with Inphrone",
    description: "Building a creative world guided by empathy, data, and the collective wisdom of humanity.",
  },
  {
    image: "/slide 22.png",
    title: "Empowering Every Voice",
    description: "Every opinion is a spark — together, they light the path to meaningful storytelling.",
  },
  {
    image: "/slide 23.png",
    title: "Harnessing Collective Intelligence",
    description: "Amplifying innovation through the shared insights of global audiences and creators.",
  },
  {
    image: "/slide 24.png",
    title: "Adaptive by Design",
    description: "Built to evolve with the entertainment landscape — agile, insightful, and creator-first.",
  },
  {
    image: "/slide 25.png",
    title: "Purpose-Driven Experiences",
    description: "Crafting experiences that align creativity with emotion, value, and real-world purpose.",
  },
  {
    image: "/slide 26.png",
    title: "Trust Through Transparency",
    description: "Fostering confidence through open data, fair insights, and honest audience engagement.",
  },
  {
    image: "/slide 27.png",
    title: "Resilience in Motion",
    description: "Continuously learning, adapting, and thriving with every new opinion shared worldwide.",
  },
  {
    image: "/slide 28.png",
    title: "The Inphrone Future",
    description: "Where intelligence meets intention — shaping entertainment that listens, learns, and inspires.",
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
