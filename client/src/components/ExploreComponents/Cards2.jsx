import React from 'react'

import fnscard1 from '../../../images/fnscard1.png'
import teamcard1 from '../../../images/teamcard1.png'

import { Link } from "react-router-dom"

const Cards2 = () => {
  return (
        <div className="md:flex justify-center mx-6">
            <div className="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-slate-400 to-slate-900 max-w-fit md:max-w-xs hover:scale-105 active:scale-100 my-4 mx-4 mt-0 md:mt-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
            <Link to="/explorecard4">
                <img className="rounded-t-lg" src={fnscard1} alt="" />     
                <div className="p-6">
                    <h5 className="text-white text-xl font-semibold mb-2">
                        Farming & Staking
                    </h5>
                    <p className="text-white text-base mb-4">
                        How your hard-earned $CHROM works for you.
                    </p>
                </div>
            </Link>
            </div>

            <div className="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-rose-400 to-indigo-700  max-w-fit md:max-w-xs hover:scale-105 active:scale-100S my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
            <Link to="/explorecard5">    
            <img className="rounded-t-lg" src={teamcard1} alt="" />  
                <div className="p-6">
                    <h5 className="text-white text-xl font-semibold mb-2">
                        Team
                    </h5>
                    <p className="text-white text-base mb-4">
                        The minds behind Lanai and their roles.
                    </p>
                </div>
            </Link>   
            </div>

            <div className="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-amber-500 to-indigo-600 max-w-fit md:max-w-xs hover:scale-105 active:scale-100S my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
            <a href="https://docs.lanai.world" target="_blank" rel="noreferrer noopener">   
            <img className="rounded-t-lg" src={teamcard1} alt="" />  
                <div className="p-6">
                    <h5 className="text-white text-xl font-semibold mb-2">
                        Game Docs
                    </h5>
                    <p className="text-white text-base mb-4">
                        Official whitepaper and game documentation located here.
                    </p>
                </div>
            </a>   

            </div>

        </div>
  )
}

export default Cards2