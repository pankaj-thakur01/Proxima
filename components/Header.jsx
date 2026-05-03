"use client"

import React, { useState } from 'react'
import Image from "next/image";
import proxima from '../public/proxima.png'
import Link from 'next/link';





const Header = () => {

      const [openmenu, setopenmenu] = useState(false)
    
  return (
<div className='sticky top-0 left-0 w-full z-50'>
        <div className='hidden md:block'>
          <div className=' flex text-xl  bg-[#14307D] text-white  justify-between px-10 lg:px-30 items-center p-1 '>

            <div className='lg:flex gap-10 font-bold'>
              <div className='text-base'>+91 1234567890</div>
              <div className='text-base'>info@elysiandigitalservices.com</div>
            </div>

            <ul className='flex gap-6 '>
              <button className='border-red-500 p-1 rounded-md bg-[#E60601]'>Request a call</button>
              <button className='border-red-500 p-1 rounded-md bg-[#E60601]'>Get in Touch</button>


            </ul>


          </div>
        </div>


        {/* Main Header */}

        <div className=' flex text-xl text-black justify-between px-2 lg:px-30 items-center bg-white'>
          <div>
            <Link href="/">
              <Image src={proxima} className='cursor-pointer' alt='logo' width={140} height={100} />
            </Link>
          </div>
{
openmenu ?             <Image onClick={() => setopenmenu(false)} className='block lg:hidden cursor-pointer' 
         
src=
  "https://cdn-icons-png.freepik.com/512/8438/8438629.png"
          alt='logo'  width={60} height={100}
           />
           :
          <Image onClick={() => setopenmenu(true)} className='block lg:hidden cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt='logo' width={50} height={50} />

}


           



          <div className='hidden lg:block'>
            <ul className='flex gap-4 font-semibold'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>



        {
          openmenu && <div>
            <div className='bg-white lg:hidden'>
              <ul className='flex-col px-6 text-black gap-4  text-lg font-semibold'>

                <a onClick={()=>setopenmenu(false)}  href="#home">     <li className='w-full cursor-pointer active:bg-gray-50  hover:bg-gray-50 p-3 border-b' >Home</li></a>
                <a onClick={()=>setopenmenu(false)} href="#about">    <li className='w-full cursor-pointer  active:bg-gray-50 hover:bg-gray-50 p-3 border-b' >About Us</li></a>
                <a onClick={()=>setopenmenu(false)} href="#services"> <li className='w-full cursor-pointer  active:bg-gray-50 hover:bg-gray-50 p-3 border-b' >Service</li></a>
                <a onClick={()=>setopenmenu(false)} href="#contact"> <li  className='w-full cursor-pointer  active:bg-gray-50 hover:bg-gray-50 p-3 border-b' >Contact Us</li></a>

              </ul>
            </div>
          </div>
        }




      </div>

)
}

export default Header