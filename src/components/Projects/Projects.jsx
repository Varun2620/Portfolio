import React from 'react'
import { useNavigate } from 'react-router-dom'
import { projData } from './ProjectDescription/ProjectData'
import logo from '../../assets/react.svg'
import './Projects.css'

function Projects() {
    const [hovered, setHovered] = React.useState(null)
    const navigate = useNavigate()

    const projectData = Object.entries(projData)

    function handleClick(projectName){
        navigate(`/projects/${projectName}`)
    }

    return (
        <main className='projectContainer'>
            <h1>Projects</h1>
            <section className='projectContent'>
                {projectData.map(([key, project], index) => (
                    <article
                    key={key}
                    className='projCard'
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={()=> handleClick(key)}
                    >
                        { console.log(project) }
                        <img src={project.projectImage} alt={project.projectName} />
                        { hovered === index && <h3 className='cardTitle'>{project.projectName}</h3> }
                    </article>
                ))}
            </section>
        </main>
    )
}

export default Projects
