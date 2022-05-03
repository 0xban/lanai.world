import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages'
import { Roadmap } from './pages';
import { ExploreCard1 } from './pages';
import { ExploreCard2 } from './pages';
import { ExploreCard3 } from './pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='welcome' element={ <Home/> } />
                <Route path='explore' element={ <Explore/> } />
                <Route path='explorecard1' element={ <ExploreCard1/> } />
                <Route path='explorecard2' element={ <ExploreCard2/> } />
                <Route path='explorecard3' element={ <ExploreCard3/> } />
                <Route path='roadmap' element={ <Roadmap/> } />
                <Route path='swap' element={ <Swap/> } />
                <Route path='marketplace' element={ <Marketplace/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;