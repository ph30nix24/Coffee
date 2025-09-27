import React from 'react'
import SecondButton from './features/SecondButton'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full px-5 py-10 md:px-60 md:py-10 bg-[#111] text-white font-heading'>
        <h1 className='w-full text-[1.5rem]'>Coffee.</h1>
        <div className='flex flex-col md:flex-row gap-5 md:gap-10 pt-5'>
            <div className='w-full md:w-4/10 md:pr-10 h-fit'>
                <h2 className='text-[0.8rem] md:text-sm text-primary'>Subscribe to our newsletter</h2>
                <div className='flex pt-3 gap-2'>
                    <input type="text" className='bg-white rounded-[6px] w-full text-black outline-none px-3 text-[0.8rem] md:text-sm' placeholder='Your email address' name="email" id="" />
                    <SecondButton add={'rounded-[6px] p-3 bg-amber-500 text-black'} />
                </div>
            </div>
            <div className='w-full md:w-3/5 flex md:gap-10 gap-2 flex-wrap md:flex-nowrap'>
                <div className='w-3/10 md:w-1/2 grow'>
                    <h1 className='w-full text-[1rem] md:text-xl capitalize pb-2 md:pb-4'>address</h1>
                    <address className='text-[0.8rem] md:text-sm text-primary flex items-end'>
                        <span>
                            9876 Hacienda Av. <br/> Lima, La Librated 123, Peru
                        </span>
                        <img className='w-4 md:w-8 h-4 md:h-5 object-center object-contain hidden md:block' src="./assets/img/footerflag.png" alt="" />
                    </address>
                </div>
                <div className='w-1/3 md:w-1/4 h-fit'>
                    <h1 className='w-full text-[1rem] md:text-xl capitalize pb-2 md:pb-3'>Contect</h1>
                    <p className='text-[0.8rem] md:text-sm text-primary'>+987654321</p>
                    <a href="mailto:coffee@email.com" className='text-[0.8rem] md:text-sm text-primary'>coffee@email.com</a>
                </div>
                <div className='w-1/4 h-fit min-w-40'>
                    <h1 className='w-full text-[1rem] md:text-xl capitalize grow pb-2 md:pb-4'>office</h1>
                    <p className='text-[0.8rem] md:text-sm text-primary'>Monday-Saturday</p>
                    <p className='text-[0.8rem] md:text-sm text-primary'>9:00am-10:00pm</p>
                </div>
            </div>
        </div>
        <div className='w-full h-fit border-t-[1px] mt-5 md:mt-20 border-primary/50 flex justify-between items-center pt-5'>
            <div className='flex items-center gap-4 text-base'>
                <a href="#" className='text-primary  hover:text-white'><FaFacebookF /></a>
                <a href="#" className='text-primary  hover:text-white'><FaInstagram /></a>
                <a href="#" className='text-primary  hover:text-white'><FaTwitter/></a>
            </div>
            <p className='text-[0.65rem] md:text-xs text-primary'>Copyright © 2025 Coffee. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer