import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWritter";

function Home() {
  const [isVisible, setIsVisible] = useState(-1);
  useEffect(() => {
    // Reset to hide all items
    const resetInterval = setInterval(() => {
      setIsVisible(-1);
    }, 15000); // Reset every 15 seconds

    // Show items one by one
    const showInterval = setInterval(() => {
      setIsVisible((prev) => {
        if (prev >= departments.length - 1) {
          return prev; // Stop at last item
        }
        return prev + 1;
      });
    }, 100); // Show next item every 500ms

    return () => {
      clearInterval(resetInterval);
      clearInterval(showInterval);
    };
  }, []);

  const departments = [
    "DEPARTMENT OF INFORMATION TECHNOLOGY",
    "DEPARTMENT OF CS",
    "DEPARTMENT OF COMPUTER APPLICATION",
    "DEPARTMENT OF MATHS",
    "DEPARTMENT OF PHYSICS",
    "DEPARTMENT OF CHEMISTRY",
    "DEPARTMENT OF BIOTECHNOLOGY",
    "DEPARTMENT OF MICROBIOLOGY",
    "DEPARTMENT OF GEOLOGY",
    "DEPARTMENT OF ZOOLOGY",
    "DEPARTMENT OF BOTANY",
  ];
  return (
    <div>
      <div className="flex sm:flex-row flex-col space-y-4 justify-center items-center w-full py-16">
        <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbzpE2oQZB9Wmio6e_wnjbj1p4MNiTGCBLQ&s"
            alt="college-logo"
            className="w-full h-fit object-contain max-w-[150px] md:max-w-[300px]"
          />
          <p className="sm:text-4xl text2xl font-[georgia] text-center ">
            <TypeWriter text="Welcome to" delay={50} /> <br />
            <span className="text-5xl block mt-4">
              {" "}
              <TypeWriter
                text="SCIENCE COLLEGE"
                delay={50}
                className="sm:text-5xl text-3xl block mt-4 text-nowrap"
              />
            </span>
          </p>
        </div>
        <div className="w-1/2 h-1/3">
          <a href="#">
            <img
              src="\public\img4.jpg"
              alt="college-logo"
              className="sm:w-fit sm:h-fit w-80 h-52 object-contain "
            />
          </a>
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap w-full px-10 py-9">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className={`bg-white rounded-lg shadow-md overflow-hidden 
               `}
        >
          <div className="pt-4 pr-4">
            <Link to={"/notes"}>
              <h3 className="text-2xl text-green-950 font-[alibi] font-semibold">
                Notes
              </h3>
            </Link>
            <hr className="text-green-800" />
            <div className="bg-green-100 sm:w-[400px] rounded-lg border-2 sm:h-[400px] w-[300px] h-[300px] mt-3 text-nowrap">
              <ul className="space-y-2 p-5">
                {departments.map((dept, index) => (
                  <li
                    key={dept}
                    className={`transform transition-all duration-300 ease-out ${
                      index <= isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="hover:bg-green-200 rounded transition-colors font-semibold text-[11px] sm:text-[16px]">
                      <span className="text-green-800 mr-1">•</span>
                      <span>{dept}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className={`bg-white rounded-lg shadow-md overflow-hidden 
               `}
        >
          <div className="pt-4 pr-4">
            <Link to={"/syllabus"}>
              <h3 className="text-2xl text-green-950 font-[alibi] font-semibold">
                Syllabus
              </h3>
            </Link>
            <hr className="text-green-800" />
            <div className="bg-green-100 sm:w-[400px] rounded-lg border-2 sm:h-[400px] mt-3 text-nowrap w-[300px] h-[300px]">
              <ul className="space-y-2 p-5">
                {departments.map((dept, index) => (
                  <li
                    key={dept}
                    className={`transform transition-all duration-300 ease-out ${
                      index <= isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="hover:bg-green-200 rounded transition-colors font-semibold text-[11px] sm:text-[16px]">
                      <span className="text-green-800 mr-1">•</span>
                      <span>{dept}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className={`bg-white rounded-lg shadow-md overflow-hidden 
               `}
        >
          <div className="pt-4 pr-4">
            <Link to={"/questionpaper"}>
              <h3 className="text-2xl text-green-950 font-[alibi] font-semibold">
                Question paper
              </h3>
            </Link>
            <hr className="text-green-800" />
            <div className="bg-green-100 sm:w-[400px] rounded-lg border-2 sm:h-[400px] mt-3 text-nowrap w-[300px] h-[300px]">
              <ul className="space-y-2 p-5">
                {departments.map((dept, index) => (
                  <li
                    key={dept}
                    className={`transform transition-all duration-300 ease-out ${
                      index <= isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="hover:bg-green-200 rounded transition-colors font-semibold text-[11px] sm:text-[16px]">
                      <span className="text-green-800 mr-1">•</span>
                      <span>{dept}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
