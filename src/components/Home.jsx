import React from "react";
import cube from "../assets/cube.png";

const Home = () => {
  return (
    <div className="h-full flex text-slate-300 items-center sm:text-center md:text-left sm:justify-center md:justify-between font-bold sm:flex-col md:flex-row bg-gradient-to-r font-comfortaa from-blue-950 to to-black">
      <div className="md:ml-28 sm:mt-10">
        <p className="mb-4 flex sm:justify-center md:justify-normal items-center">
          <div className="w-40  opacity-50 h-0.5 rounded-full bg-white sm:hidden md:inline"></div>
          <p className=" md:ml-5">Data smarter, not harder</p>
        </p>
        <h1 className="mb-4 text-4xl">
          It's never been easier to
          <u className="text-cyan-300 opacity-80">protect</u> yout data
        </h1>
        <p className="mb-6 text-slate-500">
          Complex system of data collection and improvement of cyber defenses,
          using artificial intelligence for remote monitoring of servers.
        </p>
        <div className="flex sm:flex-col items-center md:flex-row gap-5">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-950 hover:px-12 duration-200 outline-none transition-all  sm:w-2/3 md:px-10 rounded-full">
            Request Sign up
          </button>
          <a href="#" className="underline">
            Services
          </a>
        </div>
      </div>
      <img src={cube} className="sm:hidden md:inline w-8/12" alt="" />
    </div>
  );
};

export default Home;
