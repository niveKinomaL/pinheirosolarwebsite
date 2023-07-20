import React from "react";
import logo from "../assets/KSEC.png";
const NavBar = () => {
  return (
    <div className="bg-gradient-to-r h-full sm:flex-col font-bold md:flex-row sm:px-3 md:px-28 py-10 from-blue-950 to to-black flex items-center sm:justify-center md:justify-between">
      <img src={logo} className="w-56" alt="LogoError" />
      <ul className="flex font-comfortaa flex-row sm:mt-4 md:ml-5 md:mr-32 sm:gap-3 md:gap-10 text-slate-300">
        <li>Dashboard</li>
        <li>Blog</li>
        <button className="bg-gradient-to-r from-cyan-400 to-blue-950 hover:px-12 duration-200 transition-all px-10 rounded-full">
          Login
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
