import React from 'react'
import Header from "../components/Header"
import About from "../components/AboutMe"
import Experience from "../components/Experience"
import Contacts from "../components/ContactMe"
import Footer from "../components/Footer"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <>
    <div>
    <Header />
    <About />
    <Skills />
    <Experience />
    <Contacts />
    <Footer />
    </div>
</>
  )
}

export default Home