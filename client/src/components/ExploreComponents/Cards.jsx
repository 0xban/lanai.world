import React from 'react'

import lolcard1 from '../../../images/lolcard1.png'
import cogcard1 from '../../../images/cogcard1.png'
import nftccard1 from '../../../images/nftccard1.png'

import { Link } from "react-router-dom"

const Cards = () => {
  return (
        <div className="md:flex justify-center mx-6 md:mx-6">
                

            <div className="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-sky-900 max-w-fit md:max-w-xs hover:scale-105 active:scale-100 my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
            <Link to="/explorecard1">
                <img className="rounded-t-lg" src={lolcard1} alt="" />     
                <div className="p-6">
                    <h5 className="text-white text-xl font-semibold mb-2">
                        The Lore of Lanai
                    </h5>
                    <p className="text-white text-base mb-4">
                        Humanity's struggle to persevere and save the species.
                    </p>
                </div>
            </Link>
            </div>

            <div className="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-teal-500 to-emerald-900 max-w-fit md:max-w-xs hover:scale-105 active:scale-100 my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
            <Link to="/explorecard2">    
            <img className="rounded-t-lg" src={nftccard1} alt="" />  
                <div className="p-6">
                    <h5 className="text-white text-xl font-semibold mb-2">
                        Concepts of Gameplay
                    </h5>
                    <p className="text-white text-base mb-4">
                        The arena welcomes all, some strong, many weak.
                    </p>
                </div>
            </Link>   
            </div>

            <div className="cursor-pointer rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-fuchsia-800 max-w-fit md:max-w-xs hover:scale-105 active:scale-100 my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
            <Link to="/explorecard3">
                <img className="rounded-t-lg" src={cogcard1} alt=""/>     
                <div className="p-6">
                    <h5 className="text-white text-xl font-semibold mb-2">
                        NFT Cosmetics
                    </h5>
                    <p className="text-white text-base mb-4">
                        Cosmetics in Lanai, showcased and explained here.
                    </p>
                </div>
            </Link>
            </div>

        </div>
  )
}

export default Cards

