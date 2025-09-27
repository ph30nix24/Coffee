import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Navigate from './components/Navigate'
import Premium from './components/Premium'
import Brands from './components/Brands'
import Product from './components/Product'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

const App = () => {
  const [scrolled, setScrolled] = useState(false)
  const [currentId, setCurrentId] = useState("home")


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100 // adjust for navbar height
        const sectionHeight = section.clientHeight
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id")
        }
      })

      setCurrentId(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full min-h-screen smooth-transition relative">
      <Navbar onScrollChange={setScrolled} currentId={currentId} />

      
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id='products'><Product /></section>
      <section id="navigate"><Navigate onScrollChange={scrolled} /></section>
      <section id="premium"><Premium /></section>
      <section id="brands"><Brands /></section>
      <section id="blog"><Blogs /></section>
      <section id="footer"><Footer /></section>
    </div>
  )
}

export default App
