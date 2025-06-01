import React from "react";
import styles from "./TeamSection.module.css";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const founders = [
  {
    name: "Shadab Ahmed Qureshi",
    title: "Student & Developer",
    description: [
      "2+ years in education with leadership accolades among India’s top women in business",
      "Academic credentials from Symbiosis, MICA & IIT Delhi",
      "Visionary driving VerbiQ’s platform growth and strategic direction",
    ],
    img: "/assets/28 july.jpg",
    linkedin: "https://www.linkedin.com/in/shadab-qureshi-a748b1298/",
  },
  {
    name: "Sujal Parate",
    title: "Founder and CHRO",
    description: [
      "20+ years in Telecom with a focus on people, culture, and learning",
      "Holds degrees from IIM Ahmedabad & XLRI Jamshedpur",
      "Championing a collaborative, high-performance work culture",
    ],
    img: "/assets/28 july.jpg",
    linkedin: "https://www.linkedin.com/in/ram-kumar-kayarat-97952177/",
  },
  {
    name: "Himanchal Baret",
    title: "Co-Founder & COO",
    description: [
      "Corporates leader with a focus on operational excellence process efficiency",
      "Expert in business planning and account management",
      "Driving a collaborative, service-focused culture at Recrutory",
    ],
    img: "/assets/28 july.jpg",
    linkedin: "https://www.linkedin.com/in/raahul-dev-singh-21799b5a/",
  },
];

const founderContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const founderCardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function TeamSection() {
  return (
    <section className={styles.teamSection}>
      {/* Founders Section FIRST */}

      <h2 className="text-black text-xl">Meet Our Team</h2>

      <motion.div
        className={styles.founderCards}
        variants={founderContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {founders.map((founder, idx) => (
          <motion.div
            className={styles.founderCard}
            key={idx}
            variants={founderCardVariant}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img src={founder.img} alt={founder.name} />
            <div className={styles.founderInfo}>
              <h4 className="font-bold text-green-900">
                {founder.name} | <span>{founder.title}</span>
              </h4>
              <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <ul>
                {founder.description.map((point, i) => (
                  <li className="text-black" key={i}>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5]  text-xl mt-3 inline-block "
              >
                <FaLinkedin style={{ fontSize: "28px", marginLeft: "auto" }} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Members Section SECOND */}
    </section>
  );
}
export default TeamSection;
