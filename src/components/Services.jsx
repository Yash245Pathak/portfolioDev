import React from 'react'
import service from '../assets/services.svg'

function Services() {
    return (
        <div id='service' className='flex justify-center flex-col px-5 md:px-10 mt-32'>
            <h1 className='text-[32px] font-bold'>What I do?</h1>
            <div className='flex flex-col md:flex-row md:gap-0 mt-20 md:mt-0'>
                <div className='flex-1 flex justify-center flex-col'>
                    <p className='py-2 md:text-[20px]'>I am a smart worker and a quick learner who is passionate about his skills and want to enhance them so that i can be an asset for my organization. Talking about my skillset i am skilled in Modern Front-End technologies such as React.js & Tailwind CSS also i have some experience with UI/UX designing.</p>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <img className='w-[30rem] md:w-[35rem]' src={service} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Services