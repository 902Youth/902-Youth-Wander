import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Survival from './components/Resources/Survival'
import FirstAid from './components/Resources/Resource-Pages/FirstAid'
import Campfire from './components/Resources/Resource-Pages/Campfire'
import Navigation from './components/Resources/Resource-Pages/Navigation'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import './App.css'

function App() {
  

  return (
    <>
    <Nav  />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/resources' element={<Survival />} />
      <Route path='/first-aid' element={<FirstAid />}/>
      <Route path='/campfire' element={<Campfire />} />
      <Route path='/navigation' element={<Navigation />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
