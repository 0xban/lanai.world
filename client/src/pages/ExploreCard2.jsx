import React from 'react'

import { ComingSoonPage, Navbar } from '../components/HomepageComponents'
import { Footer } from '../components/HomepageComponents'

const ExploreCard2 = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-violet-900 flex flex-col">
        <Navbar />
        <ComingSoonPage/>
        <Footer/>
    </div>
  )
}

export default ExploreCard2