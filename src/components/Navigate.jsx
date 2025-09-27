import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Navigate = ({onScrollChange}) => {
  return (
    <div className={` group fixed bottom-0 right-0 md:bottom-20 md:right-20 -translate-1/2 text-xl bg-white text-black  ${onScrollChange ? 'block' : 'hidden'} shadow-xl shadow-black/40 rounded-[2px] p-3 z-50 cursor-pointer`}>
       <a href="#"> <FaArrowUp className='group-hover:-translate-y-1 smooth-transition ' /></a>
    </div>
  )
}

export default Navigate