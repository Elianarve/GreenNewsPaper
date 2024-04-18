import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneNewsById, deleteNews } from '../services/newsServices';
import update from '../assets/update-icon.svg';
import dlete from '../assets/delete-icon.svg';
import unsave from '../assets/unsave.svg';
import save from '../assets/save.svg';
import { useUserContext } from '../context/UserContext';
import Swal from 'sweetalert2';


const NewsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
    if (favorito) {
      Swal.fire('💔 Eliminado de favoritos 💔');
    } else {
      Swal.fire('🩷 Guardado en favoritos 🩷');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOneNewsById(id);
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-900 py-6 sm:py-12'>
      <article key={data.id} className="max-w-xl mx-auto flex flex-col mb-10">
        <h1 className='text-white text-3xl mt-5 mb-3'>{data.title}</h1>
        <div className='flex justify-between'>
          <p className='text-white '>{data.date} - Publicado por {data.author}</p>
          <div className='flex space-x-3'>
            {user.rol === 'admin' && (
              <>
                <button className="bg-zinc-800 mb-2 w-8 h-7 rounded text-white flex items-center justify-center"><img src={update} alt="" className='w-4' onClick={() => navigate(`/home/update/${data.id}`)} /></button>
                <button className="bg-zinc-800 mb-2 w-8 h-7 rounded text-white flex items-center justify-center"><img src={dlete} alt="" className='w-4 cursor-pointer' onClick={() => deleteNews(id).then(() => navigate("/home"))} /></button>
              </>
            )}
            <button className="bg-zinc-800 mb-2 w-8 h-7 rounded text-white flex items-center justify-center" onClick={() => toggleFavorito()}><img src={favorito ? save : unsave } alt="button-save" /></button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <img src={data.image} alt={data.title} className=" w-[566px] h-[320px] object-cover rounded-lg" />
        </div>
        <p className='text-white w-full max-w-4/5 mt-3'>{data.description}</p>
      </article>
    </div>
  );
}

export default NewsDetails;


