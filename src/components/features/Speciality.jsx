import React from 'react'

const Speciality = ({pic, heading, subheading, i}) => {
  return (
    <div className={`w-full flex flex-col justify-center items-center md:items-start md:w-1/3 ${i === 2 ? 'md:pr-15': 'md:border-r-2 border-b-2 md:border-b-0 md:pr-10 border-primary/50'}`}>
        <img className='size-24 object-contain hover:translate-y-2 smooth-transition' src={pic} alt="" />
        <h1 className='w-full pt-8 text-xl text-center md:text-start font-medium font-heading capitalize'>{heading}</h1>
        <p className='text-[#5F5E5F] pt-2 pb-5 md:pb-0 text-sm text-center font-heading md:text-start'>{subheading}</p>
    </div>
  )
}

export default Speciality