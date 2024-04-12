import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { loginUser } from '../services/logReg';

import * as Yup from 'yup';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); 
  const { userAuth, setUserAuth  } = useUserContext();
  const { user, setUser  } = useUserContext();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      alert(`Bienvenid@ ${data.data.name}`)
      localStorage.setItem('authToken', data.token);
      console.log(data);
      setUser(data.data);
      setUserAuth(true);
      navigate('/home');
    } catch (error){
      console.error('Error:', error);

      if (error.message.includes('Usuario no registrado.')) {
        setEmailError('Usuario no registrado.');
        setPasswordError('');
      } else if (error.message.includes('Contraseña incorrecta.')) {
        setPasswordError('Contraseña incorreta.');
        setEmailError('');
      } else {
        setPasswordError('Error en la solicitud de inicio de sesión');
        setEmailError('');
      }
      // Aquí podemos manejar errores, ejem. mostrar un mensaje al usuario
     }

     //onResetForm();
  };


 return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="email">
            Email
            <input type="email" value={email} onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');}} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="hola.soy.bea@gmail.com"/>
              {emailError && <p className="text-red-500">{emailError}</p>}
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="password">
            Contraseña
            <input type="password" value={password} onChange={(e) =>{
               setPassword(e.target.value);
               setPasswordError('');}} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Ingresa tu contraseña"/>
               {passwordError && <p className="text-red-500">{passwordError}</p>}
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5" type="submit">
            Iniciar sesión
          </button>
          <p className="text-white bg-gray-900 justify-center">¿No tienes cuenta? <Link to="/register" className="text-white">Regístrate</Link></p>
        </div>
      </form>
    </>
 );
}

export default LoginForm;