import React from 'react';
import {Link} from 'react-router-dom';
import Spline from '../components/Spline.jsx'
// import Nav from '../components/Nav.jsx'

const Landing = () => {
 return (
  <>
  {/* <Nav/> */}
  <main className="grid grid-cols-2 place-content-center bg-neutral-900">
      <section className="items-center mx-32 mt-20 justify-center min-h-screen bg-gray-00">
          <h1 className="font-poppins font-semibold mb-0 text-6xl mb-4 text-white">¡Explora el <br/>mañana <br/><span className="text-[#FB005A]">hoy mismo!</span></h1>
          <p className='font-poppins mb-5 text-lg text-white'>Alimenta tu curiosidad diaria: <br/>tecnología, IA, blockchain y más.</p>
          <Link to="/register">
            <button className="w-full font-poppins bg-gradient-to-r rounded-lg from-[#B800B0] to-[#FB005A] hover:from- [#FB005A] hover:to-[#B800B0] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-11/12 h-12">
              Regístrate
            </button>
          </Link>
          <Link to ="/login">
            <button className="w-full font-poppins font-semibold bg-white rounded-lg hover:from-[#FB005A]   hover:to-purple-600 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline w-11/12 h-12">
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