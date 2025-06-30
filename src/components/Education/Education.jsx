import React from 'react'
import './Education.css'

function Education() {
  return (
    <main className='eduContainer'>
        <h1>Education</h1>
        <section className="eduContent">
                <article className="education">
                    <h3>Bachelor of Engineering(B.E) in Computer Science Engineering</h3>
                    <p>Easwari Engineering College</p>
                    <p><strong>Graduation:</strong> 2023</p>
                    <p><strong>CGPA:</strong> 8.72</p>
                </article>
                <article className="education">
                    <h3>Higher Secondary School Certificate (12<sup>th</sup>)</h3>
                    <p>Kendriya Vidyalaya CRPF Avadi</p>
                    <p><strong>Graduation:</strong> 2019</p>
                    <p><strong>Percentage:</strong> 80.8</p>
                </article>
                <article className="education">
                    <h3>Secondary School Leaving Certificate (10<sup>th</sup>)</h3>
                    <p>Kendriya Vidyalaya CRPF Avadi</p>
                    <p><strong>Graduation:</strong> 2017</p>
                    <p><strong>CGPA:</strong> 9.4</p>
                </article>
            </section>
    </main>
  )
}

export default Education
