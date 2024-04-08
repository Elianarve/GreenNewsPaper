import axios from "axios";

// GET
export const getNews = async () => {
    try {
        const response = await axios.get('http://localhost:3000/news');
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
            const response = await axios.delete(`http://localhost:3000/news/${id}`);
            if (response.status === 200) {
                const confirmDelete = window.confirm("¿Estás seguro que deseas borrar la Noticia?"); 
                if (confirmDelete){
                   alert('Eliminada correctamente');
                }
              }
        } catch (error) {
            console.error("Error al borrar la noticia:", error);
            throw error;
        }
};

// GET ONE BY ID
export const getOneNewsById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/news/${id}`);
        return response;
    } catch (error) {
        console.error("Error al obtener la noticia por ID", error);
        throw error;
    }
};


