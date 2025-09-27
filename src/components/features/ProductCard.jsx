import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ProductCard = ({item, current}) => {
  useGSAP(()=>{
    gsap.fromTo('.items', {y: 100, scale: 0.5}, {y: 0, scale: 1, duration: 0.5})
  },[current])
  return (
    <div className='min-w-50 md:w-1/4 max-w-[230px] shadow-xl md:shadow-2xl rounded-2xl overflow-hidden items'>
        <div className='w-full h-40 md:h-[240px] flex justify-center items-center bg-gray-200'>
          <img className=' object-center object-contain size-3/5 hover:translate-y-2 smooth-transition' src={item.pic} alt="" />
        </div>
        <div className='p-2 px-3 md:p-5 relative'>
          <p className='font-semibold text-[1.2rem] md:text-xl font-heading pb-2'>$ {item.price}</p>
          <h1 className='font-semibold text-[1rem] md:text-lg font-heading capitalize'>{item.itemName}</h1>
          <button className='absolute text-2xl p-3 bg-black text-white rounded-full top-0 right-0 -translate-y-1/2 -translate-x-1/2 cursor-pointer'><IoBagHandleOutline /></button>
        </div>
    </div>
  )
}

export default ProductCard