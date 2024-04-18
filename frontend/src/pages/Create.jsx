import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postNews } from '../services/newsServices.js'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import TipTap from "../components/TipTap.jsx"
import draft from "../assets/draft-icon.svg"
import './css/Create.css';

const Create = () => {
  const [Url_Image, setUrl_Image ] = useState("");
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    data.image = Url_Image
    postNews(data)
    .then(() => {
      navigate('/home'); 
    })
    .catch((error) => {
      console.error("Error al publicar:", error);
    });
  };

  const changeUploadImage = async (e) => {
  const file = e.target.files[0];
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset" , "Presents-react");

const response = await axios.post("https://api.cloudinary.com/v1_1/deigc2ihg/image/upload", data
);  
setUrl_Image(response.data.secure_url); 
};
const FunctionDeleteImage = () => {
  setUrl_Image("");
};

  return (
    <>
    <div className='container-form'>
       <form className='form-create' onSubmit={handleSubmit(onSubmit)} >
         <div className='title-form'>
             <div className='draft-container'>
               <img className='draft-icon' src={draft}/>
               <p className='draft-text'>Borrador...</p>
             </div>
             <div className='button-post'>
                 <button type='submit'>Publicar</button>
             </div>
          </div>
         <div className='img-selector'>
             <label>Imagen de portada</label>
             <input type="file" accept="image/*" {...register("image", {required: true})} onChange={changeUploadImage}/> 
             {errors.image && <p className='text-[#FB005A] text-xs'>La imagen es requerida</p>}

             {Url_Image && (
               <div>
                   <img src={Url_Image} className="w-[150px] mt-2" />
                   <button className='delete-img-btn' onClick={FunctionDeleteImage}>Eliminar imagen</button>
               </div>
             )}   
         </div>
         <div className='news-title'>
           <label htmlFor='title'>Título</label>
           <input type='text' {...register("title", { required: true, minLength: 3, maxLength:40 })} placeholder='Título de tu artículo' />
           {errors.title && errors.title.type === "required" && <p className='text-[#FB005A] text-xs'>El título es requerido</p>}
           {errors.title && errors.title.type === "minLength" && <p className='text-[#FB005A] text-xs'>El título debe tener al menos 3 caracteres</p>}
           {errors.title && errors.title.type === "maxLength" && <p className='text-[#FB005A] text-xs'>El título debe tener como máximo 40 caracteres</p>}
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
  )
}

export default Create;