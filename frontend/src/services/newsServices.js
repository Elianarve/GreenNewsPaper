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

// DELETE
export const deleteNews = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro que deseas eliminar la Noticia?");
    if (confirmDelete) {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                throw new Error('Token no encontrado en el almacenamiento local');
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            const response = await axios.delete(`http://localhost:5000/news/${id}`, { headers });
            if (response.status === 200) {    
                alert('Eliminada correctamente');
            } 
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('No estás autorizado para realizar esta acción. Por favor, inicia sesión nuevamente.');
                window.location.href = '/login'; 
            } 
    }
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
        const response = await axios.get(`http://localhost:5000/news/${id}`, { headers });
        return response;
    } catch (error) {
        console.error("Error al obtener la noticia por ID", error);
        throw error;
    }
};


