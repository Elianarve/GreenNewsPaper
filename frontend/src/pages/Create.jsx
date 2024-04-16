import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postNews } from '../services/newsServices.js'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import TipTap from "../components/TipTap.jsx"
import draft from "../assets/draft-icon.svg"
import '../pages/css/create.css';

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
  //podríamos guardar la respuesta de cloudinary en la bd MySQL para eliminar la imagen
};

  return (
    <>
    <div className='container-form'>
       <form className='form-create' onSubmit={handleSubmit(onSubmit)} >
         <div className='title-form'>
             <div className='draft-container'>
               <img src={draft}/>
               <p className='draft-text'>Borrador...</p>
             </div>
             <div className='button-post'>
                 <button type='submit'>Publicar</button>
             </div>
         </div>
         <div className='img-selector'>
             <label>Imagen de portada</label>
             <input type="file" accept="image/*" onChange={changeUploadImage}/> 

             {Url_Image && (
               <div>
                   <img src={Url_Image} className="w-[250px]" />
                   <button onClick={FunctionDeleteImage}>Eliminar imagen</button>
               </div>
             )}   
         </div>
         <div className='news-title'>
           <label htmlFor='title'>Título</label>
           <input type='text' {...register("title", { required: true })} placeholder='Título de tu artículo' />
         </div>
       </form>
       <div className='text-editor-container'>
         <p className='text-editor-title'>Texto</p>
         <TipTap />
       </div>
     </div>
   </> 
  )
}

export default Create;