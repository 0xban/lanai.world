import React from 'react'

import { Link } from 'react-router-dom'

import loopinglanai from '../../../video/loopinglanai.mp4';
import logo from '../../../images/LANAI.png';

const VideoLanding = () => {
  return (
        
        <div>

            <video autoPlay loop muted style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src={loopinglanai} type='video/mp4' />
            </video>

            <div className="flex justify-center p-6 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
                    <img src={logo} alt="logo" className="md:w-64 md:ml-8 md:mr-6 w-64"></img>
            </div>

            <h1 className="text-center font-bold text-3xl drop-shadow-2xl md:text-5xl text-indigo-900 mx-6 my-16 md:my-32">
                DeFi's first Real-Time PvP Arena.
            </h1>
            
            <div className='flex justify-center'>
                <Link to="/home">
                    <button className="text-xl 
                                        text-white   
                                        active:scale-95 
                                        bg-violet-500 
                                        font-bold
                                        px-6
                                        py-2.5 
                                        rounded-lg
                                        flex-center
                                        mb-6
                                        hover:transition-all duration-500 ease-in-out
                                        hover:bg-violet-600
                                        hover:drop-shadow-2xl">
                            Explore Lanai
                    </button>
                </Link>
            </div>

        </div>

  )
}

export default VideoLanding