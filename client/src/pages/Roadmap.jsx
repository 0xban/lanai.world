import React from 'react'

import { Timeline, TimelinePrecursor } from '../components/RoadmapComponents'
import { Footer } from '../components/HomepageComponents'

const Roadmap = () => {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-violet-900">
        <TimelinePrecursor />
        <Timeline />
        <Footer />
    </div>
  )
}

export default Roadmap