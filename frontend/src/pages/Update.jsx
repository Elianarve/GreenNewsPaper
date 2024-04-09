import React from 'react';

const Update = () => {
  const data = {
    date: '2024-04-10',
    author: 'Jessica noguera'
  };

 return (
  <>
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <div className='text-center'>
        {/* Aquí había un componente <LoginForm /> que he eliminado */}
        <p className='text-white'>{data.date} - Publicado por {data.author}</p>
      </div>  
    </div>
  </>  
 );
}

export default Update;



