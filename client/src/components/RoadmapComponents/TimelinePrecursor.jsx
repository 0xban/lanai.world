import React from 'react'

import { BsMedium } from 'react-icons/bs'



const TimelinePrecursor = () => {
  return (
    <div className='bg-gradient-to-r from-sky-700 to-violet-900'>
        
        <div className='flex justify-center text-white md:text-5xl p-6'>
            <div className=" flex justify-center py-4 md:max-w-5xl">
                <div className="justify-center">
                    <h1 className="text-center text-3xl font-bold md:text-5xl text-white">
                        LANAI Roadmap & Goals
                    </h1>
                        <h2 className="text-center text-l md:text-xl text-white py-12">
                        A timeline and roadmap of key developmental objectives, which will be updated as
                        LANAI grows. For more information and an in-depth look at current goals, feel
                        free to visit the official LANAI Medium page! 
                        </h2>
                            <h3 className='flex justify-center'>
                                <a href="" target="_blank" rel="noreferrer noopener">
                                    <BsMedium color="white" fontSize={48} className="cursor-pointer active:scale-95 mx-6 flex justify-center hover:transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-2xl" />
                                </a>
                            </h3>
                </div>
            </div>
        </div>


        

    </div>
  )
}

export default TimelinePrecursor