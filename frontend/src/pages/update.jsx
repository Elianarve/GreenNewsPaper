import React from 'react';
import { useHistory } from 'react-router-dom';
import { updateNews } from '../services/newsServices';

const Update = () => {
  const history = useHistory();

  const handleUpdate = async (id, updatedNewsData) => {
    try {
      await updateNews(id, updatedNewsData);
      history.push('/home');
    } catch (error) {
      console.error('Error al actualizar la noticia:', error);
      // Manejar el error de actualización aquí
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Actualizar noticia</h1>
        {/* Aquí va el contenido del formulario o la interfaz de usuario para actualizar la noticia */}
        {/* Puedes usar la función handleUpdate para manejar la actualización */}
      </div>
    </div>
  );
};

export default Update;

