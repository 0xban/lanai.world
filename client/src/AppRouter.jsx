import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='welcome' element={ <Home/> } />
                <Route path='explore' element={ <Explore/> } />
                <Route path='explorecard1' element={ <ExploreCard1/> } />
                <Route path='explorecard2' element={ <ExploreCard2/> } />
                <Route path='explorecard3' element={ <ExploreCard3/> } />
                <Route path='explorecard4' element={ <ExploreCard4/> } />
                <Route path='explorecard5' element={ <ExploreCard5/> } />
                <Route path='roadmap' element={ <Roadmap/> } />
                <Route path='swap' element={ <Swap/> } />
                <Route path='marketplace' element={ <Marketplace/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;