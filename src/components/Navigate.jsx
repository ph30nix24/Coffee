import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const Navigate = ({onScrollChange}) => {
  return (
    <div className={`fixed bottom-20 right-20 -translate-1/2 text-xl text-black hover:translate-y-[1px] smooth-transition ${onScrollChange ? 'block' : 'hidden'} shadow-xl shadow-black/40 rounded-[2px] p-2`}>
       <a href="#"> <FaArrowUp /></a>
    </div>
  )
}

export default Navigate