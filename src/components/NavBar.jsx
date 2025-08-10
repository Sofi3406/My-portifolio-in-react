import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import sofi from '../assets/sofi.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow when component unmounts
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-transparent">
        <div className="flex space-x-4 m-5">
          {/*<img src={assets.logo} alt="Logo" />*/}
          <img src={sofi} alt="Sofi Full Stack Logo" className="w-10 h-10" />
          <ul className="hidden md:flex gap-7 text-black mt-5">
            <li>
              <a href="#Home" className="hover:text-gray-400 cursor-pointer">Home</a>
            </li>
            <li>
              <a href="#About" className="hover:text-gray-400 cursor-pointer">About</a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-gray-400 cursor-pointer">web Projects</a>
            </li>
            <li>
              <a href="#graphics" className="hover:text-gray-400 cursor-pointer">Graphics Projects</a>
            </li>
            <li>
              <a href="#ContactMe" className="hover:text-gray-400 cursor-pointer">ContactMe</a>
            </li>
          </ul>
        </div>
        <button className="hidden md:block bg-white px-8 py-2 mr-10 mt-5 rounded-full"></button>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="Menu" />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 buttom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out z-20`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className="w-6" alt="Close" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <li>
            <a onClick={() => setShowMobileMenu(false)} href="#Home" className="inline-block px-4 py-2 hover:bg-gray-200 rounded-full">Home</a>
          </li>
          <li>
            <a onClick={() => setShowMobileMenu(false)} href="#About" className="inline-block px-4 py-2 hover:bg-gray-200 rounded-full">About</a>
          </li>
          <li>
            <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="inline-block px-4 py-2 hover:bg-gray-200 rounded-full">Projects</a>
          </li>
          <li>
            <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="inline-block px-4 py-2 hover:bg-gray-200 rounded-full">Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;