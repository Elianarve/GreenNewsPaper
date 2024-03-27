import React from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
 const navigate = useNavigate();

 const onClick = () => {
    navigate('/create');
 };

 return (
    <button
      onClick={onClick}
      className="focus:outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <img
        src="./src/assets/Vector-añadir.png"
        alt="Añadir"
        className="h-6 w-auto"
      />
    </button>
 );
};

export default Add;