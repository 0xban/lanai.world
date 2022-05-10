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
                <li className='text-xl text-white/70 hover:text-white transition-all hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl active:scale-95'>
                    <Link to="/explore">Explore</Link>
                </li> 
            </ul> 
            <ul>
                <li className='text-xl text-white/70 hover:text-white transition-all hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl active:scale-95'>
                    <Link to="/roadmap">Roadmap</Link>
                </li> 
            </ul>  
            
            {/* now declaring logo */}
            <div className="flex-center hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl active:scale-95">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="md:w-64 md:ml-8 md:mr-6 w-64 cursor-pointer"></img>
                    </Link>
            </div>
            
            {/* assign final 2 elements to right of logo */}
            <ul>
                <li className='text-xl text-white/70 hover:text-white transition-all hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl active:scale-95'>
                    <Link to="/swap">Swap</Link>
                </li>
            </ul>
            <ul>
                <li className='text-xl text-white/70 hover:text-white transition-all hover:cursor-pointer md:flex hidden list-none flex-row items-center flex-initial px-12 hover:transition-all duration-500 ease-in-out hover:drop-shadow-2xl active:scale-95'>
                    <Link to="/marketplace">Marketplace</Link>
                </li>
            </ul>        
            
                
            {/* now defining elements for use on mobile devices */}
            <div className="flex">

                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer place-self-end" onClick={() => setToggleMenu(false)} />
                : <HiMenuAlt4  fontSize={28} className="text-white md:hidden cursor-pointer place-self-end" onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                <ul className="
                    z-10 
                    fixed 
                    top-0 
                    -right-2 
                    p-2 
                    w-[50vw]
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
                    leading-10">

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
