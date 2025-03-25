import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style.js'
import { services } from '../constants/index.js'
import {fadeIn,textVariant} from "../utils/motion.js"
import SectionWraper from "../hoc/SectionWraper.jsx"
import { amit } from '../assets/index.js'

const ServiceCard = ({index,title,icon})=>{
  
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
  </motion.div>

  {/* Container with Image + Text */}
  <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10 justify-between">
    
    {/* Left Section: Image */}
    <Tilt>
    <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
      <img 
        src={amit}
        alt="amit chowdhury" 
        className="w-full h-full object-cover"
      />
    </div>
    </Tilt>
    

    {/* Right Section: About Me Text */}
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="text-secondary text-[17px] leading-[30px] max-w-xl text-center md:text-left"
    >
      "I'm a skilled software developer with experience in C++ and JavaScript, with expertise in frameworks like Reactjs and Node.js. Currently, I am a pre-final year student pursuing a B.Tech degree in Computer Science and Engineering at the National Institute of Technology, Agartala. I have a strong grasp of Data Structures and Algorithms (DSA) and enjoy solving complex problems efficiently. I am a quick learner, passionate about building scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
    </motion.p>

  </div>

  {/* Services Section */}
  <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service, index) => (
      <ServiceCard key={service.title.replace(/[^a-zA-Z0-9]/g, "")} index={index} {...service} />
    ))}
  </div>
</>


  )
}

export default SectionWraper(About,"about")