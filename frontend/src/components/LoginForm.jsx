import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); //lógica para enviar credenciales al back-end
    try {
      const response = await fetch('introducir la URL del BackEnd/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if(!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      const data = await response.json();
      // Aquí manejamos la respuesta exitosa del backend, recibimos token en el almacenamiento local del navegador para que el usuario esté autenticado mientras navega
      localStorage.setItem('authToken',data.token);
      //Ahora redirigimos al usuario a la Home, después de un login exitoso
      navigate('/home');
    } catch (error){
      console.error('Error:', error);
      // Aquí podemos manejar errores, ejem. mostrar un mensaje al usuario
     }
  };

 return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="email">
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="hola.soy.bea@gmail.com"/>
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="password">
            Contraseña
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Ingresa tu contraseña"/>
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5" type="button">
            Iniciar sesión
          </button>
          <p className="text-white bg-gray-900 justify-center">¿No tienes cuenta? <Link to="/register" className="text-white">Regístrate</Link></p>
        </div>
      </form>
    </>
 );
}

export default LoginForm;