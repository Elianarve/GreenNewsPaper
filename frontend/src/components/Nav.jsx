import React from 'react';
import { Link } from 'react-router-dom';
import Add from './Add'; 

const Nav = () => {
    return (
    <>
       <nav className="flex justify-between items-center bg-gray-900 p-4">
         <Link to="/" replace className="text-white">
           <img src="" alt="logo" className="h-8 w-auto" />
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