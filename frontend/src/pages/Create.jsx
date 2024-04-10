import React from 'react'
import TipTap from "../components/TipTap.jsx"
import draft from "../assets/draft-icon.svg"

function Create() {
  return (
    <>
    <form>
      <div>
          <p>Borrador</p>
          <img src={draft} alt='Draft Icon'/>
          <button>Publicar</button>
      </div>
      <div>
          
      </div>
    </form>
    <TipTap/>
    <form>
      <div>
        
      </div>
      <div>
        
      </div>
    </form>
    </>
  )
}

export default Create