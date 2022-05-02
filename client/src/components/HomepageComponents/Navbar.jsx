import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { Link } from "react-router-dom"

import logo from '../../../images/LANAI.png'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return ( 
    
    // defining navigation bar first
    <nav className="bg-gradient-to-r from-sky-700 to-violet-900 w-full flex md:justify-center justify-between items-center p-6">
        
            {/* assigning first 2 elements to left of logo */}
            <ul>
                <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12'>
                    <Link to="/explore">Explore</Link>
                </li>   
            </ul>
            <ul>
                <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12'>
                    <Link to="/roadmap">Roadmap</Link>
                </li> 
            </ul>  
            
            {/* now declaring logo */}
            <div className="flex-center justify-center active:scale-95">
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-64 ml-8 mr-6 cursor-pointer"></img>
                    </Link>
            </div>
            
            {/* assign final 2 elements to right of logo */}
            <ul>
                <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12'>
                    <Link to="/explore">Swap</Link>
                </li>
            </ul>
            <ul>
                <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12'>
                    <Link to="/roadmap">Marketplace</Link>
                </li>
            </ul>        
            
                
            {/* now defining elements for use on mobile devices */}
            <div className="flex relative">

            {toggleMenu
            ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            : <HiMenuAlt4  fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
            }

                {toggleMenu && (
                <ul
                    className="
                    z-10 
                    fixed 
                    top-0 
                    -right-2 
                    p-2 
                    w-[40vw]
                    h-[100hw]
                    shadow-2xl 
                    md:hidden 
                    list-none 
                    flex 
                    flex-col 
                    justify-start 
                    items-center 
                    rounded-md 
                    blue-glassmorphism 
                    text-white 
                    animate-slide-in 
                    leading-10"
                >
                {/* closing the menu */}
                <li className="text-xl w-full my-0">
                    <AiOutlineClose onClick={() => setToggleMenu(false)} />
                </li>

                <ul>
                    <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex list-none flex-row items-center flex-initial p-4'>
                        <Link to="/explore">Explore</Link>
                    </li>
                    <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex list-none flex-row items-center flex-initial p-4'>
                        <Link to="/roadmap">Roadmap</Link>
                    </li>
                    <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex list-none flex-row items-center flex-initial p-4'>
                        <Link to="/swap">Swap</Link>
                    </li>
                    <li className='text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer md:flex list-none flex-row items-center flex-initial p-4'>
                        <Link to="/marketplace">Marketplace</Link>
                    </li>        
                </ul>
           
                </ul>    
            )}
        </div>
    </nav>
    );
}

export default Navbar;
