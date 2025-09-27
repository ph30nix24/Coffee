import React, { useEffect, useState } from 'react'
import { navlinks } from '../utils/index'
import { useWindowScroll } from 'react-use'
import { BsColumnsGap } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";


const Navbar = ({ onScrollChange, currentId }) => {
  const { y: currentY } = useWindowScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false)

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
      className={`w-full md:h-fit fixed top-0 z-50 px-5 md:px-60 md:flex-row ${isClicked ? 'flex-col h-full py-10 !bg-black' : 'flex-row h-fit py-5 bg-transparent'}  flex justify-between items-center md:py-6 ${
        scrolled ? '!bg-white shadow-xl' : 'bg-transparent shadow-none'
      }`}
    >
      <div className="flex items-center md:justify-start gap-2">
        <img
          src={scrolled ? "./assets/img/lightLogo.png" : "./assets/img/logo.png"}
          className="size-4 object-contain"
          alt=""
        />
        <a
          href="#"
          className={`capitalize text-base font-heading ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          coffee.
        </a>
      </div>
      <div className={`md:flex items-center md:flex-row flex-col h-full md:justify-start md:h-fit ${isClicked ? 'flex item justify-center' : 'hidden'}`}>
        {navlinks.map((link) => (
          <div className='py-5 md:py-0' key={link}>
            <a
              href={link === 'home' ? '#' : `#${link}`}
              className={`capitalize text-2xl font-heading  md:text-sm md:pr-5 md:pl-10 md:py-0 md:border-r-2 leading-none ${
                scrolled
                  ? currentId === link ? 'text-black'
                  : 'text-primary' : currentId === link && '#' ? '!text-white ': 'text-primary hover:text-white'
              }  `}
            onClick={() => setIsClicked(false)}
             > 
              {link}
            </a>
          </div>
        ))}
      </div>
      <div className={`${scrolled ? 'text-black' : 'text-white'} block md:hidden cursor-pointer`} onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? <RxCross2 /> : <BsColumnsGap />}
      </div>
    </div>
  )
}

export default Navbar
