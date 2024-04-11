import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  // Supongamos que obtienes los datos de la noticia a través de useParams
  const { newsId } = useParams();

  // Supongamos que los datos de la noticia son similares a esto
  const news = {
    id: newsId,
    title: 'Título de tu artículo',
    description: 'Escribe tu artículo',
    author: 'Autor del artículo',
    date: 'Fecha de la noticia',
    // Otros datos de la noticia
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgPreview = document.getElementById('imagePreview');

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        imgPreview.src = e.target.result;
        imgPreview.style.display = 'block';
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex justify-center min-h-screen bg-gray-900'>
      <div className='text-center text-white'>
        <div className="flex justify-end">
          <button type='submit' className='bg-gradient-to-r from-[#B800B0] via-[#DF00D6] to-[#E73172] hover:from-[#E73172] hover:to-[#FB005A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleSubmit}>Publicar</button>
        </div>
        <h1 className='text-sm font-bold mb-4 text-left'>Imagen de portada</h1>
        <div className="mb-4 text-left">
          <input type="file" id="imageInput" style={{ display: 'none' }} onChange={handleImageChange} />
          <label htmlFor="imageInput" style={{ border: '1px solid #E7E7E71F', backgroundColor: '#222222', cursor: 'pointer' }} className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Adjuntar imagen</label>
        </div>
        <div className="mb-4 text-left">
          <img id="imagePreview" src="#" alt="Vista previa de la imagen" style={{ display: 'none', maxWidth: '100%', maxHeight: '200px' }} />
        </div>
        <form className='w-full max-w-screen-xl mx-auto' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='title' className='block text-sm font-bold mb-2 text-left'>Title</label>
            <input id='title' type='text' defaultValue={news.title} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900' style={{ border: '1px solid #E7E7E71F' }} />
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block text-sm font-bold mb-2 text-left'>Description</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900' style={{ border: '1px solid #E7E7E71F', height: '25px' }} />
            <textarea id='description' defaultValue={news.description} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900' style={{ border: '1px solid #E7E7E71F', height: '25px' }} />
          </div>
          <div className='mb-4'>
            <label htmlFor ='author' className='block text-sm font-bold mb-2 text-left'>Author</label>
            <input id='author' type='text' defaultValue={news.author} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900' style={{ border: '1px solid #E7E7E71F' }} />
          </div>
          <div className='mb-4'>
            <label htmlFor='date' className='block text-sm font-bold mb-2 text-left'>Date</label>
            <input id='date' type='text' defaultValue={news.date} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900' style={{ border: '1px solid #E7E7E71F' }} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;








