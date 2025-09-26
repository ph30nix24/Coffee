import React from 'react'
import { aboutCoffee } from '../utils'
import Speciality from './features/Speciality'
import Product from './Product'
import Button from './features/Button'
const About = () => {
  return (
    <div className='w-full h-fit pt-30 px-60 bg-white' id='about'>
        <div className='flex w-full justify-between pr-20'>
            <div className='text-black flex'>
                <p className='bg-secondary w-1 h-6 mt-[14px]'></p>
                <p className='text-4xl pl-4 w-160 tracking-wide leading-tight font-medium'>Specialty coffees that make you happy and cheer you up!</p>
            </div>
            <Button text={"see more"} bgColor={"black"} textColor={"white"} />
        </div>
        <div className='w-full py-30 flex gap-10 '>
            {aboutCoffee.map((set, index)=> (
                <Speciality pic={set.pic} heading={set.heading} subheading={set.subheading} i={index} key={index} />
            ))}
        </div>
        <Product />
    </div>
  )
}

export default About