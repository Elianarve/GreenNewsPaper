import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { getOneNewsById, deleteNews } from '../services/newsServices';
import update from '../assets/update-icon.svg';
import dlete from '../assets/delete-icon.svg';
import save from '../assets/save-icon.svg';
import { useNavigate } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

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
      <div className='w-full bg-neutral-900 flex justify-center  min-h-screen'>
        <article key={data.id} className="max-w-xl mx-auto flex flex-col mb-10">
          <h1 className='text-white text-3xl mt-5 mb-3'>{data.title}</h1>
          <div className='flex justify-between'>
          <p className='text-white '>{data.date} - Publicado por {data.author}</p>
          <div className='flex space-x-3'>
          <img src={update} alt="" className='w-4'/>
          <img src={dlete} alt="" className='w-4 cursor-pointer' onClick={() => deleteNews(id).then(navigate("/home"))} />
          <img src={save} alt="" className='w-3'/>
          </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={data.image} alt={data.title} className="w-full max-w-9/12 h-25 object-cover rounded-lg" />
          </div>
          <p className='text-white w-full max-w-4/5 mt-3'>{data.description}</p>
        </article>
      </div>
  );
};


export default NewsDetails;



