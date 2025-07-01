import React from 'react'
import {saveAs} from 'file-saver'
import './About.css'

function About() {

  async function fileDownload(){
    try{
      const res = await fetch('/Varunkumar_M_resume.pdf')
      const blob = await res.blob()

      const pdfBlob = new Blob([blob], {type: 'application/pdf'})
      
      saveAs(pdfBlob, 'Resume.pdf')
    }catch(err){
      console.error('Error downloading PDF', err)
    }
  }

  return (
    <section className="aboutContainer" id='about'>
        <h1>ABOUT ME</h1>
        <article className='aboutContent'>
            <p>
                I'm Varun Kumar M, a dedicated and detail-oriented Front-End Developer situated 
                in Chennai, Tamil Nadu. With a Bachelor of Engineering in Computer Science and 
                Engineering degree, I have a solid academic background along with real-world 
                experience via internships, freelancing, and personal projects. I am committed 
                to developing responsive, accessible, and user-friendly online applications with 
                HTML5, CSS3, JavaScript, React.js, Bootstrap, and modern design tools such as Figma.
            </p>
            <p>
                I enjoy transforming UI/UX layouts into functional code and have experience working 
                with tools like Figma, Visual Studio Code, and Chrome DevTools. My projects span from 
                interactive restaurant apps to note editors with data retention capabilities, demonstrating 
                my dedication to clean coding and user-centered design. I consider myself a quick learner 
                and strong communicator who thrives in collaborative, fast-paced workplaces.
            </p>
            <p>
              Apart from coding, I enjoy discovering new technologies, honing my UI/UX skills, and learning 
              from community-driven development. Let's connect and create something amazing together!
            </p>
            <button className='aboutBtn' onClick={fileDownload}>Download Resume</button>
        </article>
    </section>
  )
}

export default About
