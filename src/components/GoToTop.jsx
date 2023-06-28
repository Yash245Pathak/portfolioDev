import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'

function GoToTop() {
    const [visible, setVisible] = useState(false);
    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    const listenToScroll = () => {
        let height = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > height) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    })
    return (
        <>
            {visible &&
                (<button onClick={goToTop} className='fixed right-4 bottom-4 md:right-8 md:bottom-6 bg-black rounded-full p-2 z-50'>
                    <BiArrowToTop className='text-[20px]  md:text-[32px]  text-white' />
                </button>)
            }
        </>
    )
}

export default GoToTop