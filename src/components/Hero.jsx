import React from 'react'
import profile from '../assets/profile.svg'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaBehance } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'



function Hero() {
    return (
        <>
            <div id='hero' className='flex px-5 md:px-10 py-5 flex-col md:flex-row items-center gap-20 mt-8 md:gap-0 z-10'>
                <div className='flex-1 flex flex-col justify-center'>
                    <span className='text-[25px] md:text-[35px] font-thin'>Hello,</span>
                    <span className='flex gap-1 text-[32px] md:text-[45px]'>I'm <h1 className='font-bold'>Yash Pathak</h1> </span>
                    <div className='w-[9rem] md:w-[15rem] h-[3px] bg-[#202595] my-2'></div>
                    <p className='md:text-[20px]'>Front-End Developer skilled in React.js & Tailwind CSS, and a UI/UX designer.</p>
                    <button className='btn my-3 flex justify-center items-center gap-2 hover:rotate-2'><FiDownload className='text-[20px]' />Download CV</button>

                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className='w-[16rem] h-[16rem] md:w-[22rem] md:h-[22rem] p-5 md:p-8 rounded-full bg-blue-100 backdrop-blur-3xl flex justify-center items-center'>
                        <img className='w-[14rem] md:w-[20rem]' src={profile} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-between w-full items-center px-5 md:px-10 mt-8'>
                <div className='flex text-[25px] gap-6'>
                    <a className='hover:rotate-12 transition-all' href="/" target='black'>
                        <BsLinkedin />
                    </a>
                    <a className='hover:rotate-12 transition-all' href="/" target='black'>
                        <BsGithub />
                    </a>
                    <a className='hover:rotate-12 transition-all' href="/" target='black'>
                        <FaTwitter />
                    </a>
                    <a className='hover:rotate-12 transition-all' href="/" target='black'>
                        <FaBehance />
                    </a>
                </div>
                <div className='flex py-6 md:py-0'>
                    <span className='max-w-max cursor-pointer md:text-[20px]'>yashpathak245@gmail.com</span>
                </div>
            </div>
        </>
    )
}

export default Hero