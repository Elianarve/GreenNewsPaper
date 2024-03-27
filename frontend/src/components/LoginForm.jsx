import React from 'react';

const LoginForm = () => {
 return (
    <>
      <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="hola.soy.bea@gmail.com"/>
        </div>
        <div className="mb-6">
          <label className="block text-white text-md font-bold mb-2 text-left" htmlFor="password">
            Contraseña
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Ingresa tu contraseña"/>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5" type="button">
            Iniciar sesión
          </button>
          <p className="text-white bg-gray-900 justify-center">¿No tienes cuenta? <a href="../pages/RegisterPage" className="text-white">Regístrate</a></p>
        </div>
      </form>
    </>
 );
}

export default LoginForm;