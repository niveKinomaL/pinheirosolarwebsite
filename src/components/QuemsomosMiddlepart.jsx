import React, { useState, useEffect, useRef } from "react";
import bgMiddle from "../assets/themajorEnterprise.png";

const QuemsomosMiddlepart = () => {
  const [colaboradoresCount, setColaboradoresCount] = useState(0);
  const [projetosCount, setProjetosCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let colaboradores = 0;
    let projetos = 0;
    let animationFrame;

    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          // Element is partially visible or fully visible
          // Start the count animation
          startCountAnimation();
        }
      }
    };

    const startCountAnimation = () => {
      const updateCounts = () => {
        if (colaboradores < 90) {
          colaboradores++;
          setColaboradoresCount(colaboradores);
        }
        if (projetos < 1000) {
          projetos += 10;
          setProjetosCount(projetos);
        }
        if (colaboradores < 90 || projetos < 1000) {
          animationFrame = requestAnimationFrame(updateCounts);
        }
      };

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateCounts);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="transition-all sm:flex-col justify-center ease-in-out md:gap-20 font-Arimo text-center text-white font-bold duration-700 sm:h-screen md:h-fit md:py-20 md:flex-row flex items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgMiddle})` }}
    >
      <div className="flex mb-12 flex-col items-start">
        <h1 className="sm:text-4xl w-96 md:text-8xl mt-10 sm:text-center md:text-left">
          A Maior do CE
        </h1>
        <div className="flex scale-50 sm:justify-center sm:ml-10 mt-4 md:mr-10 flex-row">
          <div className="w-40 rounded-full h-1 bg-white"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-white"></div>
        </div>
      </div>
      <div className="flex md:flex-row sm:flex-col text-bluePinheiro">
        <div className="bg-white sm:scale-75 md:scale-100 w-64 h-56">
          <h1 className="text-6xl mt-14 scale-150">+{colaboradoresCount}</h1>
          <p className="opacity-75 mt-5">Colaboradores</p>
        </div>
        <div className="bg-gray-200 sm:scale-75 sm:mb-20 md:mb-0 md:scale-100 w-64 h-56">
          <h1 className="text-6xl mt-14 scale-125">+{projetosCount}</h1>
          <p className="opacity-75 mt-5">Projetos</p>
        </div>
      </div>
    </div>
  );
};

export default QuemsomosMiddlepart;
