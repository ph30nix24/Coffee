import React, { useEffect, useState } from 'react'
import { navlinks } from '../utils/index'
import { useWindowScroll } from 'react-use'

const Navbar = ({ onScrollChange }) => {
  const { y: currentY } = useWindowScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (currentY < 800) {
      setScrolled(false);
      onScrollChange(false); // ✅ tell parent
    } else {
      setScrolled(true);
      onScrollChange(true);  // ✅ tell parent
    }
  }, [currentY, onScrollChange]); // <-- add deps

  return (
    <div
      className={`w-full h-fit fixed top-0 z-50 md:px-60 flex md:justify-between md:items-center py-6 ${
        scrolled ? 'bg-white shadow-xl' : 'bg-transparent shadow-none'
      }`}
    >
      <div className="flex items-center gap-2">
        <img
          src={scrolled ? "./assets/img/lightLogo.png" : "./assets/img/logo.png"}
          className="size-4 object-contain"
          alt=""
        />
        <a
          href="#"
          className={`capitalize text-base ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          coffee.
        </a>
      </div>
      <div className="flex items-center">
        {navlinks.map((link) => (
          <div key={link}>
            <a
              href={link === 'home' ? '#' : `#${link}`}
              className={`capitalize text-sm pr-5 pl-10 py-0 border-r-2 leading-none ${
                scrolled
                  ? 'border-black/50 hover:text-black text-gray-500'
                  : 'border-white/50 hover:text-white text-primary'
              }`}
            >
              {link}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
