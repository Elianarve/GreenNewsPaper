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
      className="bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5"
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