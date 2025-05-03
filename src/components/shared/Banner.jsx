import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
      title: "Learn Without Limits",
      subtitle: "Explore courses designed to unlock your full potential",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg",
      title: "Your Future Starts Here",
      subtitle: "Master in-demand skills from top instructors, anytime, anywhere",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/8199608/pexels-photo-8199608.jpeg  ",
      title: "Elevate Your Learning Journey",
      subtitle: "Interactive, personalized education built for modern learners",
    },
  ];
  

  return (
    <div className="sliderAx mt-5 h-auto">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`container mx-auto transition-opacity duration-500 ${
            activeSlide === index ? "block" : "hidden"
          }`}
        >
          <div
            className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">Learnistry</p>
              <p className="text-xl md:text-3xl   font-bold">{slide.title}</p>
              <p className="text-lg md:text-2xl   mb-10 leading-none">{slide.subtitle}</p>
          
              <Link to="/allEquipment" className=" rounded-md uppercase bg-amber-800 dark:bg-gray-800 hover:bg-white hover:text-amber-800 dark:hover:text-gray-800 text-white md:py-4 px-2 md:px-8 text-xs font-bold hover:shadow-lg hover:drop-shadow transition duration-200">
             Find Your Tutor
              </Link>
            </div>
          </div>
          <br />
        </div>
      ))}

      <div className="flex justify-between w-20 mx-auto pb-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full w-4 h-4 mx-1 ${
              activeSlide === index ? "bg-amber-800 dark:bg-gray-800" : "bg-amber-400 dark:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;