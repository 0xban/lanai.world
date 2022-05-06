import React from 'react'

import { ComingSoonPage, Navbar } from '../components/HomepageComponents'
import { Footer } from '../components/HomepageComponents'

const Marketplace = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-violet-900 flex flex-col h-screen">
        <Navbar />
        <ComingSoonPage/>
        <Footer/>
    </div>
  )
}

export default Marketplace