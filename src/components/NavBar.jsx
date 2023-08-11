import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const navIsClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="sm:flex sm:flex-col">
      <div className="transition-all ease-in-out duration-700 flex md:flex-row md:h-20 sm:h-20 gap-5 sm:justify-between bg-darkBluePinheiro items-center md:justify-between md:px-1 xl:px-10 text-white font-Arimo font-bold">
        <Link to={"/"}>
          <img
            src={logo}
            className="w-44 md:mt-0 sm:ml-10 md:ml-2 xl:ml-20 h-9"
            alt=""
          />
        </Link>
        <div>
          {isClicked ? (
            <AiOutlineClose
              onClick={navIsClick}
              className="sm:flex sm:mr-5 text-2xl md:hidden cursor-pointer"
            />
          ) : (
            <HiBars3BottomRight
              onClick={navIsClick}
              className="sm:flex sm:mr-5 text-3xl md:hidden cursor-pointer"
            />
          )}
          <ul className="md:flex sm:hidden flex-row flex-wrap gap-10 md:pr-10 xl:pr-44">
            <Link to={"/Quemsomos"}>
              <li>Quem Somos</li>
            </Link>
            <Link to={"/Projetos"}>
              <li>Projetos</li>
            </Link>
            <Link to={"/Servicos"}>
              <li>Serviços</li>
            </Link>
            <Link to={"/Etica"}>
              <li>Ética</li>
            </Link>
            <Link to={"/Contato"}>
              <li>Contato</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <ul
          className={`md:hidden font-bold flex-col p-8 flex-wrap gap-10 ${
            isClicked ? "sm:flex" : "sm:hidden"
          }`}
        >
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
