// import {useLoaderData} from 'react-router-dom';
import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import arrow from '../assets/arrow.svg'; 
import { Link } from 'react-router-dom';

const Login = () => {
  // const news = useLoaderData();

 return (
  <>
    <div className='flex items-center justify-center min-h-screen bg-neutral-900'>
      <div className='text-center mt-20'>
        <Link to='/'>
          <img className='ml-8 mt-3 absolute' src={arrow}></img>
        </Link>
          <h1 className='font-poppins font-medium text-4xl text-white mb-20'>Iniciar sesión</h1>
        <LoginForm />
      </div>  
    </div>
  </>  
 );
}
export default Login;