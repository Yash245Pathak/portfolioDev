import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className='w-full relative h-20 mt-5 px-5 md:px-10 py-5 flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between items-center'>
      <div className='flex justify-between w-full items-center'>
        <img className='cursor-pointer w-28 md:w-36' src={logo} alt="" />
        <div onClick={()=>setOpen(!open)}>
          <FaBars className='text-[20px] text-[#202595] md:hidden' />
        </div>
      </div>
      <div className={`flex w-full items-center bg-white md:bg-none md:max-w-max flex-col md:relative md:flex md:flex-row gap-8 z-50 py-[5rem] md:py-0 ${open ? "translate-x-[0]" : "translate-x-[-600px]"} transition-all md:translate-x-0`}>
        <span className='cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#202595] transition-all max-w-max'>Home</span>
        <span className='cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#202595] transition-all max-w-max'>Services</span>
        <span className='cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#202595] transition-all max-w-max'>Skills</span>
        <span className='cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#202595] transition-all max-w-max'>Portfolio</span>
        <span className='cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#202595] transition-all max-w-max'>Experience</span>
        <span className='cursor-pointer hover:-translate-y-1 duration-300 hover:text-[#202595] transition-all max-w-max'>Contact</span>
      </div>
    </div>
  )
}
