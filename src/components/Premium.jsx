import React from 'react'
import Button from './features/Button'
import { FaArrowRightLong } from "react-icons/fa6";

const Premium = () => {
  return (
    <div className='w-full h-screen py-30 px-60' id='premium'>
        <div className='text-black flex pb-20'>
            <p className='bg-secondary w-1 h-6 mt-[14px]'></p>
            <p className='text-4xl pl-4 w-180 tracking-wide leading-tight font-medium'>We offer a premium and better quality preparation just for you!</p>
        </div>
        <div className='w-full px-5 flex gap-10'>
            <div className='w-1/2 h-[420px] relative'>
              <img src="./assets/img/quality1.png" className="w-9/10 h-full object-cover object-center rounded-2xl" alt="" />
              <img src="./assets/img/quality2.png" className="w-3/10 h-2/5 absolute top-1/2 right-0 -translate-x-2 -translate-y-1/2 object-cover object-center rounded-2xl" alt="" />
            </div>
            <div className='w-1/2 h-[420px] relative py-10'>
                <h1 className='text-5xl font-medium font-heading capitalize'>premium coffee</h1>
                <h2 className='text-4xl font-heading mt-10 font-semibold'>$94.99</h2>
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