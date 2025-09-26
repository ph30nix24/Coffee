import React from 'react'
import { BiComment } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import SecondButton from './SecondButton';

const BlogCards = ({set}) => {
  return (
    <div className='w-1/2 h-fit group'>
        <div className='w-full h-[260px] rounded-2xl overflow-hidden relative'>
            <img src={set.img} className='w-full h-full object-cover object-center' alt="" />
            <SecondButton add={'absolute bottom-0 right-0 p-5 rounded-tl-lg text-black bg-white'}/>
        </div>
        <div className='w-full py-5'>
            <h1 className='text-xl font-semibold font-heading capitalize'>{set.title}</h1>
            <p className='text-sm font-heading pt-2 pb-6'>{set.para}</p>
            <div className='flex gap-5 items-center'>
                <div className='flex-center gap-2 items-center'>
                    <BiComment className='text-base text-gray-700' />
                    <p className='text-sm font-heading text-black/80'>{set.comments}</p>
                </div>
                <div className='flex-center gap-2 items-center'>
                    <IoEyeSharp className='text-base text-gray-700' />
                    <p className='text-sm font-heading text-black/80'>{set.views} k</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCards