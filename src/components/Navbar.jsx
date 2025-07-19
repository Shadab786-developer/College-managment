import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TypeWriter from "../pages/TypeWritter";
import { motion } from "framer-motion";

// This file is a React component for the Header section of the Myntra clone.
// It contains state variables for managing search input, results, and hover states.

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="fixed w-full z-[9999] bg-white">
        <div className="sm:h-32 h-34 z-auto">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 3 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <div className="flex justify-center items-center py-10">
              <div className="bg-transparent w-38 h-20 px-4">
                <a href="#">
                  <img
                    src="\assets\college-logo.png"
                    alt="college-logo"
                    className="w-full h-fit object-contain bg-transparent "
                  />
                </a>
              </div>
              <div className="flex-col justify-center items-center">
                <p className="font-[algerian] sm:text-5xl text-[22px] sm:text-nowrap text-wrap">
                  GOVT. E RAGHAVENDRA RAO P.G SCIENCE COLLEGE
                </p>
                <p className="text-center font-[algerian] sm:text-2xl text-[]15px">
                  Seepat Road Sarkanda, Bilaspur, Chhattisgarh
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <header className="flex justify-center items-center  bg-green-800 h-20 w-full z-[9999] mt-8">
          <button
            className="md:hidden absolute left-4 text-white p-2"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block " : "hidden"
            } md:hidden absolute top-64 left-0 w-full bg-green-800`}
          >
            <nav className="flex flex-col w-full">
              <NavLink
                to="/"
                className="text-white font-semibold py-4 px-6 border-b border-green-700 hover:bg-green-700"
                onClick={toggleMenu}
              >
                HOME
              </NavLink>
              <NavLink
                to="/aboutus"
                className="text-white font-semibold py-4 px-6 border-b border-green-700 hover:bg-green-700"
                onClick={toggleMenu}
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/noticeboard"
                className="text-white font-semibold py-4 px-6 border-b border-green-700 hover:bg-green-700"
                onClick={toggleMenu}
              >
                NOTICE BOARD
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-white font-semibold py-4 px-6 border-b border-green-700 hover:bg-green-700"
                onClick={toggleMenu}
              >
                GALLERY
              </NavLink>
              <NavLink
                to="/contactus"
                className="text-white font-semibold py-4 px-6 border-b border-green-700 hover:bg-green-700"
                onClick={toggleMenu}
              >
                CONTACT US
              </NavLink>
            </nav>
          </div>
          <nav className="justify-around text-nowrap md:flex  mr-20 w-fit hidden ">
            <div className="relative mt-3 ml-20 ">
              {" "}
              <NavLink
                to={"/"}
                className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white   hover:border-b-white border-b-4 border-green-800 "
                href="#"
              >
                HOME
              </NavLink>
            </div>
            <div className="relativem mt-3 ml-20">
              {" "}
              <NavLink
                to={"/aboutus"}
                className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
                href="#"
              >
                ABOUT US
              </NavLink>
            </div>
            <div className="relativem mt-3 ml-20">
              {" "}
              <NavLink
                to={"/noticeboard"}
                className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
                href="#"
              >
                NOTICE BOARD
              </NavLink>
            </div>
            <div className="relativem mt-3 ml-20">
              {" "}
              <NavLink
                to={"/gallery"}
                className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
                href="#"
              >
                GALLERY
              </NavLink>
            </div>
            <div className="relativem mt-3 ml-20">
              {" "}
              <NavLink
                to={"/contactus"}
                className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
                href="#"
              >
                CONTACT US
              </NavLink>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
