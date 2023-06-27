import React from 'react'

function FilterProd({ data }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 max-w-max mx-auto mt-10'>
            {data.map((p) => {
                return (
                    <img className='w-[20rem] h-[14rem] object-fill border border-gray-300 rounded-3xl cursor-pointer' src={p.media} alt="" />
                )
            })}
        </div>
    )
}

export default FilterProd