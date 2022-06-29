import React from "react";

const CarouselItem = ({ slide }) => {
  return (
    <div className="carousel-item">
      <img src={slide} alt=" slide" className="slideimg" />
    </div>
  );
};

export default CarouselItem;
