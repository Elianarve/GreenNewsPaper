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
        
        const response = await axios.get('http://localhost:8000/news', { headers });
        const data = await response.data
        return data;
    } catch (error) {
        console.error("Error al obtener las noticias:", error);
        throw error;
    }
};

// GET ONE BY ID
export const getOneNewsById = async (id) => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) {
            throw new Error('Token no encontrado en el almacenamiento local');
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(`http://localhost:8000/news/${id}`, { headers });
        return response;
    } catch (error) {
        console.error("Error al obtener la noticia por ID", error);
        throw error;
    }
};


