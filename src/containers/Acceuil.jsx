import { React,  } from "react";
import Carousel from "../components/Carousel";
import "../App.css";

import Slide1 from "../img/slide1.jpg";
import Slide2 from "../img/slide2.jpg";
import Slide3 from "../img/slide3.jpg";
import Slide4 from "../img/slide4.jpg";
import Slide5 from "../img/slide5.jpg";
import Slide6 from "../img/slide6.jpg";
import Slide7 from "../img/slide7.jpg";
import Slide8 from "../img/slide8.jpg";

function Acceuil() {
 

  const slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
  ];
  return (
    <div className="carcontainer">
      <Carousel slides={slides} />
    </div>
  );
}

export default Acceuil;
