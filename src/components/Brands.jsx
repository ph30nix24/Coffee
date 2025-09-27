import React from 'react'
import { logos } from '../utils'
import BrandLogo from './features/BrandLogo'

const Brands = () => {
  return (
    <div className='w-full h-fit px-5 md:px-60'>
        <div className='w-full py-10 border-t-2 border-primary/50 flex gap-5 flex-center'>
            {logos.map((pic, i) => (
                <BrandLogo key={i} logo={pic} />
            ))}
        </div>
    </div>
  )
}

export default Brands