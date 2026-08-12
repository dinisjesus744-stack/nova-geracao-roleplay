import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowTo from './components/HowTo'
import Exclusives from './components/Exclusives'
import Highlight from './components/Highlight'
import Discord from './components/Discord'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowTo />
        <Exclusives />
        <Highlight />
        <Discord />
      </main>
      <Footer />
    </div>
  )
}
