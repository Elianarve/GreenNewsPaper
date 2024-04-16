import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateNews, getOneNewsById } from '../services/newsServices';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Update = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit , setValue } = useForm(); 
    const { id } = useParams();
    const [url_image, setUrl_Image] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getOneNewsById(id); 
          const data = response.data
          setValue('title', data.title); 
          setValue('description', data.description);
          setValue('author', data.author);  
          setValue('date', data.date); 
          setUrl_Image('image', data.image); 
          setUrl_Image(data.image);
        } catch (error) {
          console.error('Error al obtener la noticia:', error);
        }
      }
      fetchData();
  }, [id, setValue]);
  
  const onSubmit = async (data) => {
      data.image = url_image;
    try {
      await updateNews(id, data);
      console.log('Noticia actualizada exitosamente');
      navigate('/home');
    } catch (error) {
      console.error('Error al actualizar la noticia:', error);
    }
  };

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];
    const newData = new FormData();
    newData.append("file", file);
    newData.append("upload_preset" , "Presents-react"); 
    try {
      const response = await axios.put("https://api.cloudinary.com/v1_1/deigc2ihg/image/upload", newData);
      setUrl_Image(response.data.secure_url);
    } catch (error) {
      console.error("Error al cargar la imagen a Cloudinary:", error);
    }
  };
  
  return (
  <div className='flex justify-center min-h-screen bg-gray-900'>
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Imagen de portada</label>
        <input type="file" id="image" accept="image/*" name="image" {...register("image")} onChange={changeUploadImage}/> 
        {url_image && (
              <div>
                <img src={url_image} className="w-[250px]" alt="Imagen de noticia"  />
            </div>
        )}
    </div>          
      <div>
        <label htmlFor='title' className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Título</label>
        <input type='text' id='title' name="title" {...register("title")}  />
      </div>
      <div>
        <label htmlFor='description' className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Texto</label>
        <input type='text' id='description' name="description" {...register("description")}  />
      </div>
      <button type='submit' className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Actualizar</button>
    </form>
    </div>
  );
  };
  
  export default Update;


