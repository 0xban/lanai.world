import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/LANAI.png';


const NavbarItem = ( {title, classProps}) => {
    return (
        <li className={"mx-14 cursor-pointer pb-4 lg:text-xl text-white/70 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer ${classProps}"}>{title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return ( 
    
    // defining navigation bar first
    <nav className="w-full flex md:justify-center justify-between items-center p-8">
        
            {/* assigning first 2 elements to left of logo */}
            <ul className="font-semibold text-white md:flex hidden list-none flex-row justify-between items-center flex-initial px-4">
                {["Explore", "Roadmap"].map((item, index)=> (
                    <NavbarItem key={item+index} title={item} />
                     ))}
            </ul>
            
            {/* now declaring logo */}
            <div className="flex-center justify-center active:scale-95">
                <img src={logo} alt="logo" className="w-64 cursor-pointer"></img>
            </div>
            
            {/* assign final 2 elements to right of logo */}
            <ul className="font-semibold text-white md:flex hidden list-none flex-row justify-between items-center flex-initial px-4">
                {["Swap", "Marketplace"].map((item, index)=> (
                    <NavbarItem key={item+index} title={item} />
                    ))}
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

                    {["Explore", "Roadmap", "Swap", "Marketplace"].map((item, index)=> (
                    <NavbarItem key={item+index} title={item} classProps="my-2 text-lg" />
                    ))}
           
                </ul>    
            )}

        </div>
    </nav>
    );
}

export default Navbar;
