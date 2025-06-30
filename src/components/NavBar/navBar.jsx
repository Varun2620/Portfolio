import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

function navBar() {
  return (
    <header className='navContainer'>
        <nav className='navBar'>
            <ul className='linksContainer'>
                <li className="navLinks">
                    <Link to='/'>Home</Link>
                </li>

                <li className="navLinks">
                    <Link to='/about'>About</Link>
                </li>

                <li className="navLinks">
                    <Link to='/education'>Education</Link>
                </li>

                <li className="navLinks">
                    <Link to='/skills'>Skills</Link>
                </li>

                <li className="navLinks">
                    <Link to='/projects'>Projects</Link>
                </li>

                <li className="navLinks">
                    <Link to='/contact'>Contact</Link>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default navBar
