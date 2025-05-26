import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// This file is a React component for the Header section of the Myntra clone.
// It contains state variables for managing search input, results, and hover states.

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center py-10">
        <div className="bg-transparent w-38 h-20 px-4">
          <a href="#">
            <img
              src="http://www.sciencecollegebilaspur.ac.in/img/common_img/naac_accredited_logo.png"
              alt="college-logo"
              className="w-full h-fit object-contain "
            />
          </a>
        </div>
        <div className="flex-col justify-center items-center">
          <p className="font-[algerian] sm:text-5xl text-3xl sm:text-nowrap text-wrap">
            GOVT. E RAGHAVENDRA RAO P.G SCIENCE COLLEGE
          </p>
          <p className="text-center font-[algerian] text-2xl">
            Seepat Road Sarkanda, Bilaspur, Chhattisgarh{" "}
          </p>
        </div>
      </div>
      <header className="flex justify-center items-center  bg-green-800 shadow-sm mb-1 h-20 w-full z-[9999] mt-8">
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
              to={"/notes"}
              className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
              href="#"
            >
              ABOUT US
            </NavLink>
          </div>
          <div className="relativem mt-3 ml-20">
            {" "}
            <NavLink
              to={"/Women"}
              className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
              href="#"
            >
              NOTICE BOARD
            </NavLink>
          </div>
          <div className="relativem mt-3 ml-20">
            {" "}
            <NavLink
              to={"/Women"}
              className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
              href="#"
            >
              GALLERY
            </NavLink>
          </div>
          <div className="relativem mt-3 ml-20">
            {" "}
            <NavLink
              to={"/Kids"}
              className="text-white font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-white border-b-4 border-green-800 "
              href="#"
            >
              CONTACT US
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
