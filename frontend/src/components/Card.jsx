import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ news }) => {
 const navigate = useNavigate();

 const handleReadMore = () => {
    navigate('newsdetails/:id');
 };

 return (
    <article className="flex flex-col items-start justify-between">
      
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Blockchain
        </button>
        <div className="flex gap-2">
         
        </div>
      </div>
      {/* Foto */}
      <div className="relative">
        <img src={news.Image} alt={news.Title} className="w-full h-64 object-cover rounded-lg" />
        {/* Botones entre la foto y el texto */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-white bg-opacity-50">
        
        </div>
      </div>
    
      <div className="mt-4 w-full">
        <p className="line-clamp-2 text-sm leading-6 text-gray-600">{news.Text}</p>
      </div>
     
      <div className="flex justify-between items-center mt-2">
        <time dateTime={news.Date} className="text-gray-500">
          {news.Date}
        </time>
        <button onClick={handleReadMore} className="text-red-500 hover:text-red-700">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
 );
};

export default Card;
