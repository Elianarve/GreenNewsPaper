// import {useLoaderData} from 'react-router-dom';
import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
const LoginPage = () => {
  // const news = useLoaderData();

 return (
  <>
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='text-center'>
        <h1 className='text-6xl text-white bg-gray-900 mb-12'>Iniciar sesión</h1>
        <LoginForm />
      </div>  
    </div>
  </>  
 );
}
export default LoginPage;
