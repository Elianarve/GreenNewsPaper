import React from 'react';
import { Link } from 'react-router-dom'
import write from '../assets/write-icon.svg'
import profile from '../assets/profile-icon.svg'
import save from '../assets/save-icon.svg'

const Nav = () => {
    return (
    <>
       <nav className="flex justify-between items-center bg-neutral-900 p-3">
        
         <Link to="/" replace className="text-white">
         <div className="w-10 h-10 ml-20 bg-gradient-to-r from-[#FB005A] to-purple-500 hover:from-[#B800B0] hover:to-pink-600 py-2 px-4 focus:outline-none focus:shadow-outline mb-5 rounded"></div>
         </Link>
         <ul className="font-poppins flex space-x-4 mr-20">
           <li className="text-white bg-[#222222] px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Home</li>
           <Link to="/create" replace className="text-white"> 
              <img src={write} className='absolute mt-2.5 ml-4'></img>
             <li className="text-white bg-[#222222] pl-10 px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Escribe</li>
           </Link>
           <li className="text-white bg-[#222222] px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300"><img className='mt-1' src={save}></img></li>
           <li className="text-white size-9"><img src={profile}></img></li>
         </ul>
        </nav>
    </>
    );
   }
   
   export default Nav;import React from 'react';
import { Link } from 'react-router-dom';
import Add from './Add'; 

const Nav = () => {
    return (
    <>
       <nav className="flex justify-between items-center bg-gray-900 p-4">
        
         <Link to="/" replace className="text-white">
         <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 py-2 px-4 focus:outline-none focus:shadow-outline mb-5 rounded"></div>
         </Link>
         <ul className="flex space-x-4">
           <li className="text-white">Lista de Noticias</li>
           <Link to="/create" replace className="text-white">
             <li>+</li>
           </Link>
           <li className="text-white">Añadir</li>
         </ul>
         <Add />
        </nav>
    </>
    );
   }
   
   export default Nav;