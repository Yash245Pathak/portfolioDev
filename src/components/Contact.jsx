import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaBehance } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

function Contact() {
    return (
        <div id='contact' className='px-5 md:px-10 mt-24'>
            <h1 className='text-[32px] font-bold'>Just say hi.</h1>
            <div className='flex flex-col md:flex-row gap-6 md:gap-0'>
                <div className='flex-1 flex justify-center items-center md:items-start flex-col gap-6'>
                    <p className='text-[24px] font-medium'>I'm always open to discuss your project and talk about new things.</p>
                    <div className='flex max-w-max gap-6 md:gap-16 flex-col md:flex-row'>
                        <div className='flex flex-col'>
                            <h1 className='font-thin text-[20px]'>Mail me at</h1>
                            <span>yashpathak245@gmail.com</span>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-thin text-[20px]'>Follow Me</h1>
                            <div className='flex gap-5'>
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
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center gap-6 bg-black/90 p-6'>
                    <input type="text" placeholder='Your Name' className='border border-b-white bg-transparent text-white outline-none p-2 w-[18rem]  md:w-[28rem]' />
                    <input type="email" placeholder='Email Address' className='border border-b-white bg-transparent text-white outline-none p-2 w-[18rem]  md:w-[28rem]' />
                    <textarea type="text" placeholder='Your Message' className='border border-b-white bg-transparent text-white outline-none p-2 w-[18rem]  md:w-[28rem]' />
                    <button className='p-2 bg-white text-black'>Submit</button>
                </div>
            </div>
            <span className='max-w-max flex mx-auto my-6 text-[20px] font-thin'>Copyright &copy; 2023, All rights reserved.</span>
        </div>
    )
}

export default Contact