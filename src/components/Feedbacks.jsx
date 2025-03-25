import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { achievements } from "../constants";

const AchievementCard = ({ index, text, link, icon }) => {
  return (
    <Tilt options={{ max: 25, scale: 1, speed: 400 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="bg-black-200 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 w-full max-w-[320px] border border-gray-700"
      >
        <img src={icon} alt="icon" className="w-14 h-14 object-contain mb-4 bg-black- rounded-full" />

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-bold hover:text-blue-400 transition duration-300"
        >
          {text}
        </a>
      </motion.div>
    </Tilt>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-10 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements 🏆
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} index={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
