import React from 'react';

const Landing = () => {
 return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-00">
        <h1 className="mb-8 text-2xl font-bold text-white">¿Qué noticias está comentando todo el mundo?</h1>
        <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5">
          Regístrate
        </button>
        <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Iniciar sesión
        </button>
      </div>
    </div>
 );
}

export default Landing;