import React from 'react'
import SecondButton from './features/SecondButton'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full px-60 py-20 bg-[#111] text-white font-heading'>
        <h1 className='w-full'>Coffee.</h1>
        <div className='flex gap-10 pt-5'>
            <div className='w-4/10 pr-10 h-fit '>
                <h2 className='text-sm text-primary'>Subscribe to our newsletter</h2>
                <div className='flex pt-3 gap-2'>
                    <input type="text" className='bg-white rounded-[6px] w-full text-black outline-none px-3 text-sm' placeholder='Your email address' name="email" id="" />
                    <SecondButton add={'rounded-[6px] p-3 bg-amber-500 text-black'} />
                </div>
            </div>
            <div className='w-3/10'>
                <h1 className='w-full text-xl capitalize pb-4'>address</h1>
                <address className='text-sm text-primary flex items-end'>
                    <span>
                        9876 Hacienda Av. <br/> Lima, La Librated 123, Peru
                    </span>
                    <img className='w-8 h-5 object-center object-contain' src="./assets/img/footerflag.png" alt="" />
                </address>
            </div>
            <div className='w-[15%] h-fit'>
                <h1 className='w-full text-xl capitalize pb-3'>Contect</h1>
                <p className='text-sm text-primary'>+987654321</p>
                <a href="mailto:coffee@email.com" className='text-sm text-primary'>coffee@email.com</a>
            </div>
            <div className='w-[15%] h-fit'>
                <h1 className='w-full text-xl capitalize pb-4'>office</h1>
                <p className='text-sm text-primary'>Monday-Saturday</p>
                <p className='text-sm text-primary'>9:00am-10:00pm</p>
            </div>
        </div>
        <div className='w-full h-fit border-t-[1px] mt-20 border-primary/50 flex justify-between items-center pt-5'>
            <div className='flex items-center gap-4 text-base'>
                <a href="#" className='text-primary  hover:text-white'><FaFacebookF /></a>
                <a href="#" className='text-primary  hover:text-white'><FaInstagram /></a>
                <a href="#" className='text-primary  hover:text-white'><FaTwitter/></a>
            </div>
            <p className='text-xs text-primary'>Copyright © 2025 Coffee. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer