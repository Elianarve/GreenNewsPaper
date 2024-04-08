// import React from 'react';
// import { deleteNews } from '../services/newsServices.js';
// import { useNavigate } from 'react-router-dom';


// const Delete = ({id}) => {
//     const navigate = useNavigate();

<<<<<<< HEAD
    const deleteData = async () => {
      try {
        await deleteNews(id);
        navigate('/home');
      } catch (error) {
        console.error('Error al borrar', error);
      }  
    };
    return (
      <>
      
      </>
    );
  };
=======
//     const deleteData = async () => {
//       try {
//         await deleteNews(id);
//         navigate('/home');
//       } catch (error) {
//         console.error('Error al borrar', error);
//       }  
//     };
//     return (
//       <>
//       <button className='buttons-card-delete' onClick={deleteData}>Borrar</button>
//       </>
//     );
//   };
>>>>>>> develop
  
//   export default Delete;