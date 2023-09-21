import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [burgerFlag, setBurgerFlag] = useState(false);
  const handleBurgerFlagChange = () => {
    setBurgerFlag((currFlag) => (currFlag = !currFlag));
  };
  return (
    <div className="sticky top-0 z-10">
      <div className="w-full h-[75px] bg-gray text-black flex justify-between px-4 items-center drop-shadow-xl">
        <div className="flex gap-[50px] items-center w-full">
          <h1 className="text-3xl font-bold">Minhas.</h1>
          <ul className="flex gap-[20px] font-medium text-base md:hidden">
            <li>
              <button>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </button>
            </li>

            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="support"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button>Support</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="platforms"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button>Platforms</button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button> Pricing</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 font-bold base md:hidden">
          <button className="bg-transparent  w-[60px] text-lg">Sign In</button>
          <button className="rounded text-lg px-1 py-2 border-none bg-cobalt w-[150px] text-whiteText font-bold hover:bg-black ease-in duration-300 ">
            Sign Up
          </button>
        </div>
        <div className="mt-1 text-black mdburger:hidden">
          {burgerFlag ? (
            <button onClick={() => handleBurgerFlagChange()}>
              <RxCross1 style={{ fontSize: "25px" }} color="#000" />
            </button>
          ) : (
            <button onClick={() => handleBurgerFlagChange()}>
              <FcMenu style={{ fontSize: "25px" }} color="#000" />
            </button>
          )}
        </div>
      </div>
      {burgerFlag ? (
        <div className="absolute w-full bg-gray">
          <ul className="px-10 py-4 text-[20px]">
            <li className="w-full p-4 my-2 border-b-2 border-lightBlack">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleBurgerFlagChange}
              >
                Home
              </Link>
            </li>
            <li className="w-full p-4 my-2 border-b-2 border-lightBlack">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleBurgerFlagChange}
              >
                About
              </Link>
            </li>
            <li className="w-full p-4 my-2 border-b-2 border-lightBlack">
              <Link
                activeClass="active"
                to="support"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleBurgerFlagChange}
              >
                Support
              </Link>
            </li>
            <li className="w-full p-4 my-2 border-b-2 border-lightBlack">
              <Link
                activeClass="active"
                to="platforms"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleBurgerFlagChange}
              >
                Platforms
              </Link>
            </li>
            <li className="w-full p-4 my-2 border-b-2 border-lightBlack">
              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleBurgerFlagChange}
              >
                Pricing
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 px-10 my-8">
            <button className="w-full px-1 py-2 text-lg bg-transparent border rounded-md">
              Sign In
            </button>
            <button className="w-full px-1 py-2 text-lg font-bold duration-300 ease-in border-none rounded-md bg-cobalt text-whiteText hover:bg-black ">
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
