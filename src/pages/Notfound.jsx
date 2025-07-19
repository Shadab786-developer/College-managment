import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center sm:mt-[250px] mt-[300px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="sm:text-8xl text-6xl font-extrabold text-gray-900"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Resource Not Available
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="sm:text-3xl text-xl font-semibold text-gray-800 my-9">
              Oops! The page you're looking for seems to have vanished into thin
              air.
            </h2>

            <Link
              to="/"
              className="inline-block bg-green-800 text-white px-6 py-3 rounded-lg
                        font-medium hover:bg-green-900 transition-colors
                        shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-800"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Notfound;
