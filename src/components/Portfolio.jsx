import React, { useState } from 'react'
import { data } from '../data/PortfolioData'
import ProdHead from '../utils/ProdHead'
import FilterProd from '../utils/FilterProd'

function Portfolio() {
    const [project, setProject] = useState(data);

    const filterProject = (tag) => {
        setTimeout(()=>{
            if(tag !== "all"){
                const filteredProjects = data.filter((f)=>f.tags.includes(tag));
                setProject(filteredProjects)
            }else{
                setProject(data);
            }
        })
    }
    

    return (
        <section id='portfolio' className='px-5 md:px-10 mt-36'>
        <h1 className='text-[32px] font-bold'>Check Out My Portfolio</h1>
            <ProdHead filterProject={(tag)=> filterProject(tag)} />
            <FilterProd data={project} />
        </section>
    )
}

export default Portfolio