import axios from "axios";

// GET
export const getNews = async () => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) {
            throw new Error('Token no encontrado en el almacenamiento local');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        const response = await axios.get('http://localhost:5000/news', { headers });
        const data = await response.data
        return data;
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

// UPDATE
export const updateNews = async (id, updatedNewsData) => {
    try {
        const response = await axiosInstance.put(`/news/${id}`, updatedNewsData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar la noticia:", error);
        throw error;
    }
};


export default axiosInstance;
