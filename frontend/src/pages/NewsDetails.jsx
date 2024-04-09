import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { getOneNewsById } from '../services/newsServices';

const NewsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

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
      <div className='w-full bg-neutral-900 flex justify-center items-center min-h-screen'>
        <article key={data.id} className="max-w-xl mx-auto flex flex-col items-center mb-10">
          <h1 className='text-white text-3xl mt-5'>{data.title}</h1>
          <p className='text-white'>{data.date} - Publicado por {data.author}</p>
          <div className="flex justify-center items-center w-full">
            <img src={data.image} alt={data.title} className="w-full max-w-9/12 h-25 object-cover rounded-lg" />
          </div>
          <p className='text-white text-justify w-full max-w-4/5 mt-3'>{data.text}</p>
        </article>
      </div>
  );
};


export default NewsDetails;