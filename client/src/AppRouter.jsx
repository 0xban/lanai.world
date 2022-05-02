import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages'
import { Roadmap } from './pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='welcome' element={ <Home/> } />
                <Route path='roadmap'element={ <Roadmap/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;