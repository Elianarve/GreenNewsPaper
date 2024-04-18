import React from 'react';
import { Link} from 'react-router-dom'
import profile from '../assets/profile-icon.svg'
import { useUserContext } from '../context/UserContext';
import LogOut from '../components/LogOut';
import write from '../assets/write-icon.svg';
import logoNews from '../assets/innovatech-logo.svg';
import { useState } from 'react';
import lgHamb from '../assets/hamburger-menu-icon.svg';


const Nav = () => {
   const { user, userAuth  } = useUserContext();

    return (
    <>
       <nav className="flex justify-between items-center bg-neutral-900 p-3"> 
         <Link to="/" replace className="text-white">
         <img className="w-30 h-28 ml-28" src={logoNews} alt="icon-page" />
         </Link>
         <ul className="font-poppins flex space-x-4 mr-20">
           { userAuth && (
            <>
            <Link to="/home"><li className="text-white bg-[#222222] px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Home</li></Link> 
           <Link to="create" replace className="text-white"> 
              <img src={write} className='absolute mt-2.5 ml-4'></img>
             <li className="text-white bg-[#222222] pl-10 px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Escribe</li>
           </Link>
            <li className="text-white size-9"><img src={profile}></img></li>
            <li className="text-white bg-[#222222] px-4 py-2 rounded-lg">{user && user.name}</li>
            <LogOut />
            </>
           )}
     
         </ul>
        </nav>
    </>
    );
  }
  
  export default Nav;
