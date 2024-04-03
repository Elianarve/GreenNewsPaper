import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ news }) => {
 const navigate = useNavigate();

 const handleReadMore = () => {
    navigate(`/newsdetails/${news.id}`);
 };

 return (
    <article className="w-full bg-neutral-900 flex flex-col items-start justify-between p-4 rounded-lg relative">
      <div className="flex items-center mb-2">
        <div className="flex gap-2">
          {/* Aquí puedes agregar más elementos si es necesario */}
        </div>
      </div>
      <div className="relative">
        <img src={news.Image} alt={news.Title} className="w-full h-40 object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2">
        </div>
        <div className="flex justify-start items-center mt-2">
        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-1 mr-5">
          Blockchain
        </button>
        <div className="flex justify-end items-right mt-2 space-x-1">
        <button className="bg-gradiente-to-r from bg-purple-600 to-fuchsia-600 mb-2 w-7 h-7">post</button>
        <button className="bg-gradiente-to-r from bg-purple-600 to-fuchsia-600 mb-2 w-7 h-7">delete</button>
        <button className="bg-gradiente-to-r from bg-purple-600 to-fuchsia-600 mb-2 w-7 h-7">save</button>
        </div>
      </div>
      </div>
      <div className="mt-1 w-full">
        <p className="line-clamp-2 text-xs leading-4 text-white">{news.Text}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <time dateTime={news.Date} className="text-white">
          {news.Date}
        </time>
      </div>
      <div className="absolute bottom-0 right-0 mb-4 ml-4">
        <button onClick={handleReadMore} className="text-pink-600 hover:text-purple-600">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
 );
};

export default Card;