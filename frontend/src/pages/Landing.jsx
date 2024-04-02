import React from 'react';
import {Link} from 'react-router-dom';
import Spline from '../components/Spline.jsx'
import Nav from '../components/Nav.jsx'

const Landing = () => {
 return (
  <>
  <Nav/>
  <main className="grid grid-cols-2 gap-4 place-content-center bg-neutral-900">
    <section className="items-center mx-20 mt-20 justify-center min-h-screen bg-gray-00">
      <h1 className="font-poppins font-semibold mb-8 text-5xl leading-relaxed text-white">¡Explora el <br/>mañana <br/><span className="text-rose-600">hoy mismo!</span></h1>
      <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5">
          Regístrate
      </button>
      <Link to ="/login">
        <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Iniciar sesión
        </button>
      </Link>
    </section>
    <section className='w-full'>
      <Spline/>
    </section>
  </main> 
  </>
 );
};

export default Landing;