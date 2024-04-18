import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateNews, getOneNewsById } from '../services/newsServices';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import TipTap from "../components/TipTap.jsx"
import draft from "../assets/draft-icon.svg"
import './css/Create.css';
import Swal from 'sweetalert2';

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
      Swal.fire('Noticia actualizada exitosamente');
      navigate('/home');
    } catch (error) {
      Swal.fire('Error al actualizar la noticia:', error);
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
  const FunctionDeleteImage = () => {
    setUrl_Image("");
  };
  
  return (
    <>
    <div className='container-form'>
      <form className='form-create' onSubmit={handleSubmit(onSubmit)}>
        <div className='title-form'>
          <div className='draft-container'>
              <img className='draft-icon' src={draft}/>
              <p className='draft-text'>Borrador...</p>
          </div>
          <div className='button-post'>
              <button type='submit'>Modificar</button>
          </div>
      </div>
      <div className='img-selector'>
          <label>Imagen de portada</label>
          <input type="file" id="image" accept="image/*" name="image" {...register("image")} onChange={changeUploadImage}/> 
          {url_image && (
              <div>
                <img src={url_image} className="w-[150px] mt-2" alt="Imagen de noticia" />
                <button className='delete-img-btn' onClick={FunctionDeleteImage}>Eliminar imagen</button>
            </div>
          )}
      </div>          
      <div className='news-title'>
           <label htmlFor='title'>Título</label>
           <input type='text' {...register("title", { required: true, minLength: 3, maxLength:60 })} placeholder='Título de tu artículo' />
           {errors.title && errors.title.type === "required" && <p className='text-[#FB005A] text-xs'>El título es requerido</p>}
           {errors.title && errors.title.type === "minLength" && <p className='text-[#FB005A] text-xs'>El título debe tener al menos 3 caracteres</p>}
           {errors.title && errors.title.type === "maxLength" && <p className='text-[#FB005A] text-xs'>El título debe tener como máximo 60 caracteres</p>}
         </div>
         <div className='news-text'>
            <label htmlFor='description'>Texto</label>
            <input type='text' {...register("description", { required: true, minLength: 3, maxLength: 60000 })} placeholder='Escribe tu artículo' />
            {errors.description && errors.description.type === "required" && <p className='text-[#FB005A] text-xs'>La descripción es requerida</p>}
            {errors.description && errors.description.type === "minLength" && <p className='text-[#FB005A] text-xs'>La descripción debe tener al menos 3 caracteres</p>}
            {errors.description && errors.description.type === "maxLength" && <p className='text-[#FB005A] text-xs'>La descripción debe como máximo 60000 caracteres</p>}
         </div>
       </form>
       <div className='text-editor-container'>
         <TipTap />
       </div>
     </div>
      </>
    );
  };

  
  export default Update;