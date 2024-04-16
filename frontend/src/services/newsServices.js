import axios from "axios";

const API_URL_NEWS = 'http://localhost:8000/news';

const getHeaders = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
        throw new Error('Token no encontrado en el almacenamiento local');
    }
    return {
        'Authorization': `Bearer ${token}`
    };
};

// GET
export const getNews = async () => {
    try {
        const headers = getHeaders();
        const response = await axios.get(API_URL_NEWS, { headers });
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
        const headers = getHeaders();
        const response = await axios.get(`${API_URL_NEWS}/${id}`, { headers });
        return response;
    } catch (error) {
        console.error("Error al obtener la noticia por ID", error);
        throw error;
    }
};

// DELETE
export const deleteNews = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro que deseas eliminar la Noticia?");
    if (confirmDelete) {
        try {
            const headers = getHeaders();
            const response = await axios.delete(`${API_URL_NEWS}/${id}`, { headers });
            if (response.status === 200) {    
                alert('Eliminada correctamente'); 
            } 
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('No estás autorizado para realizar esta acción. Por favor, inicia sesión nuevamente.');
            } 
    }
}
};

// POST
export const postNews = async (data) => {
    const headers = getHeaders();
    const news = await axios.post(API_URL_NEWS, data, {headers})
    alert("Artículo creado exitosamente")
    return news;
  }

// PUT
export const updateNews = async (id, newData) => {
    try {
        const headers = getHeaders();
        const response = await axios.put(`${API_URL_NEWS}/${id}`, newData, { headers });
        console.log(response)
        if (response.status === 200) {
            alert('Noticia actualizada correctamente');
            return response.data;
        }
    } catch (error) {
        console.error("Error al actualizar la noticia:", error);
        throw error;
    }
};
