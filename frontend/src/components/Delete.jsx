import React from 'react'
import { deleteNews } from '../services/newsServices.js'
import { useNavigate } from 'react-router-dom'


const Delete = ({id}) => {
    const navigate = useNavigate()
    /* console.log(id) */
    const deleteData = () => {
      deleteNews(id)
      navigate(0)  
    }
    return (
      <>
      <div>
          <button className='buttons-card-delete'  onClick={deleteData}>Borrar</button>
      </div>
      </>
    )
  }
  
  export default Delete