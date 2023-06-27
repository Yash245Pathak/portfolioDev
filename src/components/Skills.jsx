import React from 'react'
import { skill } from '../data/skill.js'

function Skills() {
    return (
        <>
            <div id='skill' className='flex flex-col px-5 md:px-10 mt-20'>
                <h1 className='text-[32px] font-bold'>Skills</h1>
                <div className='mt-20 grid grid-rows-4 md:grid-rows-2  grid-flow-col gap-10'>
                    {skill.map((skill) => {
                        return (
                            <div key={skill.text} className='flex gap-2 justify-center items-center max-w-max'>
                                <span className='text-[50px] md:text-[65px]'>{skill.icon}</span>
                                <span className='text-[15px] md:text-[20px]'>{skill.text}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills