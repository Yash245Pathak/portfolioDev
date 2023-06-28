import React, { useState } from 'react'

const filterData = [
    {
        id: "all",
        name: "All"
    },
    {
        id: "web",
        name: "Web Apps"
    },
    {
        id: "mobile",
        name: "Mobile Apps"
    }
]

function ProdHead({ filterProject }) {
    const [active, setActive] = useState("");
    const clickHandler = (id) => {
        setActive(id)
        filterProject(id)
    }
    return (
        <div className='flex max-w-max justify-center items-center text-[16px] md:text-[22px] gap-12 mx-auto mt-10'>
            {filterData.map((i) => {
                return (
                    <span key={i.id} onClick={()=>clickHandler(i.id)} className={`cursor-pointer p-2 hover:bg-black hover:text-white ease-in-out duration-300 ${active === i.id ? "bg-black text-white" : ""}`}>{i.name}</span>
                )
            })}
        </div>
    )
}

export default ProdHead