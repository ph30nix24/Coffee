import React, { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Navigate from './components/Navigate'
import Premium from './components/Premium'
import Brands from './components/Brands'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

const App = () => {
  const [scrolled, setScrolled] = useState(false)
  return (
    <div className='w-full min-h-screen smooth-transition relative'>
      <Navbar onScrollChange={setScrolled} />
      <Hero />
      <About />
      <Navigate onScrollChange={scrolled} />
      <Premium />
      <Brands />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App