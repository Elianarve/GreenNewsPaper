import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteNews } from '../services/newsServices';
import { useUserContext } from '../context/UserContext';
import update from '../assets/update-icon.svg';
import dlete from '../assets/delete-icon.svg';
import save from '../assets/save.svg';
import unsave from '../assets/unsave.svg';
import Swal from 'sweetalert2';


const Card = ({ news, setReloadingData }) => {
const navigate = useNavigate();
const { user } = useUserContext();
const [favorito, setFavorito] = useState(false);

 const handleReadMore = () => {
    navigate(`newsdetails/${news.id}`);
 };

 const toggleFavorito = () => {
  setFavorito(!favorito);
  if (favorito) {
    Swal.fire('💔 Eliminado de favoritos 💔');
  } else {
    Swal.fire('🩷  Guardado en favoritos 🩷');
  }
};

 return (

    <article className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-xs bg-neutral-900">
      <div className="flex items-center mb-2">
      </div>
      <div className="relative ">
        <img src={news.image} alt={news.title} className="w-full h-40 object-cover rounded-lg" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2">
        </div>
        <div className="flex mt-3">
        { user.rol === 'admin' && (
          <>
        <div className="flex justify-start gap-3">
        <button className="bg-zinc-800 mb-2 w-8 h-7 rounded text-white flex items-center justify-center" onClick={() => navigate(`update/${news.id}`)}><img src={update} alt="button-update" /></button>
        <button className="bg-zinc-800 mb-2 w-8 h-7 rounded text-white flex items-center justify-center" onClick={() => deleteNews(news.id).then(() => setReloadingData(true))}><img src={dlete} alt="button-delete" /></button>
        <button className="bg-zinc-800 mb-2 w-8 h-7 rounded text-white flex items-center justify-center" onClick={() => toggleFavorito()}><img src={favorito ? save : unsave } alt="button-save" /></button>
        </div>
          </>
        )}
      </div>
      </div>
      <div className="mt-0 mb-0 w-full">
        <p className="text-2xl text-white h-auto">{news.title}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <time dateTime={news.date} className="text-white">
          {news.Date}
        </time>
      </div>
      <div className="absolute bottom-0 right-0 mt-1 mb-4">
        <button onClick={handleReadMore} className="text-pink-600 hover:text-purple-600">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div>
      <p className='mt-1 mb-4'>{news.date}</p>
      </div>
      <hr className='w-12/12 bg-zinc-800'/>
    </article>
 );
};

export default Card;
