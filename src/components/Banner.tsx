import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerData = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
    title: "Inovação & Tecnologia",
    subtitle: "Transformando o futuro dos negócios",
    category: "Destaque"
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920",
    title: "Excelência Operacional",
    subtitle: "Compromisso com resultados extraordinários",
    category: "Novidades"
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920",
    title: "Cultura & Pessoas",
    subtitle: "Nossa maior força está em nossa equipe",
    category: "Cultura"
  }
];

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative h-[600px] overflow-hidden pt-16">
      {bannerData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 transform ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="max-w-4xl px-4 text-center transform transition-all duration-700 translate-y-0">
              <span className="inline-block px-4 py-1 bg-[#40B5AD]/90 text-white text-sm font-medium rounded-full mb-4">
                {slide.category}
              </span>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}