import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {projData} from './ProjectData'
import './ProjectDescription.css'

function ProjectDescription() {
    const { projectName } = useParams()
    const navigate = useNavigate()
    const project = projData[projectName]

    console.log(project)

    function handleClick(){
        navigate(`/projects`)
    }

    return (
        <main className='desContainer'>
            <button className='desBtn' onClick={handleClick}>Back</button>
            <section className='description'>
                <article className='desContent'>
                    <img src={project.projectImage} alt={project.projectName} className='projImage' />
                    <div className="cardContent">
                        <h3>{project.projectName}</h3>
                        <p>{project.projectDesc}</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default ProjectDescription
