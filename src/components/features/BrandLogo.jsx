import React from 'react'

const BrandLogo = ({logo}) => {
  return (
    <div className='w-1/5 h-full flex-center'>
        <img src={logo} className='size-4/5 opacity-50 hover:opacity-100 smooth-transition object-center object-contain' alt="" />
    </div>
  )
}

export default BrandLogo