import React from 'react';
import {Link} from 'react-router-dom';
import Spline from '../components/Spline.jsx';
import './css/Landing.css';

const Landing = () => {
  return(
    <>
     <main className="landing">
      <section className="section-left size-fit">
          <h1 className='landing-title'>¡Explora el <br/>mañana <br/><span className="text-[#FB005A]">hoy mismo!</span></h1>
          <p className='landing-text'>Alimenta tu curiosidad diaria: <br/>tecnología, IA, blockchain y más.</p>
          {/* <div  className='buttons'> */}
            <Link to="/register">
              <button className='register-btn'>
                Regístrate
              </button>
            </Link>
            <Link to ="/login">
              <button className='login-btn'>
                Iniciar sesión
              </button>
            </Link>
          {/* </div> */}
      </section>
      <section className='section-right'>
          <Spline/>
      </section>
  </main> 
    </>
  )

}
  export default Landing;

// const Landing = () => {
//  return (
//   <>
//   {/* <Nav/> */}
//   <main className="grid grid-cols-2 place-content-center bg-neutral-900">
//       <section className="items-center mx-32 mt-20 justify-center min-h-screen bg-gray-00">
//           <h1 className="font-poppins font-semibold text-6xl mb-4 text-white">¡Explora el <br/>mañana <br/><span className="text-[#FB005A]">hoy mismo!</span></h1>
//           <p className='font-poppins mb-5 text-lg text-white'>Alimenta tu curiosidad diaria: <br/>tecnología, IA, blockchain y más.</p>
//           <Link to="/register">
//             <button className="font-poppins bg-gradient-to-r rounded-lg from-[#B800B0] to-[#FB005A] hover:from- [#FB005A] hover:to-[#B800B0] text-white py-2 px-4 focus:outline-none focus:shadow-outline mb-5 w-11/12 h-12">
//               Regístrate
//             </button>
//           </Link>
//           <Link to ="/login">
//             <button className="font-poppins font-semibold bg-white rounded-lg hover:from-[#FB005A]   hover:to-purple-600 text-black py-2 px-4 focus:outline-none focus:shadow-outline w-11/12 h-12">
//               Iniciar sesión
//             </button>
//           </Link>
//       </section>
//       <section className='mr-20 mb-20'>
//           <Spline/>
//       </section>
//   </main> 
//   </>
//  );
// };

// export default Landing;