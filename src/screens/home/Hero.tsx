import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import Image from "../../components/Image";
import "../../components/Carousel.css";

const Hero = () => {
  const imgUrls: string[] = [
    "https://images.pexels.com/photos/690598/pexels-photo-690598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8462911/pexels-photo-8462911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5154382/pexels-photo-5154382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3753820/pexels-photo-3753820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/690597/pexels-photo-690597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2888802/pexels-photo-2888802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSlideChange = (current: number) => {
    setCurrentSlide(current);
  };
  return (
    <Carousel afterChange={handleSlideChange}>
      {imgUrls.map((imgUrl, index) => (
        <div
          key={index}
          className={`carousel-item ${currentSlide === index ? "active" : ""}`}
        >
          <Image src={imgUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
