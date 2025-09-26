import React, { useState } from 'react'
import { products } from '../utils'
import ProductCard from './features/ProductCard'


const Product = () => {
  const [display, setDisplay] = useState(0)
  
  return (
    <div className='w-full h-fit' id='products'>
        <h1 className='flex '>
            <p className='bg-secondary w-1 h-6 mt-3'></p>
            <p className='text-4xl pl-4 tracking-wide leading-tight font-medium'>Choose our delicious and best products</p>
        </h1>
        <div className='w-full py-20 flex pr-50 gap-10'>
          {products.map((set, index) => (
            <div className={`w-1/3 ${index === 2 ? '' : 'border-r-2 border-primary/50'}`} key={index} onClick={() => setDisplay(index)}>
              <h1 className={`text-xl font-heading capitalize font-semibold ${index === display ? 'text-black' : 'text-[#555555]'} hover:text-black`}>{set.name}</h1>
              <p className={`${index === display ? 'text-[#5F5E5F]' : 'text-primary'}`}>{set.length}  products</p>
            </div>
          ))}
        </div>
        <div className='w-full flex gap-10 pb-30'>
          {products[display].items.map((set, index) => (
            <ProductCard current={display}  item={set} key={index} />
          ))}
        </div>
    </div>
  )
}

export default Product