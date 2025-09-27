import React from 'react'
import { aboutCoffee } from '../utils'
import Speciality from './features/Speciality'
import Product from './Product'
import Button from './features/Button'
const About = ({id}) => {
  return (
    <div className='w-full h-fit pt-20 md:pt-30 px-5 md:px-60 bg-white' >
        <div className='flex w-full justify-between md:pr-20 flex-col md:flex-row'>
            <div className='text-black flex'>
                <p className='bg-secondary w-1 h-4 md:h-6 mt-1.5 md:mt-[12px]'></p>
                <p className='text-[1.5rem] font-heading md:text-4xl pl-2 md:pl-4 w-full md:w-160 tracking-wide leading-tight font-medium pb-2 md:pb-0'>Specialty coffees that make you happy and cheer you up!</p>
            </div>
            <Button text={"see more"} bgColor={"black"} textColor={"white"} />
        </div>
        <div className='w-full py-10 md:py-30 flex flex-col md:flex-row gap-5 md:gap-10 '>
            {aboutCoffee.map((set, index)=> (
                <Speciality pic={set.pic} heading={set.heading} subheading={set.subheading} i={index} key={index} />
            ))}
        </div>
        
    </div>
  )
}

export default About