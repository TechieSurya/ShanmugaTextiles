import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Adjust path if needed
import { collection, getDocs } from "firebase/firestore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Components/ui/carousel";
import { Link } from "react-router-dom";
import { Button } from "../../Components/ui/button";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const snapshot = await getDocs(collection(db, "sliders"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSlides(data);
    };

    fetchSlides();
  }, []);

  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[650px] flex items-center">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 container mx-auto px-4">
                  <div className="max-w-2xl">
                    <p className="text-white font-medium mb-2">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-lg">
                      {slide.description}
                    </p>
                    <Link to={slide.buttonLink}>
                      <Button
                        size="lg"
                        className="text-lg px-8 py-6 bg-green-600 text-white"
                      >
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white" />
        <CarouselNext className="right-4 bg-white" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
