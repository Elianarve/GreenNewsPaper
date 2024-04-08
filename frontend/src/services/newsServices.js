import axios from "axios";

const apiBaseUrl = 'http://localhost:3000';
const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
});


// GET
export const getNews = async () => {
    try {
        const response = await axiosInstance.get('/news');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las noticias:", error);
        throw error;
    }
};

// DELETE
export const deleteNews = async (id) => {
            try {
            const response = await axiosInstance.delete(`/news/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error al borrar la noticia:", error);
            throw error;
        }
};
//CREATE
export const postData = async (data) =>{
    const news = await axios.post(`${url}`,data)
    alert("Noticia creada exitosamente")
    return news
  }
//GET ONE BY ID
export const getOneNewsById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/news/${id}`);
        return response.news;
    } catch (error) {
        console.error("Error al obtener la noticia por ID", error);
        throw error;
    }
};
export default axiosInstance;