// import {useLoaderData} from 'react-router-dom';
import React from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import arrow from '../assets/arrow.svg'; 
import { Link } from 'react-router-dom';

const Register = () => {
  // const news = useLoaderData();

 return (
  <>
    <div className='flex items-center justify-center min-h-screen bg-neutral-900'>
      <div className='text-center mt-20'>
        <Link to='/'>
          <img className='ml-8 mt-3 absolute' src={arrow}></img>
        </Link>
          <h1 className='font-poppins font-medium text-4xl text-white text-left ml-16'>Regístrate</h1>
        <RegisterForm />
      </div>  
    </div>
  </>  
 );
}
export default Register;import React from 'react'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div>Register</div>
  
  )
}

export default Register