import React from 'react'

import { Footer, Navbar } from '../components/HomepageComponents'
import { AccordionCard1 } from '../components/ExploreComponents/Card1Components'

const ExploreCard1 = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-violet-900 flex flex-col">
        <Navbar />
        <AccordionCard1/>
        <Footer/>
    </div>
  )
}

export default ExploreCard1