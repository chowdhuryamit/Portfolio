import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styles } from '../style.js';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import {resume} from '../assets/index.js'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-violet-950`}> 
      <div className='w-full flex justify-between items-center max-w-[90%] lg:max-w-7xl mx-auto flex-wrap'>
        <NavLink to='/' className='flex items-center gap-3' onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
          <p className='text-white text-[20px] font-bold cursor-pointer flex'>
            Amit&nbsp;<span className='sm:block hidden'>| Chowdhury</span>
          </p>
        </NavLink>
        
        <ul className='list-none hidden lg:flex flex-row gap-6 items-center'>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-gray-300"} hover:text-white text-[17px] font-medium cursor-pointer transition-colors`} onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className='text-[17px] font-medium cursor-pointer transition-colors'>
            <a href={resume} className='bg-blue-600 rounded-md p-1'>Resume</a>
          </li>
        </ul>

        
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <button onClick={() => setToggle(!toggle)}>
            <img src={toggle ? close : menu} alt='menu' className='w-[30px] h-[30px] object-contain' />
          </button>
          
          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-violet-900 absolute top-16 right-4 mx-4 my-2 min-w-[200px] rounded-xl shadow-lg transition-all duration-300 w-fit`}> 
            <ul className='list-none flex flex-col gap-4 items-start'>
              {navLinks.map((nav) => (
                <li key={nav.id} className={`text-[16px] font-medium cursor-pointer ${active === nav.title ? "text-white" : "text-gray-300"} hover:text-white transition-colors`} onClick={() => { setToggle(false); setActive(nav.title); }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
               <li className='text-[17px] font-medium cursor-pointer transition-colors'>
                 <a href={resume} className='bg-blue-600 rounded-md p-1'>Resume</a>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
