import React from 'react'
import Button from './features/Button'
import { FaArrowRightLong } from "react-icons/fa6";

const Premium = ({id}) => {
  return (
    <div className='w-full h-fit md:h-screen md:py-30 px-5 md:px-60' id={id}>
        <div className='text-black flex pb-10 md:pb-20'>
            <p className='bg-secondary w-1 h-4 mt-2 md:h-6 md:mt-[14px]'></p>
            <p className='text-[1.5rem] font-heading md:text-4xl pl-2 md:pl-4 w-180 tracking-wide leading-tight font-medium'>We offer a premium and better quality preparation just for you!</p>
        </div>
        <div className='w-full px-5 flex md:flex-row flex-col gap-5 md:gap-10'>
            <div className='w-full md:w-1/2 md:h-[420px] relative'>
              <img src="./assets/img/quality1.png" className="w-9/10 h-full object-cover object-center rounded-2xl" alt="" />
              <img src="./assets/img/quality2.png" className="w-3/10 h-2/5 absolute top-1/2 right-0 -translate-x-2 -translate-y-1/2 object-cover object-center rounded-2xl" alt="" />
            </div>
            <div className='w-full md:w-1/2 md:h-[420px] relative md:pt-8 pb-10'>
                <h1 className='text-[2rem] md:text-5xl font-medium font-heading capitalize'>premium coffee</h1>
                <h2 className='text-[1.5rem] md:text-4xl font-heading md:mt-10 font-semibold'>$94.99</h2>
                <p className='text-sm capitalize pt-2'>especial price</p>
                <p className='text-base font-heading mt-5 pb-10'>We are delighted with our coffee. That's why you get the premium coffee plus the kettle make of resistant materials that you see in the image, for a special price.</p>
                <div className='w-full flex gap-2'>
                  <Button text={"buy now"} bgColor={"black"} textColor={"white"} />
                  <Button text={"see more"} icon={<FaArrowRightLong />} bgColor={"white"} textColor={"black"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Premium