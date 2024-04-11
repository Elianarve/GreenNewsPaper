import axios from "axios"

const url = 'http://localhost:3000'

// GET
export const getNews = async () => {
    try {
        const response = await axios.get('/news');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las noticias:", error);
        throw error;
    }
};

//POST

export const postNews = async (data) => {
    const news = await axios.post(`${url}/create`, data)
    alert("Artículo creado exitosamente")
    return news
  }
