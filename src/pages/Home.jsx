import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./TypeWritter";
import { FaGraduationCap, FaBook, FaUniversity } from "react-icons/fa";

function Home() {
  const [isVisible, setIsVisible] = useState(-1);
  const [currentSlide, setCurrentSlide] = useState(0);
  // ...existing state and effects...

  const heroImages = [
    "/assets/img5.jpg",
    "/assets/img2.jpg", // Add your images
    "/assets/img3.jpg", // Add your image
    "/assets/img4.jpg", // Add your images
  ];

  const heroTexts = [
    "Shaping Tomorrow's Leaders",
    "Excellence in Education",
    "Discover Your Potential",
    "Teamwork Makes the Dream Work",
  ];
  useEffect(() => {
    // Reset to hide all items
    const resetInterval = setInterval(() => {
      setIsVisible(-1);
    }, 1400); // Reset every 15 seconds

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
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
      <div className="relative h-screen overflow-hidden ">
        {/* Dynamic Background with Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 sm:mt-[240px]"
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src={heroImages[currentSlide]}
              alt="College"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-20 h-full container mx-auto px-4">
          <div className="h-full flex flex-col justify-center items-center md:items-start">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center md:text-left max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-green-600 text-white px-4 py-1 rounded-full mb-6"
              >
                #1 Government Science College
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <TypeWriter text="Welcome to" delay={50} />
              </h1>

              <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-8">
                <TypeWriter
                  text="GOVT. E RAGHAVENDRA RAO P.G SCIENCE COLLEGE"
                  delay={50}
                />
              </h2>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-xl md:text-2xl text-white mb-8"
                >
                  {heroTexts[currentSlide]}
                </motion.p>
              </AnimatePresence>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold 
                           hover:bg-white hover:text-green-600 transition-all duration-300
                           flex items-center justify-center gap-2"
                >
                  <FaGraduationCap className="text-xl" />
                  Explore Programs
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full 
                           font-semibold hover:bg-white/10 transition-all duration-300
                           flex items-center justify-center gap-2"
                >
                  <FaUniversity className="text-xl" />
                  Virtual Campus Tour
                </motion.button>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-0 right-0 flex justify-center gap-8"
            >
              {[
                { icon: FaGraduationCap, number: "11+", label: "Departments" },
                { icon: FaBook, number: "50+", label: "Courses" },
                { icon: FaUniversity, number: "1000+", label: "Students" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center
                           border border-white/20"
                >
                  <stat.icon className="text-3xl text-green-400 mx-auto mb-2" />
                  <h3 className="text-3xl font-bold text-white">
                    {stat.number}
                  </h3>
                  <p className="text-green-200">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 right-4 z-30 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                       ${
                         currentSlide === index
                           ? "bg-green-500 w-8"
                           : "bg-white/50"
                       }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-around items-center flex-wrap w-full px-10 py-9 mb-20">
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
            <div className="bg-green-100 sm:w-[400px] rounded-lg border-2 sm:h-[400px] w-[300px] h-[300px] mt-3 text-nowrap ">
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
