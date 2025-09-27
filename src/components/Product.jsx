import React, { useState } from 'react'
import { products } from '../utils'
import ProductCard from './features/ProductCard'


const Product = ({id}) => {
  const [display, setDisplay] = useState(0)
  
  return (
    <div className='w-full h-fit md:px-60 px-5 pt-10 md:pt-0' id='products'>
        <h1 className='flex '>
            <p className='bg-secondary w-1 h-4 md:h-6 mt-2 md:mt-3'></p>
            <p className='text-[1.5rem] font-heading md:text-4xl pl-2 md:pl-4 tracking-wide leading-tight font-medium'>Choose our delicious and best products</p>
        </h1>
        <div className='w-full py-10 md:py-20 flex flex-wrap md:flex-nowrap md:pr-50 md:gap-10 gap-5'>
          {products.map((set, index) => (
            <div className={`group w-1/3 min-w-[160px] grow ${index === 2 ? 'border-b-2 md:border-b-0 pb-2 border-primary/50' : 'md:border-r-2 border-b-2 md:border-b-0 md:pr-10 pb-2 border-primary/50'} cursor-pointer`} key={index} onClick={() => setDisplay(index)}>
              <h1 className={`text-[1rem] md:text-xl font-heading capitalize font-semibold ${index === display ? 'text-black' : 'text-[#555555]'} group-hover:text-black`}>{set.name}</h1>
              <p className={`text-[0.85rem] md:text-base  ${index === display ? 'text-[#5F5E5F]' : 'text-primary'} group-hover:text-black`}>{set.length}  products</p>
            </div>
          ))}
        </div>
        <div className='w-full flex gap-5 md:gap-10 overflow-x-auto md:overflow-visible pb-20 md:pb-30'>
          {products[display].items.map((set, index) => (
            <ProductCard current={display}  item={set} key={index} />
          ))}
        </div>
    </div>
  )
}

export default Product