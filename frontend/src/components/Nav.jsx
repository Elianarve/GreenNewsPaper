import React from 'react';
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