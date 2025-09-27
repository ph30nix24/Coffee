import React from 'react'
import { blogs } from '../utils'
import BlogCards from './features/BlogCards'

const Blogs = ({id}) => {
  return (
    <div className='w-full h-fit px-5 md:px-60 py-10 md:py-30 ' id={id}>
      <div className='text-black flex'>
          <p className='bg-secondary w-1 h-4 md:h-6 mt-2 md:mt-[10px]'></p>
          <p className='text-[1.5rem] md:text-4xl pl-2 md:pl-4 w-200 font-heading tracking-wide leading-tight font-medium'>Our Blogs Coffee with trending topic for this week</p>
      </div>
      <div className='w-full pt-10 md:pt-20 flex flex-col md:flex-row px-5 gap-5 md:gap-20'>
          {blogs.map((set, i) => (
            <BlogCards key={i} set={set} />
          ))}
      </div>
    </div>
  )
}

export default Blogs