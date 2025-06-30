import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <main className="skillsContainer">
        <h1>Skills</h1>
        <section className="skillsContent">
          <article className="skillTab">
            <h3>Programming Languages:</h3>
            <p>C++, Java, JavaScript, Python</p>
          </article>

          <article className="skillTab">
            <h3>Web Technologies:</h3>
            <p>HTML, CSS, React, BootStrap</p>
          </article>
            
          <article className="skillTab">
            <h3>Frameworks & Libraries:</h3>
            <p>React.js, Bootstrap</p>
          </article>

          <article className="skillTab">
            <h3>Tools:</h3>
            <p>Git, GitHub, Visual Studio Code, Chrome Dev Tools, Figma</p>
          </article>

          <article className="skillTab">
            <h3>Web Development:</h3>
            <p>Responsive Design, Front end Development, Debugging, Troubleshooting</p>
          </article>

          <article className="skillTab">
            <h3>Other:</h3>
            <p>RESTful API integration(basic)</p>
          </article>
            
          <article className="skillTab">
            <h3>Soft Skills:</h3>
            <p>Time management, Effective Communication, Problem Solving, Adaptability</p>
          </article>
        </section>
    </main>
  )
}

export default Skills
