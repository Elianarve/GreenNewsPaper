import axios from "axios";
import Swal from 'sweetalert2';

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


export const deleteNews = async (id) => {
    const confirmDelete = await Swal.fire({
        title: '¿Estás seguro que deseas eliminar la Noticia?',
        showCancelButton: true,
        confirmButtonColor: '#fb005a',
        cancelButtonColor: '#171717',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    });

    if (confirmDelete.isConfirmed) {
        try {
            const headers = getHeaders();
            const response = await axios.delete(`${API_URL_NEWS}/${id}`, { headers });
            if (response.status === 200) {
                Swal.fire('Eliminada correctamente');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Swal.fire('No estás autorizado para realizar esta acción. Por favor, inicia sesión nuevamente.');
            }
        }
    }
};


export const postNews = async (data) => {
    const headers = getHeaders();
    const news = await axios.post(API_URL_NEWS, data, {headers})
    console.log(news)
    Swal.fire("Artículo creado exitosamente")
    return news;
  }


export const updateNews = async (id, newData) => {
    try {
        const headers = getHeaders();
        const response = await axios.put(`${API_URL_NEWS}/${id}`, newData, { headers });
        if (response.status === 200) {
            Swal.fire('Noticia actualizada correctamente');
            return response.data;
        }
    } catch (error) {
        console.error("Error al actualizar la noticia:", error);
        throw error;
    }
};
