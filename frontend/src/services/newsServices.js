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
    if (confirm("¿Seguro que quieres borrar esta noticia?")) {
        try {
            const response = await axiosInstance.delete(`${apiBaseUrl}/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error al borrar la noticia:", error);
            throw error;
        }
    }
};

// GET ONE BY ID
// export const getOneNewsById = async (id) => {
//     try {
//         const response = await axios.get(`http://localhost:3000/news/${id}`);
//         return response.news;
//     } catch (error) {
//         console.error("Error al obtener la noticia por ID", error);
//         throw error;
//     }
// };
export default axiosInstance;