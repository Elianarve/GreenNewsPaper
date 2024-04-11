import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postNews } from '../services/newsServices.js';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import draft from "../assets/draft-icon.svg";

function Create() {
  const [Url_Image, setUrl_Image ] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    data.image = Url_Image;
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

    const response = await axios.post("https://api.cloudinary.com/v1_1/deigc2ihg/image/upload", data);  
    console.log(response.data);
    setUrl_Image(response.data.secure_url); 
  };

  const FunctionDeleteImage = () => {
    setUrl_Image("");
    //podríamos guardar la respuesta de cloudinary en la bd MySQL para eliminar la imagen
  };

  return (
    <>
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div>
            <img src={draft} alt="Borrador" />
            <p>Borrador</p>
          </div>
          <div>
              <label>Imagen de portada</label>
              <input type="file" accept="image/*" onChange={changeUploadImage}/> 

              {Url_Image && (
                <div>
                    <img src={Url_Image} alt="Vista previa de la imagen" className="w-[250px]" />
                    <button onClick={FunctionDeleteImage}>Eliminar imagen</button>
                </div>
              )}   
          </div>
          <div>
            <label htmlFor='title'>Título</label>
            <input type='text' {...register("title", { required: true })} />
          </div>
          <div>
            <label htmlFor='text'>Texto</label>
            <input type='text' {...register("text", { required: true })} />
          </div>
          <button type='submit'>Publicar</button>
        </form>
    </div>
    </>
  );
}

export default Create;
