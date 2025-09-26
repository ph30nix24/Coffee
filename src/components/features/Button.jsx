import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Button = ({text, bgColor, textColor, icon}) => {
  return (
    <button className={`group text-${textColor} bg-${bgColor} bg-black uppercase text-xs px-6 py-3 font-heading rounded-[4px] h-fit mt-2 cursor-pointer flex justify-center items-center gap-2` }>
      <p>{text}</p>
      {icon && <FaArrowRightLong className='group-hover:translate-x-2 smooth-transition' />}
    </button>
  )
}

export default Button