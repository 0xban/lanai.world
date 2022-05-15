import React from 'react'

import { ComingSoonPage, Navbar, Footer } from '../components/HomepageComponents'
import { Team } from '../components/ExploreComponents/Card5Components'

const ExploreCard5 = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-violet-900 flex flex-col h-max md:h-screen">
        <Navbar />
        <Team/>
        <Footer/>
    </div>
  )
}

export default ExploreCard5