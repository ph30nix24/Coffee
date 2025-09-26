import React from 'react'

const Speciality = ({pic, heading, subheading, i}) => {
  return (
    <div className={`w-1/3 ${i === 2 ? 'pr-15': 'border-r-2 pr-10 border-primary/50'}`}>
        <img className='size-24 object-contain hover:translate-y-2 smooth-transition' src={pic} alt="" />
        <h1 className='w-full pt-8 text-xl font-medium font-heading capitalize'>{heading}</h1>
        <p className='text-[#5F5E5F] pt-2'>{subheading}</p>
    </div>
  )
}

export default Speciality