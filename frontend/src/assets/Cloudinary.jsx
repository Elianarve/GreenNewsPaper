import { useState } from "react";
import axios from "axios";

function Cloudinary() {
    const [Url_Image, setUrl_Image] = useState("");

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
    <div>
        <input type="file" accept="image/*" onChange={changeUploadImage}/> 

    {Url_Image && (
        <div>
            <img src={Url_Image} className="w-[250px]" />
            <button onClick={FunctionDeleteImage}>Eliminar imagen</button>
        </div>
    )}   
    </div>
  </>
  );
}
export default Cloudinary;