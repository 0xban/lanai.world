import React from 'react'

import { Navbar, Footer } from '../components/HomepageComponents'
import { NFTIntro } from '../components/ExploreComponents/Card3Components'

const ExploreCard3 = () => {
  return (
    <div className='bg-gradient-to-r from-sky-700 to-violet-900' >
        <Navbar/>
        <NFTIntro/>
        <Footer/>
    </div>
  )
}

export default ExploreCard3