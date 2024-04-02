import React from 'react';
import {Link} from 'react-router-dom';
import Spline from '../components/Spline.jsx'
import Nav from '../components/Nav.jsx'

const Landing = () => {
 return (
  <>
  <Nav/>
  <main className="grid grid-cols-2 gap-10 place-content-center bg-neutral-900">
    <section className="items-center mx-32 mt-10 justify-center min-h-screen bg-gray-00">
      <h1 className="font-poppins font-semibold mb-0 text-6xl mb-4 leading-normal text-white">¡Explora el <br/>mañana <br/><span className="text-rose-600">hoy mismo!</span></h1>
      <p className='font-poppins mb-5 text-lg text-white'>Alimenta tu curiosidad diaria: <br/>tecnología, IA, blockchain y más.</p>
      <button className="w-full font-poppins bg-gradient-to-r rounded-2xl from-purple-600 to-rose-600 hover:from-rose-600 hover:to-purple-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5">
          Regístrate
      </button>
      <Link to ="/login">
        <button className="w-full font-poppins bg-white rounded-2xl hover:from-rose-600 hover:to-purple-600 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Iniciar sesión
        </button>
      </Link>
    </section>
    <section className='mr-20 mb-20'>
      <Spline/>
    </section>
  </main> 
  </>
 );
};

export default Landing;