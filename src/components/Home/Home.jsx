import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function Home() {
  const navigate = useNavigate()

  function handleClick(){
    navigate('/projects')
  }

  return (
    <main className='homeContainer'>
        <section className='homeHeader'>
            <h1>Hi!</h1>
            <h1>I am Varun Kumar M</h1>
        </section>
        <section className='designation'>
            <p>SOFTWARE DEVELOPER</p>
            <button className='mainBtn' onClick={handleClick}>Visit my works</button>
        </section>
    </main>
  )
}

export default Home
