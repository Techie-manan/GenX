import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close menu if on mobile
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-[100vw] px-[5vw] py-2 bg-black/50 backdrop-blur-xl text-white rounded-b-2xl">
      <div className='bg-white p-1 pb-8 rounded-b-full absolute top-0 right-5'>
        <img src="./images/genesis.png" alt="" className='h-15 sm:h-15 ' />
      </div>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll('home')}>
          <img src="logo.PNG" alt="logo" className="h-12 sm:h-15 rounded-full" />
          <h1 className="text-xl font-bold">0xGenIgnite</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-7 font-semibold mr-10">
          {/* <li onClick={() => handleScroll('home')} className="cursor-pointer hover:text-fuchsia-400">Home</li> */}
          <li onClick={() => handleScroll('about')} className="cursor-pointer hover:text-fuchsia-400">About</li>
          <li onClick={() => handleScroll('events')} className="cursor-pointer hover:text-fuchsia-400">Timeline</li>
          <li onClick={() => handleScroll('team')} className="cursor-pointer hover:text-fuchsia-400">Team</li>
          <li onClick={() => handleScroll('sponsors')} className="cursor-pointer hover:text-fuchsia-400">Sponsors</li>
          <li onClick={() => handleScroll('faq')} className="cursor-pointer hover:text-fuchsia-400">FAQs</li>
          <li onClick={() => handleScroll('contact')} className="cursor-pointer hover:text-fuchsia-400">Contact</li>
        </ul>


        {/* Mobile Toggle */}
        <div className="lg:hidden mr-20 sm:mr-15">
          {isOpen ? (
            <FiX className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>

      </div>


      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="flex flex-col mt-4 gap-4 md:hidden font-semibold text-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <li onClick={() => handleScroll('home')} className="cursor-pointer hover:text-fuchsia-400">Home</li>
            <li onClick={() => handleScroll('about')} className="cursor-pointer hover:text-fuchsia-400">About</li>
            <li onClick={() => handleScroll('events')} className="cursor-pointer hover:text-fuchsia-400">Events</li>
            <li onClick={() => handleScroll('sponsors')} className="cursor-pointer hover:text-fuchsia-400">Sponsors</li>
            <li onClick={() => handleScroll('team')} className="cursor-pointer hover:text-fuchsia-400">Team</li>
            <li onClick={() => handleScroll('contact')} className="cursor-pointer hover:text-fuchsia-400">Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;