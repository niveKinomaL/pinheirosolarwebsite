import React from "react";
import bg2middle from "../assets/bg2middle.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const MiddleTwoSlashSix = () => {
  return (
    <div
      className="transition-all ease-in-out font-Arimo text-white font-bold duration-700 sm:h-full md:h-screen flex flex-col  bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg2middle})` }}
    >
      <div className="md:ml-20 md:mt-20 sm:mt-20 sm:text-center md:text-left sm:items-center md:items-start flex flex-col gap-7">
        <h1 className="sm:text-5xl md:text-7xl">
          Alguma informação <br />
          relevante
        </h1>
        <div className="flex sm:justify-center md:justify-normal flex-row">
          <div className="w-40 rounded-full h-1 bg-white"></div>
          <div className="w-12 rounded-full ml-5 h-1 bg-white"></div>
        </div>
        <h2 className="font-light md:text-2xl sm:mb-10 md:mb-20 md:w-6/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum dolor sit amet nibh vulputate consequat. In eget tincidunt
          augue, id faucibus erat. Aenean vehicula ultrices mauris, id euismod
          orci porttitor eu. Donec tristique urna imperdiet magna vehicula, quis
          blandit lacus efficitur. Nam quis risus non eros malesuada ultrices
          non ut enim.
        </h2>
      </div>
    </div>
  );
};

export default MiddleTwoSlashSix;
