import React from 'react'

import { Link } from "react-router-dom"

const ExploreLanai = () => {

return(

<div className="flex bg-gradient-to-r from-sky-700 to-violet-900 justify-center px-6">   
    <Link to='/explore'>
        <button className="text-3xl  
                           text-white   
                           active:scale-95 
                           bg-gradient-to-r from-violet-500 to-rose-900
                           font-bold
                           px-3
                           py-2.5 
                           rounded-lg
                           flex-center
                           mb-6
                           hover:transition-all duration-500 ease-in-out
                           hover:scale-110
                           hover:drop-shadow-2xl">
                Explore LANAI
        </button>
    </Link>
    
</div> 

)}

export default ExploreLanai;
