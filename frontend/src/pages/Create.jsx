import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postData } from '../services/newsServices.js'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
// import TipTap from "../components/TipTap.jsx"
// import draft from "../assets/draft-icon.svg"

function Create() {
  const [Url_Image, setUrl_Image ] = useState("");
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors }} = useForm()


  const changeUploadImage = async (e) => {
      const file = e.target.files[0];
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset" , "Presents-react");

const response = await axios.post("https://api.cloudinary.com/v1_1/deigc2ihg/image/upload", data
);  
console.log(response.data);
setUrl_Image(response.data.secure_url); 
};
const FunctionDeleteImage = () => {
  setUrl_Image("");
  //podríamos guardar la respuesta de cloudinary en la bd MySQL para eliminar la imagen
};

  return (
    <>
    <form>
    <div>
        <input type="file" accept="image/*" onChange={changeUploadImage}/> 

        {Url_Image && (
          <div>
              <img src={Url_Image} className="w-[250px]" />
              <button onClick={FunctionDeleteImage}>Eliminar imagen</button>
          </div>
        )}   
    </div>
    </form>
    </>
  )
}

export default Create