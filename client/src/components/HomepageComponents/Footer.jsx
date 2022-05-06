import { AiOutlineGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { AiFillMediumSquare } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {

    return(
    
<div className='flex bg-gradient-to-r from-sky-700 to-violet-900 py-24 justify-center'>
    <div className='hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105'>
        <a href="https://github.com/0xban/lanai.world" target="_blank" rel="noreferrer noopener">
            <AiOutlineGithub color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />
        </a>
    </div>

    <div className='hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105'>
        <a href="https://discord.gg/aQT8kyy5gz" target="_blank" rel="noreferrer noopener">
            <FaDiscord color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />
        </a>
    </div>

    <div className='hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105'>
        <a href="" target="_blank" rel="noreferrer noopener">
            <AiFillMediumSquare color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />

        </a>
    </div>

    <div className='hover:transition-all duration-500 ease-out hover:drop-shadow-2xl hover:scale-105'>
        <a href="https://twitter.com/lanai_world" target="_blank" rel="noreferrer noopener">
            <AiOutlineTwitter color="white" fontSize={28} className="cursor-pointer active:scale-95 mx-6" />
        </a>
    </div>
</div>

)}

export default Footer;