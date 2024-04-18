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
      </section>
      <section className='section-right'>
          <Spline/>
      </section>
  </main> 
    </>
  )

}
  export default Landing;

