import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// This file is a React component for the Header section of the Myntra clone.
// It contains state variables for managing search input, results, and hover states.

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center fixed bg-white shadow-sm mb-1 h-20 w-full z-[9999] ">
        <div className="bg-transparent min-w-[100px] sm:min-w-[110px] px-4">
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbzpE2oQZB9Wmio6e_wnjbj1p4MNiTGCBLQ&s"
              alt="college-logo"
              className="w-full h-fit object-contain max-w-[60px] md:max-w-[80px]"
            />
          </a>
        </div>
        <nav className="justify-around text-nowrap md:flex  mr-20 w-fit hidden">
          <div className="relative mt-3 ">
            {" "}
            <NavLink
              to={"/notes"}
              className="text-gray-900 font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white   hover:border-b-green-800 border-b-4 border-white "
              href="#"
            >
              NOTES
            </NavLink>
          </div>
          <div className="relativem mt-3">
            {" "}
            <NavLink
              to={"/Women"}
              className="text-gray-900 font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-green-800 border-b-4 border-white "
              href="#"
            >
              SYLLABUS
            </NavLink>
          </div>
          <div className="relativem mt-3">
            {" "}
            <NavLink
              to={"/Kids"}
              className="text-gray-900 font-semibold py-5 px-4 transform-cpu text-[14px] decoration-white    hover:border-b-green-800 border-b-4 border-white "
              href="#"
            >
              QUESTION PAPER
            </NavLink>
          </div>
        </nav>

        <div className="flex justify-center items-center ml-[20%] sm:ml-[12%] mr-[20%] sm:mr-[25%] h-10 text-gray-600 w-15 bg-gray-100 rounded-sm ">
          <span className="material-symbols-outlined  text-gray-400 h-5 p-3 font-normal mb-5 ">
            search
          </span>

          <input
            type="text"
            placeholder="Search for resources, notes, syllabus, etc."
            className="h-10 min-w-80 max-w-96 w-1/3 px-[27%] flex-grow items-start py-2 bg-gray-100 rounded-sm focus:bg-white focus:text-black"
          />
          {/* {isActive && (
            <div className="w-1/3 h-80 bg-white flex-col shadow-lg overflow-scroll flex justify-center items-start top-20 absolute z-[9999] ">
              {items.map((item, index) => (
                <div className="px-28 py-2" key={index}>
                  {item.item_name}
                </div>
              ))}
            </div>
          )} */}
        </div>
      </header>
    </>
  );
}
