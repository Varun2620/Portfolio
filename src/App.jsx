import React from 'react'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import NavBar from '../src/components/NavBar/navBar'
import Footer from './components/Footer/Footer'
import HomeSkeleton from './components/Home/HomeSkeleton'
import HamburgMenu from './assets/menu.png'
import Close from './assets/close.png'
import Logo from './assets/logo_final-removebg.png'
import './App.css'

function App() {
  const [toggle, setToggle] = React.useState(false) 

  const LazyHome = lazy(() => 
    new Promise(resolve => 
      setTimeout(() => resolve(import('../src/components/Home/Home'), 20000))
    )
  )

  const LazyAbout = lazy(() => 
    new Promise(resolve => 
      setTimeout(() => resolve(import('../src/components/About/About'), 20000))
    )
  )

  const LazyEducation = lazy(() => 
    new Promise(resolve => 
      setTimeout(() => resolve(import('../src/components/Education/Education'), 20000))
    )
  )

  const LazySkills = lazy(() => 
    new Promise(resolve => 
      setTimeout(() => resolve(import('../src/components/Skills/Skills'), 20000))
    )
  )
  
  const LazyProject = lazy(() => 
    new Promise(resolve => 
      setTimeout(() => resolve(import('../src/components/Projects/Projects'), 20000))
    )
  )

  const LazyContact = lazy(() => 
    new Promise(resolve => 
      setTimeout(() => resolve(import('../src/components/Contact/Contact'), 20000))
    )
  )

  const LazyDesc = lazy(() => 
    new Promise(resolve => 
      setTimeout(() => resolve(import('../src/components/Projects/ProjectDescription/ProjectDescription'), 20000))
    )
  )

  function handleClick(){
    setToggle(prevState => !prevState)
  }

  return (
    <>
      <Router>
        <section className="portHeader">
            <img src={Logo}></img>
            <div className='btnContainer'>
              {
                toggle ? 
                  <NavBar/> :
                  <button className='btn' onClick={handleClick}>
                    <img src={HamburgMenu} alt='Menu' className='menuImg'/>
                  </button>
              }
              {
                toggle && <button className='btn' onClick={() => {
                  setToggle(prevState => !prevState)
                }}>
                  <img src={Close} alt='Close' className='closeImg'/>
                </button>
              }
            </div>
        </section>
        <Routes>
          <Route path='/' element={
              <Suspense fallback={<HomeSkeleton />}>
                <LazyHome />
              </Suspense>
          } />
          
          <Route path='/about' element={
              <Suspense fallback={<HomeSkeleton />}>
                <LazyAbout />
              </Suspense>
          } />
          
          <Route path='/education' element={
              <Suspense fallback={<HomeSkeleton />}>
                <LazyEducation />
              </Suspense>
          } />
          
          <Route path='/skills' element={
              <Suspense fallback={<HomeSkeleton />}>
                <LazySkills />
              </Suspense>
          } />

          <Route path='/projects' element={
              <Suspense fallback={<HomeSkeleton />}>
                <LazyProject />
              </Suspense>
          } />
          
          <Route path='/contact' element={
              <Suspense fallback={<HomeSkeleton />}>
                <LazyContact />
              </Suspense>
          } />

          <Route path='/projects/:projectName' element={
              <Suspense fallback={<HomeSkeleton />}>
                <LazyDesc />
              </Suspense>
          } />
          
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
