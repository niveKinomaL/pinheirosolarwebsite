import React from "react";
import bg1top from "../assets/bg1top.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  {
    /*Top*/
  }
  return (
    <div
      className="transition-all ease-in-out duration-700 sm:h-96 md:h-screen flex flex-col sm:items-center md:items-start justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg1top})` }}
    >
      <div className="md:mb-44 text-center md:justify-normal sm:items-center md:items-start sm:justify-center sm:flex sm:flex-col">
        <div className="font-Arimo md:text-4xl sm:text-2xl xl:text-6xl  md:ml-20 mb-7 px-10 text-white font-extrabold bg-bluePinheiro w-fit p-4 rounded-2xl">
          <h1 className="text-left">
            A solução é energia solar.
            <br />
            Energia solar é{" "}
            <span className="text-orangePinheiro">Pinheiro</span>
            <br />
            <span className="text-orangePinheiro">Solar!</span>
          </h1>
        </div>
        <div className="flex sm:justify-center md:justify-normal flex-row">
          <div className="w-40 rounded-full md:ml-20 h-1 bg-orangePinheiro"></div>
          <div className="w-12 rounded-full sm:ml-5 md:ml-5 h-1 bg-orangePinheiro"></div>
        </div>
        <button className="font-Arimo flex items-center w-fit  hover:px-10 hover:bg-bluePinheiro transition-all ease-linear text-white md:ml-20 mt-10 font-bold text-xl bg-orangePinheiro rounded-md px-8 py-3">
          Conheça a Pinheiro <BsFillArrowRightCircleFill className="ml-4" />
        </button>
      </div>
    </div>
  );
};

export default Home;
