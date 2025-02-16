

import React from 'react'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'

import Category from './components/Category'
import Hero from './components/Hero'
import FeaturedProduct from './components/FeaturedProduct'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <MobileNav />
      <Hero />
      <Category />
      <FeaturedProduct/>
     <Footer/>
    </div>
  )
}

export default App
