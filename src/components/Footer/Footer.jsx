import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footerContainer'>
        <div className="footerContent">
            <p>&copy; 2025 Varun Kumar Developer</p>
            <p className='footerLinks'><a href="mailto:varunkumar262009@gmail.com">varunkumar262009@gmail.com</a></p>
            <p className='footerLinks'>
                <a href="https://www.linkedin.com/in/varun-kumar-m-3962282aa/">Linked in</a> | <a href="https://github.com/Varun2620">Github</a>
            </p>
            <p>Built with React.js</p>
        </div>
    </footer>
  )
}

export default Footer
