import React from 'react'

import banpfp from '../../../../images/banpfp.png'
import hawkmountainpfp from '../../../../images/hawkmountainpfp.jpg'
import fractalspfp from '../../../../images/fractalspfp.png'

const Team = () => {
  return (
    <div>

            <div className='bg-gradient-to-r from-sky-700 to-violet-900'>
                    
                <div className='flex justify-center text-white md:text-5xl text-3xl font-semibold p-6'>
                    Team
                </div>

                <div className='flex justify-center text-white md:text-xl text-center pt-1 px-12 py-12 mb-12'>
                     Small but mighty, and we have a milady. Every team needs a milady.
                </div>

            </div>

            <div className="md:flex justify-center px-20">
                
                <a href="https://twitter.com/_0xban" target="_blank" rel="noreferrer noopener"> 
                    <div className="h-72 w-48 cursor-pointer rounded-lg shadow-lg bg-gradient-to-b from-white to-amber-900 md:max-w-xs hover:scale-105 active:scale-100 my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
                        <img className="rounded-t-lg w-48" src={banpfp} alt="" />     
                        <div className="p-4">
                            <h5 className="text-white text-xl font-semibold mb-2">
                                ban
                            </h5>
                            <p className="text-white text-base">
                                Creator & Lead Dev
                            </p>
                        </div>
                    </div>
                </a>
        
                <a href="https://twitter.com/gsbxbt" target="_blank" rel="noreferrer noopener"> 
                    <div className="h-72 w-48 cursor-pointer rounded-lg shadow-lg bg-gradient-to-b from-white to-sky-900 md:max-w-xs hover:scale-105 active:scale-100 my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
                        <img className="rounded-t-lg w-48" src={hawkmountainpfp} alt="" />     
                        <div className="p-4">
                            <h5 className="text-white text-xl font-semibold mb-2">
                                hawkmountain
                            </h5>
                            <p className="text-white text-base mb-2">
                                Advisor
                            </p>
                        </div>
                    </div>
                </a>
        
                <a href="https://twitter.com/fractalsxbt" target="_blank" rel="noreferrer noopener">
                    <div className="h-72 w-48 cursor-pointer rounded-lg shadow-lg bg-gradient-to-b from-white to-rose-900 md:max-w-xs hover:scale-105 active:scale-100 my-4 mx-4 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl">
                        <img className="rounded-t-lg w-48" src={fractalspfp} alt="" />     
                        <div className="p-4">
                            <h5 className="text-white text-xl font-semibold mb-2">
                                fractals
                            </h5>
                            <p className="text-white text-base mb-2">
                                LANAI Head Intern
                            </p>
                        </div>
                    </div>
                </a>
                
    
            </div>

    </div>
  )
}

export default Team