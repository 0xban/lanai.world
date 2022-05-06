import React from 'react'

import { ComingSoonPage } from '../components/HomepageComponents'
import { Footer } from '../components/HomepageComponents'

const Swap = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-violet-900 flex flex-col h-screen">
        <ComingSoonPage/>
        <Footer/>
    </div>
  )
}

export default Swap