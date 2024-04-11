import axios from "axios"

const url = 'http://localhost:3000'

//POST

export const postData = async (data) =>{
    const news = await axios.post(`${url}/create`,data)
    alert("Artículo creado exitosamente")
    return news
  }