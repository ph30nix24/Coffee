import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const SecondButton = ({add}) => {
  return (
    <button className={` text-xl smooth-transition font-heading h-fit cursor-pointer ${add}`}><MdOutlineArrowOutward className='group-hover:translate-x-1 group-hover:-translate-y-1 smooth-transition' /></button>
  )
}

export default SecondButton