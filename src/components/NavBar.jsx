import React from "react";
import logo from "../assets/logo.png";
import { HiBars3BottomRight, HiArrowsRightLeft } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="transition-all ease-in-out duration-700 flex md:flex-row md:h-20 sm:h-20 gap-5 sm:justify-between bg-darkBluePinheiro items-center md:justify-between md:px-1 xl:px-10 text-white font-Arimo font-bold">
      <img
        src={logo}
        className="w-44 md:mt-0 sm:ml-10 md:ml-2 xl:ml-20 h-9"
        alt=""
      />
      <div>
        <HiBars3BottomRight className="sm:flex sm:mr-5 text-3xl md:hidden" />
        <ul className="md:flex sm:hidden flex-row flex-wrap gap-10 md:pr-10 xl:pr-44">
          <li>Quem Somos</li>
          <li>Projetos</li>
          <li>Serviços</li>
          <li>Ética</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
