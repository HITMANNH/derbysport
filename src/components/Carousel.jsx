import { React, useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const slideInterval = setInterval(() =>{
      setCurrentSlide(currentSlide => currentSlide < slides.length - 1? currentSlide +1 :0 )
    },3000)
    return () => clearInterval(slideInterval)
  }, [slides.length]);
  return (
    <div className="carousel">
      <div className="carousel-inner"
      style={{
        transform:`translateX(${-currentSlide * 100}%)`
      }}
      >
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
