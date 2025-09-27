import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Button = ({text, bgColor, textColor, icon}) => {
  return (
    <button className={`group text-${textColor} bg-${bgColor} uppercase text-[0.65rem] md:text-xs px-4 md:px-6 py-3 ml-2 md:ml-0 font-heading rounded-[4px] h-fit mt-2 cursor-pointer flex-center gap-2 w-fit` }>
      <p>{text}</p>
      {icon && <FaArrowRightLong className='group-hover:translate-x-2 smooth-transition' />}
    </button>
  )
}

export default Button