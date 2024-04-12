import React from 'react';
<<<<<<< HEAD
import { Link} from 'react-router-dom'
import write from '../assets/write-icon.svg'
import profile from '../assets/profile-icon.svg'
import save from '../assets/save-icon.svg'
import { useUserContext } from '../context/UserContext';
import LogOut from '../components/LogOut';


const Nav = () => {
   const { user, userAuth  } = useUserContext();

    return (
    <>
       <nav className="flex justify-between items-center bg-neutral-900 p-3"> 
=======
import { Link, useLocation } from 'react-router-dom'
import write from '../assets/write-icon.svg'
import profile from '../assets/profile-icon.svg'
import save from '../assets/save-icon.svg'

const Nav = () => {
  // const {state} = useLocation();
  // console.log(state.name);
  
    return (
    <>
       <nav className="flex justify-between items-center bg-neutral-900 p-3">
        
>>>>>>> feature-validations
         <Link to="/" replace className="text-white">
         <div className="w-10 h-10 ml-20 bg-gradient-to-r from-[#FB005A] to-purple-500 hover:from-[#B800B0] hover:to-pink-600 py-2 px-4 focus:outline-none focus:shadow-outline mb-5 rounded"></div>
         </Link>
         <ul className="font-poppins flex space-x-4 mr-20">
<<<<<<< HEAD
           { userAuth && (
            <>
             <li className="text-white bg-[#222222] px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Home</li>
           <Link to="create" replace className="text-white"> 
=======
           <li className="text-white bg-[#222222] px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Home</li>
           <Link to="/create" replace className="text-white"> 
>>>>>>> feature-validations
              <img src={write} className='absolute mt-2.5 ml-4'></img>
             <li className="text-white bg-[#222222] pl-10 px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Escribe</li>
           </Link>
           <li className="text-white bg-[#222222] px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300"><img className='mt-1' src={save}></img></li>
<<<<<<< HEAD
            <li className="text-white size-9"><img src={profile}></img></li>
            <li className="text-white bg-[#222222] px-4 py-2 rounded-lg">{user && user.name}</li>
            <LogOut />
            </>
           )}
     
=======
           <li className="text-white size-9"><img src={profile}></img></li>
           <button className="text-white bg-[#222222] px-4 py-2 rounded-lg hover:bg-[#FB005A] active:bg-[#B800B0] focus:outline-none focus:ring focus:ring-violet-300">Name</button>   {/*{state.name} */}
>>>>>>> feature-validations
         </ul>
        </nav>
    </>
    );
  }
  
  export default Nav;