import React from 'react'
import { blogs } from '../utils'
import BlogCards from './features/BlogCards'

const Blogs = () => {
  return (
    <div className='w-full h-fit px-60 py-30 ' id='blog'>
      <div className='text-black flex'>
          <p className='bg-secondary w-1 h-6 mt-[10px]'></p>
          <p className='text-4xl pl-4 w-200 font-heading tracking-wide leading-tight font-medium'>Our Blogs Coffee with trending topic for this week</p>
      </div>
      <div className='w-full pt-20 flex px-5 gap-20'>
          {blogs.map((set, i) => (
            <BlogCards key={i} set={set} />
          ))}
      </div>
    </div>
  )
}

export default Blogs