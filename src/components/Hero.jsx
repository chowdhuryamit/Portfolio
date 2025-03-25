import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../style.js";
import { ComputersCanvas } from "./canvas/index.js";

const Hero = () => {
  return (
    <>
    <section className="relative w-full h-screen mx-auto flex flex-col justify-between">
  <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
      <div className="w-1 sm:h-80 h-40 violet-gradient" />
    </div>

    <div>
      <h1 className="text-5xl sm:text-6xl font-bold text-white">
        Hi, I'm <span className="text-[#915EFF]">Amit Chowdury</span>
      </h1>
      <p className="text-lg sm:text-xl mt-2 text-white-100">
        I am a fullstack developer, making <br className="sm:block hidden" />
        interactive web applications
      </p>
    </div>
  </div>

  <div className="relative w-full h-full flex justify-center items-center mt-20 sm:mt-0">
    <ComputersCanvas />
  </div>

</section>

    </>
  )
}

export default Hero