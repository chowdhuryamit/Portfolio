import React from 'react'
import {logo,github,linkdin,codechef,codeforces,gfg,leetcode,insta} from '../assets/index'

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-6 border-t-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt='logo' className='w-12 h-12 object-contain mb-2' />
          <h2 className="text-xl font-semibold">Amit Chowdhury</h2>
          <p className="text-gray-400 mt-2">Full-Stack Developer | Problem Solver</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#work" className="text-gray-400 hover:text-white">Work</a></li>
            <li><a href="#tech" className="text-gray-400 hover:text-white">Technologies</a></li>
            <li><a href="#achievements" className="text-gray-400 hover:text-white">Achievements</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><button onClick={()=>scrollTo(0,0)} className='text-gray-400 hover:text-white'>Go Top</button></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">Connect with Me</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/chowdhuryamit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <img src={github} alt='source code' className='w-8 h-8 object-contain'/>
            </a>
            <a href="https://www.linkedin.com/in/amit-chowdhury-ab505b249/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <img src={linkdin} alt='source code' className='w-8 h-8 object-contain'/>
            </a>
            <a href="https://www.codechef.com/users/camit8546" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <img src={codechef} alt='source code' className='w-8 h-8 object-contain'/>
            </a>
            <a href="https://codeforces.com/bestRatingChanges/12232251" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <img src={codeforces} alt='source code' className='w-8 h-8 object-contain'/>
            </a>
            <a href="https://www.geeksforgeeks.org/user/camitztex/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <img src={gfg} alt='source code' className='w-8 h-8 object-contain'/>
            </a>
            <a href="https://leetcode.com/u/camit8546/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <img src={leetcode} alt='source code' className='w-8 h-8 object-contain'/>
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <img src={insta} alt='source code' className='w-8 h-8 object-contain'/>
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Amit Chowdhury. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
